"use client";

import { motion } from "framer-motion";
import { Heart, Linkedin, Facebook, Mail, Phone } from "lucide-react";

const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/masumbillah86", icon: Linkedin },
    { name: "Facebook", href: "https://www.facebook.com/masumbillah86", icon: Facebook },
];

const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <a href="#" className="text-2xl font-bold inline-block mb-4">
                            M<span className="text-gold-500">.</span>Billah
                        </a>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            Head of Administration & HR Specialist with 10+ years of experience in organizational excellence and strategic leadership.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-gold-500 hover:text-white transition-all"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.name}
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white/60 hover:text-gold-500 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-gold-500/50 rounded-full group-hover:bg-gold-500 transition-colors" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:masumbillah86.mm@gmail.com"
                                    className="text-white/60 hover:text-gold-500 transition-colors text-sm flex items-center gap-3"
                                >
                                    <Mail size={16} className="text-gold-500" />
                                    masumbillah86.mm@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+8801516161876"
                                    className="text-white/60 hover:text-gold-500 transition-colors text-sm flex items-center gap-3"
                                >
                                    <Phone size={16} className="text-gold-500" />
                                    +880 1516-161876
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Connect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h4 className="text-lg font-semibold mb-6">Let&apos;s Connect</h4>
                        <p className="text-white/60 text-sm mb-6">
                            Open for opportunities and collaborations. Feel free to reach out.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium rounded-xl transition-colors text-sm"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-white/50 text-sm"
                        >
                            © {currentYear} Masum Billah. Crafted with
                            <Heart size={14} className="text-gold-500 fill-gold-500" />
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-white/40 text-xs"
                        >
                            Dhaka, Bangladesh
                        </motion.p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
