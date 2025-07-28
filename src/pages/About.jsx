import React from 'react';
import ricardoImg from '../assets/ricardo.png'; // Garante que o ficheiro está mesmo nesta pasta

function About() {
  return (
    <section
      id="sobre"
      className="max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12"
    >
      {/* TEXTO */}
      <div className="md:w-1/2 text-gray-300 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Sobre Mim</h2>

        <p>
          O meu nome é <span className="text-blue-400 font-semibold">Ricardo Lagna</span> e estou a iniciar a minha jornada como <strong>Front-End Developer</strong>.
        </p>

        <p>
          Concluí o curso de Desenvolvimento Web na <strong className="text-white">Tokio School</strong>, e desde então venho a desenvolver projetos reais que têm contribuído para o meu crescimento profissional.
        </p>

        <p>
          Tenho experiência em <strong className="text-white">HTML, CSS, JavaScript, React e PHP</strong>, e estou sempre a aprender e evoluir como developer.
        </p>

        <p>
          Estou disponível para colaborações, projetos freelance ou oportunidades de trabalho na área de desenvolvimento web.
        </p>
      </div>

      {/* IMAGEM */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={ricardoImg}
          alt="Ricardo Lagna"
          className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
}

export default About;
