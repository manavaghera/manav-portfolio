import React, { memo } from 'react';
import { Settings } from 'lucide-react';

const Badge = ({ children, colorClass }: { children: React.ReactNode, colorClass: string }) => (
  <span className={`px-3 py-1 rounded-md text-xs font-medium ${colorClass} border border-current/10`}>
    {children}
  </span>
);

const Skills = () => {
  return (
    <section id="skills" className="relative z-10 px-4 sm:px-6 py-12 md:py-24 flex flex-col items-center">
      <div className="flex items-center gap-3 mb-8 md:mb-12 self-start max-w-5xl mx-auto w-full">
        <Settings className="text-white/60" size={24} />
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white/60">Skills</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto w-full">
        {/* AI & machine learning */}
        <div className="liquid-glass rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-all group min-h-[44px]">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">AI & machine learning</h3>
          <div className="flex flex-wrap gap-2">
            <Badge colorClass="bg-indigo-500/10 text-indigo-400">HuggingFace</Badge>
            <Badge colorClass="bg-indigo-500/10 text-indigo-400">Scikit-learn</Badge>
            <Badge colorClass="bg-indigo-500/10 text-indigo-400">Sentence-BERT</Badge>
            <Badge colorClass="bg-indigo-500/10 text-indigo-400">Llama 3 (Ollama)</Badge>
            <Badge colorClass="bg-indigo-500/10 text-indigo-400">Whisper</Badge>
            <Badge colorClass="bg-indigo-500/10 text-indigo-400">ChromaDB</Badge>
          </div>
        </div>

        {/* Data & scraping */}
        <div className="liquid-glass rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-all group min-h-[44px]">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Data & scraping</h3>
          <div className="flex flex-wrap gap-2">
            <Badge colorClass="bg-emerald-500/10 text-emerald-400">Pandas</Badge>
            <Badge colorClass="bg-emerald-500/10 text-emerald-400">NumPy</Badge>
            <Badge colorClass="bg-emerald-500/10 text-emerald-400">BeautifulSoup4</Badge>
            <Badge colorClass="bg-emerald-500/10 text-emerald-400">Apify</Badge>
          </div>
        </div>

        {/* Voice & media */}
        <div className="liquid-glass rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-all group min-h-[44px]">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Voice & media</h3>
          <div className="flex flex-wrap gap-2">
            <Badge colorClass="bg-orange-500/10 text-orange-400">ElevenLabs</Badge>
            <Badge colorClass="bg-orange-500/10 text-orange-400">XTTS-v2</Badge>
          </div>
        </div>

        {/* Full-stack dev */}
        <div className="liquid-glass rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-all group min-h-[44px]">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Full-stack dev</h3>
          <div className="flex flex-wrap gap-2">
            <Badge colorClass="bg-zinc-500/10 text-zinc-400">Python</Badge>
            <Badge colorClass="bg-zinc-500/10 text-zinc-400">Flask</Badge>
            <Badge colorClass="bg-zinc-500/10 text-zinc-400">React</Badge>
            <Badge colorClass="bg-zinc-500/10 text-zinc-400">TypeScript</Badge>
            <Badge colorClass="bg-zinc-500/10 text-zinc-400">Tailwind CSS</Badge>
            <Badge colorClass="bg-zinc-500/10 text-zinc-400">Framer Motion</Badge>
          </div>
        </div>

        {/* Dev tools */}
        <div className="liquid-glass rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-all group min-h-[44px]">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Dev tools</h3>
          <div className="flex flex-wrap gap-2">
            <Badge colorClass="bg-zinc-500/10 text-zinc-400">Git & GitHub</Badge>
            <Badge colorClass="bg-zinc-500/10 text-zinc-400">Postman</Badge>
            <Badge colorClass="bg-zinc-500/10 text-zinc-400">Jupyter</Badge>
            <Badge colorClass="bg-zinc-500/10 text-zinc-400">Cursor IDE</Badge>
            <Badge colorClass="bg-zinc-500/10 text-zinc-400">GitHub Copilot</Badge>
          </div>
        </div>

        {/* Vibe coding & AI tools */}
        <div className="liquid-glass rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-all group min-h-[44px]">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Vibe coding & AI tools</h3>
          <div className="flex flex-wrap gap-2">
            <Badge colorClass="bg-orange-500/10 text-orange-400">Claude</Badge>
            <Badge colorClass="bg-orange-500/10 text-orange-400">Claude Code</Badge>
            <Badge colorClass="bg-orange-500/10 text-orange-400">Trae</Badge>
            <Badge colorClass="bg-orange-500/10 text-orange-400">Antigravity</Badge>
            <Badge colorClass="bg-orange-500/10 text-orange-400">Snitch</Badge>
            <Badge colorClass="bg-orange-500/10 text-orange-400">OpenClaw</Badge>
            <Badge colorClass="bg-orange-500/10 text-orange-400">Ollama</Badge>
            <Badge colorClass="bg-orange-500/10 text-orange-400">Cursor</Badge>
            <Badge colorClass="bg-orange-500/10 text-orange-400">v0 by Vercel</Badge>
            <Badge colorClass="bg-orange-500/10 text-orange-400">Bolt.new</Badge>
            <Badge colorClass="bg-orange-500/10 text-orange-400">Lovable</Badge>
            <Badge colorClass="bg-orange-500/10 text-orange-400">Windsurf</Badge>
          </div>
        </div>

        {/* Design tools */}
        <div className="liquid-glass rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-all group min-h-[44px]">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Design tools</h3>
          <div className="flex flex-wrap gap-2">
            <Badge colorClass="bg-rose-500/10 text-rose-400">Figma</Badge>
            <Badge colorClass="bg-rose-500/10 text-rose-400">Framer</Badge>
            <Badge colorClass="bg-rose-500/10 text-rose-400">Relume</Badge>
          </div>
        </div>

        {/* Backend & infra */}
        <div className="liquid-glass rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-all group min-h-[44px]">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Backend & infra</h3>
          <div className="flex flex-wrap gap-2">
            <Badge colorClass="bg-blue-500/10 text-blue-400">Supabase</Badge>
            <Badge colorClass="bg-blue-500/10 text-blue-400">Firebase</Badge>
            <Badge colorClass="bg-blue-500/10 text-blue-400">Railway</Badge>
          </div>
        </div>

        {/* Quant & finance */}
        <div className="liquid-glass rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-all group min-h-[44px]">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Quant & finance</h3>
          <div className="flex flex-wrap gap-2">
            <Badge colorClass="bg-orange-500/10 text-orange-400">WorldQuant Brain</Badge>
            <Badge colorClass="bg-orange-500/10 text-orange-400">Alpha Research</Badge>
            <Badge colorClass="bg-orange-500/10 text-orange-400">Factor Modeling</Badge>
            <Badge colorClass="bg-orange-500/10 text-orange-400">QuantConnect</Badge>
            <Badge colorClass="bg-orange-500/10 text-orange-400">Liquidity Models</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Skills);
