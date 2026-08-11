import { useLayoutEffect, useRef, useCallback, useId } from 'react';
import './ScrollStack.css';

const lerp = (a, b, t) => a + (b - a) * t;

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

export default function ScrollStack({
  children,
  className = '',
  itemDistance = 60,
  itemScale = 0.025,
  itemStackDistance = 20,
  stackPosition = '22%',
  scaleEndPosition = '14%',
  baseScale = 0.92,
  smoothness = 0.14,
  onStackComplete,
}) {
  const scrollerRef = useRef(null);
  const stackId = useId().replace(/:/g, '');
  const stackCompletedRef = useRef(false);
  const rafRef = useRef(null);
  const cardsRef = useRef([]);
  const stateRef = useRef([]);
  const targetsRef = useRef([]);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getElementOffset = useCallback((element) => {
    const rect = element.getBoundingClientRect();
    return rect.top + window.scrollY;
  }, []);

  const updateTargets = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElement = scrollerRef.current?.querySelector('.scroll-stack-end');
    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    const targets = [];

    cards.forEach((card, i) => {
      const cardTop = getElementOffset(card);
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight * 0.5;
      const triggerStart = pinStart;
      const triggerEnd = cardTop - scaleEndPositionPx;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);

      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - pinStart;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - pinStart;
      }

      targets.push({ y: translateY, scale, z: 10 + i });

      if (i === cards.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    targetsRef.current = targets;
  }, [
    itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale,
    onStackComplete, calculateProgress, parsePercentage, getElementOffset,
  ]);

  const animate = useCallback(() => {
    const cards = cardsRef.current;
    const targets = targetsRef.current;

    cards.forEach((card, i) => {
      const target = targets[i];
      if (!target) return;

      if (!stateRef.current[i]) {
        stateRef.current[i] = { y: target.y, scale: target.scale };
      }

      const state = stateRef.current[i];
      state.y = lerp(state.y, target.y, smoothness);
      state.scale = lerp(state.scale, target.scale, smoothness);

      card.style.transform = `translate3d(0, ${state.y.toFixed(2)}px, 0) scale(${state.scale.toFixed(4)})`;
      card.style.zIndex = String(target.z);
    });

    rafRef.current = requestAnimationFrame(animate);
  }, [smoothness]);

  useLayoutEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const cards = Array.from(root.querySelectorAll('.scroll-stack-card'));
    cardsRef.current = cards;
    stateRef.current = cards.map(() => ({ y: 0, scale: 1 }));

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
    });

    updateTargets();
    rafRef.current = requestAnimationFrame(animate);

    const onScroll = () => updateTargets();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafRef.current);
      cards.forEach((card) => {
        card.style.transform = '';
        card.style.zIndex = '';
        card.style.marginBottom = '';
        card.style.willChange = '';
      });
      cardsRef.current = [];
      stateRef.current = [];
      targetsRef.current = [];
    };
  }, [itemDistance, updateTargets, animate, stackId]);

  return (
    <div className={`scroll-stack-scroller ${className}`} ref={scrollerRef} data-stack={stackId}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
}
