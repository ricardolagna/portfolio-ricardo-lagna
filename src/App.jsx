import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white scroll-smooth">
      {/* Barra de navegação fixa */}
      <Navbar />

      {/* Conteúdo principal com margem superior para compensar o navbar fixo */}
      <main className="pt-24">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default App;

