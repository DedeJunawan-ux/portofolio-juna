import { useState } from 'react';

const Navbar = ({ lang, setLang }) => {
  // State untuk membuka/menutup menu di HP
  const [isOpen, setIsOpen] = useState(false);

  const menus = {
    id: [
      { name: "Beranda", link: "#home" },
      { name: "Pendidikan", link: "#education" },
      { name: "Pengalaman", link: "#experience" },
      { name: "Sertifikasi", link: "#certifications" },
      { name: "Karya", link: "#projects" }
    ],
    en: [
      { name: "Home", link: "#home" },
      { name: "Education", link: "#education" },
      { name: "Experience", link: "#experience" },
      { name: "Certifications", link: "#certifications" },
      { name: "Projects", link: "#projects" }
    ],
    zh: [
      { name: "首页", link: "#home" },
      { name: "教育", link: "#education" },
      { name: "经验", link: "#experience" },
      { name: "认证", link: "#certifications" },
      { name: "项目", link: "#projects" }
    ]
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/5 shadow-lg shadow-cyan-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Inisial */}
          <div className="flex-shrink-0 group cursor-pointer">
            <a href="#home" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-400 font-black text-3xl tracking-widest font-['DynaPuff'] group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all">
              DJR.
            </a>
          </div>
          
          {/* --- TAMPILAN DESKTOP (LAPTOP/PC) --- */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8 font-['Space_Grotesk'] text-sm tracking-wider uppercase">
              {menus[lang].map((item, i) => (
                <a key={i} href={item.link} className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300 font-medium">
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex gap-3 pl-8 border-l border-slate-700 font-['Space_Grotesk'] text-xs font-bold">
              <button onClick={() => setLang('id')} className={`transition-colors ${lang === 'id' ? 'text-amber-400' : 'text-slate-500 hover:text-white'}`}>ID</button>
              <button onClick={() => setLang('en')} className={`transition-colors ${lang === 'en' ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}>EN</button>
              <button onClick={() => setLang('zh')} className={`transition-colors ${lang === 'zh' ? 'text-rose-400' : 'text-slate-500 hover:text-white'}`}>中文</button>
            </div>
          </div>

          {/* --- TAMPILAN MOBILE (HP) --- */}
          <div className="flex md:hidden items-center gap-4">
            
            {/* Tombol Bahasa versi HP */}
            <div className="flex gap-2 font-['Space_Grotesk'] text-[10px] font-bold bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
              <button onClick={() => setLang('id')} className={`${lang === 'id' ? 'text-amber-400' : 'text-slate-500'}`}>ID</button>
              <span className="text-slate-700">|</span>
              <button onClick={() => setLang('en')} className={`${lang === 'en' ? 'text-cyan-400' : 'text-slate-500'}`}>EN</button>
              <span className="text-slate-700">|</span>
              <button onClick={() => setLang('zh')} className={`${lang === 'zh' ? 'text-rose-400' : 'text-slate-500'}`}>中文</button>
            </div>

            {/* Tombol Hamburger */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-400 hover:text-white focus:outline-none"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> // Ikon X
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> // Ikon Garis 3
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* --- MENU DROPDOWN UNTUK HP --- */}
      <div className={`md:hidden absolute w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-2xl">
          {menus[lang].map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={() => setIsOpen(false)} // Tutup menu setelah diklik
              className="block px-3 py-3 rounded-md text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900 font-['Space_Grotesk'] uppercase tracking-widest text-center border border-transparent hover:border-slate-800"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;