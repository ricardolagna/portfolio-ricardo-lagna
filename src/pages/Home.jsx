import React from 'react';
import { Link } from 'react-scroll';

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-br from-black via-[#0f172a] to-[#1e293b]"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
        Olá, o meu nome é <span className="text-blue-500">Ricardo Lagna</span>
      </h1>

      <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10">
        A começar a minha jornada como <span className="text-blue-400 font-semibold">Front-End Developer</span>,
        focado em criar experiências modernas e funcionais.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300"
        >
          Ver Projetos
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer px-6 py-3 border-2 border-blue-600 text-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Contactar-me
        </Link>
      </div>
    </section>
  );
}

export default Home;

