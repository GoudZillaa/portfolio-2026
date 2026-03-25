import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { memo, useRef, useState, useMemo, useEffect } from "react";


const allProjects = [
  {
    title: "AI Course Builder",
    description: "Web app that generates structured learning paths based on the Pareto principle.",
    tech: ["MERN", "Tailwind"],
    link: "https://ai-course-amber.vercel.app/",
    type: "Personal",
    color: "#facab8", // Amber
  },
  {
    title: "VP Group Global",
    description: "Custom company website for construction provider with lead collection to Excel.",
    tech: ["Next.js", "Responsive"],
    link: "https://vpgroupglobal.com",
    type: "Freelance",
    color: "#f55b90", // Pink
  },
  {
    title: "Vignan Electronics",
    description: "Ecommerce and landing page solutions for an electronics manufacturing firm.",
    tech: ["Next.js", "PHP"],
    link: "https://vignan-mu.vercel.app/",
    type: "Internship",
    color: "#83a5f9", // Blue
  },
  {
    title: "Smartosphere",
    description: "Modern landing page for a tech solutions provider with clear CTA paths.",
    tech: ["Next.js", "Tailwind"],
    link: "https://smartospheresolutions.com",
    type: "Internship",
    color: "#94a3b8", // Gray
  },
  {
    title: "Moti Paradise",
    description: "Luxury villa project with a private pool and scenic views. Integrated WordPress API for blog fetching.",
    tech: ["Next.js", "WordPress API", "Tailwind"],
    link: "https://motiparadise.vercel.app/",
    type: "Internship",
    color: "#ccff00", // Neon Yellow
  },
  {
    title: "Offices N More",
    description: "Custom CRM system built for managing workspace leads and customer interactions.",
    tech: ["Laravel", "Tailwind"],
    link: "https://crm.officesnmore.in",
    type: "Internship",
    color: "#937ff0", // Lavender
  },
  {
    title: "Notion Context CLI",
    description: "Access Notion data inside projects and integrate with AI workflows via this powerful CLI tool.",
    tech: ["Node.js", "Notion API"],
    link: "https://github.com/GoudZillaa/notion-context",
    type: "Personal",
    color: "#4FFFB0", // Mint
  },
  {
    title: "FormPilot Extension",
    description: "Browser extension that automatically fills forms with mock data for faster dev testing.",
    tech: ["Chrome Ext", "JS"],
    link: "https://github.com/GoudZillaa/form-pilot",
    type: "Personal",
    color: "#9E7AFF", // Purple
  },
];

const ProjectCard = ({ project }: { project: any; index: number }) => {
  return (
    <div
      className="flex-shrink-0 w-[280px] sm:w-[320px] h-[350px] sm:h-[400px] rounded-[2.2rem] overflow-hidden group relative transition-transform duration-300 hover:scale-[1.02] active:scale-95"
      style={{ backgroundColor: project.color }}
    >

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full w-full p-8 flex flex-col"
      >
        <div className="flex justify-between items-start mb-8">
          <span className="px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-black/60 text-[10px] font-mono uppercase tracking-widest">
            {project.type}
          </span>
          <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-45">
            <ArrowUpRight className="text-white w-7 h-7" />
          </div>

        </div>

        <div className="flex-grow">
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-[1.1] tracking-tighter font-heading">
            {project.title}
          </h3>
          <p className="text-black/80 text-base md:text-lg leading-snug mb-8 line-clamp-4 font-medium">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t: string) => (
            <span key={t} className="text-[11px] font-mono uppercase tracking-widest text-black/50 bg-black/5 px-2 py-0.5 rounded">
              {t}
            </span>
          ))}
        </div>

      </a>
    </div>
  );
};

const ProjectsSectionNew = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    return allProjects.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const handleWheelNative = (e: WheelEvent) => {
      if (e.shiftKey) {
        e.preventDefault();
        e.stopPropagation();
        scrollEl.scrollLeft += e.deltaY * 2.5;
      }
    };

    scrollEl.addEventListener("wheel", handleWheelNative, { passive: false });
    return () => scrollEl.removeEventListener("wheel", handleWheelNative);
  }, []);

  return (
    <section id="projects" className="py-32 px-6 bg-[#fcfcfc] dark:bg-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
          <div className="flex flex-col gap-2">
            <span className="px-3 py-1 w-fit rounded-full border border-border text-[10px] font-mono uppercase tracking-wider bg-background">Projects</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">Explore My Work</h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center bg-background border border-border rounded-full p-1 shadow-sm focus-within:ring-2 focus-within:ring-black/5 transition-all">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none outline-none px-4 py-2 text-sm w-48 text-foreground"
              />
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-xs opacity-50">🔍</span>
              </div>
            </div>
            <a
              href="https://github.com/GoudZillaa"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold text-xs tracking-tight hover:scale-105 transition-transform inline-flex items-center gap-2 shadow-xl"
            >
              View All <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>


        {/* Slider Container */}
        <div className="relative">

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto py-8 no-scrollbar scroll-smooth will-change-transform"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex gap-6 px-1">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, idx) => (
                  <ProjectCard key={project.title} project={project} index={idx} />
                ))
              ) : (
                <div className="h-[400px] flex flex-col items-center justify-center px-10 text-center text-muted-foreground w-full">
                  <p className="text-lg font-medium mb-2">No projects found</p>
                  <p className="text-sm">Try searching for a different keyword or technology.</p>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Navigation & Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-12 gap-8">
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all group"
              aria-label="Previous Project"
            >
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all group"
              aria-label="Next Project"
            >
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="text-muted-foreground text-xs md:text-sm font-mono max-w-md text-center sm:text-right leading-relaxed opacity-70">
            Explore a curated collection of my full-stack applications,
            CLI tools, and performance-focused web solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(ProjectsSectionNew);
