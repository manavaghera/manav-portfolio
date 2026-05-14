import React, { memo } from 'react';

const About = () => {
  return (
    <section id="about" className="relative z-10 px-4 sm:px-6 flex justify-center items-center py-12 md:py-20">
      <div className="card mx-auto max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl"> 
          <div className="align p-4 sm:p-6"> 
              <span className="red"></span> 
              <span className="yellow"></span> 
              <span className="green"></span> 
          </div> 
      
          <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest px-4">About Me</h1> 
          <div className="p-5 sm:p-8 space-y-4 sm:space-y-6">
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed text-pretty">
              I'm a Computer Science student at Parul University with a passion that sits at the crossroads of AI engineering and quantitative finance. Right now I'm deep in building <span className="text-white font-semibold">CHRONUS</span> — an AI platform that reconstructs the personality, reasoning style, and voice of public figures using scraped data, local LLMs, and voice cloning. It's the kind of project that keeps me up at 2am, and I wouldn't have it any other way.
            </p>
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed text-pretty">
              Alongside that, I'm an active participant in the <span className="text-white font-semibold">WorldQuant Brain 2026</span> program — researching and submitting quantitative alpha signals using real financial market data. I approach markets the same way I approach AI: with curiosity, a bias toward experimentation, and a healthy obsession with understanding what's actually happening under the surface.
            </p>
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed text-pretty">
              I've interned in data science, beta tested games for Riot Games, and spent years learning futures and forex markets through live trading. Every experience has sharpened the same instinct — find the signal in the noise, build something useful, and iterate fast.
            </p>
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed text-pretty">
              I don't wait for perfect conditions. I open a terminal, start with what I know, and figure out the rest as I go. I'm not a prompt engineer — I'm someone who builds the systems behind the prompts. From setting up local LLMs, to wiring vector databases, to cloning voices, I go deep on the stack because I want to understand how things actually work, not just what they output.
            </p>
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed italic text-pretty">
              If you're building something at the edge of AI and finance — or just want to talk shop about LLMs, markets, or vibe coding at 3am — let's connect.
            </p>
          </div>
      </div>
    </section>
  );
};

export default memo(About);
