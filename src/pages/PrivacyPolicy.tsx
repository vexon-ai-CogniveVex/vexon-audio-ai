import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiShield, FiLock, FiEye, FiActivity } from "react-icons/fi";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <Navbar />

            <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-0 w-full h-full opacity-5 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000')] bg-cover mix-blend-screen pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] opacity-50" />

                <div className="container relative z-10 mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-4xl"
                    >
                        <span className="text-[10px] tracking-[0.5em] uppercase text-secondary font-bold mb-8 block">Legal Framework</span>
                        <h1 className="font-display text-6xl font-bold leading-[1.05] tracking-tight text-white mb-10">
                            Neural <span className="text-white/30 italic font-light text-gradient-accent">Privacy.</span>
                        </h1>
                        <p className="max-w-2xl text-white/40 text-xl font-light leading-relaxed">
                            Last updated: February 25, 2026. This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2 space-y-24">
                            <article className="prose prose-invert prose-lg max-w-none">
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">Interpretation and Definitions</h2>
                                    <h3 className="text-xl font-bold text-white/80 mb-4">Interpretation</h3>
                                    <p className="text-white/50 leading-relaxed mb-6">
                                        The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                                    </p>
                                    <h3 className="text-xl font-bold text-white/80 mb-4">Definitions</h3>
                                    <p className="text-white/50 mb-4">For the purposes of this Privacy Policy:</p>
                                    <ul className="list-disc pl-6 space-y-4 text-white/40 mb-8 font-light">
                                        <li><strong className="text-white">Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                                        <li><strong className="text-white">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party...</li>
                                        <li><strong className="text-white">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Privacy Policy) refers to CogniveVex AI, 90 Broad St, New York, NY 10004, United States.</li>
                                        <li><strong className="text-white">Cookies</strong> are small files that are placed on Your computer...</li>
                                        <li><strong className="text-white">Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                                        <li><strong className="text-white">Service</strong> refers to the Website.</li>
                                        <li><strong className="text-white">Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</li>
                                        <li><strong className="text-white">Usage Data</strong> refers to data collected automatically...</li>
                                        <li><strong className="text-white">Website</strong> refers to CogniveVex, accessible from http://cognivevex.com</li>
                                        <li><strong className="text-white">You</strong> means the individual accessing or using the Service...</li>
                                    </ul>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">Collecting and Using Your Personal Data</h2>
                                    <h3 className="text-xl font-bold text-white/80 mb-4">Types of Data Collected</h3>
                                    <h4 className="text-lg font-bold text-white/70 mb-2">Personal Data</h4>
                                    <p className="text-white/50 mb-4">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-white/40 mb-6">
                                        <li>Email address</li>
                                        <li>First name and last name</li>
                                    </ul>

                                    <h4 className="text-lg font-bold text-white/70 mb-2">Usage Data</h4>
                                    <p className="text-white/50 mb-4">Usage Data is collected automatically when using the Service.</p>
                                    <p className="text-white/50 mb-6 font-light">Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>

                                    <h4 className="text-lg font-bold text-white/70 mb-2">Tracking Technologies and Cookies</h4>
                                    <p className="text-white/50 mb-4">We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information.</p>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-bold text-white mb-6 text-gradient-accent">Use of Your Personal Data</h2>
                                    <ul className="list-disc pl-6 space-y-4 text-white/40 mb-8 font-light">
                                        <li><strong>To provide and maintain our Service:</strong> including to monitor the usage of our Service.</li>
                                        <li><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service.</li>
                                        <li><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract.</li>
                                        <li><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms.</li>
                                        <li><strong>To provide You with news</strong>, special offers, and general information about other goods.</li>
                                        <li><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
                                    </ul>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">Retention and Transfer</h2>
                                    <p className="text-white/50 mb-4">The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.</p>
                                    <p className="text-white/50 mb-4">Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located.</p>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">Delete Your Personal Data</h2>
                                    <p className="text-white/50 mb-4">You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">Disclosure and Security</h2>
                                    <p className="text-white/50 mb-4"><strong>Business Transactions:</strong> Your Personal Data may be transferred if the Company is involved in a merger, acquisition or asset sale.</p>
                                    <p className="text-white/50 mb-4"><strong>Law enforcement:</strong> The Company may be required to disclose Your Personal Data if required to do so by law.</p>
                                    <p className="text-white/50 mb-4"><strong>Security:</strong> The security of Your Personal Data is important to Us, but remember that no method of transmission is 100% secure.</p>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">Children's Privacy</h2>
                                    <p className="text-white/50 mb-4">Our Service does not address anyone under the age of 16. We do not knowingly collect personally identifiable information from anyone under the age of 16.</p>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">Contact Us</h2>
                                    <p className="text-white/50 mb-4">If you have any questions about this Privacy Policy, You can contact us:</p>
                                    <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-10 mt-8">
                                        <div className="space-y-4 text-white/50">
                                            <p><strong>By email:</strong> help@cognivevex.com</p>
                                            <p><strong>By visiting our website:</strong> http://cognivevex.com/contact</p>
                                        </div>
                                    </div>
                                </section>
                            </article>
                        </div>

                        <aside className="lg:col-span-1">
                            <div className="sticky top-32 space-y-8">
                                <div className="p-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-3xl">
                                    <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-3">
                                        <FiActivity className="text-secondary" />
                                        Compliance Matrix
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-white/40 uppercase tracking-widest">Global Status</span>
                                            <span className="text-green-400 font-bold">OPTIMAL</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-white/40 uppercase tracking-widest">Data Protection</span>
                                            <span className="text-white font-bold">AES-256</span>
                                        </div>
                                        <div className="h-px bg-white/5 w-full" />
                                        <p className="text-xs text-white/20 italic leading-relaxed">
                                            Last Transmission: February 25, 2026
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
