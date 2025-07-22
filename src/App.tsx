import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* HERO */}
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

      {/* SERVICIOS */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-800"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Nuestros servicios
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-700 rounded-xl shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">🔒 Auditoría de seguridad</h3>
            <p>Analizamos tu infraestructura y encontramos vulnerabilidades.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-xl shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">🛡️ Protección en tiempo real</h3>
            <p>Monitoreamos y protegemos tus sistemas 24/7.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-xl shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">🚀 Respuesta inmediata</h3>
            <p>Actuamos rápido ante cualquier amenaza detectada.</p>
          </div>
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
          <div className="p-6 bg-gray-800 rounded-xl shadow-md text-center hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-4xl font-bold mb-4">$99<span className="text-base">/mes</span></p>
            <ul className="mb-4 text-gray-300">
              <li>✔️ Monitoreo básico</li>
              <li>✔️ Soporte 24/7</li>
            </ul>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full">
              Contratar
            </button>
          </div>

          <div className="p-6 bg-gray-800 rounded-xl shadow-md text-center border-2 border-blue-500 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-4xl font-bold mb-4">$199<span className="text-base">/mes</span></p>
            <ul className="mb-4 text-gray-300">
              <li>✔️ Monitoreo avanzado</li>
              <li>✔️ Reportes semanales</li>
              <li>✔️ Respuesta inmediata</li>
            </ul>
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full">
              Contratar
            </button>
          </div>

          <div className="p-6 bg-gray-800 rounded-xl shadow-md text-center hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-4xl font-bold mb-4">$499<span className="text-base">/mes</span></p>
            <ul className="mb-4 text-gray-300">
              <li>✔️ Protección total</li>
              <li>✔️ Analista dedicado</li>
              <li>✔️ SLA personalizado</li>
            </ul>
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full">
              Contratar
            </button>
          </div>
        </div>
      </motion.section>

      {/* CONTACTO */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gray-800"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">📩 Contáctanos</h2>
        <p className="text-center max-w-xl mx-auto mb-6">
          Escríbenos y uno de nuestros expertos se pondrá en contacto contigo.
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:tucorreo@ejemplo.com"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full shadow-lg"
          >
            Enviar correo
          </a>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-gray-800 py-8 text-center mt-10">
        <p className="text-gray-400">
          © 2025 CyberShield Pro. Todos los derechos reservados.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://facebook.com" target="_blank" className="hover:text-blue-400">Facebook</a>
          <a href="https://twitter.com" target="_blank" className="hover:text-blue-400">Twitter</a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
