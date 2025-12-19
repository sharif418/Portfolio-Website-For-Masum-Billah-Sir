"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin, Facebook } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Leadership", href: "#leadership" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/masumbillah86", icon: Linkedin },
    { name: "Facebook", href: "https://www.facebook.com/masumbillah86", icon: Facebook },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Smooth scroll handler for mobile
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);

        // Small delay to allow menu to close first
        setTimeout(() => {
            const targetId = href.replace("#", "");
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 150);
    };

    if (!mounted) {
        return (
            <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <span className="text-xl md:text-2xl font-bold text-navy-900">
                            M<span className="text-gold-500">.</span>Billah
                        </span>
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen
                        ? "bg-white shadow-lg"
                        : "bg-white/80 backdrop-blur-lg"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            className="text-xl md:text-2xl font-bold text-navy-900 z-50"
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

                            {/* Social Icons - Desktop */}
                            <div className="flex items-center gap-3 ml-2">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-full bg-navy-900/5 flex items-center justify-center text-navy-600 hover:bg-gold-500 hover:text-white transition-all"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={social.name}
                                    >
                                        <social.icon size={18} />
                                    </motion.a>
                                ))}
                            </div>

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
                            className="md:hidden p-2 text-navy-900 z-50 relative"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Navigation - Full Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden fixed inset-0 z-40 bg-white"
                        style={{ top: "64px" }}
                    >
                        <div className="flex flex-col h-full px-6 py-6 overflow-y-auto bg-white">
                            {/* Nav Links */}
                            <div className="flex-1 space-y-1">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center gap-4 px-4 py-4 text-lg font-medium text-navy-800 hover:text-gold-500 hover:bg-gold-500/10 rounded-xl transition-all active:bg-gold-500/20"
                                        onClick={(e) => handleNavClick(e, link.href)}
                                    >
                                        <span className="w-2 h-2 rounded-full bg-gold-500" />
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social Links - Mobile */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="py-6 border-t border-navy-100"
                            >
                                <p className="text-sm text-navy-500 mb-4 px-4">Connect with me</p>
                                <div className="flex gap-4 px-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-4 py-3 bg-navy-50 hover:bg-navy-100 rounded-xl transition-all flex-1"
                                        >
                                            <social.icon size={20} className="text-navy-600" />
                                            <span className="font-medium text-navy-800">{social.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </motion.div>

                            {/* CTA Button - Mobile */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="pt-4 pb-8"
                            >
                                <a
                                    href="#contact"
                                    className="btn-primary w-full justify-center text-base py-4"
                                    onClick={(e) => handleNavClick(e, "#contact")}
                                >
                                    Hire Me
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
