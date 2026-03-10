import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const swiperProjects = [
    {
        title: "Notion Context CLI",
        description: "A CLI tool that lets developers access Notion data inside projects and integrate with AI workflows. Published as an npm package.",
        tech: ["Node.js", "npm", "CLI", "Notion API"],
        link: "https://github.com/GoudZillaa/notion-context",
        type: "personal",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
        color: "cyber-mint",
    },
    {
        title: "FormPilot Chrome Extension",
        description: "Browser extension that automatically fills forms with mock data or user profile data for faster development and testing.",
        tech: ["Chrome Extension", "JavaScript"],
        link: "https://github.com/GoudZillaa/form-pilot",
        type: "personal",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
        color: "cyber-lavender",
    },
    {
        title: "AI Course Builder",
        description: "Web app that generates structured learning paths based on the Pareto principle — learn the 20% to unlock 80% potential.",
        tech: ["MERN", "MUI", "Tailwind CSS"],
        link: "https://ai-course-amber.vercel.app/",
        type: "personal",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop",
        color: "cyber-pink",
    },
    {
        title: "VP Group Global",
        description: "Custom company website for a construction and property solutions provider with lead collection to Excel sheets.",
        tech: ["Next.js", "Responsive Design"],
        link: "https://vpgroupglobal.com",
        type: "freelance",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
        color: "cyber-peach",
    },
    {
        title: "SportsKonnect",
        description: "Sports community platform with integrated payment gateway for event registrations and subscriptions.",
        tech: ["Laravel", "Payment Gateway"],
        link: "https://sportskonnect.in",
        type: "freelance",
        image: "https://images.unsplash.com/photo-1461896836934-bd45ba97b2a4?w=800&h=500&fit=crop",
        color: "cyber-sky",
    },
];

const ProjectsSwiper = () => {
    const [active, setActive] = useState(0);

    const goTo = (idx: number) => {
        if (idx < 0) setActive(swiperProjects.length - 1);
        else if (idx >= swiperProjects.length) setActive(0);
        else setActive(idx);
    };

    const project = swiperProjects[active];

    return (
        <section id="projects-swiper" className="py-32 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="code-comment text-sm mb-2">{"// featured work"}</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-gradient-multi">
                        Projects
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Image side */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden glass-strong">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={active}
                                src={project.image}
                                alt={project.title}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-xs font-mono text-foreground">
                            {project.type}
                        </div>
                    </div>

                    {/* Info side */}
                    <div className="space-y-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-secondary-foreground text-lg leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1.5 rounded-full glass text-xs font-mono text-muted-foreground"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-heading font-bold text-sm card-hover"
                                >
                                    View Project <span>↗</span>
                                </a>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="flex items-center gap-4 pt-4">
                            <button
                                onClick={() => goTo(active - 1)}
                                className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors"
                            >
                                ←
                            </button>
                            <div className="flex gap-2">
                                {swiperProjects.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActive(i)}
                                        className={`h-2 rounded-full transition-all duration-300 ${i === active
                                            ? "w-8 bg-foreground"
                                            : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                            }`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={() => goTo(active + 1)}
                                className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSwiper;
