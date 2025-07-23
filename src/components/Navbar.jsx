import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur border-b border-blue-900/30 shadow' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-500">Ricardo Lagna</h1>

        {/* Botão mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu normal (PC e tablet) */}
        <ul className="hidden md:flex gap-6 text-sm text-gray-300 font-medium">
          <li>
            <Link to="home" smooth duration={500} onClick={closeMenu} className="cursor-pointer hover:text-blue-400 transition">
              Início
            </Link>
          </li>
          <li>
            <Link to="sobre" smooth duration={500} onClick={closeMenu} className="cursor-pointer hover:text-blue-400 transition">
              Sobre
            </Link>
          </li>
          <li>
            <Link to="projects" smooth duration={500} onClick={closeMenu} className="cursor-pointer hover:text-blue-400 transition">
              Projetos
            </Link>
          </li>
          <li>
            <Link to="contact" smooth duration={500} onClick={closeMenu} className="cursor-pointer hover:text-blue-400 transition">
              Contacto
            </Link>
          </li>
        </ul>

        <a
          href="https://www.linkedin.com/in/ricardo-lagna-962ba0200/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </nav>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-blue-900 px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-300 font-medium">
            <li>
              <Link to="home" smooth duration={500} onClick={closeMenu} className="cursor-pointer hover:text-blue-400 transition">
                Início
              </Link>
            </li>
            <li>
              <Link to="sobre" smooth duration={500} onClick={closeMenu} className="cursor-pointer hover:text-blue-400 transition">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="projects" smooth duration={500} onClick={closeMenu} className="cursor-pointer hover:text-blue-400 transition">
                Projetos
              </Link>
            </li>
            <li>
              <Link to="contact" smooth duration={500} onClick={closeMenu} className="cursor-pointer hover:text-blue-400 transition">
                Contacto
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ricardo-lagna-962ba0200/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
