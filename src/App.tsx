import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Product from "./pages/Product";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Technology from "./pages/Technology";
import AuthCallback from "./pages/AuthCallback";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopNav from "./components/ScrollToTopNav";
import ChatWidget from "./components/ChatWidget";
import CookieConsent from "./components/CookieConsent";

// Dashboard Imports
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import NeuralLab from "./pages/dashboard/NeuralLab";
import SpectralPro from "./pages/dashboard/SpectralPro";
import Billing from "./pages/dashboard/Billing";
import Settings from "./pages/dashboard/Settings";
import Checkout from "./pages/dashboard/Checkout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopNav />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product" element={<Product />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/auth/callback" element={<AuthCallback />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout><Overview /></DashboardLayout>} />
          <Route path="/dashboard/neural-lab" element={<DashboardLayout><NeuralLab /></DashboardLayout>} />
          <Route path="/dashboard/spectral-pro" element={<DashboardLayout><SpectralPro /></DashboardLayout>} />
          <Route path="/dashboard/billing" element={<DashboardLayout><Billing /></DashboardLayout>} />
          <Route path="/dashboard/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
          <Route path="/dashboard/checkout/:planSlug" element={<DashboardLayout><Checkout /></DashboardLayout>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatWidget />
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
