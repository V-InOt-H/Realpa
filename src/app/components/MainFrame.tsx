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

const HEADER_H = 112;
const ORIG_PASS_TOP = 136;
const OFFSET = ORIG_PASS_TOP - 16; // shift all elements up so pass starts 16px into scroll area

function adjust(originalTop: number) {
  return originalTop - OFFSET;
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
        style={{ position: 'absolute', top: adjust(634), left: 48, fontSize: 12, color: 'black', whiteSpace: 'nowrap', cursor: 'pointer', fontFamily: 'monospace' }}
      >
        {formattedDate}
      </button>
      <button
        onClick={() => onNavigate('time')}
        style={{ position: 'absolute', top: adjust(656), left: 28, fontSize: 17, color: 'black', whiteSpace: 'nowrap', cursor: 'pointer', fontFamily: 'monospace' }}
      >
        {formattedTime}
      </button>
    </>
  );
}

function PassCard({ onNavigate, validDate, onEditDate, isEditingDate, onDateChange, onDateBlur, onDateKeyDown }: {
  onNavigate: (d: NavDest) => void;
  validDate: string;
  onEditDate: () => void;
  isEditingDate: boolean;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDateBlur: () => void;
  onDateKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      {/* Pass background image */}
      <div style={{ position: 'absolute', top: adjust(ORIG_PASS_TOP), left: 0, width: 402, height: 602 }}>
        <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} src={imgRealPass1} />
      </div>

      {/* Stacked pass cards (Group) */}
      <div style={{ position: 'absolute', top: adjust(601.65), left: 136.39, width: 167.109, height: 109.053 }}>
        <div style={{ transform: 'rotate(-6deg)', transformOrigin: 'center' }}>
          <div style={{ background: '#f4f4f4', height: 93.021, borderRadius: 15, width: 158.253 }} />
        </div>
      </div>
      <div style={{ position: 'absolute', top: adjust(546), left: 71, width: 299.003, height: 215.651 }}>
        <div style={{ transform: 'rotate(-6deg)', transformOrigin: 'center' }}>
          <div style={{ height: 187.308, borderRadius: 4, width: 280.963, position: 'relative', overflow: 'hidden' }}>
            <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', borderRadius: 4 }} src={imgPasss1} />
          </div>
        </div>
      </div>

      {/* QR Button */}
      <button
        onClick={() => onNavigate('qr')}
        style={{ position: 'absolute', top: adjust(617), left: 309, width: 77, height: 77, cursor: 'pointer', opacity: 0.9 }}
      >
        <img alt="QR Code" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} src={imgQwr1} />
      </button>

      {/* Dashed separator */}
      <p style={{ position: 'absolute', top: adjust(455), left: 128, fontSize: 12, color: 'rgba(175,175,175,0.5)', fontStyle: 'italic', whiteSpace: 'nowrap' }}>
        {`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `}
      </p>

      {/* Editable Valid Date */}
      {isEditingDate ? (
        <input
          type="text"
          value={validDate}
          onChange={onDateChange}
          onBlur={onDateBlur}
          onKeyDown={onDateKeyDown}
          autoFocus
          style={{ position: 'absolute', top: adjust(511), left: 135, fontSize: 24, fontWeight: 700, color: 'black', whiteSpace: 'nowrap', background: 'transparent', borderBottom: '2px solid black', outline: 'none', width: 150 }}
        />
      ) : (
        <button
          onClick={onEditDate}
          style={{ position: 'absolute', top: adjust(511), left: 135, fontSize: 24, fontWeight: 700, color: 'black', whiteSpace: 'nowrap', cursor: 'pointer' }}
        >
          {validDate}
        </button>
      )}

      {/* Photo Button */}
      <button
        onClick={() => onNavigate('photo')}
        style={{ position: 'absolute', top: adjust(295), left: 136, width: 130, height: 116, borderRadius: 30, cursor: 'pointer', overflow: 'hidden' }}
      >
        <img alt="Photo" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', borderRadius: 30 }} src={imgVk61} />
      </button>

      {/* Time box background */}
      <div style={{ position: 'absolute', top: adjust(626), left: 23, width: 95, height: 60, background: '#fdfcfc', borderRadius: 15 }} />
      <TimeDisplay onNavigate={onNavigate} />
    </>
  );
}

function BottomNav({ onNavigate }: { onNavigate: (d: NavDest) => void }) {
  return (
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 64, background: '#111', borderTop: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'space-around', zIndex: 20 }}>
      <NavBtn icon={<Home size={20} color="#9ca3af" />} label="Home" onClick={() => onNavigate('home')} />
      <NavBtn icon={<PassesNavIcon active />} label="Passes" active />
      <NavBtn icon={<Radio size={20} color="#9ca3af" />} label="Live" />
      <NavBtn icon={<Ticket size={20} color="#9ca3af" />} label="Ticket" />
      <NavBtn icon={<User size={20} color="#9ca3af" />} label="Profile" />
    </div>
  );
}

function NavBtn({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, padding: '4px 8px' }} onClick={onClick}>
      {icon}
      <span style={{ fontSize: 10, fontWeight: 500, color: active ? '#ef4444' : '#9ca3af' }}>{label}</span>
    </button>
  );
}

function PassesNavIcon({ active }: { active?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 9C3 7.34 4.34 6 6 6h12c1.66 0 3 1.34 3 3v1a2 2 0 010 4v1c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3v-1a2 2 0 010-4V9z" stroke={active ? '#ef4444' : '#9ca3af'} strokeWidth="2" />
    </svg>
  );
}

export default function MainFrame({ onNavigate }: MainFrameProps) {
  const [isEditingDate, setIsEditingDate] = useState(false);
  const [validDate, setValidDate] = useState('15/05/2026');

  const SCROLL_CONTENT_H = 760;

  return (
    <div style={{ position: 'absolute', inset: 0, background: 'black', width: 402, height: 874, overflow: 'hidden' }}>

      {/* ─── Fixed Header ─── */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: HEADER_H, background: 'black', zIndex: 10 }}>
        {/* Title row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 16, paddingRight: 16, paddingTop: 18, paddingBottom: 8 }}>
          <p style={{ fontWeight: 700, fontSize: 28, color: 'white', fontFamily: 'Inter, sans-serif' }}>Passes</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 20, background: '#1e1e1e' }}>
              <svg width="13" height="13" viewBox="0 0 22.4 8.7025" fill="none">
                <path d={svgPaths.p17813080} fill="white" />
              </svg>
              <span style={{ color: 'white', fontSize: 13, fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>Help</span>
            </div>
            <button
              onClick={() => onNavigate('time')}
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 20, background: '#1e1e1e', cursor: 'pointer' }}
            >
              <svg width="13" height="13" viewBox="0 0 23 20.5" fill="none">
                <path d={svgPaths.p12612e00} stroke="#E4E4E4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              </svg>
              <span style={{ color: 'white', fontSize: 13, fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>History</span>
            </button>
          </div>
        </div>
        {/* Bus filter chip */}
        <div style={{ marginLeft: 16, display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 20, background: '#edecec' }}>
          <svg width="13" height="13" viewBox="0 0 14.6667 17.4167" fill="none">
            <path d={svgPaths.p20ee1b80} fill="#1D1B20" />
          </svg>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#1e1e1e', fontFamily: 'Inter, sans-serif' }}>Bus(1,1)</span>
        </div>
      </div>

      {/* ─── Scrollable Content Area ─── */}
      <div
        style={{
          position: 'absolute',
          top: HEADER_H,
          left: 0,
          right: 0,
          bottom: 64,
          overflowY: 'auto',
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Inner fixed-height container so absolute children position correctly */}
        <div style={{ position: 'relative', width: 402, height: SCROLL_CONTENT_H }}>

          <PassCard
            onNavigate={onNavigate}
            validDate={validDate}
            onEditDate={() => setIsEditingDate(true)}
            isEditingDate={isEditingDate}
            onDateChange={(e) => setValidDate(e.target.value)}
            onDateBlur={() => setIsEditingDate(false)}
            onDateKeyDown={(e) => { if (e.key === 'Enter') setIsEditingDate(false); }}
          />

          {/* ─── Renew Button ─── */}
          <button
            onClick={() => onNavigate('pass')}
            style={{
              position: 'absolute',
              top: adjust(755),
              left: 18,
              width: 363,
              height: 49,
              background: '#1e1e1e',
              borderRadius: 26,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#2e2e2e')}
            onMouseLeave={e => (e.currentTarget.style.background = '#1e1e1e')}
          >
            <span style={{ color: 'white', fontWeight: 700, fontSize: 20, fontFamily: 'Inter, sans-serif' }}>Renew</span>
          </button>

          {/* ─── Disclaimer text ─── */}
          <p style={{ position: 'absolute', top: adjust(814), left: 47, fontSize: 13, fontWeight: 700, color: 'white', fontFamily: 'Inter, sans-serif', width: 310 }}>
            *MTC no longer requires pass activation. Your
          </p>
          <p style={{ position: 'absolute', top: adjust(829), left: 41, fontSize: 13, fontWeight: 700, color: 'white', fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap' }}>
            pass is ready to use immediately after purchase.
          </p>

        </div>
      </div>

      {/* ─── Fixed Bottom Nav ─── */}
      <BottomNav onNavigate={onNavigate} />
    </div>
  );
}
