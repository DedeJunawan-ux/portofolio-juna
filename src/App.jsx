import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LandingPage from './components/LandingPage';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [lang, setLang] = useState('id');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (!hasEntered) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active-reveal');
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [hasEntered]);

  return (
    <>
      {!hasEntered && <LandingPage onEnter={() => setHasEntered(true)} />}

      <div 
        onMouseMove={handleMouseMove} 
        className={`bg-slate-950 min-h-screen text-slate-50 font-sans selection:bg-cyan-500/30 transition-opacity duration-1000 relative overflow-hidden ${hasEntered ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}
      >
        {/* --- LATAR BELAKANG LUAR ANGKASA --- */}
        <div className="fixed inset-0 z-0 bg-slate-950 pointer-events-none"></div>
        <div className="fixed -inset-[100%] z-0 bg-stars pointer-events-none opacity-40"></div>
        <div className="fixed -inset-[100%] z-0 bg-stars-2 pointer-events-none opacity-30 delay-1000"></div>

        {/* --- CAHAYA INTERAKTIF MENGIKUTI MOUSE --- */}
        <div 
          className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6,182,212,0.08), transparent 80%)`
          }}
        />

        {/* --- ELEMENT DEKORASI LUAR ANGKASA & SISTEM (REVISI) --- */}
        
        {/* 1. Stasiun Luar Angkasa (Kanan Tengah) */}
        <div className="fixed top-1/3 -right-16 z-0 opacity-15 text-cyan-400 pointer-events-none anim-drift hidden lg:block" style={{ '--rot': '-15deg', animationDuration: '18s' }}>
          <svg className="w-72 h-72 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20M7 5h10M7 19h10M4 9h16M4 15h16M9 2l3 3-3 3M15 2l-3 3 3 3M9 22l3-3-3-3M15 22l-3-3 3-3" />
            <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.1" />
          </svg>
        </div>

        {/* 2. Roket Cyber (Kiri Tengah Berlawanan Arah) */}
        <div className="fixed bottom-1/4 -left-12 z-0 opacity-10 text-amber-400 pointer-events-none anim-drift hidden lg:block" style={{ '--rot': '35deg', animationDuration: '15s' }}>
          <svg className="w-48 h-48 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2S8 7 8 12v5l4 3 4-3v-5c0-5-4-10-4-10zM12 17v3M9 22h6M6 15c-1 2-2 3-2 5h4M18 15c1 2 2 3 2 5h-4" />
          </svg>
        </div>

        {/* 3. Kluster Jaringan Jaringan/Sistem Komputer (Kanan Atas dekat Wayang) */}
        <div className="fixed top-24 right-1/4 z-0 opacity-10 text-slate-500 pointer-events-none anim-float hidden md:block">
          <svg className="w-56 h-56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75">
            <rect x="2" y="4" width="6" height="4" rx="1" />
            <rect x="16" y="4" width="6" height="4" rx="1" />
            <rect x="9" y="14" width="6" height="4" rx="1" />
            <path d="M5 8v3h4baseM19 8v3h-4M12 11v3M5 11h14" strokeWidth="1" strokeLinecap="round"/>
          </svg>
        </div>

        {/* 4. Kluster Jaringan Kode Node (Kiri Bawah) */}
        <div className="fixed bottom-20 left-1/4 z-0 opacity-10 text-slate-600 pointer-events-none anim-float hidden md:block" style={{ animationDelay: '-3s' }}>
          <svg className="w-40 h-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="12" cy="5" r="2" />
            <circle cx="5" cy="14" r="2" />
            <circle cx="19" cy="14" r="2" />
            <path d="M10.5 6.5l-4 5.5M13.5 6.5l4 5.5M7 14h10" />
          </svg>
        </div>

        {/* --- ASTRONOT MELAYANG (Responsive & Posisi Sempurna) --- */}
        <img 
          src="/images/Image_3887bb.png" 
          alt="Astronot Atas" 
          className="fixed top-10 -left-24 md:top-20 md:-left-10 lg:-left-16 w-[180px] md:w-[250px] lg:w-[300px] opacity-10 pointer-events-none z-0 anim-float drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
          style={{ animationDuration: '10s' }} 
          onError={(e) => e.target.style.display = 'none'} 
        />
        <img 
          src="/images/Image_3887bb.png" 
          alt="Astronot Bawah" 
          className="fixed -bottom-10 -right-20 md:-bottom-16 md:-right-10 lg:-right-16 w-[200px] md:w-[280px] lg:w-[350px] opacity-[0.12] pointer-events-none z-0 anim-drift drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
          style={{ '--rot': '-25deg', animationDuration: '15s' }} 
          onError={(e) => e.target.style.display = 'none'} 
        />
        {/* --- KOMPONEN UTAMA --- */}
        <div className="relative z-10">
          <Navbar lang={lang} setLang={setLang} />
          <Hero lang={lang} />
          <Education lang={lang} />
          <Experience lang={lang} />
          <Certifications lang={lang} />
          <Projects lang={lang} />
          <Footer lang={lang} />
        </div>
        
      </div>
    </>
  );
}

export default App;