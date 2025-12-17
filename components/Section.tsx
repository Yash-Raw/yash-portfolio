import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  alternate?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "", alternate = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${alternate ? 'bg-white' : 'bg-slate-50'} ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        {title && (
          <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-2 border-b-2 border-blue-500 inline-block">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};