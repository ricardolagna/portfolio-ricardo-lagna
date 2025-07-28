import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-blue-900/40 py-6 text-center text-sm text-gray-400 px-4">
      <p className="transition duration-300 hover:text-blue-500">
        © {new Date().getFullYear()} <span className="text-blue-500 font-medium">Ricardo Lagna</span>. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
