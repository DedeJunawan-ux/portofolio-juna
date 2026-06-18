import React, { useMemo } from 'react';

const Hero = ({ lang }) => {
  const content = {
    id: {
      greet: "Halo, perkenalkan saya",
      role: "Mahasiswa Teknologi Informasi Universitas Brawijaya",
      desc: "Memadukan pemahaman mendalam di bidang infrastruktur jaringan dan pengembangan web front-end untuk menciptakan solusi teknologi yang efisien dan berdampak.",
      btn1: "Unduh CV",
      btn2: "Lihat Karya Saya"
    },
    en: {
      greet: "Hello, let me introduce myself",
      role: "Information Technology Student at Brawijaya University",
      desc: "Combining deep understanding in network infrastructure and front-end web development to create efficient and impactful technological solutions.",
      btn1: "Download CV",
      btn2: "View My Work"
    },
    zh: {
      greet: "你好，请允许我自我介绍",
      role: "布劳维贾亚大学 信息技术学生",
      desc: "将网络基础设施的深入理解与前端Web开发相结合，创造高效且有影响力的技术解决方案。",
      btn1: "下载简历",
      btn2: "查看我的作品"
    }
  };

  const t = content[lang];

  const renderLetters = (word, delayOffset, extraClass = "text-white") => {
    return word.split('').map((char, index) => {
      const randomX = (Math.random() - 0.5) * 500 + 'px';
      const randomY = (Math.random() - 0.5) * 500 + 'px';
      const randomRot = (Math.random() - 0.5) * 90 + 'deg';
      const delay = delayOffset + (index * 0.05) + 's';

      return (
        <span
          key={index}
          className={`anim-fly-in inline-block drop-shadow-lg transition-colors duration-300 ${extraClass}`}
          style={{ '--startX': randomX, '--startY': randomY, '--startRot': randomRot, animationDelay: delay }}
        >
          {char}
        </span>
      );
    });
  };

  const firstName = useMemo(() => renderLetters("Dede", 0.5, "text-white"), []);
  const middleName = useMemo(() => renderLetters("Junawan", 0.8, "text-white"), []);
  const lastName = useMemo(() => renderLetters("Rizki", 1.2, "text-amber-400"), []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-16 md:gap-8 w-full">
        
        {/* --- BAGIAN TEKS --- */}
        <div className="flex-1 text-center md:text-left z-20">
          
          <div className="reveal reveal-down delay-100 inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
            <p className="text-cyan-400 font-['Space_Grotesk'] text-sm tracking-widest uppercase font-semibold">
              {t.greet}
            </p>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 font-['Righteous'] tracking-wide flex flex-wrap justify-center md:justify-start gap-x-4 cursor-default">
            <div className="flex gap-1">{firstName}</div>
            <div className="flex gap-1">{middleName}</div>
            <div className="flex gap-1">{lastName}</div>
          </h1>
          
          <h2 className="reveal reveal-left delay-300 text-xl md:text-2xl text-slate-300 font-light mb-6 font-['Space_Grotesk']">
            {t.role}
          </h2>
          
          <p className="reveal reveal-right delay-400 text-slate-400 max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed text-lg">
            {t.desc}
          </p>
          
          <div className="reveal reveal-up delay-500 flex flex-col sm:flex-row gap-6 justify-center md:justify-start font-['Space_Grotesk']">
            <button className="group relative px-8 py-4 bg-cyan-500 text-slate-950 font-bold tracking-widest uppercase text-sm rounded-sm overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full -translate-x-full skew-x-12 transition-transform duration-500"></div>
              {t.btn1}
            </button>
            <a href="#projects" className="group relative px-8 py-4 bg-transparent text-white font-bold tracking-widest uppercase text-sm rounded-sm border-2 border-slate-700 hover:border-amber-400 transition-colors duration-300 flex items-center justify-center gap-3">
              {t.btn2}
              <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>

        {/* --- BAGIAN FOTO PROFIL --- */}
        <div className="reveal reveal-zoom delay-200 flex-1 flex justify-center md:justify-end relative h-[400px] w-[400px] anim-float">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="relative w-72 h-72 md:w-96 md:h-96 anim-morph border-4 border-cyan-400/50 p-2 shadow-[0_0_30px_rgba(6,182,212,0.3)] bg-slate-900/50 backdrop-blur-md overflow-hidden group">
            <img src="/images/fotoprofil.jpeg" alt="Dede Junawan Rizki" className="w-full h-full object-cover object-bottom anim-morph group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 ease-out" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;