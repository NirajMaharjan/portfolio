import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Atom, Wind, FileCss } from "@phosphor-icons/react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";

gsap.registerPlugin(ScrollTrigger);

const projects=[]
// const projects = [
//   {
//     title: "MCODE — Email for Developers",
//     description:
//       "A 3D interactive web platform for developer email services with Spline integration.",
//     image: project1,
//     tech: ["React", "Tailwind", "Spline"],
//     link: "#",
//   },
//   {
//     title: "MIladiCode — Gaming UI",
//     description:
//       "Next-level gaming UI with 3D characters, NFT store, and immersive arena design.",
//     image: project2,
//     tech: ["React", "GSAP", "Three.js"],
//     link: "#",
//   },
//   {
//     title: "3D Developer Portfolio",
//     description:
//       "A stunning 3D portfolio featuring smooth animations, about section, and contact form.",
//     image: project3,
//     tech: ["HTML", "CSS", "JavaScript"],
//     link: "#",
//   },
// ];

const techIcons: Record<string, typeof Atom> = {
  React: Atom,
  Tailwind: Wind,
  CSS: FileCss,
};

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary/80 text-sm tracking-[0.3em] uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        {/* Cards grid — horizontal scroll on mobile */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card glass-strong flex-shrink-0 w-[85vw] sm:w-[70vw] lg:w-auto snap-center group cursor-pointer overflow-hidden hover:glow-primary transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex items-center gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all duration-300"
                >
                  View Project <ArrowUpRight size={16} weight="bold" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
