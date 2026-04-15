import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import SplashFrame from "./components/SplashFrame";
import HomeFrame from "./components/HomeFrame";
import MainFrame from "./components/MainFrame";
import PhotoFrame from "./components/PhotoFrame";
import QRFrame from "./components/QRFrame";
import TimeFrame from "./components/TimeFrame";
import PassActivationFrame from "./components/PassActivationFrame";

type FrameType = 'splash' | 'home' | 'center' | 'photo' | 'qr' | 'time' | 'pass';

const DESIGN_W = 402;
const DESIGN_H = 874;

const slideVariants = {
  center: {
    initial: { x: 0, y: 0, opacity: 1 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: 0, y: 0, opacity: 0 },
  },
  fromLeft: {
    initial: { x: '-100%', y: 0, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: '-100%', y: 0, opacity: 0 },
  },
  fromRight: {
    initial: { x: '100%', y: 0, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: '100%', y: 0, opacity: 0 },
  },
  fromTop: {
    initial: { x: 0, y: '-100%', opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: 0, y: '-100%', opacity: 0 },
  },
  fromBottom: {
    initial: { x: 0, y: '100%', opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: 0, y: '100%', opacity: 0 },
  },
  fadeIn: {
    initial: { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.97 },
  },
};

const getAnimationDirection = (from: FrameType, to: FrameType) => {
  if (from === 'splash') return 'fadeIn';
  if (to === 'center') {
    if (from === 'home') return 'fromRight';
    if (from === 'photo') return 'fromLeft';
    if (from === 'pass') return 'fromRight';
    if (from === 'qr') return 'fromTop';
    if (from === 'time') return 'fromBottom';
  }
  if (to === 'home') return 'fromLeft';
  if (from === 'center') {
    if (to === 'photo') return 'fromLeft';
    if (to === 'pass') return 'fromRight';
    if (to === 'qr') return 'fromTop';
    if (to === 'time') return 'fromBottom';
  }
  if (from === 'home' && to === 'center') return 'fromRight';
  return 'center';
};

function useViewportScale() {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const s = Math.min(vw / DESIGN_W, vh / DESIGN_H);
      setScale(s);
      setOffset({
        x: (vw - DESIGN_W * s) / 2,
        y: (vh - DESIGN_H * s) / 2,
      });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return { scale, offset };
}

export default function App() {
  const [currentFrame, setCurrentFrame] = useState<FrameType>('splash');
  const [previousFrame, setPreviousFrame] = useState<FrameType>('splash');
  const { scale, offset } = useViewportScale();

  const handleNavigate = (destination: FrameType) => {
    setPreviousFrame(currentFrame);
    setCurrentFrame(destination);
  };

  const animationDirection = getAnimationDirection(previousFrame, currentFrame);
  const variant = slideVariants[animationDirection];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#111',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: offset.x,
          top: offset.y,
          width: DESIGN_W,
          height: DESIGN_H,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          overflow: 'hidden',
          borderRadius: scale < 0.98 ? 40 : 0,
          boxShadow: scale < 0.98 ? '0 30px 80px rgba(0,0,0,0.8)' : 'none',
          background: '#000',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFrame}
            initial={variant.initial}
            animate={variant.animate}
            exit={variant.exit}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            {currentFrame === 'splash' && (
              <SplashFrame onNavigate={(dest) => handleNavigate(dest)} />
            )}
            {currentFrame === 'home' && (
              <HomeFrame onNavigate={(dest) => handleNavigate(dest === 'passes' ? 'center' : dest)} />
            )}
            {currentFrame === 'center' && <MainFrame onNavigate={handleNavigate} />}
            {currentFrame === 'photo' && <PhotoFrame onNavigate={handleNavigate} />}
            {currentFrame === 'qr' && <QRFrame onNavigate={handleNavigate} />}
            {currentFrame === 'time' && <TimeFrame onNavigate={handleNavigate} />}
            {currentFrame === 'pass' && <PassActivationFrame onNavigate={handleNavigate} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
