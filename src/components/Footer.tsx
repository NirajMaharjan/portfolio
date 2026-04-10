import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GithubLogo, LinkedinLogo, Heart } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-content",
        { opacity: 0, y: 40, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative py-16 px-6 border-t border-border/30">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-orb absolute bottom-10 left-[20%] w-20 h-20 rounded-full bg-primary/5 blur-2xl animate-float" />
        <div className="glow-orb absolute bottom-20 right-[30%] w-16 h-16 rounded-full bg-accent/5 blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="footer-content container mx-auto max-w-4xl text-center relative z-10">
        <div className="flex items-center justify-center gap-6 mb-6">
          {["Home", "About", "Projects", "Contact"].map((link) => (
            <button
              key={link}
              onClick={() =>
                document
                  .querySelector(`#${link.toLowerCase()}`)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <a href="https://github.com/NirajMaharjan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <GithubLogo size={20} weight="light" />
          </a>
          <a href="https://www.linkedin.com/in/niraj-maharjan-7a7226253/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
            <LinkedinLogo size={20} weight="light" />
          </a>
        </div>

        <p className="text-muted-foreground/60 text-xs flex items-center justify-center gap-1">
          © 2025 Made with <Heart size={12} weight="fill" className="text-destructive" /> by Niraj
        </p>
      </div>
    </footer>
  );
};

export default Footer;
