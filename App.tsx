import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import ContactForm from './components/ContactForm';
import PaymentButton from './components/PaymentButton';

export default function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <Particles
        options={{
          background: { color: { value: '#111827' } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: 'push' },
              onHover: { enable: true, mode: 'repulse' },
              resize: true
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 }
            },
          },
          particles: {
            color: { value: '#38bdf8' },
            links: {
              color: '#38bdf8',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            collisions: { enable: true },
            move: {
              direction: 'none',
              enable: true,
              outModes: { default: 'bounce' },
              random: false,
              speed: 2,
              straight: false
            },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 5 } }
          },
          detectRetina: true
        }}
      />
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 space-y-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-6 text-center">
          Bienvenido a CyberShield Pro
        </h1>
        <p className="text-lg md:text-xl text-center mb-8 max-w-2xl">
          Soluciones de ciberseguridad avanzadas para proteger tu negocio. Contacta con nosotros y comienza hoy mismo.
        </p>
        <PaymentButton />
        <ContactForm />
      </motion.div>
    </div>
  );
}
