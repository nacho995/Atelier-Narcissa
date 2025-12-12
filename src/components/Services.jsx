import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const tapiceriaServices = [
    { icon: '🛋️', title: 'Tapizado Completo', description: 'Transformamos tus muebles con tejidos premium.' },
    { icon: '🔧', title: 'Restauración', description: 'Devolvemos la vida a tus muebles favoritos.' },
    { icon: '✨', title: 'Limpieza Profesional', description: 'Mantenimiento para prolongar la vida de tus tapizados.' },
    { icon: '🪡', title: 'Cojines y Cortinas', description: 'Textiles decorativos personalizados para tu hogar.' },
  ];

  return (
    <section id="servicios" ref={ref} className="relative min-h-screen flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

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
              Tapicería de Lujo
            </h2>
          </motion.div>

          {/* Separador */}
          <div className="h-16 md:h-24"></div>

          {/* 2. INFO/SERVICIOS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35 }}
          >
            <div className="grid gap-10 md:gap-12 lg:gap-16 sm:grid-cols-2 lg:grid-cols-4">
              {tapiceriaServices.map((service, index) => (
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
