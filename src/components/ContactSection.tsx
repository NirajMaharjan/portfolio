import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GithubLogo, LinkedinLogo, PaperPlaneTilt } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-input",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".contact-btn",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      gsap.fromTo(
        ".social-icon",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".social-icons-row",
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Bounce animation
    gsap.fromTo(
      ".contact-btn",
      { scale: 1 },
      { scale: 1.1, duration: 0.15, yoyo: true, repeat: 1, ease: "power2.inOut" }
    );
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 relative">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <p className="text-primary/80 text-sm tracking-[0.3em] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="contact-input w-full px-5 py-4 rounded-xl bg-card/40 backdrop-blur-xl border border-glass-border text-foreground placeholder:text-muted-foreground/50 outline-none input-glow transition-all duration-300 text-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="contact-input w-full px-5 py-4 rounded-xl bg-card/40 backdrop-blur-xl border border-glass-border text-foreground placeholder:text-muted-foreground/50 outline-none input-glow transition-all duration-300 text-sm"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="contact-input w-full px-5 py-4 rounded-xl bg-card/40 backdrop-blur-xl border border-glass-border text-foreground placeholder:text-muted-foreground/50 outline-none input-glow transition-all duration-300 text-sm resize-none"
          />
          <button
            type="submit"
            className="contact-btn btn-glow w-full py-4 rounded-xl bg-primary/15 border border-primary/40 text-primary font-medium tracking-wide flex items-center justify-center gap-2 text-base"
          >
            Send Message <PaperPlaneTilt size={20} weight="bold" />
          </button>
        </form>

        <div className="flex items-center justify-center mt-8">
          <a
            href="/cv.pdf"
            download
            className="contact-btn btn-glow inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-primary/15 border border-primary/40 text-primary font-medium tracking-wide text-base"
          >
            Download CV
          </a>
        </div>

        {/* Social icons */}
        <div className="social-icons-row flex items-center justify-center gap-4 mt-10">
          <a
            href="https://github.com/NirajMaharjan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon glass p-3 hover:glow-primary hover:scale-110 transition-all duration-300"
          >
            <GithubLogo size={24} weight="light" className="text-primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/niraj-maharjan-7a7226253/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon glass p-3 hover:glow-accent hover:scale-110 transition-all duration-300"
          >
            <LinkedinLogo size={24} weight="light" className="text-accent" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
