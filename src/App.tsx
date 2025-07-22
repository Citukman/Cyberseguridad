import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Particles from "react-tsparticles";

export default function App() {
  const [showButton, setShowButton] = useState(false);

  // Botón flotante contacto
  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans relative overflow-x-hidden">
      {/* Fondo de partículas */}
      <Particles
        className="absolute inset-0"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#00ffff" },
            links: { enable: true, color: "#00ffff", distance: 150, opacity: 0.4 },
            move: { enable: true, speed: 1 },
            number: { value: 40 },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />

      {/* Botón flotante */}
      {showButton && (
        <motion.a
          href="mailto:cauichcituk@gmail.com"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-3 rounded-full shadow-lg z-50"
        >
          📩 Contáctanos
        </motion.a>
      )}

      {/* HERO */}
      <header className="flex flex-col items-center justify-center h-screen text-center px-4 relative">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg"
        >
          🚀 CyberShield Pro
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl mb-8"
        >
          Protección total para tu negocio digital ✨
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="mailto:cauichcituk@gmail.com"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg text-lg"
        >
          Contáctanos ahora
        </motion.a>
      </header>

      {/* SERVICIOS */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-800 bg-opacity-70 backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">⚡ Servicios de élite</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "🔒 Auditoría de seguridad", desc: "Analizamos y reforzamos tu infraestructura." },
            { title: "🛡️ Protección en tiempo real", desc: "Monitoreo y protección 24/7." },
            { title: "🚀 Respuesta inmediata", desc: "Actuamos al instante ante amenazas." },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="p-6 bg-gray-700/60 rounded-xl shadow-xl backdrop-blur-sm transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PRECIOS */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-900"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">💰 Planes y precios</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Starter",
              price: "$99/mes",
              color: "bg-blue-600 hover:bg-blue-700",
              features: ["Monitoreo básico", "Soporte 24/7"],
            },
            {
              name: "Pro",
              price: "$199/mes",
              color: "bg-green-600 hover:bg-green-700",
              features: ["Monitoreo avanzado", "Reportes semanales", "Respuesta inmediata"],
            },
            {
              name: "Enterprise",
              price: "$499/mes",
              color: "bg-purple-600 hover:bg-purple-700",
              features: ["Protección total", "Analista dedicado", "SLA personalizado"],
            },
          ].map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="p-6 bg-gray-800/70 rounded-xl shadow-md text-center backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-4 text-gray-300 space-y-1">
                {plan.features.map((f, i) => (
                  <li key={i}>✔️ {f}</li>
                ))}
              </ul>
              <a
                href="https://www.paypal.com/paypalme/cauichcituk" // <-- tu enlace de PayPal
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-full inline-block ${plan.color}`}
              >
                Contratar
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FORMULARIO DE CONTACTO */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-800"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">📩 Escríbenos ahora</h2>
        <form
          action={`mailto:cauichcituk@gmail.com`}
          method="POST"
          encType="text/plain"
          className="max-w-lg mx-auto space-y-4"
        >
          <input
            type="text"
            name="Nombre"
            placeholder="Tu nombre"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="email"
            name="Correo"
            placeholder="Tu correo"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
          <textarea
            name="Mensaje"
            placeholder="Tu mensaje"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
            rows={4}
          />
          <button
            type="submit"
            className="w-full p-3 bg-green-600 hover:bg-green-700 rounded-lg shadow-lg font-bold"
          >
            Enviar mensaje
          </button>
        </form>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-gray-800 py-8 text-center mt-10">
        <p className="text-gray-400">© 2025 CyberShield Pro. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://facebook.com" target="_blank" className="hover:text-blue-400">Facebook</a>
          <a href="https://twitter.com" target="_blank" className="hover:text-blue-400">Twitter</a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
                           }
