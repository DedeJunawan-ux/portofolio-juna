import React, { useMemo, useState } from 'react';

const LandingPage = ({ onEnter }) => {
  // State untuk menyimpan bahasa yang aktif (Default: 'id')
  const [lang, setLang] = useState('id');

  // Kamus Terjemahan (Dictionary)
  const translations = {
    id: { label: "PORTOFOLIO 2026", btn: "BUKA PORTOFOLIO UTAMA", welcome: "Selamat Datang" },
    en: { label: "PORTFOLIO 2026", btn: "OPEN MAIN PORTFOLIO", welcome: "Welcome" },
    zh: { label: "2026 作品集", btn: "打开主要作品集", welcome: "欢迎" }
  };

  // Fungsi pemecah kata untuk animasi huruf
  const renderLetters = (word, delayOffset, extraClass = "text-white") => {
    return word.split('').map((char, index) => {
      const randomX = (Math.random() - 0.5) * 2000 + 'px';
      const randomY = (Math.random() - 0.5) * 1500 + 'px';
      const randomRot = (Math.random() - 0.5) * 360 + 'deg';
      const delay = delayOffset + (index * 0.08) + 's';

      return (
        <span
          key={index}
          className={`anim-fly-in inline-block drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] hover:text-amber-400 transition-colors duration-300 ${extraClass}`}
          style={{
            '--startX': randomX,
            '--startY': randomY,
            '--startRot': randomRot,
            animationDelay: delay,
          }}
        >
          {char}
        </span>
      );
    });
  };

  // Memecah nama (Rizki diberi warna Emas/Amber khas ornamen Jawa)
  const firstName = useMemo(() => renderLetters("DEDE", 0.2, "text-white"), []);
  const middleName = useMemo(() => renderLetters("JUNAWAN", 0.6, "text-white"), []);
  const lastName = useMemo(() => renderLetters("RIZKI", 1.2, "text-amber-400"), []);

  return (
    <div className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center overflow-hidden z-[100]">
      
      {/* Tombol Pilihan Bahasa (Kanan Atas) */}
      <div className="absolute top-6 right-6 z-50 flex gap-4 font-['Space_Grotesk']">
        <button onClick={() => setLang('id')} className={`transition-colors ${lang === 'id' ? 'text-amber-400 font-bold border-b border-amber-400' : 'text-slate-500 hover:text-white'}`}>ID</button>
        <button onClick={() => setLang('en')} className={`transition-colors ${lang === 'en' ? 'text-amber-400 font-bold border-b border-amber-400' : 'text-slate-500 hover:text-white'}`}>EN</button>
        <button onClick={() => setLang('zh')} className={`transition-colors ${lang === 'zh' ? 'text-amber-400 font-bold border-b border-amber-400' : 'text-slate-500 hover:text-white'}`}>中文</button>
      </div>

      {/* Background Batik Gelap (Sentuhan Jawa) */}
      <div 
        className="absolute inset-0 anim-bg bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1605338161726-2a7e781ea3db?q=80&w=2000&auto=format&fit=crop")' }}
      ></div>
      {/* Gradasi gelap agar teks tetap terbaca */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] z-0"></div>

      {/* Area Konten Utama */}
      <div className="relative z-10 flex flex-col items-center w-full">
        
        {/* Sapaan Jawa & Label Dinamis */}
        <div 
          className="anim-fly-in mb-6 md:mb-10 flex flex-col items-center"
          style={{ '--startX': '0px', '--startY': '-50px', '--startRot': '0deg', animationDelay: '2.5s' }}
        >
          <span className="text-amber-500 font-['DynaPuff'] tracking-widest mb-2 italic">~ Sugeng Rawuh ~</span>
          <span className="text-cyan-400/90 tracking-[0.4em] text-sm md:text-lg font-light uppercase border-b border-cyan-400/30 pb-2 font-['Space_Grotesk'] transition-all duration-300">
            {translations[lang].label}
          </span>
        </div>

        {/* Render Nama dengan font DynaPuff */}
        <div className="flex flex-col items-center font-['DynaPuff'] tracking-wide cursor-default leading-none">
          
          {/* Baris 1: DEDE */}
          <div className="flex gap-1 md:gap-2 text-5xl md:text-7xl lg:text-8xl md:-translate-x-20 z-10">
            {firstName}
          </div>
          
          {/* Baris 2: JUNAWAN */}
          <div className="flex gap-1 md:gap-2 text-6xl md:text-8xl lg:text-[9rem] mt-2 md:-mt-4 z-20">
            {middleName}
          </div>
          
          {/* Baris 3: RIZKI (Warna Emas) */}
          <div className="flex gap-1 md:gap-2 text-5xl md:text-7xl lg:text-8xl mt-2 md:-mt-6 md:translate-x-28 z-30">
            {lastName}
          </div>

        </div>

        {/* Tombol Masuk Dinamis */}
        <div 
          className="anim-fly-in mt-16 md:mt-20"
          style={{ '--startX': '0px', '--startY': '50px', '--startRot': '0deg', animationDelay: '3.5s' }}
        >
          <button 
            onClick={onEnter}
            className="group relative px-8 py-4 bg-transparent text-white font-['Space_Grotesk'] font-bold tracking-[0.15em] text-sm overflow-hidden border-2 border-amber-500/50 hover:border-amber-400 transition-colors duration-500 rounded-sm"
          >
            {/* Efek hover tombol warna Emas khas Jawa */}
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-amber-500/20 to-cyan-500/20 transition-all duration-[500ms] ease-out group-hover:w-full"></div>
            <span className="relative flex items-center gap-3">
              {translations[lang].btn}
              <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;