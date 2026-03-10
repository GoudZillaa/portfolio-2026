import { motion } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "skills", href: "#skills" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact-cta" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center pointer-events-none px-4 gap-4"
    >
      <nav className="glass rounded-full px-6 py-3 flex items-center justify-between pointer-events-auto border border-border/40 shadow-xl w-full max-w-4xl bg-background/30 dark:bg-background/10 backdrop-blur-md">
        <a href="#" className="font-heading text-lg font-extrabold text-foreground flex items-center gap-2 tracking-tight">
          {"<AG />"}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground/90 hover:text-foreground hover:bg-foreground/10 px-3 py-1.5 rounded-full transition-colors font-mono text-sm"
            >
              .{link.label}()
            </a>
          ))}
          <div className="h-4 w-px bg-border/50 mx-1"></div>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-foreground hover:bg-foreground/10 px-3 py-1.5 rounded-full transition-colors font-mono text-sm"
          >
            {open ? "close()" : "menu()"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass rounded-3xl pointer-events-auto border border-border/40 w-full max-w-sm p-5 shadow-2xl bg-background/80 dark:bg-background/60 backdrop-blur-xl"
        >
          <div className="flex flex-col space-y-2 text-center">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-foreground/80 hover:text-foreground hover:bg-foreground/10 rounded-xl transition-colors font-mono text-sm py-3"
              >
                .{link.label}()
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
