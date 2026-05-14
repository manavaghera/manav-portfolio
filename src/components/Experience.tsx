import React, { memo } from 'react';

const Badge = ({ children, colorClass }: { children: React.ReactNode, colorClass: string }) => (
  <span className={`px-3 py-1 rounded-md text-xs font-medium ${colorClass} border border-current/10`}>
    {children}
  </span>
);

const Experience = () => {
  return (
    <section id="experience" className="relative z-10 px-4 sm:px-6 flex justify-center items-center py-12 md:py-24">
      <div className="card mx-auto max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl"> 
          <div className="align p-4 sm:p-6"> 
              <span className="red"></span> 
              <span className="yellow"></span> 
              <span className="green"></span> 
          </div> 
      
          <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest px-4">Experience</h1> 
          <div className="p-5 sm:p-8 space-y-8 sm:space-y-12">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">Data Science & ML Intern — Braiy Beam Technologies</h3>
                <p className="text-white/40 text-xs sm:text-sm">Jul 2023 – Aug 2023</p>
              </div>
              <ul className="text-white/70 text-sm sm:text-base space-y-2 list-disc list-inside">
                <li>Worked end-to-end across the ML lifecycle — from raw data collection and cleaning to model training, evaluation, and optimization</li>
                <li>Applied supervised learning on a real-world banking marketing dataset to improve campaign targeting accuracy</li>
                <li>Built and tested predictive models using Python, Pandas, NumPy, and Scikit-learn in a collaborative, delivery-focused environment</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge colorClass="bg-indigo-500/10 text-indigo-400">Python</Badge>
                <Badge colorClass="bg-indigo-500/10 text-indigo-400">Pandas</Badge>
                <Badge colorClass="bg-indigo-500/10 text-indigo-400">NumPy</Badge>
                <Badge colorClass="bg-indigo-500/10 text-indigo-400">Scikit-learn</Badge>
                <Badge colorClass="bg-indigo-500/10 text-indigo-400">Supervised Learning</Badge>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">Bug & Beta Tester — Riot Games</h3>
                <p className="text-white/40 text-xs sm:text-sm">Mar 2024 – Mar 2025</p>
              </div>
              <ul className="text-white/70 text-sm sm:text-base space-y-2 list-disc list-inside">
                <li>Selected to test pre-release gameplay environments for one of the world's most played game studios</li>
                <li>Identified and documented rendering, gameplay, and map-related issues with reproducible steps for the dev team</li>
                <li>Delivered structured bug reports directly to developers, practicing professional technical communication under NDA</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge colorClass="bg-emerald-500/10 text-emerald-400">QA Testing</Badge>
                <Badge colorClass="bg-emerald-500/10 text-emerald-400">Bug Reporting</Badge>
                <Badge colorClass="bg-emerald-500/10 text-emerald-400">Technical Documentation</Badge>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">Quantitative Researcher — WorldQuant Brain 2026</h3>
                <p className="text-white/40 text-xs sm:text-sm">2026 – Present · Active participant</p>
              </div>
              <ul className="text-white/70 text-sm sm:text-base space-y-2 list-disc list-inside">
                <li>Participating in WorldQuant Brain, a global platform for developing and submitting quantitative alpha signals using real financial market data</li>
                <li>Researching and testing data-driven alpha strategies by applying ML techniques to price, volume, and fundamental datasets</li>
                <li>Exploring signal construction, factor modeling, and portfolio performance evaluation in a live research environment</li>
                <li>Combining a background in futures & forex trading with ML tooling to develop systematic, backtested strategies</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge colorClass="bg-orange-500/10 text-orange-400">WorldQuant Brain</Badge>
                <Badge colorClass="bg-orange-500/10 text-orange-400">Alpha Research</Badge>
                <Badge colorClass="bg-orange-500/10 text-orange-400">Factor Modeling</Badge>
                <Badge colorClass="bg-orange-500/10 text-orange-400">ML for Finance</Badge>
                <Badge colorClass="bg-orange-500/10 text-orange-400">QuantConnect</Badge>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default memo(Experience);
