'use client'
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative pt-3 pb-24 bg-black text-white">
      <div
        ref={contentRef}
        className={`relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Left Column - Static Image */}
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src="/img/about_img.jpg"
            alt="Component System Mockup"
            width={600}
            height={400}
            quality={90}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6">
          <h2 className="text-5xl font-extrabold tracking-tight">
            Atomic component system
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Like tiny pieces of a puzzle, our components are designed to be
            combined into larger sections.
          </p>

          {/* CTA Button */}
          <div className="flex">
            <a
              href="/learn-more"
              className="cta-container relative inline-block rounded-full"
            >
              <span className="cta-button relative z-10 bg-white text-black font-semibold px-6 py-3 text-[0.95rem] sm:text-[1.05rem] rounded-full flex items-center gap-2">
                Learn More
                <svg
                  className="cta-arrow w-5 h-5 transition-transform duration-300 ease-out"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Button Hover Animation */}
      <style jsx>{`
        .cta-container {
          position: relative;
          display: inline-block;
          border: 1px solid #d1d5db;
          border-radius: 9999px;
          padding: 1px;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        .cta-container:hover .cta-arrow {
          transform: translateX(5px) rotate(0deg);
        }
        .cta-arrow {
          transform: rotate(-45deg);
        }
      `}</style>
    </section>
  );
}