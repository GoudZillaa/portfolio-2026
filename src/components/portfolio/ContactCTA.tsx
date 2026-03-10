import { motion } from "framer-motion";
import { useState } from "react";

const ContactCTA = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                setStatus("success");
                setForm({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                const data = await response.json();
                setStatus("error");
                setErrorMessage(data.error || "Failed to send message.");
                setTimeout(() => setStatus("idle"), 3000);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
            setErrorMessage("Network error. Please try again.");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <section id="contact-cta" className="px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-border/40 shadow-xl flex flex-col md:flex-row min-h-[460px]"
            >
                {/* Left Panel — Godzilla banner image */}
                <div className="relative md:w-[42%] overflow-hidden flex flex-col">
                    <img
                        src="/godzillaa-banner.png"
                        alt="Godzilla Banner"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Dark overlay so text is readable */}
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Top-left: WhatsApp number */}
                    <div className="relative z-10 p-8 pb-0">
                        <a
                            href="https://wa.me/919137150142"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-white/80 text-xs font-mono hover:text-white transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.115 1.524 5.843L.057 23.857a.5.5 0 0 0 .614.627l6.155-1.616A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.956 9.956 0 0 1-5.15-1.426l-.368-.22-3.812 1 .977-3.705-.241-.381A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                            +91 91371 50142
                        </a>
                    </div>

                    {/* Bottom CTA text */}
                    <div className="relative z-10 flex flex-col justify-end flex-1 p-8">
                        <p className="text-white/60 text-xs font-mono mb-2 tracking-wide uppercase">
                            Let's connect
                        </p>
                        <a
                            href="https://github.com/GoudZillaa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-heading font-extrabold text-2xl md:text-3xl leading-tight hover:underline hover:underline-offset-4 transition-all"
                        >
                            Get in touch with{" "}
                            <span className="text-white/80">@GoudZillaa</span>
                        </a>
                    </div>
                </div>

                {/* Right Panel — Contact Form */}
                <div className="md:w-[58%] bg-background flex flex-col justify-center p-8 md:p-12">
                    <div className="mb-6">
                        <p className="code-comment text-xs mb-1">{"// send a message"}</p>
                        <h2 className="text-3xl font-heading font-bold text-foreground">
                            get_in_touch
                        </h2>
                        <p className="text-muted-foreground text-sm mt-1">
                            Got a project or just want to say hi? Drop me a message.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-mono text-muted-foreground">Your name</label>
                            <input
                                type="text"
                                required
                                placeholder="John Doe"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-lg border border-border/60 bg-secondary/20 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-border focus:ring-1 focus:ring-border/50 transition-all"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-mono text-muted-foreground">Your email</label>
                            <input
                                type="email"
                                required
                                placeholder="you@example.com"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-lg border border-border/60 bg-secondary/20 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-border focus:ring-1 focus:ring-border/50 transition-all"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-mono text-muted-foreground">Message</label>
                            <textarea
                                required
                                rows={4}
                                placeholder="Tell me what you're working on..."
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-lg border border-border/60 bg-secondary/20 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-border focus:ring-1 focus:ring-border/50 transition-all resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            className="mt-1 px-6 py-3 rounded-lg bg-foreground text-background font-heading font-bold text-sm tracking-wide disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-[2px] hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
                        >
                            {status === "loading" && "Sending..."}
                            {status === "success" && "✓ Message Sent!"}
                            {status === "error" && "✕ Failed to Send"}
                            {status === "idle" && "Send Message →"}
                        </button>
                        {status === "error" && (
                            <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
                        )}
                        <p className="text-center text-muted-foreground text-xs mt-2 font-mono">
                            Prefer direct email? <span>abhayajay15@gmail.com</span>
                        </p>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactCTA;
