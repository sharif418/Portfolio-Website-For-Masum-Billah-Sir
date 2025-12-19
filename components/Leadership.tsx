"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Anchor, Users, Heart, Award } from "lucide-react";

const achievements = [
    {
        title: "Cadet Sergeant",
        organization: "BNCC Naval Wing",
        period: "2015 - 2019",
        description:
            "Served as Cadet Sergeant in the Bangladesh National Cadet Corps Naval Wing, developing leadership, discipline, and teamwork skills.",
        icon: Anchor,
        highlight: true,
    },
    {
        title: "General Secretary",
        organization: "Bagerhat Zila Student Welfare Association, DU",
        period: "University Years",
        description:
            "Led the student welfare organization, organizing events, advocating for student rights, and building community connections.",
        icon: Users,
        highlight: false,
    },
    {
        title: "Social Work & Community Service",
        organization: "Various Initiatives",
        period: "Ongoing",
        description:
            "Actively involved in community development, charitable activities, and social welfare programs to give back to society.",
        icon: Heart,
        highlight: false,
    },
];

export default function Leadership() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="leadership" className="py-20 md:py-32 bg-white relative overflow-hidden" ref={ref}>
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-navy-800/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-gold-500/10 text-gold-500 rounded-full text-sm font-medium mb-4">
                        Making an Impact
                    </span>
                    <h2 className="section-title">Leadership & Volunteering</h2>
                    <p className="section-subtitle mx-auto">
                        Beyond professional roles, committed to community development and leadership
                    </p>
                </motion.div>

                {/* Achievement Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div
                                className={`h-full rounded-2xl p-8 transition-all duration-500 relative overflow-hidden ${achievement.highlight
                                        ? "bg-gradient-to-br from-navy-900 to-navy-800 text-white"
                                        : "glass-card hover:shadow-2xl"
                                    }`}
                            >
                                {/* Highlight badge */}
                                {achievement.highlight && (
                                    <div className="absolute top-4 right-4">
                                        <Award className="w-6 h-6 text-gold-500" />
                                    </div>
                                )}

                                {/* Icon */}
                                <div className="mb-6">
                                    <div
                                        className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${achievement.highlight
                                                ? "bg-gold-500/20"
                                                : "bg-gradient-to-br from-navy-900 to-navy-700"
                                            }`}
                                    >
                                        <achievement.icon
                                            size={28}
                                            className={achievement.highlight ? "text-gold-500" : "text-white"}
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3
                                    className={`text-xl font-bold mb-2 ${achievement.highlight ? "text-white" : "text-navy-900"
                                        }`}
                                >
                                    {achievement.title}
                                </h3>
                                <p
                                    className={`font-medium mb-1 ${achievement.highlight ? "text-gold-400" : "text-gold-500"
                                        }`}
                                >
                                    {achievement.organization}
                                </p>
                                <p
                                    className={`text-sm mb-4 ${achievement.highlight ? "text-white/60" : "text-navy-500"
                                        }`}
                                >
                                    {achievement.period}
                                </p>
                                <p
                                    className={`text-sm leading-relaxed ${achievement.highlight ? "text-white/80" : "text-navy-600"
                                        }`}
                                >
                                    {achievement.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
