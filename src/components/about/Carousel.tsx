import { useEffect, useState, useRef } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'motion/react';
import React, { JSX } from 'react';
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon: React.ReactElement;
  color: string;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
  heroSlide?: CarouselItem;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  { title: 'Laravel', description: 'Cool text animations.', id: 1, icon: <FiFileText size={20} />, color: 'rgba(255,0,0,1)' },
  { title: 'Firebase', description: 'Smooth animations.', id: 2, icon: <FiCircle size={20} />, color: 'rgba(255,165,0,1)' },
  { title: 'React', description: 'Reusable components.', id: 3, icon: <FiLayers size={20} />, color: 'rgba(0,200,255,1)' },
  { title: 'JavaScript', description: 'Background patterns.', id: 4, icon: <FiLayout size={20} />, color: 'rgba(255,255,0,1)' },
  { title: 'TypeScript', description: 'UI components.', id: 5, icon: <FiCode size={20} />, color: 'rgba(0,122,255,1)' },
  { title: 'Tailwind CSS', description: 'UI components.', id: 6, icon: <FiCode size={20} />, color: 'rgba(0,255,200,1)' }
];

const heroSlideItem: CarouselItem = {
  title: 'My Tools',
  description: '',
  id: 0,
  icon: <FiCode size={40} />,
  color: 'rgba(255,255,255,1)'
};

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 480,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
  heroSlide = heroSlideItem
}: CarouselProps): JSX.Element {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const carouselItems = loop ? [heroSlide, ...items, items[0]] : [heroSlide, ...items];

  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [spotlightStates, setSpotlightStates] = useState<{ [k: number]: { position: { x: number; y: number }; opacity: number } }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const c = containerRef.current;
      const enter = () => setIsHovered(true);
      const leave = () => setIsHovered(false);
      c.addEventListener('mouseenter', enter);
      c.addEventListener('mouseleave', leave);
      return () => {
        c.removeEventListener('mouseenter', enter);
        c.removeEventListener('mouseleave', leave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev === items.length && loop) return prev + 1;
          if (prev === carouselItems.length - 1) return loop ? 0 : prev;
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length) setCurrentIndex(currentIndex + 1);
      else setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) setCurrentIndex(items.length);
      else setCurrentIndex(prev => Math.max(prev - 1, 0));
    }
  };

  const handleCardMouseMove = (idx: number, e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRefs.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    setSpotlightStates(p => ({ ...p, [idx]: { position: { x: mx, y: my }, opacity: 0.6 } }));
  };

  const handleCardMouseEnter = (idx: number) => {
    setSpotlightStates(p => ({ ...p, [idx]: { ...p[idx], opacity: 0.6 } }));
  };

  const handleCardMouseLeave = (idx: number) => {
    setSpotlightStates(p => ({ ...p, [idx]: { ...p[idx], opacity: 0 } }));
  };

  const dragProps = loop ? {} : { dragConstraints: { left: -trackItemOffset * (carouselItems.length - 1), right: 0 } };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${round ? 'rounded-full border border-white' : 'rounded-[24px] border border-[#222]'}`}
      style={{ width: `${baseWidth}px`, ...(round && { height: `${baseWidth}px` }) }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
          const rotateY = useTransform(x, range, [90, 0, -90], { clamp: false });

          const spotlight = {
            position: {
              x: spotlightStates[index]?.position?.x ?? itemWidth / 2,
              y: spotlightStates[index]?.position?.y ?? 150
            },
            opacity: spotlightStates[index]?.opacity ?? 0
          };

          const coloredIcon = React.cloneElement(item.icon, {
            color: item.color,
            size: index === 0 ? 60 : 110
          });

          return (
            <motion.div
              key={index}
              ref={el => (cardRefs.current[index] = el)}
              className="relative shrink-0 flex flex-col bg-[#222] border border-[#222] rounded-[16px] overflow-hidden cursor-grab active:cursor-grabbing"
              style={{ width: itemWidth, height: 300, rotateY }}
              transition={effectiveTransition}
              onMouseMove={e => handleCardMouseMove(index, e)}
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={() => handleCardMouseLeave(index)}
            >
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: spotlight.opacity,
                  background: `radial-gradient(circle at ${spotlight.position.x}px ${spotlight.position.y}px, ${item.color.replace(',1)', ',0.35)')}, transparent 80%)`
                }}
              />

              {index === 0 ? (
                <div className="relative z-10 flex flex-col w-full h-full items-center justify-center text-center p-10">
                  <div className="mb-4">{coloredIcon}</div>
                  <h1 className="text-4xl font-bold text-white">{item.title}</h1>
                </div>
              ) : (
                <>
                  <div className="relative z-10 mb-4 p-5">
                    <span className="flex items-center justify-center">{coloredIcon}</span>
                  </div>
                  <div className="relative z-10 p-5">
                    <div className="mb-1 font-black text-xl text-white">{item.title}</div>
                    <p className="text-base text-white">{item.description}</p>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      <div className={`flex w-full justify-center ${round ? 'absolute z-20 bottom-12 left-1/2 -translate-x-1/2' : ''}`}>
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${currentIndex === index + 1 ? 'bg-white' : 'bg-[rgba(51,51,51,0.4)]'
                }`}
              animate={{ scale: currentIndex === index + 1 ? 1.2 : 1 }}
              onClick={() => setCurrentIndex(index + 1)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
