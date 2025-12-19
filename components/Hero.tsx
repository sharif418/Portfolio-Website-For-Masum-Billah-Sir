"use client";

import { motion } from "framer-motion";
import { Download, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200">
            {/* Animated gradient mesh background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient orbs */}
                <motion.div
                    className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-navy-800/20 to-gold-500/30 rounded-full blur-3xl animate-pulse-slow"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-gold-500/20 to-navy-600/30 rounded-full blur-3xl animate-pulse-slow"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-navy-900/5 via-gold-500/10 to-navy-800/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gold-500/40 rounded-full"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 3) * 20}%`,
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        {/* Tagline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900/5 rounded-full mb-6"
                        >
                            <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-navy-700">
                                Head of Administration | HR Specialist | Organizational Leader
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-4"
                        >
                            Masum{" "}
                            <span className="relative">
                                Billah
                                <motion.span
                                    className="absolute -bottom-2 left-0 h-3 bg-gold-500/30 w-full -z-10"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                />
                            </span>
                        </motion.h1>

                        {/* Headline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl sm:text-2xl text-navy-600 font-light mb-8 leading-relaxed"
                        >
                            Transforming Organizational Vision <br className="hidden sm:block" />
                            into <span className="text-gold-500 font-medium">Operational Excellence</span>
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.a
                                href="/masum-resume.pdf"
                                download
                                className="btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download size={18} />
                                Download CV
                            </motion.a>
                            <motion.a
                                href="#contact"
                                className="btn-secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Mail size={18} />
                                Contact Me
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative">
                            {/* Decorative ring */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-tr from-navy-800 via-gold-500 to-navy-600"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                style={{ padding: "4px" }}
                            >
                                <div className="w-full h-full rounded-full bg-slate-100" />
                            </motion.div>

                            {/* Image container */}
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                <Image
                                    src="/profile.jpg"
                                    alt="Masum Billah - Professional Photo"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-4 py-3"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center">
                                        <span className="text-gold-500 font-bold">10+</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-navy-600">Years of</p>
                                        <p className="text-sm font-semibold text-navy-900">Experience</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.a
                        href="#about"
                        className="flex flex-col items-center gap-2 text-navy-600 hover:text-navy-900 transition-colors"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <span className="text-sm font-medium">Scroll Down</span>
                        <ChevronDown size={20} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
