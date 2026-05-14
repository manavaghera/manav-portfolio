import React, { memo } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 bg-black py-16 md:py-24 px-4 sm:px-6 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-8 md:mb-12" style={{ fontFamily: "'Instrument Serif', serif" }}>Get In Touch</h2>
        
        <div className="flex justify-center mb-12 md:mb-16">
          <a href="/Resume.pdf" download="Resume.pdf" className="cursor-target min-h-[44px] flex items-center">
            <button className="cta active:scale-95 transition-transform"> 
              <span>Download Resume</span> 
            </button>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-12">
          <a 
            href="https://github.com/manavaghera" 
            target="_blank" 
            rel="noreferrer" 
            className="cursor-target liquid-glass px-6 sm:px-8 py-4 rounded-full flex items-center gap-3 text-white/80 hover:text-white transition-all active:scale-95 min-h-[44px] w-full sm:w-auto justify-center"
          >
            <Github size={24} />
            <span className="font-medium">GitHub</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/manav-aghera/" 
            target="_blank" 
            rel="noreferrer" 
            className="cursor-target liquid-glass px-6 sm:px-8 py-4 rounded-full flex items-center gap-3 text-white/80 hover:text-white transition-all active:scale-95 min-h-[44px] w-full sm:w-auto justify-center"
          >
            <Linkedin size={24} />
            <span className="font-medium">LinkedIn</span>
          </a>
          
          <a 
            href="mailto:manavaghera@yahoo.com" 
            className="cursor-target liquid-glass px-6 sm:px-8 py-4 rounded-full flex items-center gap-3 text-white/80 hover:text-white transition-all active:scale-95 min-h-[44px] w-full sm:w-auto justify-center"
          >
            <Mail size={24} />
            <span className="font-medium">Email Me</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
