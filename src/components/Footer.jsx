import { useState } from 'react';

const Footer = ({ lang }) => {
  // State untuk efek tombol Copy Email
  const [copied, setCopied] = useState(false);

  const content = {
    id: { 
      connect: "Mari Terhubung",
      builtBy: "Dibuat oleh", rights: "Hak Cipta Dilindungi.",
      copy: "Salin", copied: "Tersalin!"
    },
    en: { 
      connect: "Let's Connect",
      builtBy: "Built by", rights: "All Rights Reserved.",
      copy: "Copy", copied: "Copied!"
    },
    zh: { 
      connect: "联系我",
      builtBy: "制作者", rights: "版权所有。",
      copy: "复制", copied: "已复制!"
    }
  };

  const t = content[lang];
  const currentYear = new Date().getFullYear();

  // Tautan Aslimu
  const links = {
    linkedin: "https://www.linkedin.com/in/dede-junawan-rizki-412643377/",
    wa: "https://wa.me/628998469735",
    ig: "https://instagram.com/junnnnna111",
    gmailDirect: "https://mail.google.com/mail/?view=cm&fs=1&to=jrd353889@gmail.com"
  };

  // Fungsi untuk menyalin email ke clipboard (Papan Klip)
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jrd353889@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-slate-950/80 backdrop-blur-lg border-t border-slate-800/50 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        <h3 className="text-xl font-['DynaPuff'] text-white mb-6">{t.connect}</h3>

        {/* --- TOMBOL KONTAK DINAMIS --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 font-['Space_Grotesk'] font-bold text-sm">
          
          {/* LinkedIn */}
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-cyan-600 hover:border-cyan-400 hover:scale-105 transition-all shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn
          </a>
          
          {/* WhatsApp */}
          <a href={links.wa} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-green-600 hover:border-green-400 hover:scale-105 transition-all shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            WhatsApp
          </a>

          {/* Instagram */}
          <a href={links.ig} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-pink-600 hover:border-pink-400 hover:scale-105 transition-all shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            Instagram
          </a>

          {/* Email (Tombol Ganda: Buka Gmail & Salin) */}
          <div className="flex items-center rounded-full bg-slate-900 border border-slate-700 shadow-lg hover:border-rose-400 hover:scale-105 transition-all group overflow-hidden">
            {/* Bagian Kiri: Buka Gmail */}
            <a href={links.gmailDirect} target="_blank" rel="noreferrer" className="flex items-center gap-2 pl-6 pr-4 py-3 text-slate-300 group-hover:text-white group-hover:bg-rose-600 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Gmail
            </a>
            
            {/* Garis Pembatas */}
            <div className="w-px h-6 bg-slate-700 group-hover:bg-rose-500 transition-colors"></div>
            
            {/* Bagian Kanan: Tombol Salin */}
            <button onClick={handleCopyEmail} className="pr-6 pl-4 py-3 text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors font-bold text-xs uppercase tracking-widest flex items-center gap-1">
              {copied ? (
                <span className="text-green-400">{t.copied}</span>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                  {t.copy}
                </>
              )}
            </button>
          </div>

        </div>

        {/* Teks Copyright */}
        <p className="text-slate-400 text-sm font-['Space_Grotesk'] text-center">
          {t.builtBy} <span className="text-amber-400 font-['DynaPuff'] tracking-wide">Dede Junawan Rizki</span>.
        </p>
        <p className="text-slate-600 text-xs font-['Space_Grotesk'] mt-2">
          &copy; {currentYear}. {t.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;