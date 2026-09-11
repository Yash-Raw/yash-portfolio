import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { LEVELS, skills } from '../data';

/**
 * The scale is the point of this block. Skill is shown as a position on one
 * shared axis — read about it / tried it / can build with it / comfortable —
 * so the rows can be compared against each other rather than against 100%.
 * The axis has no "expert" rung on purpose.
 */
export function Calibration() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<'pending' | 'running'>('pending');

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setPhase('running');
      return;
    }

    const reveal = () => requestAnimationFrame(() => setPhase('running'));

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          // Let the browser paint the start state before transitioning to it.
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);

    // The dots start invisible, so a missed callback would hide the whole
    // scale. If nothing has fired by now, show it regardless.
    const failsafe = window.setTimeout(reveal, 4000);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <section className="section shell" id="skills">
      <h2 className="section-label">Where I'm at</h2>
      <div className="cal" ref={ref} data-animate={phase}>
        <p className="cal-note">
          One scale, honestly applied. Nothing here claims more than it should.
        </p>

        <div className="cal-legend" aria-hidden="true">
          <span />
          <div className="cal-legend-track">
            {LEVELS.map((level) => (
              <span key={level.aria}>
                <span className="lv-full">{level.tick}</span>
                <span className="lv-short">{level.short}</span>
              </span>
            ))}
          </div>
        </div>

        <ul className="cal-rows">
          {skills.map((skill, i) => (
            <li className="cal-row" key={skill.name}>
              <span className="cal-name">{skill.name}</span>
              <span
                className="cal-track"
                role="img"
                aria-label={`${skill.name}: ${LEVELS[skill.level - 1].aria}`}
              >
                <span className="cal-rail" />
                <span className="cal-ticks" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
                <span
                  className="cal-dot"
                  style={{ '--pos': skill.level, '--i': i } as CSSProperties}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
