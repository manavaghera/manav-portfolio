import React, { memo } from 'react';

const Education = () => {
  return (
    <section id="education" className="relative z-10 px-4 sm:px-6 flex justify-center items-center py-12 md:py-24">
      <div className="card mx-auto max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl"> 
          <div className="align p-4 sm:p-6"> 
              <span className="red"></span> 
              <span className="yellow"></span> 
              <span className="green"></span> 
          </div> 
      
          <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest px-4">Education</h1> 
          <div className="p-5 sm:p-8 space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white">B.Tech, Computer Science Engineering</h3>
              <p className="text-white/60 text-sm sm:text-base">Parul University, Vadodara · 2027</p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white">Diploma, Computer Engineering</h3>
              <p className="text-white/60 text-sm sm:text-base">NG Patel Polytechnic, Bardoli · 2024</p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default memo(Education);
