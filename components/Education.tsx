"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
    {
        degree: "M.A in Islamic Studies",
        institution: "University of Dhaka",
        year: "2020",
        cgpa: "3.44",
        icon: GraduationCap,
        description: "Specialized in Islamic jurisprudence and contemporary applications",
    },
    {
        degree: "B.A in Islamic Studies",
        institution: "University of Dhaka",
        year: "2019",
        cgpa: "3.47",
        icon: BookOpen,
        description: "Comprehensive study of Islamic theology, history, and Arabic language",
    },
    {
        degree: "Certificate in HR, Admin & Social Compliance",
        institution: "BGMI (Bangladesh Garments Management Institute)",
        year: "Professional Training",
        cgpa: null,
        icon: Award,
        description: "Industry-recognized certification in human resources and compliance management",
    },
];

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="education" className="py-20 md:py-32 bg-white" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-gold-500/10 text-gold-500 rounded-full text-sm font-medium mb-4">
                        Academic Background
                    </span>
                    <h2 className="section-title">Education & Certifications</h2>
                    <p className="section-subtitle mx-auto">
                        Strong academic foundation from Bangladesh&apos;s premier institution
                    </p>
                </motion.div>

                {/* Education Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="h-full glass-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                                {/* Background gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-navy-900/5 to-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon */}
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-navy-900 to-navy-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <edu.icon size={28} className="text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative">
                                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-gold-500 font-medium mb-2">{edu.institution}</p>
                                    <p className="text-sm text-navy-600 mb-4">{edu.description}</p>

                                    {/* Year and CGPA */}
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <span className="px-3 py-1 bg-navy-900/5 text-navy-700 text-sm font-medium rounded-full">
                                            {edu.year}
                                        </span>
                                        {edu.cgpa && (
                                            <span className="px-3 py-1 bg-gold-500/10 text-gold-500 text-sm font-semibold rounded-full">
                                                CGPA: {edu.cgpa}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
