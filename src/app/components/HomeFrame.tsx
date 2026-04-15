import { Home, Ticket, User, Radio } from "lucide-react";

interface HomeFrameProps {
  onNavigate: (destination: 'passes' | 'center') => void;
}

export default function HomeFrame({ onNavigate }: HomeFrameProps) {
  return (
    <div className="absolute inset-0 flex flex-col bg-white overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="relative flex-1 flex flex-col" style={{ height: '100%' }}>
        <MapBackground />

        <div className="absolute left-0 right-0 bottom-0" style={{ height: '62%', borderTopLeftRadius: 24, borderTopRightRadius: 24 }}>
          <div className="absolute inset-0 bg-white" style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }} />
          <div className="absolute inset-0 flex flex-col px-4 pt-5" style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}>
            <div className="w-10 h-1 rounded-full bg-gray-300 mx-auto mb-4" />

            <button
              className="flex flex-col w-full rounded-2xl px-5 py-4 mb-5 text-left"
              style={{ background: 'linear-gradient(135deg, #e53935 0%, #c62828 50%, #ad1457 100%)' }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-semibold text-sm">→ Plan your journey</span>
              </div>
              <span className="text-white font-bold text-lg">Where would you like to go?</span>
            </button>

            <div className="flex justify-around mb-5">
              <TransportIcon
                icon={<BusIcon />}
                label="Bus"
                bg="#f5e9c8"
                iconColor="#c27c2a"
                onClick={() => {}}
              />
              <TransportIcon
                icon={<TrainIcon />}
                label="Train"
                bg="#d6e8d0"
                iconColor="#3a7a35"
                onClick={() => {}}
              />
              <TransportIcon
                icon={<MetroIcon />}
                label="Metro"
                bg="#d5e8f5"
                iconColor="#2a6ea8"
                onClick={() => {}}
              />
              <TransportIcon
                icon={<PassesIcon />}
                label="Passes"
                bg="#e8d5f5"
                iconColor="#7c35a8"
                onClick={() => onNavigate('center')}
              />
            </div>

            <div
              className="rounded-2xl overflow-hidden flex-1"
              style={{ background: '#1a1a2e', minHeight: 0 }}
            >
              <div className="flex h-full">
                <div className="flex flex-col justify-center px-4 py-4" style={{ width: '38%' }}>
                  <div
                    className="flex items-center justify-center rounded-xl mb-2"
                    style={{ width: 44, height: 44, background: 'linear-gradient(135deg, #c8a84b, #a07830)' }}
                  >
                    <BusIconSmall />
                  </div>
                  <p className="text-yellow-400 font-semibold text-xs leading-tight">Reserve premium bus</p>
                  <p className="text-gray-400 text-xs mt-1">More Info</p>
                </div>

                <button
                  onClick={() => onNavigate('center')}
                  className="flex flex-col items-center justify-center px-4 py-4 rounded-2xl mx-1 my-3 active:opacity-80"
                  style={{ background: '#2563eb', minWidth: 110 }}
                >
                  <div className="flex gap-1 mb-2">
                    {[0, 1, 2, 3].map(i => (
                      <div key={i} className="rounded-sm bg-white" style={{ width: 14, height: 20 }} />
                    ))}
                  </div>
                  <span className="text-white font-bold text-sm tracking-wide">BUS OTP</span>
                </button>

                <button
                  onClick={() => onNavigate('center')}
                  className="flex flex-col items-center justify-center px-4 py-4 rounded-2xl my-3 mx-1 active:opacity-80 border border-gray-200"
                  style={{ background: 'white', minWidth: 90 }}
                >
                  <span className="font-bold text-gray-800 text-2xl">P91</span>
                  <span className="text-gray-500 font-semibold text-xs tracking-widest">PREMIUM</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-0 bg-white border-t border-gray-100" style={{ height: 64 }}>
          <div className="flex items-center justify-around h-full px-2">
            <NavItem icon={<HomeNavIcon active />} label="Home" active />
            <NavItem
              icon={<PassesNavIcon />}
              label="Passes"
              onClick={() => onNavigate('center')}
            />
            <NavItem icon={<LiveNavIcon />} label="Live" />
            <NavItem icon={<Ticket size={22} color="#9ca3af" />} label="Ticket" />
            <NavItem icon={<User size={22} color="#9ca3af" />} label="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MapBackground() {
  return (
    <div className="absolute left-0 right-0 top-0" style={{ height: '45%', background: '#e8eaed', overflow: 'hidden' }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#e8eaed" />
        <rect x="0" y="40%" width="100%" height="4" fill="#d0d3d8" />
        <rect x="0" y="60%" width="100%" height="2" fill="#d0d3d8" />
        <rect x="0" y="75%" width="100%" height="3" fill="#c8cdd4" />
        <rect x="30%" y="0" width="4" height="100%" fill="#d0d3d8" />
        <rect x="60%" y="0" width="2" height="100%" fill="#d0d3d8" />
        <rect x="75%" y="0" width="3" height="100%" fill="#c8cdd4" />
        <ellipse cx="30%" cy="35%" rx="18%" ry="22%" fill="#a8d5e2" opacity="0.7" />
        <text x="18%" y="28%" fontSize="11" fill="#4a9bbb" fontFamily="sans-serif" fontWeight="600">Korattur Lake</text>
        <text x="16%" y="34%" fontSize="9" fill="#4a9bbb" fontFamily="sans-serif">கொரட்டூர் ஏரி</text>
        <text x="8%" y="58%" fontSize="10" fill="#555" fontFamily="sans-serif" fontWeight="700">KORATTUR</text>
        <text x="8%" y="67%" fontSize="9" fill="#666" fontFamily="sans-serif">கொரட்டூர்</text>
        <text x="58%" y="52%" fontSize="10" fill="#555" fontFamily="sans-serif" fontWeight="700">VILLIVAKKAM</text>
        <text x="56%" y="61%" fontSize="9" fill="#666" fontFamily="sans-serif">விள்ளிவாக்கம்</text>
        <text x="2%" y="48%" fontSize="9" fill="#666" fontFamily="sans-serif">Dairy Rd</text>
        <text x="56%" y="20%" fontSize="9" fill="#666" fontFamily="sans-serif">Water Canal Rd</text>
        <circle cx="32%" cy="43%" r="8" fill="#555" />
        <text x="29%" y="46.5%" fontSize="7" fill="white" fontFamily="sans-serif" fontWeight="bold">P</text>
        <circle cx="72%" cy="28%" r="11" fill="white" stroke="#aaa" strokeWidth="1.5" />
        <text x="68.5%" y="31%" fontSize="9" fill="#555" fontFamily="sans-serif" fontWeight="bold">2</text>
        <circle cx="12%" cy="36%" r="10" fill="white" stroke="#aaa" strokeWidth="1.5" />
        <text x="9.5%" y="39%" fontSize="9" fill="#555" fontFamily="sans-serif" fontWeight="bold">48</text>
      </svg>

      <div
        className="absolute flex items-center gap-2 shadow-lg"
        style={{
          bottom: 28,
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#1a1a1a',
          borderRadius: 28,
          padding: '8px 16px',
          minWidth: 110,
        }}
      >
        <div
          className="flex items-center justify-center rounded-lg"
          style={{ width: 32, height: 32, background: '#2a2a2a' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="5" width="18" height="14" rx="3" stroke="white" strokeWidth="2" />
            <rect x="7" y="9" width="4" height="4" rx="1" fill="white" />
            <circle cx="7" cy="17" r="1.5" fill="white" />
            <circle cx="17" cy="17" r="1.5" fill="white" />
          </svg>
        </div>
        <div
          className="relative rounded-full"
          style={{ width: 44, height: 24, background: '#3a3a3a' }}
        >
          <div
            className="absolute rounded-full top-1"
            style={{ width: 18, height: 18, background: '#4ade80', left: 4 }}
          />
        </div>
      </div>

      <button
        className="absolute flex items-center justify-center rounded-full bg-white shadow-md"
        style={{ bottom: 28, right: 20, width: 40, height: 40 }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" fill="#555" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#555" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

function TransportIcon({
  icon,
  label,
  bg,
  iconColor,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  bg: string;
  iconColor: string;
  onClick?: () => void;
}) {
  return (
    <button
      className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
      onClick={onClick}
    >
      <div
        className="flex items-center justify-center rounded-full"
        style={{ width: 56, height: 56, background: bg }}
      >
        <span style={{ color: iconColor }}>{icon}</span>
      </div>
      <span className="text-gray-700 text-xs font-medium">{label}</span>
    </button>
  );
}

function NavItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className="flex flex-col items-center gap-1 py-1 px-2 active:scale-95 transition-transform"
      onClick={onClick}
    >
      {icon}
      <span className={`text-xs font-medium ${active ? 'text-red-600' : 'text-gray-400'}`}>{label}</span>
    </button>
  );
}

function BusIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
      <rect x="6" y="8" width="4" height="4" rx="1" fill="currentColor" />
      <rect x="14" y="8" width="4" height="4" rx="1" fill="currentColor" />
      <circle cx="7" cy="20" r="1.5" fill="currentColor" />
      <circle cx="17" cy="20" r="1.5" fill="currentColor" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function TrainIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
      <rect x="7" y="7" width="4" height="4" rx="1" fill="currentColor" />
      <rect x="13" y="7" width="4" height="4" rx="1" fill="currentColor" />
      <circle cx="8" cy="21" r="1.5" fill="currentColor" />
      <circle cx="16" cy="21" r="1.5" fill="currentColor" />
      <path d="M10 19l-2 2M14 19l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MetroIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="13" rx="3" stroke="currentColor" strokeWidth="2" />
      <rect x="6" y="9" width="4" height="3" rx="1" fill="currentColor" />
      <rect x="14" y="9" width="4" height="3" rx="1" fill="currentColor" />
      <circle cx="7.5" cy="20.5" r="1.5" fill="currentColor" />
      <circle cx="16.5" cy="20.5" r="1.5" fill="currentColor" />
      <path d="M7.5 18v2.5M16.5 18v2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PassesIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M3 9C3 7.34 4.34 6 6 6h12c1.66 0 3 1.34 3 3v1a2 2 0 010 4v1c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3v-1a2 2 0 010-4V9z" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

function BusIconSmall() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="14" rx="3" stroke="white" strokeWidth="2" />
      <rect x="6" y="8" width="4" height="4" rx="1" fill="white" />
      <rect x="14" y="8" width="4" height="4" rx="1" fill="white" />
      <circle cx="7" cy="20" r="1.5" fill="white" />
      <circle cx="17" cy="20" r="1.5" fill="white" />
    </svg>
  );
}

function HomeNavIcon({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 12L12 4l9 8" stroke={active ? '#dc2626' : '#9ca3af'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v9a1 1 0 001 1h4v-4h4v4h4a1 1 0 001-1v-9" stroke={active ? '#dc2626' : '#9ca3af'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PassesNavIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 9C3 7.34 4.34 6 6 6h12c1.66 0 3 1.34 3 3v1a2 2 0 010 4v1c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3v-1a2 2 0 010-4V9z" stroke="#9ca3af" strokeWidth="2" />
    </svg>
  );
}

function LiveNavIcon() {
  return <Radio size={22} color="#9ca3af" />;
}
