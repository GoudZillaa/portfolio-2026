import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="code-comment text-sm mb-2">{"// let's connect"}</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-black dark:text-white mb-6">
            get_in_touch
          </h2>
          <p className="text-secondary-foreground text-lg mb-12 max-w-lg mx-auto">
            Got a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="mailto:abhayajay15@gmail.com"
            className="px-8 py-4 bg-foreground text-background font-heading text-sm font-bold rounded-lg card-hover inline-flex items-center gap-2"
          >
            abhayajay15@gmail.com
          </a>
          <a
            href="tel:+919137150142"
            className="px-8 py-4 glass font-heading text-sm rounded-lg card-hover inline-flex items-center gap-2 text-foreground"
          >
            +91 9137150142
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/GoudZillaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
          >
            GitHub
          </a>
          <span className="text-border">|</span>
          <a
            href="https://www.linkedin.com/in/abhay-goud-83464b349"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
