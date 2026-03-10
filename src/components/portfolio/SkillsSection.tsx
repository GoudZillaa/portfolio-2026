import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    items: ["JavaScript", "PHP", "TypeScript", "HTML5", "CSS3"],
    colorTheme: "bg-[#facab8] text-[#7a2b20] border-transparent font-bold",
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "MUI"],
    colorTheme: "bg-[#6dd89e] text-[#0e3d28] border-transparent font-bold",
  },
  {
    title: "Backend",
    items: ["Laravel", "Node.js", "Express.js", "CodeIgniter", "WordPress"],
    colorTheme: "bg-[#83a5f9] text-[#132b69] border-transparent font-bold",
  },
  {
    title: "Database",
    items: ["MongoDB", "MySQL"],
    colorTheme: "bg-[#937ff0] text-white border-transparent font-bold",
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "npm", "VS Code", "Figma"],
    colorTheme: "bg-[#f55b90] text-white border-transparent font-bold",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="code-comment text-sm mb-2">{"// what I work with"}</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-black dark:text-white">
            tech_stack
          </h2>
        </motion.div>

        {/* Scrolling marquee — GPU-composited to prevent layout thrash */}
        <div className="overflow-hidden mb-16 py-4 border-y border-border/50 marquee-container">
          <div
            className="flex marquee whitespace-nowrap"
            style={{ willChange: "transform" }}
          >
            {[...skillCategories.flatMap((c) => c.items), ...skillCategories.flatMap((c) => c.items)].map((skill, i) => (
              <span
                key={i}
                className="mx-4 text-muted-foreground font-mono text-sm opacity-50"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#f5f5f5] dark:bg-[#18181A] rounded-xl p-6 border border-border/30 dark:border-border/10"
            >
              <h3 className="font-heading text-black dark:text-white text-sm mb-4 flex items-center gap-2">
                <span className="text-muted-foreground">{"{"}</span>
                {category.title}
                <span className="text-muted-foreground">{"}"}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1.5 text-xs font-mono rounded-md border tracking-tight ${category.colorTheme || "bg-secondary text-secondary-foreground border-border"}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
