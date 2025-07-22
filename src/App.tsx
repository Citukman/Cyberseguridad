import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <header className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          🚀 CyberShield Pro
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Protección total para tu negocio digital
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg"
        >
          Contáctanos
        </motion.button>
      </header>

      {/* Servicios */}
      <section className="py-20 px-4 bg-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestros servicios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-700 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🔒 Auditoría de seguridad</h3>
            <p>Analizamos tu infraestructura y encontramos vulnerabilidades.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🛡️ Protección en tiempo real</h3>
            <p>Monitoreamos y protegemos tus sistemas 24/7.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🚀 Respuesta inmediata</h3>
            <p>Actuamos rápido ante cualquier amenaza detectada.</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-20 px-4 bg-gray-900">
        <h2 className="text-3xl font-bold mb-8 text-center">📩 Contáctanos</h2>
        <p className="text-center max-w-xl mx-auto mb-6">
          Escríbenos y uno de nuestros expertos se pondrá en contacto contigo.
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:tuemail@ejemplo.com"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full shadow-lg"
          >
            Enviar correo
          </a>
        </div>
      </section>
    </div>
  );
}

