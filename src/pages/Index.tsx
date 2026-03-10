import Navbar from "@/components/portfolio/Navbar";
import ImpactHero from "@/components/portfolio/ImpactHero";
import HeroSection from "@/components/portfolio/HeroSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSwiper from "@/components/portfolio/ProjectsSwiper";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";
import ContactCTA from "@/components/portfolio/ContactCTA";
import Footer from "@/components/portfolio/Footer";
import PixelGodzilla from "@/components/portfolio/PixelGodzilla";
import TestHero from "@/components/portfolio/TestHero";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [showGodzilla, setShowGodzilla] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [typedText, setTypedText] = useState("");
  const typingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fullText = "ROAR! You found my resume...";

  useEffect(() => {
    if (showDialog) {
      // Reset and start typing
      setTypedText("");
      let i = 0;
      typingRef.current = setInterval(() => {
        i++;
        setTypedText(fullText.slice(0, i));
        if (i >= fullText.length) {
          clearInterval(typingRef.current!);
        }
      }, 45);
    } else {
      // Clean up when dialog closes
      if (typingRef.current) clearInterval(typingRef.current);
      setTypedText("");
    }
    return () => {
      if (typingRef.current) clearInterval(typingRef.current);
    };
  }, [showDialog]);

  useEffect(() => {
    const handleScroll = () => {
      // Show Godzilla when scrolled past 300px
      if (window.scrollY > 300) {
        setShowGodzilla(true);
      } else {
        setShowGodzilla(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground noise-bg selection:bg-[#937ff0] selection:text-white">
      <Navbar />
      {/* <ImpactHero /> */}
      <TestHero />
      {/* <HeroSection /> */}
      <SkillsSection />
      <ExperienceSection />
      {/* <ProjectsSwiper /> */}
      <ProjectsSection />
      <AboutSection />
      {/* <ContactSection /> */}
      <ContactCTA />
      <Footer />
      {/* <PixelGodzilla /> */}

      <AnimatePresence>
        {showGodzilla && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed bottom-0 right-4 z-50 flex flex-col items-end"
          >
            {/* Pixelated Dialogue Box */}
            <AnimatePresence>
              {showDialog && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  className="mb-6 mr-8 relative drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:drop-shadow-[6px_6px_0px_rgba(255,255,255,0.8)]"
                >
                  <div
                    className="bg-background text-foreground p-3 relative border-4 border-foreground"
                    style={{
                      fontFamily: "'Courier New', Courier, monospace",
                    }}
                  >
                    <p className="text-xs font-bold whitespace-nowrap min-h-[2.5em]">
                      {typedText.slice(0, 19)}
                      {typedText.length > 19 && (
                        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-[#937ff0] hover:underline">
                          {typedText.slice(19)}
                        </a>
                      )}
                      {typedText.length < fullText.length && (
                        <span className="animate-pulse">▋</span>
                      )}
                    </p>
                    {/* Speech Bubble Tail - Pixelated */}
                    <div className="absolute bg-background" style={{ bottom: "-4px", right: "24px", width: "16px", height: "4px" }} />
                    <div className="absolute bg-background border-foreground" style={{ bottom: "-8px", right: "24px", width: "16px", height: "4px", borderLeftWidth: "4px", borderRightWidth: "4px" }} />
                    <div className="absolute bg-foreground" style={{ bottom: "-12px", right: "28px", width: "8px", height: "4px" }} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <img
              src="/godzila.gif"
              alt="Godzilla"
              onClick={() => {
                setShowDialog(!showDialog);

                // Trigger buzz animation
                const img = document.getElementById('godzilla-img');
                if (img) {
                  img.classList.remove('animate-buzz');
                  void img.offsetWidth; // trigger reflow
                  img.classList.add('animate-buzz');
                }
              }}
              id="godzilla-img"
              className="w-24 md:w-32 cursor-pointer opacity-100 transition-opacity drop-shadow-[0px_1px_0px_rgba(0,0,0,1)] dark:drop-shadow-[0px_0px_0px_rgba(255,255,255,1)]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
