import { motion } from "framer-motion";
import MagicCard from "./MagicCard";

const featuredProjects = [
  {
    title: "Notion Context CLI",
    description: "A CLI tool that lets developers access Notion data inside projects and integrate with AI workflows. Published as an npm package.",
    tech: ["Node.js", "npm", "CLI", "Notion API"],
    link: "https://github.com/GoudZillaa/notion-context",
    type: "personal",
    gradientFrom: "#4FFFB0",
    gradientTo: "#00C9FF",
  },
  {
    title: "FormPilot Chrome Extension",
    description: "Browser extension that automatically fills forms with mock data or user profile data for faster development and testing.",
    tech: ["Chrome Extension", "JavaScript"],
    link: "https://github.com/GoudZillaa/form-pilot",
    type: "personal",
    gradientFrom: "#9E7AFF",
    gradientTo: "#FE8BBB",
  },
  {
    title: "AI Course Builder",
    description: "Web app that generates structured learning paths based on the Pareto principle — learn the 20% to unlock 80% potential.",
    tech: ["MERN", "MUI", "Tailwind CSS"],
    link: "https://ai-course-amber.vercel.app/",
    type: "personal",
    gradientFrom: "#facab8",
    gradientTo: "#FF6B6B",
  },
  {
    title: "VP Group Global",
    description: "Custom company website for a construction and property solutions provider with lead collection to Excel sheets.",
    tech: ["Next.js", "Responsive Design"],
    link: "https://vpgroupglobal.com",
    type: "freelance",
    gradientFrom: "#f55b90",
    gradientTo: "#38BDF8",
  },
  {
    title: "Moti Paradise",
    description: "Luxury villa project in Udaipur. Features a custom WordPress API integration for dynamic blog fetching.",
    tech: ["Next.js", "WordPress API", "Tailwind CSS"],
    link: "https://motiparadise.vercel.app/",
    type: "freelance",
    gradientFrom: "#ccff00",
    gradientTo: "#937ff0",
  },
];

const otherProjects = [
  { title: "Vignan Electronics", tech: "Next.js + PHP + MySQL", link: "https://vignanelectronics.com" },
  { title: "Smartosphere Solutions", tech: "Next.js", link: "https://smartospheresolutions.com" },
  { title: "Offices N More CRM", tech: "Laravel + Tailwind", link: "https://crm.officesnmore.in" },
  { title: "GLX Aspire", tech: "CodeIgniter → Laravel", link: "https://glxaspire.in" },
  { title: "SportsKonnect", tech: "Laravel + Payment Gateway", link: "https://sportskonnect.in" },
  { title: "Youtube Clone", tech: "MERN + MUI", link: "https://yt-clone-frontend-xi.vercel.app/" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="code-comment text-sm mb-2">{"// things I've built"}</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-black dark:text-white">
            projects
          </h2>
        </motion.div>

        {/* Featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <MagicCard
                className="rounded-xl h-full project-glow-card"
                gradientSize={320}
                gradientFrom={project.gradientFrom}
                gradientTo={project.gradientTo}
                gradientOpacity={0}
              >

                <div style={{ "--project-color": project.gradientFrom } as React.CSSProperties} className="h-full">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 h-full relative"
                  >
                    <div
                      className="absolute top-0 right-0 px-3 py-1 text-xs font-mono rounded-bl-lg rounded-tr-xl border-l border-b border-border/30 bg-background"
                      style={{ color: "var(--project-color)" }}
                    >

                      {project.type}
                    </div>

                    <h3 className="font-heading text-lg text-foreground font-semibold mb-2 transition-colors mt-4 group-hover:text-[var(--project-color)]">
                      {project.title}
                      <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0">
                        ↗
                      </span>
                    </h3>
                    <p className="text-secondary-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 bg-secondary text-muted-foreground text-xs font-mono rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </a>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-sm text-muted-foreground mb-6">
            {"// other noteworthy projects"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <MagicCard
                  className="rounded-xl h-full project-glow-card"
                  gradientSize={200}
                  gradientFrom="#9E7AFF"
                  gradientTo="#4FFFB0"
                  gradientOpacity={0}
                >

                  <div style={{ "--project-color": "#9E7AFF" } as React.CSSProperties} className="h-full">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-4 h-full"
                    >
                      <h4 className="font-heading text-sm text-foreground font-medium transition-colors mb-1 group-hover:text-[var(--project-color)]">
                        {project.title}
                        <span className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                          ↗
                        </span>
                      </h4>
                      <p className="text-muted-foreground text-xs font-mono">
                        {project.tech}
                      </p>
                    </a>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
