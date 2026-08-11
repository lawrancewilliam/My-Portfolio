import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './MagicBento.css';

const DEFAULT_GLOW_COLOR = '212, 175, 55';
const MOBILE_BREAKPOINT = 768;

const updateCardGlow = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--glow-x', `${((mouseX - rect.left) / rect.width) * 100}%`);
  card.style.setProperty('--glow-y', `${((mouseY - rect.top) / rect.height) * 100}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

function GlobalSpotlight({ gridRef, glowColor = DEFAULT_GLOW_COLOR, radius = 300 }) {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (!gridRef?.current) return;

    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed; width: 800px; height: 800px; border-radius: 50%;
      pointer-events: none; z-index: 200; opacity: 0;
      transform: translate(-50%, -50%); mix-blend-mode: screen;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.12) 0%, rgba(${glowColor}, 0.06) 25%,
        rgba(${glowColor}, 0.02) 45%, transparent 70%);
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMove = (e) => {
      const section = gridRef.current.closest('.bento-section');
      const rect = section?.getBoundingClientRect();
      const inside = rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
      const cards = gridRef.current.querySelectorAll('.magic-bento-card');

      if (!inside) {
        gsap.to(spotlight, { opacity: 0, duration: 0.3 });
        cards.forEach((c) => c.style.setProperty('--glow-intensity', '0'));
        return;
      }

      let minDist = Infinity;
      const proximity = radius * 0.5;
      const fadeDistance = radius * 0.75;

      cards.forEach((card) => {
        const cr = card.getBoundingClientRect();
        const cx = cr.left + cr.width / 2;
        const cy = cr.top + cr.height / 2;
        const dist = Math.max(0, Math.hypot(e.clientX - cx, e.clientY - cy) - Math.max(cr.width, cr.height) / 2);
        minDist = Math.min(minDist, dist);
        let glow = 0;
        if (dist <= proximity) glow = 1;
        else if (dist <= fadeDistance) glow = (fadeDistance - dist) / (fadeDistance - proximity);
        updateCardGlow(card, e.clientX, e.clientY, glow, radius);
      });

      gsap.to(spotlight, { left: e.clientX, top: e.clientY, duration: 0.1 });
      const opacity = minDist <= proximity ? 0.7 : minDist <= fadeDistance ? ((fadeDistance - minDist) / (fadeDistance - proximity)) * 0.7 : 0;
      gsap.to(spotlight, { opacity, duration: 0.2 });
    };

    document.addEventListener('mousemove', handleMove);
    return () => {
      document.removeEventListener('mousemove', handleMove);
      spotlight.remove();
    };
  }, [gridRef, glowColor, radius]);

  return null;
}

export function BentoCard({
  label,
  title,
  description,
  children,
  className = '',
  span = 'normal',
  glowColor = DEFAULT_GLOW_COLOR,
}) {
  const cardRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const el = cardRef.current;
    if (!el || isMobile) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      gsap.to(el, {
        rotateX: ((y - cy) / cy) * -6,
        rotateY: ((x - cx) / cx) * 6,
        duration: 0.15,
        ease: 'power2.out',
        transformPerspective: 1000,
      });
    };

    const onLeave = () => {
      gsap.to(el, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.4, ease: 'power2.out' });
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [isMobile]);

  return (
    <div
      ref={cardRef}
      className={`magic-bento-card magic-bento-card--border-glow span-${span} ${className}`}
      style={{ '--glow-color': glowColor }}
    >
      {children || (
        <>
          <div className="magic-bento-card__header">
            <span className="magic-bento-card__label">{label}</span>
          </div>
          <div className="magic-bento-card__content">
            <h3 className="magic-bento-card__title">{title}</h3>
            <p className="magic-bento-card__description">{description}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default function BentoGrid({ children, className = '', enableSpotlight = true, glowColor = DEFAULT_GLOW_COLOR }) {
  const gridRef = useRef(null);

  return (
    <div className={`bento-section ${className}`}>
      {enableSpotlight && <GlobalSpotlight gridRef={gridRef} glowColor={glowColor} />}
      <div ref={gridRef} className="card-grid">
        {children}
      </div>
    </div>
  );
}
