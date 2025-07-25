import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus('Por favor llena todos los campos');
      return;
    }
    emailjs.send('service_5ehoqvh', 'template_b3wxyze', {
      from_name: name,
      from_email: email,
      message: message
    }, 'dqnqfsBDuc_r9L0Oo')
    .then(() => {
      setStatus('¡Mensaje enviado con éxito!');
      setName(''); setEmail(''); setMessage('');
    }, () => setStatus('Hubo un error al enviar.'));
  };

  return (
    <form onSubmit={sendEmail} className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4 max-w-md w-full">
      <h2 className="text-2xl font-bold mb-2 text-cyan-400">Contáctanos</h2>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Tu nombre" className="w-full p-2 rounded text-black"/>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Tu correo" className="w-full p-2 rounded text-black"/>
      <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Mensaje" className="w-full p-2 rounded text-black"/>
      <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-xl">Enviar</button>
      {status && <p className="mt-2">{status}</p>}
    </form>
  );
}
