"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        title: "Head of Administration",
        company: "As-Sunnah Skill Development Institute",
        location: "Dhaka, Bangladesh",
        period: "May 2024 – Present",
        current: true,
        responsibilities: [
            "Leading internal/external programs and HR operations",
            "Coordinating projects and skill development courses",
            "Managing institutional administration and strategic planning",
            "Overseeing team performance and organizational development",
        ],
    },
    {
        title: "General Manager",
        company: "Ozzy Corporation",
        location: "Dhaka, Bangladesh",
        period: "Nov 2020 – Apr 2024",
        current: false,
        responsibilities: [
            "Managed HR, Payroll, Finance, and Import Operations (China)",
            "Handled VAT, Customs, and Supply Chain Management",
            "Led cross-functional teams to achieve business objectives",
            "Implemented process improvements for operational efficiency",
        ],
    },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="py-20 md:py-32 bg-slate-100" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-gold-500/10 text-gold-500 rounded-full text-sm font-medium mb-4">
                        Career Journey
                    </span>
                    <h2 className="section-title">Professional Experience</h2>
                    <p className="section-subtitle mx-auto">
                        A proven track record of leadership and operational excellence across diverse industries
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 via-navy-800 to-navy-600" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 mt-8">
                                <div className={`w-full h-full rounded-full ${exp.current ? "bg-gold-500 animate-pulse" : "bg-navy-800"}`} />
                                {exp.current && (
                                    <div className="absolute inset-0 rounded-full bg-gold-500/50 animate-ping" />
                                )}
                            </div>

                            {/* Content */}
                            <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* Header */}
                                    <div className={`flex flex-wrap items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                        {exp.current && (
                                            <span className="px-3 py-1 bg-gold-500/20 text-gold-500 text-xs font-semibold rounded-full">
                                                Current
                                            </span>
                                        )}
                                        <div className="flex items-center gap-2 text-sm text-navy-600">
                                            <Calendar size={14} />
                                            {exp.period}
                                        </div>
                                    </div>

                                    {/* Title & Company */}
                                    <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-2">
                                        {exp.title}
                                    </h3>
                                    <div className={`flex items-center gap-4 text-navy-600 mb-4 flex-wrap ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                        <div className="flex items-center gap-2">
                                            <Briefcase size={16} className="text-gold-500" />
                                            <span className="font-medium">{exp.company}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} className="text-gold-500" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>

                                    {/* Responsibilities */}
                                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                                        {exp.responsibilities.map((resp, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ delay: index * 0.2 + i * 0.1 + 0.3 }}
                                                className="flex items-start gap-3 text-navy-700"
                                            >
                                                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                                                <span>{resp}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>

                            {/* Empty space for alternating layout */}
                            <div className="hidden md:block flex-1" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
