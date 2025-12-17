import React from 'react';
import { ChevronDown, GraduationCap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative bg-gradient-to-b from-blue-50 to-slate-50">
      <div className="max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
          <GraduationCap className="w-4 h-4" />
          <span>Freshman Student</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          Hi, I'm <span className="text-blue-600">Yash Chaurasia</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 font-light">
          First-year student learning <span className="font-medium text-slate-800">Web Development</span> and <span className="font-medium text-slate-800">AI</span>.
        </p>
        
        <p className="text-slate-500 max-w-lg mx-auto text-base md:text-lg">
          Welcome to my learning portfolio. I'm documenting my journey from basics to building real applications.
        </p>

        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#about" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            About Me
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-colors shadow-sm"
          >
            See My Progress
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce text-slate-400">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};