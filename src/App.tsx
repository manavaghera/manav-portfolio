import { useRef, useEffect, useState, lazy, Suspense, useCallback } from 'react';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiFlask, SiSupabase, SiHuggingface, SiPytorch } from 'react-icons/si';
import PillNav from './PillNav';
import Particles from './Particles';
import TargetCursor from './TargetCursor';
import LogoLoop from './LogoLoop';
import Mascot from './Mascot';
import logo from './logo.svg';

// Lazy load sections for code splitting
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4';
const FADE_DURATION = 500;
const FADE_OUT_TRIGGER = 0.55;
const RESET_DELAY = 100;

// Types for requestVideoFrameCallback
interface VideoWithRVFC extends HTMLVideoElement {
  requestVideoFrameCallback: (callback: (now: number, metadata: any) => void) => number;
  cancelVideoFrameCallback: (handle: number) => void;
}

const LazySection = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-[200px]">
      {isVisible ? (
        <Suspense fallback={<div className="h-96" />}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
};

export default function App() {
  const videoRef = useRef<VideoWithRVFC>(null);
  const fadingOutRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const techLogos = [ 
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiHuggingface />, title: "Hugging Face", href: "https://huggingface.co" },
    { node: <SiPytorch />, title: "PyTorch", href: "https://pytorch.org" },
    { node: <SiReact />, title: "React", href: "https://react.dev" }, 
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" }, 
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" }, 
    { node: <SiFlask />, title: "Flask", href: "https://flask.palletsprojects.com" },
    { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  ]; 

  const cancelRaf = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const fadeTo = useCallback((video: HTMLVideoElement, target: number, duration: number, onDone?: () => void) => {
    cancelRaf();
    const start = performance.now();
    const currentOpacity = video.style.opacity === '' ? (target === 1 ? 0 : 1) : parseFloat(video.style.opacity) || 0;
    
    // Add will-change during transition
    video.style.willChange = 'opacity';

    function step(now: number) {
      const t = Math.min((now - start) / duration, 1);
      // Use easeInOutQuad for smoother fading
      const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      video.style.opacity = String(currentOpacity + (target - currentOpacity) * ease);
      
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        rafRef.current = null;
        // Remove will-change after transition
        video.style.willChange = 'auto';
        onDone?.();
      }
    }

    rafRef.current = requestAnimationFrame(step);
  }, [cancelRaf]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rvfcHandle: number;

    const checkVideoTime = () => {
      if (!video) return;
      
      const remaining = video.duration - video.currentTime;
      if (!fadingOutRef.current && remaining <= FADE_OUT_TRIGGER && remaining > 0) {
        fadingOutRef.current = true;
        fadeTo(video, 0, FADE_DURATION);
      }

      if ('requestVideoFrameCallback' in video) {
        rvfcHandle = video.requestVideoFrameCallback(checkVideoTime);
      } else {
        rafRef.current = requestAnimationFrame(checkVideoTime);
      }
    };

    const handleEnded = () => {
      if (!video) return;
      video.style.opacity = '0';
      fadingOutRef.current = false;
      setTimeout(() => {
        video.currentTime = 0;
        video.play().then(() => {
          fadeTo(video, 1, FADE_DURATION);
        }).catch(() => {});
      }, RESET_DELAY);
    };

    const handleCanPlay = () => {
      if (!video) return;
      video.style.opacity = '0';
      fadeTo(video, 1, FADE_DURATION);
    };

    // Use Intersection Observer to pause video when not visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVideoVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(video);

    video.addEventListener('ended', handleEnded);
    video.addEventListener('canplay', handleCanPlay);

    if ('requestVideoFrameCallback' in video) {
      rvfcHandle = video.requestVideoFrameCallback(checkVideoTime);
    } else {
      checkVideoTime();
    }

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('canplay', handleCanPlay);
      observer.disconnect();
      cancelRaf();
      if ('requestVideoFrameCallback' in video && rvfcHandle) {
        video.cancelVideoFrameCallback(rvfcHandle);
      }
    };
  }, [fadeTo, cancelRaf]);

  return (
    <div className="bg-black text-white selection:bg-white/20">
      <TargetCursor spinDuration={2} hideDefaultCursor parallaxOn hoverDuration={0.2} />
      
      {/* HERO SECTION */}
      <div className="min-h-screen overflow-hidden flex flex-col relative">
        <div className="absolute inset-0 z-0 video-container">
          <video
            ref={videoRef}
            src={VIDEO_URL}
            autoPlay
            muted
            playsInline
            loop={false}
            preload="auto"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover translate-y-[10%] md:translate-y-[17%] translate-z-0"
            style={{ opacity: 0, objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </div>

        {/* Navigation */}
        <div className="relative z-20 flex justify-center py-4 md:py-8">
          <PillNav 
            logo={logo} 
            logoAlt="Manav Logo" 
            items={navItems} 
            activeHref="#" 
            className="custom-nav" 
            ease="power2.easeOut" 
            baseColor="transparent" 
            pillColor="transparent" 
            hoveredPillTextColor="#000000" 
            pillTextColor="#ffffff" 
            theme="dark" 
            initialLoadAnimation={false} 
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center translate-y-0 md:-translate-y-[10%] lg:-translate-y-[20%]">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight whitespace-normal md:whitespace-nowrap"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Manav Aghera
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 font-light tracking-wide uppercase">
            AI AND ML ENGINEER AND ASPIRING QUANT DEV
          </p>

          <div className="max-w-2xl w-full space-y-6">
            <p 
              className="text-lg md:text-xl text-white leading-relaxed px-4 italic text-balance"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              I'm a Computer Science undergrad with a genuine obsession for AI — building systems that most people only talk about.
            </p>

            <div className="flex justify-center">
              <a href="#projects" className="liquid-glass rounded-full px-8 py-4 text-white text-sm font-medium hover:bg-white/5 transition-all active:scale-95 cursor-target min-h-[44px] flex items-center">
                Explore my work
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-20 relative z-10 overflow-hidden">
        <div style={{ height: '60px', position: 'relative', overflow: 'hidden'}}> 
          <LogoLoop 
            logos={techLogos} 
            speed={100} 
            direction="left" 
            logoHeight={40} 
            gap={60} 
            hoverSpeed={0} 
            scaleOnHover 
            fadeOut 
            fadeOutColor="black" 
            ariaLabel="Technology partners" 
          /> 
        </div>
      </div>

      <div className="relative py-12 md:py-24 space-y-12 md:space-y-24">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles 
            particleColors={["#ffffff"]} 
            particleCount={window.innerWidth < 768 ? 50 : 100} 
            particleSpread={10} 
            speed={0.1} 
            particleBaseSize={100} 
            moveParticlesOnHover 
            alphaParticles={false} 
            disableRotation={false} 
            pixelRatio={window.devicePixelRatio || 1} 
          />
        </div>

        <div className="space-y-12 md:space-y-24">
          <LazySection><About /></LazySection>
          <LazySection><Experience /></LazySection>
          <LazySection><Projects /></LazySection>
          <LazySection><Skills /></LazySection>
          <LazySection><Education /></LazySection>
          <LazySection><Contact /></LazySection>
        </div>
      </div>

      <Mascot />
    </div>
  );
}
