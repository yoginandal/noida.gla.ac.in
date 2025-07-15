// section.jsx
"use client";
import { cn } from "@/lib/utils";
import { useRef, useEffect, useState } from "react";

export default function Section({
  children,
  className,
  containerClassName,
  spacing = "py-8 md:py-16",
  animate = false,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!animate) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-10%",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animate]);

  return (
    <section className={cn("w-full", spacing, className)}>
      <div
        ref={animate ? sectionRef : null}
        className={cn(
          "container max-w-7xl mx-auto px-4",
          containerClassName,
          animate &&
            "transform transition-opacity transition-transform duration-1000 ease-out",
          animate &&
            (isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]")
        )}
        style={{
          willChange: animate ? "transform, opacity" : "auto",
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </section>
  );
}
