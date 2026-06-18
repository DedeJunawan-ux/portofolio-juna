import { useState } from 'react';

const Projects = ({ lang }) => {
  const [selected, setSelected] = useState(null);

  const content = {
    id: {
      title: "Showcase", highlight: "Karya", close: "TUTUP", view: "LIHAT KODE",
      sos: "Aplikasi berbasis mobile yang dirancang sebagai sistem dompet digital untuk penyaluran dana darurat warga secara cepat dan transparan.",
      nusa: "Platform web untuk pelaporan utilitas (listrik & air) di wilayah 3T guna memantau distribusi nasional. Dilengkapi fitur pelaporan sampah yang dapat ditukar dengan insentif uang melalui pengepul."
    },
    en: {
      title: "Projects", highlight: "Showcase", close: "CLOSE", view: "VIEW CODE",
      sos: "A mobile-based application designed as a digital wallet system for rapid and transparent emergency fund distribution for citizens.",
      nusa: "A web platform for reporting utility issues (electricity & water) in 3T regions to monitor national distribution. It features a trash reporting system that exchanges waste for financial incentives via collectors."
    },
    zh: {
      title: "项目", highlight: "展示", close: "关闭", view: "查看代码",
      sos: "一款基于移动端的应用程序，旨在作为数字钱包系统，快速透明地分发公民应急资金。",
      nusa: "一个用于报告3T地区公用事业（水电）的Web平台，以监控国家分布情况。它具有垃圾报告系统，可通过收集者将废物换取经济奖励。"
    }
  };

  const t = content[lang];

  const projects = [
    { 
      title: "SOS Wallet", 
      tech: ["Mobile App", "Fintech", "Emergency"], 
      image: "/images/sos-wallet.jpeg", 
      desc: t.sos, 
      github: "https://github.com/dedejunawan/soss-wallet" 
    },
    { 
      title: "NusaSinergi", 
      tech: ["Web App", "3T Tracker", "Eco-Cash"], 
      image: "/images/nusasinergi.png", 
      desc: t.nusa, 
      github: "https://github.com/dedejunawan/nusasinergi" 
    }
  ];

  return (
    <section id="projects" className="py-20 relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="reveal reveal-down delay-100 text-4xl md:text-5xl font-['DynaPuff'] text-white text-center mb-12 drop-shadow-lg">
          {t.title} <span className="text-amber-400">{t.highlight}</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((proj, index) => (
            <div 
              key={index} 
              onClick={() => setSelected(proj)}
              className={`reveal reveal-up delay-${(index + 1) * 300} bg-slate-900/60 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/50 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_15px_30px_rgba(251,191,36,0.2)] transition-all duration-300 cursor-pointer group`}
            >
              <div className="h-64 bg-slate-950 relative">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" onError={(e) => { e.target.style.display = 'none'; }} />
                <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="bg-slate-900/80 text-amber-400 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-widest border border-amber-400">Lihat Detail</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((techItem, i) => (
                    <span key={i} className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded">
                      {techItem}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white font-['DynaPuff']">{proj.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md" onClick={() => setSelected(null)}>
          <div 
            className="bg-slate-900 border border-slate-700 w-full max-w-4xl rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
              <div className="w-full md:w-1/2 h-64 md:h-80 bg-slate-950 rounded-lg border border-slate-800 overflow-hidden relative">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                  {selected.tech.map((techItem, i) => (
                    <span key={i} className="bg-slate-800 text-slate-300 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded">
                      {techItem}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 font-['DynaPuff']">{selected.title}</h3>
                <p className="text-slate-300 font-['Space_Grotesk'] leading-relaxed mb-8 text-lg">{selected.desc}</p>
                <div className="flex gap-4">
                  <a href={selected.github} target="_blank" rel="noreferrer" className="flex-1 py-3 text-center bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold tracking-widest font-['Space_Grotesk'] uppercase text-sm transition-all rounded-lg">
                    {t.view}
                  </a>
                  <button 
                    onClick={() => setSelected(null)}
                    className="flex-1 py-3 bg-slate-800 text-white hover:bg-slate-700 font-bold tracking-widest font-['Space_Grotesk'] uppercase text-sm transition-all rounded-lg"
                  >
                    {t.close}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;