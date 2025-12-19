"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Brain, Heart, Target, Shield } from "lucide-react";

const softSkills = [
    { name: "Leadership", icon: Target },
    { name: "Critical Thinking", icon: Lightbulb },
    { name: "Emotional Intelligence", icon: Heart },
    { name: "Strategic Planning", icon: Brain },
    { name: "Crisis Management", icon: Shield },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-20 md:py-32 bg-white" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left side - Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Background decoration */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-navy-900/5 to-gold-500/10 rounded-3xl" />

                            {/* Main card */}
                            <div className="relative glass-card rounded-3xl p-8 md:p-12">
                                <div className="space-y-6">
                                    {/* Stats grid */}
                                    <div className="grid grid-cols-2 gap-6">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ delay: 0.2 }}
                                            className="text-center p-4 bg-navy-900/5 rounded-2xl"
                                        >
                                            <p className="text-3xl md:text-4xl font-bold text-navy-900">4+</p>
                                            <p className="text-sm text-navy-600 mt-1">Years Leadership</p>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ delay: 0.3 }}
                                            className="text-center p-4 bg-gold-500/10 rounded-2xl"
                                        >
                                            <p className="text-3xl md:text-4xl font-bold text-navy-900">50+</p>
                                            <p className="text-sm text-navy-600 mt-1">Projects Managed</p>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ delay: 0.4 }}
                                            className="text-center p-4 bg-gold-500/10 rounded-2xl"
                                        >
                                            <p className="text-3xl md:text-4xl font-bold text-navy-900">100+</p>
                                            <p className="text-sm text-navy-600 mt-1">Team Members Led</p>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ delay: 0.5 }}
                                            className="text-center p-4 bg-navy-900/5 rounded-2xl"
                                        >
                                            <p className="text-3xl md:text-4xl font-bold text-navy-900">3.4+</p>
                                            <p className="text-sm text-navy-600 mt-1">CGPA (DU)</p>
                                        </motion.div>
                                    </div>

                                    {/* Quote */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={isInView ? { opacity: 1 } : {}}
                                        transition={{ delay: 0.6 }}
                                        className="border-l-4 border-gold-500 pl-4 py-2"
                                    >
                                        <p className="text-navy-700 italic">
                                            &quot;Excellence is not a destination but a continuous journey of improvement.&quot;
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="inline-block px-4 py-2 bg-gold-500/10 text-gold-500 rounded-full text-sm font-medium mb-4"
                        >
                            About Me
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4 }}
                            className="section-title"
                        >
                            A Dynamic Administrative Leader
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 }}
                            className="text-lg text-navy-600 mb-6 leading-relaxed"
                        >
                            A dedicated professional with expertise in <strong>Office Management</strong>,
                            <strong> HR Operations</strong>, and <strong>Social Compliance</strong>.
                            I bring a proven track record of guiding institutions toward efficiency and sustainable growth.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className="text-lg text-navy-600 mb-8 leading-relaxed"
                        >
                            With a strong academic foundation in <strong>Islamic Studies</strong> from the prestigious
                            University of Dhaka, I combine traditional values with modern leadership practices to
                            create harmonious and productive work environments.
                        </motion.p>

                        {/* Soft Skills Tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.7 }}
                        >
                            <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4">
                                Core Competencies
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {softSkills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="flex items-center gap-2 px-4 py-2 bg-navy-900/5 rounded-full hover:bg-navy-900/10 transition-colors cursor-default"
                                    >
                                        <skill.icon size={16} className="text-gold-500" />
                                        <span className="text-sm font-medium text-navy-800">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
