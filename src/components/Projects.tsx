import React, { memo } from 'react';

const Badge = ({ children, colorClass }: { children: React.ReactNode, colorClass: string }) => (
  <span className={`px-3 py-1 rounded-md text-xs font-medium ${colorClass} border border-current/10`}>
    {children}
  </span>
);

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 px-4 sm:px-6 flex justify-center items-center py-12 md:py-24">
      <div className="card mx-auto max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl"> 
          <div className="align p-4 sm:p-6"> 
              <span className="red"></span> 
              <span className="yellow"></span> 
              <span className="green"></span> 
          </div> 
      
          <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest px-4">Projects</h1> 
          <div className="p-5 sm:p-8 space-y-8 sm:space-y-12">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">CHRONUS — AI Personality Modeling System</h3>
                <p className="text-white/40 text-xs sm:text-sm">Feb 2026 – Present · Solo developer</p>
              </div>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed text-pretty">
                CHRONUS is an AI platform that reconstructs the conversational style and voice of public personalities using scraped text, audio datasets, and behavioral patterns. It goes beyond chatbots — combining local LLMs, semantic retrieval, and voice cloning to produce eerily realistic outputs.
              </p>
              <ul className="text-white/70 text-sm sm:text-base space-y-2 list-disc list-inside">
                <li>Integrated Llama 3 via Ollama with personality-specific system prompts and semantic memory using ChromaDB + Sentence-BERT</li>
                <li>Implemented realistic voice cloning with ElevenLabs and XTTS-v2 for audio output</li>
                <li>Built a full-stack interface using Flask (backend) and React + TypeScript + Tailwind CSS (frontend)</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge colorClass="bg-purple-500/10 text-purple-400">Python</Badge>
                <Badge colorClass="bg-purple-500/10 text-purple-400">Flask</Badge>
                <Badge colorClass="bg-purple-500/10 text-purple-400">React</Badge>
                <Badge colorClass="bg-purple-500/10 text-purple-400">TypeScript</Badge>
                <Badge colorClass="bg-purple-500/10 text-purple-400">Llama 3</Badge>
                <Badge colorClass="bg-purple-500/10 text-purple-400">ChromaDB</Badge>
                <Badge colorClass="bg-purple-500/10 text-purple-400">Sentence-BERT</Badge>
                <Badge colorClass="bg-purple-500/10 text-purple-400">Whisper</Badge>
                <Badge colorClass="bg-purple-500/10 text-purple-400">ElevenLabs</Badge>
                <Badge colorClass="bg-purple-500/10 text-purple-400">XTTS-v2</Badge>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">Medical Diagnosis & Recommendation System</h3>
                <p className="text-white/40 text-xs sm:text-sm">Jan 2025 · Hackathon project · Top 10 + SIH Semi-Finalist</p>
              </div>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed text-pretty">
                Built under hackathon pressure — a symptom-based diagnosis engine that classifies illness and recommends appropriate medication and precautions using structured healthcare datasets.
              </p>
              <ul className="text-white/70 text-sm sm:text-base space-y-2 list-disc list-inside">
                <li>Applied ML classification techniques to map user-reported symptoms to likely diagnoses</li>
                <li>Provided structured medical guidance including precautions and recommended treatments</li>
                <li>Placed Top 10 at university level and advanced to SIH (Smart India Hackathon) semi-finals</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge colorClass="bg-teal-500/10 text-teal-400">Python</Badge>
                <Badge colorClass="bg-teal-500/10 text-teal-400">Scikit-learn</Badge>
                <Badge colorClass="bg-teal-500/10 text-teal-400">ML Classification</Badge>
                <Badge colorClass="bg-teal-500/10 text-teal-400">Healthcare Data</Badge>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default memo(Projects);
