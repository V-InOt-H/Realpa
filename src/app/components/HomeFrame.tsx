import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Home, Ticket, User, Radio } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface HomeFrameProps {
  onNavigate: (destination: 'passes' | 'center') => void;
}

const KORATTUR_CENTER: [number, number] = [13.1067, 80.1942];

export default function HomeFrame({ onNavigate }: HomeFrameProps) {
  useEffect(() => {
    return () => {
      document.querySelectorAll('.leaflet-container').forEach((el) => {
        (el as HTMLElement & { _leaflet_id?: number })._leaflet_id = undefined;
      });
    };
  }, []);

  return (
    <div
      className="absolute inset-0 flex flex-col bg-white overflow-hidden"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="relative flex-1 flex flex-col" style={{ height: '100%' }}>
        <div className="absolute left-0 right-0 top-0" style={{ height: '42%', zIndex: 0 }}>
          <MapContainer
            center={KORATTUR_CENTER}
            zoom={14}
            style={{ width: '100%', height: '100%' }}
            zoomControl={false}
            scrollWheelZoom={false}
            attributionControl={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />
            <Marker position={KORATTUR_CENTER}>
              <Popup>Korattur, Chennai</Popup>
            </Marker>
          </MapContainer>

          <div
            className="absolute flex items-center gap-2 shadow-lg"
            style={{
              bottom: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#1a1a1a',
              borderRadius: 28,
              padding: '7px 14px',
              zIndex: 1000,
            }}
          >
            <div
              className="flex items-center justify-center rounded-lg"
              style={{ width: 30, height: 30, background: '#2a2a2a' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="3" stroke="white" strokeWidth="2" />
                <rect x="7" y="9" width="4" height="4" rx="1" fill="white" />
                <circle cx="7" cy="17" r="1.5" fill="white" />
                <circle cx="17" cy="17" r="1.5" fill="white" />
              </svg>
            </div>
            <div
              className="relative rounded-full"
              style={{ width: 42, height: 22, background: '#3a3a3a' }}
            >
              <div
                className="absolute rounded-full"
                style={{ width: 16, height: 16, background: '#4ade80', top: 3, left: 3 }}
              />
            </div>
          </div>

          <button
            className="absolute flex items-center justify-center rounded-full bg-white shadow-md"
            style={{ bottom: 16, right: 16, width: 38, height: 38, zIndex: 1000 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" fill="#555" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#555" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div
          className="absolute left-0 right-0 bottom-0"
          style={{ height: '62%', zIndex: 10, borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
        >
          <div
            className="absolute inset-0 bg-white"
            style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
          />
          <div
            className="absolute inset-0 flex flex-col px-4 pt-4"
            style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
          >
            <div className="w-10 h-1 rounded-full bg-gray-300 mx-auto mb-3" />

            <button
              className="flex flex-col w-full rounded-2xl px-5 py-3 mb-4 text-left"
              style={{
                background: 'linear-gradient(135deg, #e53935 0%, #c62828 50%, #ad1457 100%)',
              }}
            >
              <div className="flex items-center gap-2 mb-0.5">
                <span style={{ color: 'white', fontWeight: 600, fontSize: 13 }}>→ Plan your journey</span>
              </div>
              <span style={{ color: 'white', fontWeight: 700, fontSize: 17 }}>
                Where would you like to go?
              </span>
            </button>

            <div className="flex justify-around mb-4">
              <TransportIcon icon={<BusIcon />} label="Bus" bg="#f5e9c8" iconColor="#c27c2a" />
              <TransportIcon icon={<TrainIcon />} label="Train" bg="#d6e8d0" iconColor="#3a7a35" />
              <TransportIcon icon={<MetroIcon />} label="Metro" bg="#d5e8f5" iconColor="#2a6ea8" />
              <TransportIcon
                icon={<PassesIcon />}
                label="Passes"
                bg="#e8d5f5"
                iconColor="#7c35a8"
                onClick={() => onNavigate('center')}
              />
            </div>

            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: '#1a1a2e', flex: 1, minHeight: 0 }}
            >
              <div className="flex h-full">
                <div className="flex flex-col justify-center px-3 py-3" style={{ flex: '0 0 38%' }}>
                  <div
                    className="flex items-center justify-center rounded-xl mb-2"
                    style={{
                      width: 42,
                      height: 42,
                      background: 'linear-gradient(135deg, #c8a84b, #a07830)',
                    }}
                  >
                    <BusIconSmall />
                  </div>
                  <p style={{ color: '#facc15', fontWeight: 600, fontSize: 11, lineHeight: 1.3 }}>
                    Reserve premium bus
                  </p>
                  <p style={{ color: '#9ca3af', fontSize: 11, marginTop: 4 }}>More Info</p>
                </div>

                <button
                  onClick={() => onNavigate('center')}
                  className="flex flex-col items-center justify-center rounded-2xl active:opacity-80"
                  style={{ background: '#2563eb', flex: '0 0 36%', margin: '10px 4px' }}
                >
                  <div className="flex gap-1 mb-2">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="rounded-sm bg-white"
                        style={{ width: 12, height: 18 }}
                      />
                    ))}
                  </div>
                  <span style={{ color: 'white', fontWeight: 700, fontSize: 12, letterSpacing: 1 }}>
                    BUS OTP
                  </span>
                </button>

                <button
                  onClick={() => onNavigate('center')}
                  className="flex flex-col items-center justify-center rounded-2xl active:opacity-80 border border-gray-200"
                  style={{ background: 'white', flex: '0 0 22%', margin: '10px 4px 10px 0' }}
                >
                  <span style={{ fontWeight: 700, color: '#1f2937', fontSize: 20 }}>P91</span>
                  <span style={{ color: '#6b7280', fontWeight: 600, fontSize: 9, letterSpacing: 2 }}>
                    PREMIUM
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute left-0 right-0 bottom-0 bg-white border-t border-gray-100"
          style={{ height: 60, zIndex: 20 }}
        >
          <div className="flex items-center justify-around h-full px-1">
            <NavItem icon={<HomeNavIcon active />} label="Home" active />
            <NavItem
              icon={<PassesNavIcon />}
              label="Passes"
              onClick={() => onNavigate('center')}
            />
            <NavItem icon={<Radio size={20} color="#9ca3af" />} label="Live" />
            <NavItem icon={<Ticket size={20} color="#9ca3af" />} label="Ticket" />
            <NavItem icon={<User size={20} color="#9ca3af" />} label="Profile" />
          </div>
        </div>
      </div>
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
      className="flex flex-col items-center gap-1.5 active:scale-95 transition-transform"
      onClick={onClick}
    >
      <div
        className="flex items-center justify-center rounded-full"
        style={{ width: 54, height: 54, background: bg }}
      >
        <span style={{ color: iconColor }}>{icon}</span>
      </div>
      <span style={{ color: '#374151', fontSize: 12, fontWeight: 500 }}>{label}</span>
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
      className="flex flex-col items-center gap-0.5 py-1 px-2 active:scale-95 transition-transform"
      onClick={onClick}
    >
      {icon}
      <span style={{ fontSize: 10, fontWeight: 500, color: active ? '#dc2626' : '#9ca3af' }}>
        {label}
      </span>
    </button>
  );
}

function BusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="13" rx="3" stroke="currentColor" strokeWidth="2" />
      <rect x="6" y="9" width="4" height="3" rx="1" fill="currentColor" />
      <rect x="14" y="9" width="4" height="3" rx="1" fill="currentColor" />
      <circle cx="7.5" cy="20.5" r="1.5" fill="currentColor" />
      <circle cx="16.5" cy="20.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

function PassesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 9C3 7.34 4.34 6 6 6h12c1.66 0 3 1.34 3 3v1a2 2 0 010 4v1c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3v-1a2 2 0 010-4V9z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

function BusIconSmall() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 12L12 4l9 8"
        stroke={active ? '#dc2626' : '#9ca3af'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 10v9a1 1 0 001 1h4v-4h4v4h4a1 1 0 001-1v-9"
        stroke={active ? '#dc2626' : '#9ca3af'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PassesNavIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 9C3 7.34 4.34 6 6 6h12c1.66 0 3 1.34 3 3v1a2 2 0 010 4v1c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3v-1a2 2 0 010-4V9z"
        stroke="#9ca3af"
        strokeWidth="2"
      />
    </svg>
  );
}
