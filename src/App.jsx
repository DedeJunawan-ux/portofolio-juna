import { useState } from 'react';
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

  return (
    <>
      {!hasEntered && <LandingPage onEnter={() => setHasEntered(true)} />}

      <div className={`bg-slate-950 min-h-screen text-slate-50 font-sans selection:bg-cyan-500/30 transition-opacity duration-1000 relative overflow-hidden ${hasEntered ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        
        {/* --- Latar Belakang Polos --- */}
        <div className="absolute inset-0 bg-slate-950 z-0 pointer-events-none"></div>

        {/* --- GUNUNGAN WAYANG MELAYANG --- */}
        {/* Wayang Kiri Atas */}
        <img 
          src="/images/image_3887bb.jpg" 
          alt="Wayang Kiri Atas" 
          className="absolute -top-32 -left-32 w-[500px] opacity-10 pointer-events-none z-0 anim-float mix-blend-lighten"
          style={{ animationDuration: '8s' }} 
        />
        {/* Wayang Kanan Bawah */}
        <img 
          src="/images/image_3887bb.jpg" 
          alt="Wayang Kanan Bawah" 
          className="absolute -bottom-32 -right-32 w-[500px] opacity-10 pointer-events-none z-0 anim-float mix-blend-lighten"
          style={{ animationDuration: '10s' }} 
        />

        {/* --- Komponen Utama --- */}
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