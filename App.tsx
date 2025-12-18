import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { SkillCard } from './components/SkillCard';
import { ProjectCard } from './components/ProjectCard';
import { SkillCategory, Project } from './types';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const skillsData: SkillCategory[] = [
  {
    title: "Web Development",
    iconName: "web",
    skills: [
      { name: "HTML5", level: "Basic" },
      { name: "CSS3", level: "Basic" },
      { name: "JavaScript", level: "Basic" },
      { name: "React", level: "Learning" }
    ]
  },
  {
    title: "Backend (Basics)",
    iconName: "backend",
    skills: [
      { name: "Node.js", level: "Introductory" },
      { name: "Express", level: "Introductory" }
    ]
  },
  {
    title: "Python & Data",
    iconName: "data",
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "NumPy", level: "Basic" },
      { name: "Pandas", level: "Basic" }
    ]
  },
  {
    title: "AI Fundamentals",
    iconName: "ai",
    skills: [
      { name: "Machine Learning", level: "Introductory" },
      { name: "LLMs & RAG", level: "Conceptual" },
      { name: "Transformers", level: "Conceptual" }
    ]
  }
];

const projectsData: Project[] = [
  {
    title: "Personal Portfolio Website",
    description: "This website itself! Built to practice HTML, CSS, and component structure. It serves as my digital resume.",
    tags: ["HTML/CSS", "Design", "Responsive"],
    type: "Practice"
  },
  {
    title: "JavaScript Logic Drills",
    description: "A collection of small scripts solving algorithmic problems to strengthen my understanding of loops, arrays, and functions.",
    tags: ["JavaScript", "Logic", "Algorithms"],
    type: "Learning"
  },
  {
    title: "ML Practice Notebooks",
    description: "Jupyter notebooks exploring basic datasets using Pandas and simple regression models with Scikit-Learn.",
    tags: ["Python", "Pandas", "Data Analysis"],
    type: "Learning"
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />

      <Section id="about" title="About Me" alternate>
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
          <p className="mb-4">
            Hello! I'm <strong>Yash Chaurasia</strong>, a Freshman (first-year student) passionate about technology. 
            I am currently in the early stages of my journey into Software Engineering.
          </p>
          <p className="mb-4">
            My focus right now is on building a strong foundation in <strong>Full Stack Web Development</strong> and understanding the core concepts of <strong>Artificial Intelligence</strong>. 
            I believe in learning by doing, even if it means starting with small, simple projects.
          </p>
          <p>
            I am not a professional developer yet, but I am a dedicated learner eager to explore how web technologies and AI can work together.
          </p>
        </div>
      </Section>

      <Section id="skills" title="Current Skills">
        <p className="text-slate-500 mb-8 max-w-2xl">
          Here is an honest overview of what I know so far. I prioritize understanding the "why" and "how" over just memorizing syntax.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </Section>

      <Section id="projects" title="Learning Projects" alternate>
        <div className="grid grid-cols-1 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            * More projects will be added as I learn new concepts.
          </p>
        </div>
      </Section>

      <Section id="journey" title="Learning Journey">
        <div className="space-y-8 border-l-2 border-slate-200 ml-3 pl-8 relative">
          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-500"></span>
            <h3 className="font-bold text-slate-900">Current Focus</h3>
            <p className="text-sm text-slate-500 mb-2">Present</p>
            <p className="text-slate-600">
              Deepening my knowledge of JavaScript asynchronous patterns and exploring basic React hooks. Simultaneously reading about how RAG (Retrieval-Augmented Generation) systems work conceptually.
            </p>
          </div>
          
          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-slate-300"></span>
            <h3 className="font-bold text-slate-900">Started Web Dev</h3>
            <p className="text-sm text-slate-500 mb-2">3 Months Ago</p>
            <p className="text-slate-600">
              Completed introductory tutorials on HTML5, CSS3 flexbox/grid, and vanilla JavaScript DOM manipulation.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-slate-300"></span>
            <h3 className="font-bold text-slate-900">Python Foundations</h3>
            <p className="text-sm text-slate-500 mb-2">6 Months Ago</p>
            <p className="text-slate-600">
              Learned Python syntax, data types, and basic data analysis using NumPy and Pandas libraries.
            </p>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Get in Touch" alternate>
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            I'm always open to advice from seniors, internship opportunities, or just connecting with fellow learners.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto: dev.yashchaurasia1@gmail.com" className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors">
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            <a href="https://linkedin.com/in/yash-chaurasia-a503a2368" className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg font-medium hover:bg-slate-700 transition-colors">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Yash-Raw" className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg font-medium hover:bg-slate-700 transition-colors">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </Section>

      <footer className="bg-slate-50 py-8 text-center text-slate-400 text-sm border-t border-slate-200">
        <p>© {new Date().getFullYear()} Yash Chaurasia. Built while learning React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default App;
