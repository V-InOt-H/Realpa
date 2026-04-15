import { useEffect } from "react";
import { motion } from "motion/react";

interface SplashFrameProps {
  onNavigate: (destination: 'home') => void;
}

export default function SplashFrame({ onNavigate }: SplashFrameProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNavigate('home');
    }, 2500);
    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer select-none"
      style={{
        background: 'linear-gradient(160deg, #e8321a 0%, #e03060 55%, #e0286a 75%, #d91fa0 100%)',
      }}
      onClick={() => onNavigate('home')}
    >
      <div className="flex flex-col items-center justify-center flex-1 gap-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex flex-col items-center gap-4"
        >
          <div className="relative flex items-center justify-center" style={{ width: 130, height: 130 }}>
            <svg viewBox="0 0 130 130" width="130" height="130" fill="none">
              <circle cx="65" cy="65" r="57" stroke="white" strokeWidth="14" strokeLinecap="round" strokeDasharray="300 60" />
              <text x="65" y="83" textAnchor="middle" fill="white" fontSize="60" fontWeight="bold" fontFamily="sans-serif">1</text>
            </svg>
          </div>

          <div className="text-center">
            <p style={{ fontSize: 40, fontFamily: 'sans-serif', letterSpacing: 1, fontWeight: 700, color: 'white', lineHeight: 1.1 }}>
              chennai
            </p>
            <p style={{ fontSize: 40, fontFamily: 'sans-serif', letterSpacing: 1, fontWeight: 700, color: 'white', lineHeight: 1.1 }}>
              one
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="w-full px-4 pb-10"
      >
        <div className="bg-white rounded-2xl px-4 py-3 flex items-center justify-around shadow-lg">
          <PartnerLogo label="TN Govt" color="#f5a623" letter="T" />
          <div className="h-8 w-px bg-gray-200" />
          <MtcLogo />
          <div className="h-8 w-px bg-gray-200" />
          <CumtaLogo />
          <div className="h-8 w-px bg-gray-200" />
          <PartnerLogo label="CMRL" color="#00a0e3" letter="C" />
          <div className="h-8 w-px bg-gray-200" />
          <PartnerLogo label="SR" color="#00529b" letter="SR" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function PartnerLogo({ label, color, letter }: { label: string; color: string; letter: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="flex items-center justify-center rounded-full font-bold text-white text-xs"
        style={{ width: 36, height: 36, background: color, fontSize: 11 }}
      >
        {letter}
      </div>
      <span className="text-gray-500 font-medium" style={{ fontSize: 8 }}>{label}</span>
    </div>
  );
}

function MtcLogo() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="flex items-center justify-center rounded-full font-bold text-white"
        style={{ width: 36, height: 36, background: '#1a5fb4', fontSize: 10 }}
      >
        MTC
      </div>
      <span className="text-gray-500 font-medium" style={{ fontSize: 8 }}>MTC</span>
    </div>
  );
}

function CumtaLogo() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="flex items-center justify-center rounded-full font-bold text-white"
        style={{ width: 36, height: 36, background: '#e53935', fontSize: 8 }}
      >
        CUMTA
      </div>
      <span className="text-gray-500 font-medium" style={{ fontSize: 8 }}>CUMTA</span>
    </div>
  );
}
