import Navbar from "@/components/portfolio/Navbar";
import ImpactHero from "@/components/portfolio/ImpactHero";
import TestHero from "@/components/portfolio/TestHero";
import { useState, useEffect, useRef, lazy, Suspense, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Lazy load sections that are below the fold
const SkillsSection = lazy(() => import("@/components/portfolio/SkillsSection"));
const ExperienceSection = lazy(() => import("@/components/portfolio/ExperienceSection"));
const ProjectsSection = lazy(() => import("@/components/portfolio/ProjectsSection"));
const ProjectsSectionNew = lazy(() => import("@/components/portfolio/ProjectsSectionNew"));
const AboutSection = lazy(() => import("@/components/portfolio/AboutSection"));
const ContactCTA = lazy(() => import("@/components/portfolio/ContactCTA"));
const Footer = lazy(() => import("@/components/portfolio/Footer"));

// Memoized sections to prevent unnecessary re-renders
const MemoizedSkills = memo(SkillsSection);
const MemoizedExperience = memo(ExperienceSection);
const MemoizedProjects = memo(ProjectsSection);
const MemoizedProjectsNew = memo(ProjectsSectionNew);
const MemoizedAbout = memo(AboutSection);
const MemoizedContactCTA = memo(ContactCTA);
const MemoizedFooter = memo(Footer);

// Dedicated sub-component for Godzilla to handle its own scroll-based visibility
const ScrollingGodzilla = () => {
  const [showGodzilla, setShowGodzilla] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [typedText, setTypedText] = useState("");
  const typingRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fullText = "ROAR! You found my resume...";

  useEffect(() => {
    if (showDialog) {
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
      if (typingRef.current) clearInterval(typingRef.current);
      setTypedText("");
    }
    return () => {
      if (typingRef.current) clearInterval(typingRef.current);
    };
  }, [showDialog]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGodzilla(true);
      } else {
        setShowGodzilla(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showGodzilla && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="fixed bottom-0 right-4 z-50 flex flex-col items-end"
        >
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
                  style={{ fontFamily: "'Courier New', Courier, monospace" }}
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
              const img = document.getElementById('godzilla-img');
              if (img) {
                img.classList.remove('animate-buzz');
                void img.offsetWidth;
                img.classList.add('animate-buzz');
              }
            }}
            id="godzilla-img"
            className="w-24 md:w-32 cursor-pointer opacity-100 transition-opacity drop-shadow-[0px_1px_0px_rgba(0,0,0,1)] dark:drop-shadow-[0px_0px_0px_rgba(255,255,255,1)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};


const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground noise-bg selection:bg-[#937ff0] selection:text-white">
      <Navbar />
      <TestHero />
      
      <Suspense fallback={<div className="h-96 flex items-center justify-center font-mono text-xs opacity-50">Loading sections...</div>}>
        <MemoizedSkills />
        <MemoizedExperience />
        {/* <MemoizedProjects /> */}
        <MemoizedProjectsNew />
        <MemoizedAbout />
        <MemoizedContactCTA />
        <MemoizedFooter />
      </Suspense>


      <ScrollingGodzilla />
    </div>
  );
};


export default Index;
