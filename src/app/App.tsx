import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import MainFrame from "./components/MainFrame";
import PhotoFrame from "./components/PhotoFrame";
import QRFrame from "./components/QRFrame";
import TimeFrame from "./components/TimeFrame";
import PassActivationFrame from "./components/PassActivationFrame";

type FrameType = 'center' | 'photo' | 'qr' | 'time' | 'pass';

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
};

const getAnimationDirection = (from: FrameType, to: FrameType) => {
  if (to === 'center') {
    if (from === 'photo') return 'fromLeft';
    if (from === 'pass') return 'fromRight';
    if (from === 'qr') return 'fromTop';
    if (from === 'time') return 'fromBottom';
  }

  if (from === 'center') {
    if (to === 'photo') return 'fromLeft';
    if (to === 'pass') return 'fromRight';
    if (to === 'qr') return 'fromTop';
    if (to === 'time') return 'fromBottom';
  }

  return 'center';
};

export default function App() {
  const [currentFrame, setCurrentFrame] = useState<FrameType>('center');
  const [previousFrame, setPreviousFrame] = useState<FrameType>('center');

  const handleNavigate = (destination: FrameType) => {
    setPreviousFrame(currentFrame);
    setCurrentFrame(destination);
  };

  const animationDirection = getAnimationDirection(previousFrame, currentFrame);
  const variant = slideVariants[animationDirection];

  return (
    <div className="size-full flex items-center justify-center bg-gray-100">
      <div className="relative w-[402px] h-[874px] overflow-hidden bg-black rounded-[40px] shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFrame}
            initial={variant.initial}
            animate={variant.animate}
            exit={variant.exit}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="absolute inset-0"
          >
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
