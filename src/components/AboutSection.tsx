import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImg from "@/assets/profile.png";
import {
  FileJs,
  BracketsCurly,
  Terminal,
  Code,
  Cloud,
  GitBranch,
} from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { icon: Cloud, label: "Docker" },
  { icon: Code, label: "Kubernetes" },
  { icon: BracketsCurly, label: "Express.js" },
  { icon: GitBranch, label: "Git" },
  { icon: FileJs, label: "Next.js" },
  { icon: Terminal, label: "Python" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, filter: "blur(8px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".skill-icon",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skill-grid",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-6 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile image */}
          <div ref={imageRef} className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/40 via-accent/30 to-glow-neon/20 blur-lg group-hover:blur-xl transition-all duration-500" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2">
                <img
                  src={profileImg}
                  alt="Niraj"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="flex-1">
            <p className="text-primary/80 text-sm tracking-[0.3em] uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Crafting Digital{" "}
              <span className="text-gradient">Experiences</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 font-light text-base md:text-lg">
              I'm a backend developer building scalable, secure APIs and
              cloud-native services. With expertise in Node.js, Express,
              microservices, and automation tooling, I deliver reliable
              systems that empower teams and keep applications running
              smoothly at scale.
            </p>

            {/* Skills grid */}
            <div className="skill-grid grid grid-cols-3 sm:grid-cols-6 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="skill-icon glass flex flex-col items-center gap-2 p-4 hover:glow-primary transition-all duration-300 hover:scale-110 cursor-default"
                >
                  <skill.icon size={28} weight="light" className="text-primary" />
                  <span className="text-xs text-muted-foreground">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
