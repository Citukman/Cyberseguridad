import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import ContactForm from './components/ContactForm';
import PaymentButton from './components/PaymentButton';

export default function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <Particles options={{ background:{color:{value:'#111827'}}, fpsLimit:60,
        interactivity:{events:{onClick:{enable:true,mode:'push'},onHover:{enable:true,mode:'repulse'},resize:true},
        modes:{push:{quantity:4},repulse:{distance:100,duration:0.4}}},
        particles:{color:{value:'#38bdf8'},links:{color:'#38bdf8',distance:150,enable:true,opacity:0.5,width:1},
        collisions:{enable:true},move:{direction:'none',enable:true,outModes:{default:'bounce'},speed:2},
        number:{density:{enable:true,area:800},value:60},opacity:{value:0.5},shape:{type:'circle'},size:{value:{min:1,max:5}}},
        detectRetina:true }}/>
      <motion.div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 space-y-20 pt-10">
        <motion.section initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}} className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-6 animate-pulse">
            Bienvenido a CyberShield Pro
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Soluciones de ciberseguridad avanzadas para proteger tu negocio.
          </p>
        </motion.section>

        <motion.section initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}} className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-yellow-400">¿Quiénes somos?</h2>
          <p>Somos un equipo apasionado por la ciberseguridad, dedicado a brindar protección digital y tranquilidad a nuestros clientes.</p>
        </motion.section>

        <motion.section initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}} className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-800 rounded-xl shadow">🔐 Análisis de vulnerabilidades</div>
            <div className="p-4 bg-gray-800 rounded-xl shadow">🛡️ Protección contra malware</div>
            <div className="p-4 bg-gray-800 rounded-xl shadow">⚡ Respuesta a incidentes</div>
          </div>
        </motion.section>

        <motion.section initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}} className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-pink-400 mb-4">Planes y Precios</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-800 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Básico</h3>
              <p className="mb-2">$99 / mes</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Profesional</h3>
              <p className="mb-2">$199 / mes</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Empresarial</h3>
              <p className="mb-2">$299 / mes</p>
            </div>
          </div>
        </motion.section>

        <PaymentButton />
        <ContactForm />

        <footer className="mt-10 text-sm text-gray-400">© 2025 CyberShield Pro. Todos los derechos reservados.</footer>
      </motion.div>

      <a href="https://wa.me/5219999999999?text=Hola!%20Quiero%20más%20información%20de%20CyberShield%20Pro" className="whatsapp-button">💬</a>
    </div>
  );
}
