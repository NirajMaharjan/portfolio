import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.2 });

    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
    );

    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    tl.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.4"
    );

    // Floating orbs
    gsap.utils.toArray<HTMLElement>(".glow-orb").forEach((orb, i) => {
      gsap.to(orb, {
        y: -20,
        duration: 3 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.3,
      });
    });
  }, []);

  const handleHireMe = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Spline 3D background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/orb-Cz3tKL2T8cmn8tUz6kqeDy1R/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="pointer-events-none"
          title="3D Background"
        />
      </div>

      {/* Glow orbs */}
      <div className="glow-orb absolute top-20 left-[10%] w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
      <div className="glow-orb absolute bottom-32 right-[15%] w-48 h-48 rounded-full bg-accent/10 blur-3xl" />
      <div className="glow-orb absolute top-1/2 left-[60%] w-24 h-24 rounded-full bg-glow-neon/10 blur-2xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-primary/80 text-sm tracking-[0.3em] uppercase mb-4">
          Introducing
        </p>
        <h1
          ref={headlineRef}
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-none mb-6"
          style={{ opacity: 0 }}
        >
          Hi, I'm{" "}
          <span className="text-gradient glow-text">Niraj</span>
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          style={{ opacity: 0 }}
        >
          A backend developer building scalable APIs, cloud-native services,
          and production-ready systems with modern server-side tools.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            ref={ctaRef}
            onClick={handleHireMe}
            className="btn-glow px-10 py-4 rounded-full bg-primary/15 border border-primary/40 text-primary text-lg font-medium tracking-wide"
            style={{ opacity: 0 }}
          >
            Hire Me
          </button>
          <a
            href="/cv.pdf"
            download
            className="btn-glow inline-flex items-center justify-center px-10 py-4 rounded-full bg-accent/15 border border-accent/40 text-accent text-lg font-medium tracking-wide"
            style={{ opacity: 0 }}
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
