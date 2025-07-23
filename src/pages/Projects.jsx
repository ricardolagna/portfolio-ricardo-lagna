import React from 'react';
import akiraImg from '../assets/akira.png';
import QuizImg from '../assets/Quiz.jpg';
import gestorImg from '../assets/gestor.jpg';

const projects = [
  {
    title: 'Gestor de Tarefas Inteligente',
    description:
      'To-Do App com Inteligência Artificial — Gestão de tarefas inteligente e visual moderno.',
    image: gestorImg,
    link: 'https://gestordetarefas2025.netlify.app'
  },
  {
    title: 'Tributo a Akira Toriyama',
    description:
      'Site dedicado à homenagem ao lendário mangaká Akira Toriyama, criado com foco visual e organização de conteúdo.',
    image: akiraImg,
    link: 'https://projetoakira.netlify.app'
  },
  {
    title: 'Quiz Interativo',
    description:
      'Aplicação de quiz com perguntas sobre anime, futebol e música. Desenvolvido com React, Tailwind e lógica dinâmica de pontuação.',
    image: QuizImg,
    link: 'https://quiz-ricardo.netlify.app'
  }
];

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 text-gray-300">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Projetos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0f172a] rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] hover:shadow-xl transition duration-300 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="mb-4 flex-grow">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-4 py-2 border border-blue-500 text-blue-400 rounded hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Ver Projeto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
