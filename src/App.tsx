import { motion } from "framer-motion";
import { useState } from "react";
import ContactForm from "./componentes/ui/ContactForm";
import PaymentButton from "./componentes/ui/PaymentButton";

// Chat Widget simple
function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-72 h-96 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-gray-800 dark:text-white">💬 Chat Soporte</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-red-500 font-bold"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto text-sm text-gray-700 dark:text-gray-300 mb-2">
            <p><strong>Agente:</strong> ¡Hola! ¿En qué podemos ayudarte hoy?</p>
          </div>
          <input
            type="text"
            placeholder="Escribe tu mensaje..."
            className="border rounded px-2 py-1 text-sm text-gray-800 dark:text-gray-100 dark:bg-gray-700"
          />
        </div>
      ) : (
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => setOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 shadow-2xl flex items-center justify-center text-3xl"
        >
          💬
        </motion.button>
      )}
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <div className="min-h-screen p-6 transition-colors duration-500">
        {/* Botón de Dark/Light */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300"
          >
            {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
          </button>
        </div>

        {/* Hero */}
        <header className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            🚀 CyberShield Pro
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl">
            Protección total para tu negocio digital con tecnología de vanguardia.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg text-white font-bold"
          >
            Contáctanos
          </motion.button>
        </header>

        {/* Servicios */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-md"
          >
            🔒 <h2 className="text-xl font-bold mb-2">Seguridad Web</h2>
            <p>Auditorías, protección avanzada y defensa ante ataques.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-md"
          >
            💳 <h2 className="text-xl font-bold mb-2">Pagos Seguros</h2>
            <p>Integración de pasarelas y pagos automáticos.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-md"
          >
            ⚡ <h2 className="text-xl font-bold mb-2">Optimización</h2>
            <p>Rendimiento al máximo con nuestras soluciones a medida.</p>
          </motion.div>
        </section>

        {/* Formulario de contacto */}
        <section className="mb-12">
          <ContactForm />
        </section>

        {/* Botón de pago */}
        <section className="mb-12">
          <PaymentButton />
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 dark:text-gray-400 mt-16">
          © {new Date().getFullYear()} CyberShield Pro. Todos los derechos reservados.
        </footer>
      </div>

      {/* Chat flotante */}
      <ChatWidget />
    </div>
  );
}
