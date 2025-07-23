import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_yci6u0k',      // Service ID
        'template_luvbodr',     // Template ID
        formData,
        'jMw6H5K7i-i4WZ1ui'     // Public key
      )
      .then(() => {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Erro ao enviar:', error);
        setSuccess(false);
      });
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-20 text-gray-300">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        Contacto
      </h2>

      {success && (
        <p className="text-green-400 text-center mb-6 font-medium">
          Obrigado! A tua mensagem foi enviada com sucesso.
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded bg-[#1a1a1a] text-white border border-gray-600 focus:outline-none focus:border-blue-500 transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded bg-[#1a1a1a] text-white border border-gray-600 focus:outline-none focus:border-blue-500 transition"
        />

        <textarea
          name="message"
          placeholder="Mensagem"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-3 rounded bg-[#1a1a1a] text-white border border-gray-600 focus:outline-none focus:border-blue-500 transition"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
}

export default Contact;

