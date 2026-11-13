import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiFileText, FiCpu, FiAlertCircle, FiCheckCircle } from "react-icons/fi";

const TermsConditions = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <Navbar />

            <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-0 w-full h-full opacity-5 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000')] bg-cover mix-blend-screen pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] opacity-50" />

                <div className="container relative z-10 mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-4xl"
                    >
                        <span className="text-[10px] tracking-[0.5em] uppercase text-accent font-bold mb-8 block">Operating Protocols</span>
                        <h1 className="font-display text-6xl font-bold leading-[1.05] tracking-tight text-white mb-10">
                            Terms of <span className="text-white/30 italic font-light text-gradient-accent">Synthesis.</span>
                        </h1>
                        <p className="max-w-2xl text-white/40 text-xl font-light leading-relaxed">
                            Last updated: February 25, 2026. Please read these terms and conditions carefully before using Our Service.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2 space-y-24">
                            <article className="prose prose-invert prose-lg max-none">
                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">Interpretation and Definitions</h2>
                                    <h3 className="text-xl font-bold text-white/80 mb-4">Interpretation</h3>
                                    <p className="text-white/50 leading-relaxed mb-6 font-light">
                                        The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                                    </p>
                                    <h3 className="text-xl font-bold text-white/80 mb-4">Definitions</h3>
                                    <p className="text-white/50 mb-4">For the purposes of these Terms and Conditions:</p>
                                    <ul className="list-disc pl-6 space-y-4 text-white/40 mb-8 font-light">
                                        <li><strong className="text-white">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party...</li>
                                        <li><strong className="text-white">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in these Terms and Conditions) refers to CogniveVex AI, 90 Broad St, New York, NY 10004, United States.</li>
                                        <li><strong className="text-white">Country</strong> refers to: New York, United States</li>
                                        <li><strong className="text-white">Device</strong> means any device that can access the Service...</li>
                                        <li><strong className="text-white">Service</strong> refers to the Website.</li>
                                        <li><strong className="text-white">Terms and Conditions</strong> (also referred to as "Terms") means these Terms and Conditions...</li>
                                        <li><strong className="text-white">Website</strong> refers to CogniveVex, accessible from http://cognivevex.com</li>
                                        <li><strong className="text-white">You</strong> means the individual accessing or using the Service...</li>
                                    </ul>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-bold text-white mb-6 text-gradient-accent">Acknowledgment</h2>
                                    <p className="text-white/50 leading-relaxed mb-6 font-light">
                                        These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. By accessing or using the Service You agree to be bound by these Terms and Conditions. You represent that you are over the age of 18.
                                    </p>
                                </section>

                                <section className="mb-12">
                                    <h3 className="text-2xl font-display font-bold text-white mb-6">Links to Other Websites</h3>
                                    <p className="text-white/50 leading-relaxed mb-6 font-light">
                                        Our Service may contain links to third-party websites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                                    </p>
                                </section>

                                <section className="mb-12">
                                    <h3 className="text-2xl font-display font-bold text-white mb-6">Termination</h3>
                                    <p className="text-white/50 leading-relaxed mb-6 font-light">
                                        We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
                                    </p>
                                </section>

                                <section className="mb-12">
                                    <h3 className="text-2xl font-display font-bold text-white mb-6">Limitation of Liability</h3>
                                    <p className="text-white/50 leading-relaxed mb-6 font-light">
                                        Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers shall be limited to the amount actually paid by You through the Service or 100 USD.
                                    </p>
                                </section>

                                <section className="mb-12">
                                    <h3 className="text-2xl font-display font-bold text-white mb-6">"AS IS" and "AS AVAILABLE" Disclaimer</h3>
                                    <p className="text-white/50 leading-relaxed mb-6 font-light italic">
                                        The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind.
                                    </p>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">Governing Law and Dispute Resolution</h2>
                                    <p className="text-white/50 mb-4 font-light">The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service.</p>
                                    <p className="text-white/50 mb-4 font-light">If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
                                </section>

                                <section className="mb-12">
                                    <h2 className="text-3xl font-display font-bold text-white mb-6">Contact Us</h2>
                                    <p className="text-white/50 leading-relaxed mb-6 font-light">
                                        If you have any questions about these Terms and Conditions, You can contact us:
                                    </p>
                                    <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-10 mt-8">
                                        <div className="space-y-4 text-white/50">
                                            <p><strong>Email:</strong> help@cognivevex.com</p>
                                            <p><strong>Uplink:</strong> http://cognivevex.com/contact</p>
                                        </div>
                                    </div>
                                </section>
                            </article>
                        </div>

                        <aside className="lg:col-span-1">
                            <div className="sticky top-32 space-y-8">
                                <div className="p-10 rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] backdrop-blur-3xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
                                    <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-3">
                                        <FiCheckCircle className="text-accent" />
                                        Protocol Core
                                    </h3>
                                    <div className="space-y-4">
                                        {[
                                            "Governing Law: New York",
                                            "Acknowledgment Required",
                                            "Limited Protocol Liability",
                                            "Termination Authority"
                                        ].map(item => (
                                            <div key={item} className="flex items-center gap-3 text-sm text-white/50">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                {item}
                                            </div>
                                        ))}
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

export default TermsConditions;
