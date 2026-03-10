import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";


const certifications = [
  { name: "Responsive Web Design", org: "FreeCodeCamp" },
  { name: "JavaScript Algorithms & Data Structures", org: "FreeCodeCamp" },
  { name: "Backend Development and APIs", org: "FreeCodeCamp" },
];

const INTERESTS = [
  "→ Building developer tools & CLI packages",
  "→ Exploring AI integration in web apps",
  "→ Clean architecture & scalable systems",
  "→ Crafting pixel-perfect UIs",
];

const TerminalBlock = () => {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Start typing when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  // Typing logic
  useEffect(() => {
    if (!started || done) return;
    if (currentLine >= INTERESTS.length) {
      setDone(true);
      return;
    }

    const target = INTERESTS[currentLine];
    if (currentChar < target.length) {
      const t = setTimeout(() => {
        setVisibleLines((prev) => {
          const updated = [...prev];
          updated[currentLine] = target.slice(0, currentChar + 1);
          return updated;
        });
        setCurrentChar((c) => c + 1);
      }, 30);
      return () => clearTimeout(t);
    } else {
      // Move to next line after short pause
      const t = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 180);
      return () => clearTimeout(t);
    }
  }, [started, currentLine, currentChar, done]);

  return (
    <div ref={ref} className="card-solid border border-border/30 rounded-lg p-4 font-mono text-sm mt-8">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-3 h-3 rounded-full bg-destructive/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-primary/70" />
      </div>
      <p className="text-muted-foreground">
        <span className="text-primary">abhay</span>
        <span className="text-muted-foreground">@</span>
        <span className="text-accent">dev</span>
        <span className="text-muted-foreground"> ~ $ </span>
        <span className="text-foreground">cat interests.txt</span>
      </p>
      <div className="text-secondary-foreground mt-2 space-y-0.5 min-h-[6rem]">
        {INTERESTS.map((line, idx) => {
          const isCurrentLine = idx === currentLine && !done;
          const isVisible = idx < currentLine || (idx === currentLine && currentChar > 0);
          if (!isVisible && !isCurrentLine) return null;
          return (
            <div key={idx} className="flex items-center">
              <span>{visibleLines[idx] || ""}</span>
              {isCurrentLine && (
                <span className="ml-0.5 inline-block w-[0.55em] h-[1em] bg-current opacity-80 animate-[blink_1s_step-end_infinite]" />
              )}
            </div>
          );
        })}
        {done && (
          <div className="flex items-center mt-1">
            <span className="text-primary">abhay</span>
            <span className="text-muted-foreground">@</span>
            <span className="text-accent">dev</span>
            <span className="text-muted-foreground"> ~ $ </span>
            <span className="inline-block w-[0.55em] h-[1em] bg-current opacity-80 animate-[blink_1s_step-end_infinite]" />
          </div>
        )}
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="code-comment text-sm mb-2">{"// a bit about me"}</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-black dark:text-white">
            about
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-secondary-foreground text-lg leading-relaxed">
              I'm a full-stack web developer from{" "}
              <span className="text-black dark:text-white font-medium">Mumbai, India</span>{" "}
              with a B.Sc. in Information Technology from Patkar Varde College.
            </p>
            <p className="text-secondary-foreground leading-relaxed">
              I've worked on real production applications — from migrating legacy
              CodeIgniter apps to Laravel, to building CRM dashboards,
              integrating payment gateways, and creating developer tools like CLI
              packages and Chrome extensions.
            </p>
            <p className="text-secondary-foreground leading-relaxed">
              I approach every project with attention to detail and a commitment
              to quality. Whether it's a freelance website or an open-source
              tool, I care about writing clean, maintainable code that actually
              ships.
            </p>

            {/* Terminal-style block */}
            <TerminalBlock />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="font-heading text-sm text-black dark:text-white mb-6">
              {"{ certifications }"}
            </h3>
            <div className="cert-cards">
              {certifications.map((cert, idx) => {
                const accentClass = `cert-accent-${idx + 1}`;
                return (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`cert-card card-solid rounded-xl p-4 border border-border/30 ${accentClass}`}
                  >
                    <p className="text-foreground text-sm font-medium">
                      {cert.name}
                    </p>
                    <p className="text-muted-foreground text-xs font-mono mt-1">
                      {cert.org}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 p-4 border border-border/30 rounded-lg bg-secondary/20">
              <p className="text-black dark:text-white font-heading text-xs mb-1">
                Education
              </p>
              <p className="text-foreground text-sm font-medium">
                B.Sc. Information Technology
              </p>
              <p className="text-muted-foreground text-xs font-mono">
                Patkar Varde College, Mumbai · 2024
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
