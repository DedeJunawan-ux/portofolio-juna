import React from 'react';

const Education = ({ lang }) => {
  const content = {
    id: {
      title: "Riwayat", highlight: "Pendidikan",
      edu1: "Berfokus pada pengembangan perangkat lunak, infrastruktur jaringan, dan analisis data. Aktif dalam organisasi dan proyek teknologi kampus.",
      edu2: "Jurusan Teknik Komputer dan Jaringan. Lulus sebagai Juara Umum ke-2 Akademik Angkatan 2021. Terpilih sebagai tim peserta Expo Nasional SMK Yadika mewakili sekolah."
    },
    en: {
      title: "Education", highlight: "History",
      edu1: "Focusing on software development, network infrastructure, and data analysis. Active in campus technology organizations and projects.",
      edu2: "Computer and Network Engineering Major. Graduated as 2nd Overall Academic Champion of the 2021 cohort. Selected as a team member for the National SMK Yadika Expo representing the school."
    },
    zh: {
      title: "教育", highlight: "背景",
      edu1: "专注于软件开发、网络基础设施和数据分析。积极参与校园技术组织和项目。",
      edu2: "计算机与网络工程专业。作为2021届学术总成绩第二名毕业。被选为代表学校参加全国SMK Yadika博览会的团队成员。"
    }
  };

  const t = content[lang];

  const educations = [
    // D3 dan IPK dihapus di baris bawah ini
    { school: "Universitas Brawijaya", degree: "Teknologi Informasi", period: "2025 - Sekarang", desc: t.edu1 }, 
    { school: "SMKS Yadika 3 Jakarta", degree: "Teknik Komputer dan Jaringan", period: "Lulus 2024", desc: t.edu2, gpa: "Juara 2 Umum" }
  ];

  return (
    <section id="education" className="py-20 relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="reveal reveal-down delay-100 text-4xl md:text-5xl font-['DynaPuff'] text-white text-center mb-12 drop-shadow-lg">
          {t.title} <span className="text-amber-400">{t.highlight}</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educations.map((edu, index) => (
            <div key={index} className={`reveal reveal-up delay-${(index + 1) * 200} bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-amber-400/50 transition-colors group relative overflow-hidden shadow-lg`}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-2 font-['DynaPuff']">{edu.school}</h3>
              <p className="text-cyan-400 font-medium font-['Space_Grotesk']">{edu.degree}</p>
              
              <div className="flex flex-wrap gap-3 mt-3 mb-4 font-['Space_Grotesk'] text-xs font-bold">
                <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">{edu.period}</span>
                {/* Badge tambahan hanya akan muncul jika ada datanya (seperti "Juara 2 Umum") */}
                {edu.gpa && (
                  <span className="bg-amber-950/50 text-amber-400 px-3 py-1 rounded-full border border-amber-900/50">{edu.gpa}</span>
                )}
              </div>
              
              <p className="text-slate-400 text-sm font-['Space_Grotesk'] leading-relaxed relative z-10">{edu.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;