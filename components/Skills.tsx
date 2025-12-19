"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Users,
    Clipboard,
    Scale,
    Calendar,
    Cpu,
    FileSpreadsheet,
    MessageSquare,
    Globe,
    Languages,
    LucideIcon,
} from "lucide-react";

interface Skill {
    name: string;
    icon: LucideIcon;
    level: number;
    label?: string;
}

interface SkillCategory {
    title: string;
    color: string;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        title: "Core Expertise",
        color: "navy",
        skills: [
            { name: "Human Resource Management", icon: Users, level: 95 },
            { name: "Admin Operations", icon: Clipboard, level: 90 },
            { name: "Compliance (Labor Law)", icon: Scale, level: 85 },
            { name: "Event Management", icon: Calendar, level: 88 },
        ],
    },
    {
        title: "Technical Skills",
        color: "gold",
        skills: [
            { name: "AI Proficiency", icon: Cpu, level: 80 },
            { name: "MS Office Suite", icon: FileSpreadsheet, level: 95 },
            { name: "Digital Communication", icon: MessageSquare, level: 90 },
            { name: "ERP Systems", icon: Globe, level: 75 },
        ],
    },
    {
        title: "Languages",
        color: "slate",
        skills: [
            { name: "Bengali", icon: Languages, level: 100, label: "Native" },
            { name: "English", icon: Languages, level: 85, label: "Fluent" },
            { name: "Arabic", icon: Languages, level: 40, label: "Basic" },
        ],
    },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="py-20 md:py-32 bg-slate-100" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-gold-500/10 text-gold-500 rounded-full text-sm font-medium mb-4">
                        Capabilities
                    </span>
                    <h2 className="section-title">Skills & Expertise</h2>
                    <p className="section-subtitle mx-auto">
                        A comprehensive skill set built through years of professional experience
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: catIndex * 0.15 }}
                        >
                            <div className="glass-card rounded-2xl p-6 md:p-8 h-full">
                                {/* Category Header */}
                                <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                                    <span
                                        className={`w-3 h-3 rounded-full ${category.color === "navy"
                                            ? "bg-navy-800"
                                            : category.color === "gold"
                                                ? "bg-gold-500"
                                                : "bg-slate-600"
                                            }`}
                                    />
                                    {category.title}
                                </h3>

                                {/* Skills */}
                                <div className="space-y-5">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{
                                                duration: 0.5,
                                                delay: catIndex * 0.15 + skillIndex * 0.1 + 0.3,
                                            }}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-2">
                                                    <skill.icon size={16} className="text-navy-600" />
                                                    <span className="font-medium text-navy-800">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                                <span className="text-sm text-navy-600">
                                                    {skill.label || `${skill.level}%`}
                                                </span>
                                            </div>
                                            {/* Progress bar */}
                                            <div className="h-2 bg-navy-900/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={isInView ? { width: `${skill.level}%` } : {}}
                                                    transition={{
                                                        duration: 1,
                                                        delay: catIndex * 0.15 + skillIndex * 0.1 + 0.5,
                                                        ease: "easeOut",
                                                    }}
                                                    className={`h-full rounded-full ${category.color === "navy"
                                                        ? "bg-gradient-to-r from-navy-800 to-navy-600"
                                                        : category.color === "gold"
                                                            ? "bg-gradient-to-r from-gold-500 to-amber-500"
                                                            : "bg-gradient-to-r from-slate-600 to-slate-400"
                                                        }`}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
