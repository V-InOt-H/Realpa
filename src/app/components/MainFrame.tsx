import { useState, useEffect } from "react";
import { Home, Radio, Ticket, User } from "lucide-react";
import svgPaths from "../../imports/Frame7/svg-u9kjemx1g5";
import imgRealPass1 from "../../imports/Frame7/671bdc45a830fbdbad392677f1d1d3c5865b7339.png";
import imgPasss1 from "../../imports/Frame7/2dadf32d9b24520cae70cd3a58d0f16672ad325f.png";
import imgQwr1 from "../../imports/Frame7/adb4cdf593b45fc3e85212ac5c399eed41c39775.png";
import imgVk61 from "../../imports/Frame7/d3550ae37bcbcc46631351e98c4a9aa61fdc8926.png";

type NavDest = 'photo' | 'qr' | 'time' | 'pass' | 'home';

interface MainFrameProps {
  onNavigate: (destination: NavDest) => void;
}

function Group() {
  return (
    <div className="absolute contents left-[71px] top-[546px]">
      <div className="absolute flex h-[109.053px] items-center justify-center left-[136.39px] top-[601.65px] w-[167.109px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-6 flex-none">
          <div className="bg-[#f4f4f4] h-[93.021px] rounded-[15px] w-[158.253px]" />
        </div>
      </div>
      <div className="absolute flex h-[215.651px] items-center justify-center left-[71px] top-[546px] w-[299.003px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-6 flex-none">
          <div className="h-[187.308px] relative rounded-[4px] w-[280.963px]" data-name="passs 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgPasss1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[71px] top-[546px]">
      <div className="absolute flex h-[109.053px] items-center justify-center left-[136.39px] top-[601.65px] w-[167.109px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-6 flex-none">
          <div className="bg-[#f4f4f4] h-[93.021px] rounded-[15px] w-[158.253px]" />
        </div>
      </div>
      <div className="absolute flex h-[215.651px] items-center justify-center left-[71px] top-[546px] w-[299.003px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-6 flex-none">
          <div className="h-[187.308px] relative rounded-[4px] w-[280.963px]" data-name="passs 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgPasss1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TimeDisplay({ onNavigate }: { onNavigate: (d: NavDest) => void }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const formattedTime = currentTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <>
      <button
        onClick={() => onNavigate('time')}
        className="absolute font-['Kode_Mono:Regular',sans-serif] font-normal leading-[normal] left-[48px] text-[12px] text-black top-[634px] whitespace-nowrap cursor-pointer hover:opacity-70 transition-opacity"
      >
        {formattedDate}
      </button>
      <button
        onClick={() => onNavigate('time')}
        className="absolute flex h-[27.058px] items-center justify-center left-[28px] top-[656px] w-[84.061px] cursor-pointer hover:opacity-70 transition-opacity"
        style={{ "--transform-inner-width": "64", "--transform-inner-height": "22" } as React.CSSProperties}
      >
        <div className="flex-none rotate-[0.08deg]">
          <p className="font-['Kode_Mono:Regular',sans-serif] font-normal h-[26.934px] leading-[normal] relative text-[17px] text-black w-[84.021px]">{formattedTime}</p>
        </div>
      </button>
    </>
  );
}

function BottomNav({ onNavigate }: { onNavigate: (d: NavDest) => void }) {
  return (
    <div
      className="absolute left-0 right-0 bottom-0 flex items-center justify-around"
      style={{ height: 64, background: '#111', borderTop: '1px solid #222' }}
    >
      <NavBtn
        icon={<Home size={20} color="#9ca3af" />}
        label="Home"
        onClick={() => onNavigate('home')}
      />
      <NavBtn
        icon={<PassesNavIcon active />}
        label="Passes"
        active
      />
      <NavBtn
        icon={<Radio size={20} color="#9ca3af" />}
        label="Live"
      />
      <NavBtn
        icon={<Ticket size={20} color="#9ca3af" />}
        label="Ticket"
      />
      <NavBtn
        icon={<User size={20} color="#9ca3af" />}
        label="Profile"
      />
    </div>
  );
}

function NavBtn({
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
      className="flex flex-col items-center gap-0.5 py-1 px-2 active:scale-95 transition-transform"
      onClick={onClick}
    >
      {icon}
      <span style={{ fontSize: 10, fontWeight: 500, color: active ? '#ef4444' : '#9ca3af' }}>
        {label}
      </span>
    </button>
  );
}

function PassesNavIcon({ active }: { active?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 9C3 7.34 4.34 6 6 6h12c1.66 0 3 1.34 3 3v1a2 2 0 010 4v1c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3v-1a2 2 0 010-4V9z"
        stroke={active ? '#ef4444' : '#9ca3af'}
        strokeWidth="2"
      />
    </svg>
  );
}

export default function MainFrame({ onNavigate }: MainFrameProps) {
  const [isEditingDate, setIsEditingDate] = useState(false);
  const [validDate, setValidDate] = useState('15/05/2026');

  const handleDateClick = () => setIsEditingDate(true);
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => setValidDate(e.target.value);
  const handleDateBlur = () => setIsEditingDate(false);
  const handleDateKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setIsEditingDate(false);
  };

  return (
    <div className="absolute bg-black h-[874px] left-0 overflow-clip top-0 w-[402px]" data-name="Pass Page">
      <div className="absolute h-[602px] left-0 top-[136px] w-[402px]" data-name="real pass 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRealPass1} />
      </div>

      {/* Top Header */}
      <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-4" style={{ height: 70 }}>
        <p style={{ fontWeight: 700, fontSize: 28, color: 'white', fontFamily: 'Inter, sans-serif' }}>Passes</p>
        <div className="flex gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: '#1e1e1e' }}>
            <svg width="14" height="14" viewBox="0 0 22.4 8.7025" fill="none">
              <path d={svgPaths.p17813080} fill="white" />
            </svg>
            <span style={{ color: 'white', fontSize: 13, fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>Help</span>
          </div>
          <button
            onClick={() => onNavigate('time')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
            style={{ background: '#1e1e1e' }}
          >
            <svg width="14" height="14" viewBox="0 0 23 20.5" fill="none">
              <path d={svgPaths.p12612e00} stroke="#E4E4E4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
            <span style={{ color: 'white', fontSize: 13, fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>History</span>
          </button>
        </div>
      </div>

      {/* Bus filter chip */}
      <div className="absolute left-[15px] top-[78px] flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: '#edecec' }}>
        <svg width="14" height="14" viewBox="0 0 14.6667 17.4167" fill="none">
          <path d={svgPaths.p20ee1b80} fill="#1D1B20" />
        </svg>
        <span style={{ fontSize: 12, fontWeight: 700, color: '#1e1e1e', fontFamily: 'Inter, sans-serif' }}>Bus(1,1)</span>
      </div>

      <Group />
      <Group1 />

      {/* QR Button */}
      <button
        onClick={() => onNavigate('qr')}
        className="absolute left-[309px] size-[77px] top-[617px] cursor-pointer hover:opacity-80 transition-opacity"
      >
        <img alt="QR Code" className="absolute inset-0 max-w-none object-cover opacity-90 pointer-events-none size-full" src={imgQwr1} />
      </button>

      <p className="absolute font-['Inter:Semi_Bold_Italic',sans-serif] font-semibold italic leading-[normal] left-[128px] text-[12px] text-[rgba(175,175,175,0.5)] top-[455px] whitespace-nowrap">{`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `}</p>

      {/* Editable Valid Date */}
      {isEditingDate ? (
        <input
          type="text"
          value={validDate}
          onChange={handleDateChange}
          onBlur={handleDateBlur}
          onKeyDown={handleDateKeyDown}
          autoFocus
          className="absolute font-['42dot_Sans:Bold',sans-serif] font-bold leading-[normal] left-[135px] text-[24px] text-black top-[511px] whitespace-nowrap bg-transparent border-b-2 border-black outline-none w-[150px]"
        />
      ) : (
        <button
          onClick={handleDateClick}
          className="absolute font-['42dot_Sans:Bold',sans-serif] font-bold leading-[normal] left-[135px] text-[24px] text-black top-[511px] whitespace-nowrap cursor-pointer hover:opacity-70 transition-opacity"
        >
          {validDate}
        </button>
      )}

      {/* Photo Button */}
      <button
        onClick={() => onNavigate('photo')}
        className="absolute h-[116px] left-[136px] rounded-[30px] top-[295px] w-[130px] cursor-pointer hover:opacity-80 transition-opacity"
      >
        <img alt="Photo" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={imgVk61} />
      </button>

      <div className="absolute bg-[#fdfcfc] h-[60px] left-[23px] rounded-[15px] top-[626px] w-[95px]" />
      <TimeDisplay onNavigate={onNavigate} />

      <BottomNav onNavigate={onNavigate} />
    </div>
  );
}
