import { motion } from "framer-motion";

const experiences = [
  {
    role: "Front-End Developer Intern",
    company: "Ace360Degree",
    duration: "6 Month Internship",
    points: [
      "Developed and maintained web apps using React.js/Next.js and PHP-based frameworks",
      "Migrated multiple websites from CodeIgniter to Laravel",
      "Built WordPress APIs for blog/content data across websites",
      "Implemented SMTP-based form systems for reliable email delivery",
      "Assisted in mitigating security issues including PHP web shell vulnerabilities",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "Remote",
    points: [
      "Created and customized websites for clients using modern web technologies",
      "Built responsive UIs with backend functionality based on client requirements",
      "Maintained and updated existing websites, improving performance and usability",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="code-comment text-sm mb-2">{"// where I've been"}</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-black dark:text-white">
            experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot — dot-pulse uses scale+opacity (GPU composited, no paint) */}
                <div className="absolute left-0 md:left-8 top-2 w-3 h-3 rounded-full bg-black dark:bg-white -translate-x-[5px] dot-pulse" />

                <div className="card-solid rounded-xl p-6 border border-border/30">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="font-heading text-lg text-foreground font-semibold">
                        {exp.role}
                      </h3>
                      <p className="text-[#937ff0] font-mono text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-muted-foreground text-xs font-mono mt-1 md:mt-0">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-secondary-foreground text-sm flex gap-2"
                      >
                        <span className="text-black dark:text-white mt-1 shrink-0">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
