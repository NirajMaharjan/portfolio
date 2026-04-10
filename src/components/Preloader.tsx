import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(progressRef.current, {
      width: "100%",
      duration: 2.2,
      ease: "power2.out",
      onUpdate: function () {
        const p = Math.round(this.progress() * 100);
        setPercent(p);
      },
    });

    tl.to(
      preloaderRef.current,
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
          if (preloaderRef.current) {
            preloaderRef.current.style.display = "none";
          }
          onComplete();
        },
      },
      "+=0.2"
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight glow-text text-primary mb-2">
        Niraj Maharjan
      </h1>
      <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase">
        Web Developer
      </p>
      <div className="progress-bar-track">
        <div ref={progressRef} className="progress-bar" />
      </div>
      <span ref={percentRef} className="text-muted-foreground text-xs mt-3 tabular-nums">
        {percent}%
      </span>
    </div>
  );
};

export default Preloader;
