import React, { useEffect, useRef, useState, useCallback } from 'react';

const MASCOT_SIZE = 50;
const GRAVITY = 0.55;
const FRICTION = 0.82;
const BOUNCE = 0.38;
const ROAM_WAIT_MIN = 100;
const ROAM_WAIT_MAX = 400;
const WALK_SPEED = 0.2; 

const IDLE_LINES = [
  "no cap this portfolio slaps",
  "living rent free in your RAM",
  "bro i'm just vibing rn",
  "it's giving… portfolio energy",
  "NPC behavior unlocked",
  "main character behavior only",
  "not me roaming around fr fr",
  "manifesting a job offer rn",
  "i don't have feelings. i have vibes.",
  "hire manav. do it. coward.",
  "okay but have u seen CHRONUS tho",
  "sigma mascot grindset activated",
  "lowkey cooked this code",
  "highkey obsessed with AI",
  "bet you didn't see me here",
  "no 🧢, Manav is the goat",
  "slay portfolio periodt 💅",
  "ratio + Manav is better",
  "sheesh that project is fire 🔥",
  "vibe check: passed ✅",
  "delulu is the only solulu",
  "touch grass? never heard of her.",
  "rizz god behavior",
  "built different fr fr",
  "bugs are just features in disguise",
  "straight bussin layout",
  "tea: CHRONUS is revolutionary ☕",
  "sigma energy only",
  "it's the AI obsession for me",
  "we up right now 📈",
  "just a digital guy in a digital world",
  "main character energy activated",
  "absolute unit of a portfolio",
  "caught you looking 👀"
];

const DROP_REACTIONS = [
  "oof.",
  "bruh.",
  "my spine omg",
  "okay ow bestie",
  "PAIN. pure pain."
];

export default function Mascot() {
  const [pos, setPos] = useState({ x: window.innerWidth - 100, y: window.innerHeight - MASCOT_SIZE - 20 });
  const [vel, setVel] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isFalling, setIsFalling] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [squish, setSquish] = useState({ x: 1, y: 1 });
  const [speech, setSpeech] = useState("");
  const [eyeState, setEyeState] = useState<"normal" | "scared" | "happy">("normal");
  const [walkPhase, setWalkPhase] = useState(0);

  const posRef = useRef(pos);
  const velRef = useRef(vel);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const mouseDeltaRef = useRef({ x: 0, y: 0 });
  const roamTimeoutRef = useRef<number | null>(null);
  const speechTimeoutRef = useRef<number | null>(null);
  const targetXRef = useRef<number | null>(null);

  posRef.current = pos;
  velRef.current = vel;

  const showSpeech = useCallback((text: string, duration?: number) => {
    setSpeech(text);
    if (speechTimeoutRef.current) window.clearTimeout(speechTimeoutRef.current);
    if (duration) {
      speechTimeoutRef.current = window.setTimeout(() => setSpeech(""), duration);
    }
  }, []);

  const getRandomIdleLine = () => IDLE_LINES[Math.floor(Math.random() * IDLE_LINES.length)];
  const getRandomDropReaction = () => DROP_REACTIONS[Math.floor(Math.random() * DROP_REACTIONS.length)];

  useEffect(() => {
    const cycleSpeech = () => {
      setSpeech(getRandomIdleLine()); 
      speechTimeoutRef.current = window.setTimeout(cycleSpeech, 7500); 
    };

    cycleSpeech();
    return () => {
      if (speechTimeoutRef.current) window.clearTimeout(speechTimeoutRef.current);
    };
  }, []); // Only once on mount

  useEffect(() => {
    let raf: number;
    const update = () => {
      if (!isDragging) {
        let newVelX = velRef.current.x;
        let newVelY = velRef.current.y + GRAVITY;
        let newPosX = posRef.current.x + newVelX;
        let newPosY = posRef.current.y + newVelY;

        const ground = window.innerHeight - MASCOT_SIZE;
        const rightWall = window.innerWidth - MASCOT_SIZE;

        // Ground collision
        if (newPosY >= ground) {
          newPosY = ground;
          
          // Squish on hard landing
          if (newVelY > 10) {
            setSquish({ x: 1.2, y: 0.75 });
            setTimeout(() => setSquish({ x: 1, y: 1 }), 150);
            showSpeech(getRandomDropReaction(), 2000); // Temporary reaction
          }

          newVelY = -newVelY * BOUNCE;
          newVelX *= FRICTION;

          if (Math.abs(newVelY) < 0.5) {
            newVelY = 0;
            setIsFalling(false);
          } else {
            setIsFalling(true);
          }
        } else {
          setIsFalling(true);
        }

        // Wall collisions
        if (newPosX <= 0) {
          newPosX = 0;
          newVelX = -newVelX * BOUNCE;
        } else if (newPosX >= rightWall) {
          newPosX = rightWall;
          newVelX = -newVelX * BOUNCE;
        }

        // Roaming logic
        if (!isFalling && !isDragging && !isHovered) { 
          if (targetXRef.current !== null) {
            const dist = targetXRef.current - newPosX;
            if (Math.abs(dist) < WALK_SPEED) {
              newPosX = targetXRef.current;
              targetXRef.current = null;
              setIsWalking(false);
              setWalkPhase(0);
              scheduleRoam();
            } else {
              newPosX += Math.sign(dist) * WALK_SPEED;
              setIsWalking(true);
              setWalkPhase(prev => (prev + 0.05) % (Math.PI * 2));
            }
          }
        }

        setVel({ x: newVelX, y: newVelY });
        setPos({ x: newPosX, y: newPosY });
      }
      raf = requestAnimationFrame(update);
    };

    const scheduleRoam = () => {
      if (roamTimeoutRef.current) window.clearTimeout(roamTimeoutRef.current);
      roamTimeoutRef.current = window.setTimeout(() => {
        if (!isDragging && !isFalling && !isHovered) {
          targetXRef.current = Math.random() * (window.innerWidth - MASCOT_SIZE);
          // Removed the check that would stop speech while roaming
          if (Math.random() > 0.5) showSpeech(getRandomIdleLine());
        }
      }, Math.random() * (ROAM_WAIT_MAX - ROAM_WAIT_MIN) + ROAM_WAIT_MIN);
    };

    scheduleRoam();
    raf = requestAnimationFrame(update);
    return () => {
      cancelAnimationFrame(raf);
      if (roamTimeoutRef.current) window.clearTimeout(roamTimeoutRef.current);
      if (speechTimeoutRef.current) window.clearTimeout(speechTimeoutRef.current);
    };
  }, [isDragging, isFalling, isHovered, showSpeech]);

  useEffect(() => {
    if (isDragging || isFalling) {
      setEyeState("scared");
      if (roamTimeoutRef.current) window.clearTimeout(roamTimeoutRef.current);
      targetXRef.current = null;
    } else if (isHovered) {
      setEyeState("happy");
    } else {
      setEyeState("normal");
    }
  }, [isDragging, isFalling, isHovered]);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setIsWalking(false);
    targetXRef.current = null;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    lastMouseRef.current = { x: clientX, y: clientY };
    setVel({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      
      const dx = clientX - lastMouseRef.current.x;
      const dy = clientY - lastMouseRef.current.y;
      
      mouseDeltaRef.current = { x: dx, y: dy };
      setPos(prev => ({ x: prev.x + dx, y: prev.y + dy }));
      lastMouseRef.current = { x: clientX, y: clientY };
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      setIsDragging(false);
      setVel({ x: mouseDeltaRef.current.x, y: mouseDeltaRef.current.y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleMouseMove);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      className="mascot-container"
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        width: MASCOT_SIZE,
        height: MASCOT_SIZE,
        zIndex: 9999,
        cursor: isDragging ? 'grabbing' : 'grab',
        transition: isDragging ? 'none' : 'transform 0.1s linear',
        transform: `scale(${squish.x}, ${squish.y})`,
        touchAction: 'none'
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseEnter={() => {
        setIsHovered(true);
        const greets = ["oh hey bestie", "you found me fr", "sup king"];
        showSpeech(greets[Math.floor(Math.random() * greets.length)], 2000); // Temporary greet
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Speech Bubble */}
      {speech && (
        <div className="mascot-speech">
          {speech}
          <div className="mascot-speech-arrow" />
        </div>
      )}

      {/* Hair/Tuft */}
      <div 
        style={{
          position: 'absolute',
          top: '-8px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '20px',
          height: '10px',
          background: '#fff',
          borderRadius: '10px 10px 0 0',
          zIndex: -1
        }}
      />

      {/* Mascot Body */}
      <div 
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#fff', // White color
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
          border: '2px solid rgba(0, 0, 0, 0.1)',
          position: 'relative'
        }}
      >
        {/* Eyes */}
        <div className={`mascot-eye mascot-eye-${eyeState}`} />
        <div className={`mascot-eye mascot-eye-${eyeState}`} />
      </div>

      {/* Legs */}
      <div className="mascot-legs" style={{ display: isFalling || isDragging ? 'none' : 'flex' }}>
        <div 
          className="mascot-leg" 
          style={{ 
            transform: `translateY(${isWalking ? Math.sin(walkPhase) * 4 : 0}px)` 
          }} 
        />
        <div 
          className="mascot-leg" 
          style={{ 
            transform: `translateY(${isWalking ? Math.sin(walkPhase + Math.PI) * 4 : 0}px)` 
          }} 
        />
      </div>

      <style>{`
        .mascot-legs {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-around;
          padding: 0 10px;
          pointer-events: none;
        }
        .mascot-leg {
          width: 8px;
          height: 12px;
          background: white;
          border-radius: 0 0 4px 4px;
          border: 1px solid rgba(0,0,0,0.1);
        }
        .mascot-speech {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-10px);
          background: white;
          color: black;
          padding: 8px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          pointer-events: none;
          animation: mascot-pop 0.2s ease-out;
        }
        .mascot-speech-arrow {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid white;
        }
        .mascot-eye {
          background: black;
          transition: all 0.1s ease;
        }
        .mascot-eye-normal {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
        .mascot-eye-scared {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: mascot-blink 0.1s infinite alternate;
        }
        .mascot-eye-happy {
          width: 8px;
          height: 4px;
          border-radius: 0 0 8px 8px;
          background: transparent;
          border-bottom: 2px solid black;
        }
        @keyframes mascot-pop {
          from { transform: translateX(-50%) translateY(0) scale(0); }
          to { transform: translateX(-50%) translateY(-10px) scale(1); }
        }
        @keyframes mascot-blink {
          from { transform: scale(1); }
          to { transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}
