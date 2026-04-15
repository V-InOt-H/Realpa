import { useState, useEffect } from "react";
import svgPaths from "../../imports/Frame7/svg-u9kjemx1g5";
import imgRealPass1 from "../../imports/Frame7/671bdc45a830fbdbad392677f1d1d3c5865b7339.png";
import imgPasss1 from "../../imports/Frame7/2dadf32d9b24520cae70cd3a58d0f16672ad325f.png";
import imgQwr1 from "../../imports/Frame7/adb4cdf593b45fc3e85212ac5c399eed41c39775.png";
import imgVk61 from "../../imports/Frame7/d3550ae37bcbcc46631351e98c4a9aa61fdc8926.png";

interface MainFrameProps {
  onNavigate: (destination: 'photo' | 'qr' | 'time' | 'pass' | 'home') => void;
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

function TimeDisplay({ onNavigate }: { onNavigate: (destination: 'photo' | 'qr' | 'time' | 'pass') => void }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

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

export default function MainFrame({ onNavigate }: MainFrameProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isEditingDate, setIsEditingDate] = useState(false);
  const [validDate, setValidDate] = useState('15/05/2026');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '/');

  const handleDateClick = () => {
    setIsEditingDate(true);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidDate(e.target.value);
  };

  const handleDateBlur = () => {
    setIsEditingDate(false);
  };

  const handleDateKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditingDate(false);
    }
  };

  return (
    <div className="absolute bg-black h-[874px] left-0 overflow-clip top-0 w-[402px]" data-name="iPhone 16 & 17 Pro - 1">
      <div className="absolute h-[602px] left-0 top-[136px] w-[402px]" data-name="real pass 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRealPass1} />
      </div>
      
      {/* Top Header Elements */}
      <button
        onClick={() => onNavigate('home')}
        className="absolute flex items-center gap-1 left-[15px] top-[22px] cursor-pointer hover:opacity-70 transition-opacity z-10"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic text-[31px] text-white whitespace-nowrap">Passes</p>
      </button>
      <div className="absolute bg-[#1e1e1e] h-[35px] left-[150px] rounded-[20px] top-[19px] w-[90px]" />
      <div className="absolute bg-[#edecec] h-[35px] left-[15px] rounded-[20px] top-[84px] w-[90px]" />
      <div className="absolute bg-[#1e1e1e] h-[35px] left-[261px] rounded-[25px] top-[21px] w-[109px]" />

      {/* Renew / Pass Activation Button */}
      <button
        onClick={() => onNavigate('pass')}
        className="absolute bg-[#1e1e1e] h-[49px] left-[18px] rounded-[26px] top-[755px] w-[363px] cursor-pointer hover:bg-[#2e2e2e] transition-colors"
      />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[28px] leading-[normal] left-[47px] not-italic text-[13px] text-white top-[814px] w-[369px] pointer-events-none">*MTC no longer requires pass activation.Your</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[41px] not-italic text-[13px] text-white top-[829px] whitespace-nowrap pointer-events-none">pass is ready to use immediately after purchase.</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[167px] not-italic text-[20px] text-white top-[768px] whitespace-nowrap pointer-events-none">Renew</p>

      {/* Help Icon */}
      <div className="absolute flex items-center justify-center left-[156px] size-[33.812px] top-[19px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="-rotate-130 flex-none">
          <div className="overflow-clip relative size-[24px]" data-name="call_end">
            <div className="absolute inset-[33.33%_3.33%_30.41%_3.33%]" data-name="icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.4 8.7025">
                <path d={svgPaths.p17813080} fill="var(--fill-0, white)" id="icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[23px] leading-[normal] left-[190px] not-italic text-[16px] text-white top-[27px] w-[47px]">Help</p>

      {/* Clock Button */}
      <button
        onClick={() => onNavigate('time')}
        className="absolute h-[21px] left-[272px] overflow-clip top-[27px] w-[24px] cursor-pointer"
        data-name="Clock"
      >
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-8.57%_-7.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 20.5">
              <path d={svgPaths.p12612e00} id="Icon" stroke="var(--stroke-0, #E4E4E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
      </button>

      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[301px] not-italic text-[16px] text-white top-[28px] whitespace-nowrap">History</p>
      
      {/* Bus Icon and Label */}
      <div className="absolute left-[22px] overflow-clip size-[22px] top-[91px]" data-name="directions_bus">
        <div className="absolute inset-[8.33%_16.67%_12.5%_16.67%]" data-name="icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 17.4167">
            <path d={svgPaths.p20ee1b80} fill="var(--fill-0, #1D1B20)" id="icon" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[47px] not-italic text-[#1e1e1e] text-[12px] top-[93px] whitespace-nowrap">Bus(1,1)</p>
      
      <Group />
      <Group1 />

      {/* QR Button */}
      <button
        onClick={() => onNavigate('qr')}
        className="absolute left-[309px] size-[77px] top-[617px] cursor-pointer hover:opacity-80 transition-opacity"
        data-name="qwr 1"
      >
        <img alt="QR Code" className="absolute inset-0 max-w-none object-cover opacity-90 pointer-events-none size-full" src={imgQwr1} />
      </button>

      <p className="absolute font-['Inter:Semi_Bold_Italic',sans-serif] font-semibold italic leading-[normal] left-[128px] text-[12px] text-[rgba(175,175,175,0.5)] top-[455px] whitespace-nowrap">{`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `}</p>
      
      {/* Editable Valid Date - UPDATED */}
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
        data-name="vk6 1"
      >
        <img alt="Photo" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={imgVk61} />
      </button>

      <div className="absolute bg-[#fdfcfc] h-[60px] left-[23px] rounded-[15px] top-[626px] w-[95px]" />
      <TimeDisplay onNavigate={onNavigate} />
    </div>
  );
}