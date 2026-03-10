import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "React Specialist",
  "Laravel Engineer",
  "CLI Tool Builder",
  "Freelance Dev",
];

const TypingText = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((c) => c - 1);
          } else {
            setDeleting(false);
            setRoleIndex((r) => (r + 1) % roles.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-foreground font-heading">
      {roles[roleIndex].substring(0, charIndex)}
      <span className="blink">_</span>
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-foreground/5 blur-3xl float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="code-comment text-sm mb-4"
        >
          {"// welcome to my corner of the internet"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-2"
        >
          <span className="text-foreground">Abhay</span>{" "}
          <span className="text-foreground">Goud</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl mb-8 font-body"
        >
          <TypingText />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-secondary-foreground max-w-xl text-lg mb-10 leading-relaxed"
        >
          I build interfaces that work. Scalable frontends, robust backends,
          and everything in between.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://github.com/GoudZillaa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-foreground text-background font-heading text-sm font-semibold rounded-md card-hover inline-flex items-center gap-2"
          >
            <span>{"<"}</span> GitHub <span>{"/>"}</span>
          </a>
          <a
            href="https://www.linkedin.com/in/abhay-goud-83464b349"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border text-foreground font-heading text-sm font-semibold rounded-md card-hover inline-flex items-center gap-2"
          >
            LinkedIn →
          </a>
          <a
            href="mailto:abhayajay15@gmail.com"
            className="px-6 py-3 border border-border text-foreground font-heading text-sm font-semibold rounded-md card-hover inline-flex items-center gap-2"
          >
            Contact
          </a>
        </motion.div>

        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex items-center gap-3 text-sm text-muted-foreground font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-foreground pulse-glow" />
          Available for work
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-1"
        >
          <div className="w-1 h-2 bg-foreground rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
