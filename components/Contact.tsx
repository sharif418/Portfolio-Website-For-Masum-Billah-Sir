"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, MessageCircle, CheckCircle, X, Clock } from "lucide-react";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "masumbillah86.mm@gmail.com",
        href: "mailto:masumbillah86.mm@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+880 1516-161876",
        href: "tel:+8801516161876",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Dhaka, Bangladesh",
        href: null,
    },
];

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [submittedData, setSubmittedData] = useState<typeof formState | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate processing
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Store submitted data for WhatsApp option
        setSubmittedData(formState);
        setIsSubmitting(false);
        setShowSuccessModal(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
    };

    const handleWhatsAppRedirect = () => {
        if (!submittedData) return;

        const whatsappMessage = `Hello Masum Billah, I reached you from your portfolio! 🚀%0A%0A*Name:* ${encodeURIComponent(submittedData.name)}%0A*Email:* ${encodeURIComponent(submittedData.email)}%0A*Subject:* ${encodeURIComponent(submittedData.subject)}%0A*Message:* ${encodeURIComponent(submittedData.message)}`;

        window.open(`https://wa.me/8801516161876?text=${whatsappMessage}`, "_blank");
        setShowSuccessModal(false);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-slate-100 to-white" ref={ref}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-gold-500/10 text-gold-500 rounded-full text-sm font-medium mb-4">
                            Get in Touch
                        </span>
                        <h2 className="section-title">Let&apos;s Connect</h2>
                        <p className="section-subtitle mx-auto">
                            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-2 space-y-8"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-navy-900 mb-6">
                                    Contact Information
                                </h3>
                                <p className="text-navy-600 mb-8">
                                    Feel free to reach out through any of the following channels. I typically respond within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="w-12 h-12 bg-navy-900/5 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <info.icon size={20} className="text-gold-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-navy-600">{info.label}</p>
                                            {info.href ? (
                                                <a
                                                    href={info.href}
                                                    className="font-medium text-navy-900 hover:text-gold-500 transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="font-medium text-navy-900">{info.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Response Time Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.6 }}
                                className="glass-card rounded-2xl p-6"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center">
                                        <Clock size={24} className="text-gold-500" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-navy-900">Response Time</p>
                                        <p className="text-sm text-navy-600">Within 24 hours</p>
                                    </div>
                                </div>
                                <p className="text-sm text-navy-500">
                                    For urgent matters, use WhatsApp for instant communication.
                                </p>
                            </motion.div>

                            {/* Map placeholder */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.7 }}
                                className="h-48 bg-navy-900/5 rounded-2xl overflow-hidden relative"
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin size={32} className="text-gold-500 mx-auto mb-2" />
                                        <p className="text-navy-600 font-medium">Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="lg:col-span-3"
                        >
                            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    {/* Name */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-navy-800 mb-2"
                                        >
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-navy-800 mb-2"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="mb-6">
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-navy-800 mb-2"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-white"
                                        placeholder="Project Discussion"
                                    />
                                </div>

                                {/* Message */}
                                <div className="mb-6">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-navy-800 mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all resize-none bg-white"
                                        placeholder="Tell me about your project or inquiry..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-primary justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Success Modal */}
            <AnimatePresence>
                {showSuccessModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"
                            onClick={() => setShowSuccessModal(false)}
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-navy-100 hover:bg-navy-200 flex items-center justify-center transition-colors z-10"
                            >
                                <X size={16} className="text-navy-600" />
                            </button>

                            {/* Success animation header */}
                            <div className="bg-gradient-to-br from-navy-800 to-navy-900 p-8 text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring", damping: 15 }}
                                    className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.4, type: "spring", damping: 15 }}
                                    >
                                        <CheckCircle size={40} className="text-gold-500" />
                                    </motion.div>
                                </motion.div>
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-2xl font-bold text-white mb-2"
                                >
                                    Message Received!
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-white/70"
                                >
                                    Thank you for reaching out, {submittedData?.name?.split(" ")[0]}!
                                </motion.p>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-center mb-6"
                                >
                                    <div className="flex items-center justify-center gap-2 text-navy-600 mb-4">
                                        <Clock size={18} className="text-gold-500" />
                                        <span className="text-sm">Expected response within 24 hours</span>
                                    </div>
                                    <p className="text-navy-500 text-sm">
                                        I&apos;ll review your message and get back to you via email at <strong className="text-navy-700">{submittedData?.email}</strong>
                                    </p>
                                </motion.div>

                                {/* Divider */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent mb-6"
                                />

                                {/* Urgent contact option */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MessageCircle size={22} className="text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-navy-900 mb-1">
                                                Need an Urgent Response?
                                            </h4>
                                            <p className="text-sm text-navy-600 mb-4">
                                                For time-sensitive matters, connect with me instantly on WhatsApp.
                                            </p>
                                            <motion.button
                                                onClick={handleWhatsAppRedirect}
                                                className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <MessageCircle size={18} />
                                                Chat on WhatsApp
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Close button */}
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    onClick={() => setShowSuccessModal(false)}
                                    className="w-full mt-4 py-3 text-navy-600 hover:text-navy-900 font-medium transition-colors"
                                >
                                    Close
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
