const Education = ({ lang }) => {
  const content = {
    id: {
      title: "Riwayat", highlight: "Pendidikan",
      edu1: { school: "Universitas Brawijaya", degree: "Teknologi Informasi", period: "Sekarang", desc: "Fokus pada pengembangan perangkat lunak dan Manajemen Analisis Data.", },
      edu2: { school: "SMKS Yadika 3 Jakarta", degree: "Teknik Komputer & Jaringan", period: "Lulus 2024", desc: "Mempelajari dasar-dasar perakitan hardware, administrasi server, dan topologi jaringan.", badge: "Juara Umum 2 Akademik" }
    },
    en: {
        title: "Educational", highlight: "Background",
        edu1: { school: "Brawijaya University", degree: "Information Technology", period: "Current", desc: "Focusing on software development and network infrastructure. Current GPA: 3.80.", badge: "Vocational Faculty" },
        edu2: { school: "SMKS Yadika 3 Jakarta", degree: "Computer & Network Engineering", period: "Graduated 2024", desc: "Studied hardware assembly, server administration, and network topologies.", badge: "2nd Overall Academic Rank" }
        },
        zh: {
        title: "教育", highlight: "背景",
        edu1: { school: "布劳维贾亚大学", degree: "信息技术", period: "目前", desc: "专注于软件开发和网络基础设施。目前GPA为3.80。", badge: "职业学院" },
        edu2: { school: "SMKS Yadika 3 雅加达", degree: "计算机与网络工程", period: "2024年毕业", desc: "学习硬件组装、服务器管理和网络拓扑结构的基础知识。", badge: "学术总排名第二" }
        }
  };

  const t = content[lang];
  const educations = [t.edu1, t.edu2];

  return (
    <section id="education" className="py-20 relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-['DynaPuff'] text-white text-center mb-12 drop-shadow-lg">
          {t.title} <span className="text-amber-400">{t.highlight}</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educations.map((edu, index) => (
            <div key={index} className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-amber-400/50 transition-colors group relative overflow-hidden shadow-lg">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-2xl font-bold text-white mb-1 pl-4 font-['DynaPuff'] tracking-wide">{edu.school}</h3>
              <p className="text-cyan-400 font-medium mb-3 pl-4 font-['Space_Grotesk']">{edu.degree}</p>
              <span className="inline-block bg-slate-950 text-slate-300 text-xs px-3 py-1 rounded-full mb-4 ml-4 border border-slate-700 font-bold">
                {edu.period} • {edu.badge}
              </span>
              <p className="text-slate-400 pl-4 font-['Space_Grotesk']">{edu.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;