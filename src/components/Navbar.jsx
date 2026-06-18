const Navbar = ({ lang, setLang }) => {
  
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
          
          {/* Logo / Inisial (Diubah menjadi DJR.) */}
          <div className="flex-shrink-0 group cursor-pointer">
            <a href="#home" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-400 font-black text-3xl tracking-widest font-['DynaPuff'] group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all">
              DJR.
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {/* Tautan Navigasi yang bisa diklik dan meluncur mulus */}
            <div className="flex space-x-8 font-['Space_Grotesk'] text-sm tracking-wider uppercase">
              {menus[lang].map((item, i) => (
                <a key={i} href={item.link} className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300 font-medium">
                  {item.name}
                </a>
              ))}
            </div>

            {/* Pemilih Bahasa */}
            <div className="flex gap-3 pl-8 border-l border-slate-700 font-['Space_Grotesk'] text-xs font-bold">
              <button onClick={() => setLang('id')} className={`transition-colors ${lang === 'id' ? 'text-amber-400' : 'text-slate-500 hover:text-white'}`}>ID</button>
              <button onClick={() => setLang('en')} className={`transition-colors ${lang === 'en' ? 'text-cyan-400' : 'text-slate-500 hover:text-white'}`}>EN</button>
              <button onClick={() => setLang('zh')} className={`transition-colors ${lang === 'zh' ? 'text-rose-400' : 'text-slate-500 hover:text-white'}`}>中文</button>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;