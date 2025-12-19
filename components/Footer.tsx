"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <a href="#" className="text-2xl font-bold">
                            M<span className="text-gold-500">.</span>Billah
                        </a>
                    </motion.div>

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-2 text-white/60"
                    >
                        <span>© {currentYear} Masum Billah. Made with</span>
                        <Heart size={16} className="text-gold-500 fill-gold-500" />
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-6"
                    >
                        {["About", "Experience", "Contact"].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="text-white/60 hover:text-gold-500 transition-colors text-sm"
                            >
                                {link}
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
