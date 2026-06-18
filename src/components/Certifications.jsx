import { useState } from 'react';

const Certifications = ({ lang }) => {
  const [selected, setSelected] = useState(null);

  const content = {
    id: {
      title: "Lisensi &", highlight: "Sertifikasi", close: "TUTUP",
      mikrotik: "Sertifikasi keahlian dalam administrasi jaringan, routing, dan manajemen infrastruktur.",
      google: "Sertifikasi profesional merancang dan mengelola kampanye pemasaran digital ekosistem Google.",
      azure: "Pemahaman arsitektur sistem kecerdasan buatan generatif (Gen AI) menggunakan Microsoft Azure.",
      fabric: "Kemampuan analitik dan implementasi ilmu data end-to-end menggunakan Microsoft Fabric.",
      python: "Validasi kemampuan fundamental dalam bahasa pemrograman Python untuk komputasi data.",
      dataanalys: "Sertifikasi kemampuan analisis data mencakup pengolahan, visualisasi, dan interpretasi data untuk pengambilan keputusan."
    },
    en: {
      title: "Licenses &", highlight: "Certifications", close: "CLOSE",
      mikrotik: "Expertise certification in network administration, routing, and infrastructure management.",
      google: "Professional certification for designing and managing digital marketing campaigns on Google.",
      azure: "Understanding generative AI system architecture using Microsoft Azure.",
      fabric: "Analytical skills and end-to-end data science implementation using Microsoft Fabric.",
      python: "Validation of fundamental skills in Python programming language for data computation.",
      dataanalys: "Certification covering data processing, visualization, and interpretation skills for data-driven decision making."
    },
    zh: {
      title: "执照与", highlight: "认证", close: "关闭",
      mikrotik: "网络管理、路由和基础设施管理专业认证。",
      google: "用于在谷歌生态系统上设计和管理数字营销活动的专业认证。",
      azure: "使用Microsoft Azure理解生成式人工智能系统架构。",
      fabric: "使用Microsoft Fabric进行分析和端到端数据科学实施。",
      python: "验证用于数据计算的Python编程语言的基础技能。",
      dataanalys: "涵盖数据处理、可视化和解读技能的认证，用于数据驱动的决策制定。"
    }
  };

  const t = content[lang];
  
  const certs = [
    { title: "MikroTik Competence", issuer: "BNSP & MikroTik", image: "/images/mikrotik.png", desc: t.mikrotik },
    { title: "Google Ads Search", issuer: "Google", image: "/images/google-ads.png", desc: t.google },
    { title: "Generative AI Apps", issuer: "Microsoft Azure", image: "/images/azure-gen-ai.png", desc: t.azure },
    { title: "Data Science Applied", issuer: "Microsoft Fabric", image: "/images/fabric-data.png", desc: t.fabric },
    { title: "Python Programming", issuer: "Sertifikasi Python", image: "/images/sertif-python.png", desc: t.python },
    { title: "Data Analysis", issuer: "Sertifikasi Data Analysis", image: "/images/data-analys.jpeg", desc: t.dataanalys },
  ];

  return (
    <section id="certifications" className="py-20 relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-['DynaPuff'] text-white text-center mb-12 drop-shadow-lg">
          {t.title} <span className="text-cyan-400">{t.highlight}</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certs.map((cert, index) => (
            <div 
              key={index} 
              onClick={() => setSelected(cert)}
              className="bg-slate-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 group flex flex-col cursor-pointer"
            >
              <div className="h-48 bg-slate-950 relative flex items-center justify-center border-b border-slate-800">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-contain p-2 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-slate-900/80 text-cyan-400 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-widest border border-cyan-400">Klik Detail</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 font-['DynaPuff']">{cert.title}</h3>
                <p className="text-amber-400 text-sm font-semibold mb-2 font-['Space_Grotesk']">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- POPUP BERSIH --- */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md" onClick={() => setSelected(null)}>
          <div 
            className="bg-slate-900 border border-slate-700 w-full max-w-3xl rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
              <div className="w-full md:w-1/2 h-64 bg-slate-950 rounded-lg border border-slate-800 p-2 flex items-center justify-center">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-contain" />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <p className="text-amber-400 font-['Space_Grotesk'] tracking-widest uppercase text-xs font-bold mb-2">Terverifikasi</p>
                <h3 className="text-3xl font-black text-white mb-2 font-['DynaPuff']">{selected.title}</h3>
                <p className="text-cyan-400 font-bold mb-6 font-['Space_Grotesk'] text-lg border-b border-slate-800 pb-4">{selected.issuer}</p>
                <p className="text-slate-300 font-['Space_Grotesk'] leading-relaxed mb-8">{selected.desc}</p>
                
                <button 
                  onClick={() => setSelected(null)}
                  className="w-full py-3 bg-slate-800 text-white hover:bg-slate-700 font-bold tracking-widest font-['Space_Grotesk'] uppercase text-sm transition-all rounded-lg"
                >
                  {t.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;