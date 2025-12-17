import React from 'react';
import { SkillCategory } from '../types';
import { Code2, Server, Database, Brain } from 'lucide-react';

interface SkillCardProps {
  category: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'web': return <Code2 className="w-6 h-6 text-blue-500" />;
      case 'backend': return <Server className="w-6 h-6 text-green-500" />;
      case 'data': return <Database className="w-6 h-6 text-purple-500" />;
      case 'ai': return <Brain className="w-6 h-6 text-orange-500" />;
      default: return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-slate-50 rounded-lg">
          {getIcon(category.iconName)}
        </div>
        <h3 className="font-bold text-lg text-slate-800">{category.title}</h3>
      </div>
      <ul className="space-y-2">
        {category.skills.map((skill, index) => (
          <li key={index} className="flex items-start justify-between text-slate-600 text-sm">
            <span className="font-medium">{skill.name}</span>
            {skill.level && (
              <span className="text-xs px-2 py-0.5 bg-slate-100 rounded-full text-slate-500">
                {skill.level}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};