import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  baseOpacity?: number;
  containerClassName?: string;
  textClassName?: string;
  wordAnimationEnd?: string;
  fromColor?: string;
  toColor?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  baseOpacity = 0.1,
  containerClassName = '',
  textClassName = '',
  wordAnimationEnd = 'bottom bottom',
  fromColor = '#9ca3af',
  toColor = '#ffffff'
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current ?? window;
    const wordElements = el.querySelectorAll<HTMLElement>('.word');

    gsap.set(wordElements, {
      opacity: baseOpacity,
      color: fromColor,
      y: 50,
      rotateX: -30,
      transformPerspective: 1000,
      transformOrigin: 'center bottom'
    });

    gsap.to(wordElements, {
      opacity: 1,
      color: toColor,
      y: 0,
      rotateX: 0,
      stagger: 0.03,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        scroller,
        start: 'top bottom-=10%',
        end: wordAnimationEnd,
        scrub: 1.5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [
    scrollContainerRef,
    baseOpacity,
    wordAnimationEnd,
    fromColor,
    toColor,
  ]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`} style={{ perspective: '1000px' }}>
      <p className={`font-semibold ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;