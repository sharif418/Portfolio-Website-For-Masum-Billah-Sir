"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Leadership", href: "#leadership" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/80 backdrop-blur-lg shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="text-xl md:text-2xl font-bold text-navy-900"
                        whileHover={{ scale: 1.05 }}
                    >
                        M<span className="text-gold-500">.</span>Billah
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="text-navy-700 hover:text-navy-900 font-medium transition-colors relative group"
                                whileHover={{ y: -2 }}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contact"
                            className="btn-primary text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Hire Me
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-navy-900"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg rounded-b-2xl"
                >
                    <div className="py-4 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-4 py-2 text-navy-700 hover:text-navy-900 hover:bg-slate-100 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="px-4 pt-2">
                            <a href="#contact" className="btn-primary w-full justify-center text-sm">
                                Hire Me
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
}
