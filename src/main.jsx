import React, { useLayoutEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "58%", description: "Increase in pick-up point use", position: "stat-one" },
  { value: "23%", description: "Decrease in customer phone calls", position: "stat-two" },
  { value: "27%", description: "Increase in pick-up point use", position: "stat-three" },
  { value: "40%", description: "Decrease in customer phone calls", position: "stat-four" }
];

function Car() {
  return (
    <svg className="car-svg" viewBox="0 0 300 112" role="img" aria-label="Illustration of a green sports car">
      <defs>
        <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d7ff65" />
          <stop offset="100%" stopColor="#8abf2c" />
        </linearGradient>
      </defs>
      <ellipse cx="150" cy="91" rx="119" ry="10" fill="#172017" opacity=".16" />
      <path d="M37 69 L51 51 Q59 45 83 42 L111 18 Q121 10 140 10 L185 10 Q199 11 212 30 L235 45 Q251 49 265 59 L276 73 L273 83 L27 83 L27 75 Z" fill="url(#body)" stroke="#2c4524" strokeWidth="2.5" />
      <path d="M94 40 L119 19 Q124 16 139 16 L158 16 L158 40 Z" fill="#24343a" />
      <path d="M166 16 L184 16 Q194 17 205 37 L166 40 Z" fill="#24343a" />
      <path d="M30 67 L48 65 L55 76 L29 76 Z" fill="#f6ffe4" />
      <path d="M249 61 L269 68 L271 76 L250 76 Z" fill="#f6ffe4" />
      <path d="M71 48 L224 48" stroke="#537d25" strokeWidth="2" opacity=".65" />
      <circle cx="79" cy="80" r="21" fill="#17201d" />
      <circle cx="79" cy="80" r="11" fill="#b9c0b2" />
      <circle cx="79" cy="80" r="4" fill="#465044" />
      <circle cx="222" cy="80" r="21" fill="#17201d" />
      <circle cx="222" cy="80" r="11" fill="#b9c0b2" />
      <circle cx="222" cy="80" r="4" fill="#465044" />
      <path d="M119 56 L188 56" stroke="#f3ffc9" strokeWidth="2" opacity=".8" />
    </svg>
  );
}

function App() {
  const sectionRef = useRef(null);
  const carRef = useRef(null);
  const trailRef = useRef(null);
  const lettersRef = useRef([]);
  const statsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".eyebrow", { y: 14, opacity: 0, duration: 0.7, ease: "power3.out" });
      gsap.from(lettersRef.current, {
        yPercent: 115,
        opacity: 0,
        duration: 0.85,
        stagger: 0.035,
        delay: 0.12,
        ease: "power4.out"
      });
      gsap.from(statsRef.current, {
        y: 22,
        opacity: 0,
        duration: 0.65,
        stagger: 0.12,
        delay: 0.65,
        ease: "power3.out"
      });

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      scrollTimeline
        .fromTo(carRef.current, { xPercent: -4, y: 8, rotate: -1 }, { xPercent: 4, y: -5, rotate: 1, ease: "none" }, 0)
        .fromTo(trailRef.current, { scaleX: 0.05, transformOrigin: "left center" }, { scaleX: 1, ease: "none" }, 0)
        .fromTo(".road-glow", { opacity: 0.18 }, { opacity: 0.85, ease: "none" }, 0)
        .fromTo(".scroll-note", { opacity: 1 }, { opacity: 0, ease: "none" }, 0.05);

      lettersRef.current.forEach((letter, index) => {
        gsap.fromTo(letter, { color: "#a7a89d" }, {
          color: "#20251d",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top+=${index * 28} top`,
            end: `top+=${index * 28 + 220} top`,
            scrub: true
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headline = "WELCOME ITZ FIZZ".split("");

  return (
    <main className="bg-[#f5f3ec] text-[#20251d]">
      <section ref={sectionRef} className="hero-stage relative min-h-screen overflow-hidden">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="ITZ FIZZ home"><span className="brand-mark">F</span> ITZ FIZZ</a>
          <span className="topbar-note">MOVE BETTER. LIVE LIGHTER.</span>
          <span className="topbar-index">01 / 04</span>
        </header>

        <div className="hero-copy" id="top">
          <p className="eyebrow"><span className="eyebrow-dot" /> A smarter way to move</p>
          <h1 aria-label="Welcome ITZ FIZZ">
            {headline.map((char, i) => (
              <span className={char === " " ? "letter letter-space" : "letter"} key={`${char}-${i}`} ref={el => lettersRef.current[i] = el}>
                {char === " " ? "\u00a0" : char}
              </span>
            ))}
          </h1>
          <p className="subhead">Small changes. <em>Big momentum.</em></p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <article className={`stat-card ${stat.position}`} key={stat.value + stat.position} ref={el => statsRef.current[i] = el}>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-description">{stat.description}</p>
              <span className="stat-rule" />
            </article>
          ))}
        </div>

        <div className="road" aria-hidden="true">
          <div className="road-line" />
          <div className="road-trail" ref={trailRef} />
          <div className="road-glow" />
          <div className="car-wrap" ref={carRef}><Car /></div>
        </div>

        <div className="bottom-meta">
          <span>DESIGNED FOR THE EVERYDAY JOURNEY</span>
          <span className="scroll-note"><span className="mouse-icon" /> SCROLL TO DRIVE</span>
          <span>EST. 2024 — FIZZ LABS</span>
        </div>
      </section>
      <section className="end-section">
        <p className="eyebrow"><span className="eyebrow-dot" /> KEEP THE MOMENTUM</p>
        <h2>Your next move<br /><em>starts here.</em></h2>
        <p className="end-copy">Thoughtful design. Smoother journeys. A little more fizz in every day.</p>
        <a className="cta" href="#top">BACK TO TOP <span>↗</span></a>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
