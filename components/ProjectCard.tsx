import React from 'react';
import { Project } from '../types';
import { FolderGit2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-300 transition-colors group">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <FolderGit2 className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
          <h3 className="font-bold text-lg text-slate-900">{project.title}</h3>
        </div>
        <span className="text-xs font-semibold px-2 py-1 bg-blue-50 text-blue-700 rounded-full uppercase tracking-wider">
          {project.type}
        </span>
      </div>
      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span key={index} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};