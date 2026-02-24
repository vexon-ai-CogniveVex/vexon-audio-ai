/**
 * API Client for Vexon AI
 * Targets endpoints defined in API_ENDPOINTS.md
 */

export interface User {
    id: number;
    username: string;
    email: string;
    first_name?: string;
    last_name?: string;
    avatar: string | null;
    current_plan: string | null;
}

export interface ApiResponse<T> {
    status: "success" | "error";
    message: string;
    data: T | null;
    code: number;
}

const BASE_URL = 'https://api.cognivevex.com/api';
const STORAGE_KEY = 'vexon_session';

/**
 * SHA-256 Hashing utility for passwords
 */
async function hashPassword(password: string): Promise<string> {
    const msgBuffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

const api = {
    // Authentication
    async login(email: string, passwordRaw: string, captchaToken?: string): Promise<ApiResponse<{ user: User, token: string }>> {
        const password_hash = await hashPassword(passwordRaw);

        try {
            const response = await fetch(`${BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    password_hash,
                    turnstile_token: captchaToken
                })
            });

            const result: ApiResponse<{ user: User, token: string }> = await response.json();

            if (result.status === "success" && result.data) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(result.data));
            }

            return result;
        } catch (error) {
            console.error("[API] Login error:", error);
            return { status: "error", message: "Network connection failed", data: null, code: 500 };
        }
    },

    async signup(payload: any, captchaToken?: string): Promise<ApiResponse<{ user: User, token: string }>> {
        const password_hash = await hashPassword(payload.password);
        const { password, ...otherFields } = payload;

        try {
            const response = await fetch(`${BASE_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...otherFields,
                    password_hash,
                    password_hash_confirmation: password_hash,
                    turnstile_token: captchaToken
                })
            });

            const result: ApiResponse<{ user: User, token: string }> = await response.json();

            if (result.status === "success" && result.data) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(result.data));
            }

            return result;
        } catch (error) {
            console.error("[API] Registration error:", error);
            return { status: "error", message: "Network connection failed", data: null, code: 500 };
        }
    },

    // Email & Messaging
    async submitContactForm(data: any): Promise<ApiResponse<null>> {
        try {
            const response = await fetch(`${BASE_URL}/mail/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    turnstile_token: data.captchaToken
                })
            });
            return await response.json();
        } catch (error) {
            console.error("[API] Contact submit error:", error);
            return { status: "error", message: "Failed to send message", data: null, code: 500 };
        }
    },

    // Maps
    async getMapPin(address: string): Promise<ApiResponse<any>> {
        try {
            const response = await fetch(`${BASE_URL}/maps/pin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ address })
            });
            return await response.json();
        } catch (error) {
            console.error("[API] Map pin error:", error);
            return { status: "error", message: "Failed to load map location", data: null, code: 500 };
        }
    },

    logout() {
        localStorage.removeItem(STORAGE_KEY);
        return {
            status: "success",
            message: "Logged out",
            data: null,
            code: 200
        };
    },

    getCurrentUser(): { user: User, token: string } | null {
        const session = localStorage.getItem(STORAGE_KEY);
        return session ? JSON.parse(session) : null;
    },

    getAuthHeader() {
        const session = this.getCurrentUser();
        return session ? { 'Authorization': `Bearer ${session.token}` } : {};
    },

    // Subscriptions & Plans
    async getPlans(): Promise<ApiResponse<any[]>> {
        try {
            const response = await fetch(`${BASE_URL}/subscription-plans`);
            let result: ApiResponse<any[]> = await response.json();

            // Auto-seeding logic if backend returns empty plans
            if (result.status === "success" && (!result.data || result.data.length === 0)) {
                console.warn("[API] No plans found. Seeding backend with defaults...");
                await this.seedPlans();
                const retryResponse = await fetch(`${BASE_URL}/subscription-plans`);
                result = await retryResponse.json();
            }

            return result;
        } catch (error) {
            console.error("[API] Fetch plans error:", error);
            return { status: "error", message: "Failed to fetch plans", data: null, code: 500 };
        }
    },

    async seedPlans() {
        const defaultPlans = [
            { name: "Basic", slug: "basic", price: 0, description: "Eternal experimental use" },
            { name: "Pro", slug: "pro", price: 29.99, description: "Full neural cluster access" },
            { name: "Enterprise", slug: "enterprise", price: 299.99, description: "Military grade synthesis" }
        ];

        for (const plan of defaultPlans) {
            await fetch(`${BASE_URL}/subscriptions`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ plan_slug: plan.slug, ...plan }) // Backend handles plan creation
            });
        }
    },

    async subscribe(plan_slug: string, paymentMethod: any): Promise<ApiResponse<any>> {
        try {
            const response = await fetch(`${BASE_URL}/subscriptions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...this.getAuthHeader()
                },
                body: JSON.stringify({
                    plan_slug,
                    payment_method: paymentMethod,
                    billing_address: { city: "Digital Void", country: "Protocol" } // Placeholder
                })
            });

            const result: ApiResponse<any> = await response.json();

            // Update local session if plan changed
            if (result.status === "success" && result.data?.user) {
                const session = this.getCurrentUser();
                if (session) {
                    session.user = result.data.user;
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
                }
            }

            return result;
        } catch (error) {
            console.error("[API] Subscription error:", error);
            return { status: "error", message: "Payment processing failed", data: null, code: 500 };
        }
    },

    async forgotPassword(email: string): Promise<ApiResponse<null>> {
        try {
            const response = await fetch(`${BASE_URL}/auth/password/forgot`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            return await response.json();
        } catch (error) {
            console.error("[API] Forgot password error:", error);
            return { status: "error", message: "Network connection failed", data: null, code: 500 };
        }
    },

    // OAuth Authentication
    async loginWithGoogle(accessToken: string): Promise<ApiResponse<{ user: User, token: string }>> {
        try {
            const response = await fetch(`${BASE_URL}/auth/google/token`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ access_token: accessToken })
            });
            const result: ApiResponse<{ user: User, token: string }> = await response.json();
            if (result.status === "success" && result.data) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(result.data));
            }
            return result;
        } catch (error) {
            console.error("[API] Google Login error:", error);
            return { status: "error", message: "Google Authentication failed", data: null, code: 500 };
        }
    },

    async loginWithGitHub(accessToken: string): Promise<ApiResponse<{ user: User, token: string }>> {
        try {
            const response = await fetch(`${BASE_URL}/auth/github/token`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ access_token: accessToken })
            });
            const result: ApiResponse<{ user: User, token: string }> = await response.json();
            if (result.status === "success" && result.data) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(result.data));
            }
            return result;
        } catch (error) {
            console.error("[API] GitHub Login error:", error);
            return { status: "error", message: "GitHub Authentication failed", data: null, code: 500 };
        }
    },

    // AI Generation Simulation
    async generateAi(prompt: string): Promise<ApiResponse<any>> {
        console.log(`[API] AI Request: ${prompt}`);
        await new Promise(r => setTimeout(r, 3000));

        return {
            status: "success",
            message: "Generation completed",
            data: {
                id: Math.floor(Math.random() * 1000),
                prompt,
                response: "Synthesized audio buffer ready for injection.",
                tokens_used: 42
            },
            code: 200
        };
    }
};

export default api;
