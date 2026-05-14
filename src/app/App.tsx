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

const transitionVariants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
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
  const { scale, offset } = useViewportScale();

  const handleNavigate = (destination: FrameType) => {
    setCurrentFrame(destination);
  };

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
        ir
        
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFrame}
            initial={transitionVariants.initial}
            animate={transitionVariants.animate}
            exit={transitionVariants.exit}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
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