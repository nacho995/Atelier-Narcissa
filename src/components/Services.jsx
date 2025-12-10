import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('tapiceria');

  const backgrounds = {
    vestidos: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=1920&q=80',
    tapiceria: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80',
  };

  const vestidosServices = [
    { icon: '👗', title: 'Vestidos de Novia', description: 'Diseños exclusivos hechos a mano con los mejores materiales.' },
    { icon: '✂️', title: 'Arreglos y Ajustes', description: 'Modificaciones profesionales para el ajuste perfecto.' },
    { icon: '🎀', title: 'Confección a Medida', description: 'Creamos cualquier prenda según tus especificaciones.' },
  ];

  const tapiceriaServices = [
    { icon: '🛋️', title: 'Tapizado Completo', description: 'Transformamos tus muebles con tejidos premium.' },
    { icon: '🔧', title: 'Restauración', description: 'Devolvemos la vida a tus muebles favoritos.' },
    { icon: '✨', title: 'Limpieza Profesional', description: 'Mantenimiento para prolongar la vida de tus tapizados.' },
    { icon: '🪡', title: 'Cojines y Cortinas', description: 'Textiles decorativos personalizados para tu hogar.' },
  ];

  const currentServices = activeTab === 'vestidos' ? vestidosServices : tapiceriaServices;

  return (
    <section id="servicios" ref={ref} className="relative min-h-screen flex items-center justify-center">
      {/* Background dinámico */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgrounds[activeTab]})` }}
          />
          <div className="absolute inset-0 bg-black/80" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full py-20">
        <div className="container max-w-6xl mx-auto px-6 md:px-8">
          
          {/* 1. TÍTULO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[var(--gold)] text-xs md:text-sm tracking-[0.4em] uppercase mb-6">
              Nuestros Servicios
            </p>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white">
              Dos Especialidades
            </h2>
          </motion.div>

          {/* Separador */}
          <div className="h-16 md:h-20"></div>

          {/* 2. FILTROS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="flex gap-4 md:gap-6">
              <button
                onClick={() => setActiveTab('vestidos')}
                className={`px-8 py-4 md:px-10 md:py-5 rounded-full font-medium text-base md:text-lg transition-all duration-300 ${
                  activeTab === 'vestidos' 
                    ? 'bg-[var(--burgundy)] text-white' 
                    : 'bg-white/10 text-white/60 hover:bg-white/15 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl">👗</span>
                  <span>Vestidos</span>
                </span>
              </button>

              <button
                onClick={() => setActiveTab('tapiceria')}
                className={`px-8 py-4 md:px-10 md:py-5 rounded-full font-medium text-base md:text-lg transition-all duration-300 ${
                  activeTab === 'tapiceria' 
                    ? 'bg-[var(--burgundy)] text-white' 
                    : 'bg-white/10 text-white/60 hover:bg-white/15 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-xl">🛋️</span>
                  <span>Tapicería</span>
                </span>
              </button>
            </div>
          </motion.div>

          {/* Separador */}
          <div className="h-16 md:h-24"></div>

          {/* 3. INFO/SERVICIOS */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <div className={`grid gap-10 md:gap-12 lg:gap-16 ${currentServices.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
                {currentServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="group text-center"
                  >
                    <div className="text-5xl md:text-6xl mb-6">{service.icon}</div>
                    <h3 className="font-serif text-xl md:text-2xl text-white mb-4 group-hover:text-[var(--gold)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-[250px] mx-auto">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Separador */}
          <div className="h-20 md:h-28"></div>

          {/* 4. BOTÓN CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-4 px-12 py-6 md:px-14 md:py-7 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-black text-lg md:text-xl font-bold rounded-full transition-all duration-300 shadow-2xl shadow-[var(--gold)]/30 hover:shadow-[var(--gold)]/50 hover:scale-105"
            >
              Solicitar Presupuesto
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;
