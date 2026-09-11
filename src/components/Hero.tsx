import type { CSSProperties } from 'react';

export function Hero() {
  return (
    <section className="hero shell">
      <p className="hero-eyebrow rise" style={{ '--d': 1 } as CSSProperties}>
        First-year student
      </p>
      <h1 className="hero-name rise" style={{ '--d': 2 } as CSSProperties}>
        Yash Chaurasia
      </h1>
      <p className="hero-lead rise" style={{ '--d': 3 } as CSSProperties}>
        I'm learning to build software, mostly things that involve AI. Here's what I've
        made so far, and an honest read on what I actually know.
      </p>
    </section>
  );
}
