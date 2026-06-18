import React from 'react';

const Experience = ({ lang }) => {
  const content = {
    id: {
      title: "Pengalaman", highlight: "Kerja",
      jobs: [
        {
          company: "PT Putra Tanjung Jaya",
          role: "IT Support Intern (Magang SMK)",
          period: "Durasi: 3 Bulan",
          desc: "Melaksanakan program Praktik Kerja Lapangan (PKL). Bertanggung jawab dalam membantu operasional harian, pemeliharaan perangkat keras (hardware), instalasi perangkat lunak, serta penyelesaian masalah jaringan dasar di lingkungan perusahaan."
        }
      ]
    },
    en: {
      title: "Work", highlight: "Experience",
      jobs: [
        {
          company: "PT Putra Tanjung Jaya",
          role: "IT Support Intern (Vocational HS)",
          period: "Duration: 3 Months",
          desc: "Completed a vocational internship program. Responsible for assisting with daily operations, hardware maintenance, software installation, and basic network troubleshooting within the corporate environment."
        }
      ]
    },
    zh: {
      title: "工作", highlight: "经验",
      jobs: [
        {
          company: "PT Putra Tanjung Jaya",
          role: "IT 支持实习生 (职业高中)",
          period: "时长：3个月",
          desc: "完成职业高中实习项目。负责协助日常运营、硬件维护、软件安装以及公司环境内的基础网络故障排除。"
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="experience" className="py-20 relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-['DynaPuff'] text-white text-center mb-12 drop-shadow-lg">
          {t.title} <span className="text-cyan-400">{t.highlight}</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {t.jobs.map((job, index) => (
            <div key={index} className="bg-slate-900/60 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group relative overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
              {/* Garis aksen di sebelah kiri */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-amber-400 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 pl-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 font-['DynaPuff'] tracking-wide">{job.company}</h3>
                  <p className="text-amber-400 font-medium font-['Space_Grotesk'] text-lg">{job.role}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-cyan-950 text-cyan-400 text-xs px-4 py-2 rounded-full border border-cyan-800 font-bold tracking-widest uppercase">
                    {job.period}
                  </span>
                </div>
              </div>
              
              <p className="text-slate-300 pl-4 font-['Space_Grotesk'] leading-relaxed">{job.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;