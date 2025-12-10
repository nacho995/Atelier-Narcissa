import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import craftsmanHands from '../assets/craftsman-hands.png';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="nosotros" ref={ref} className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fafafa] via-[#f5f5f5] to-[#ffffff]" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(184,147,95,0.1) 2px, rgba(184,147,95,0.1) 3px), repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(125,30,58,0.05) 2px, rgba(125,30,58,0.05) 3px)`
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[var(--gold)]/10 via-[var(--gold)]/3 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[var(--burgundy)]/8 via-[var(--burgundy)]/2 to-transparent rounded-full blur-3xl" />
      
      {/* Fade Transitions */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#fafafa] to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1a1a1a] to-transparent pointer-events-none z-20" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl rounded-2xl">
              <img
                src={craftsmanHands}
                alt="Artesana trabajando con dedicación"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-8 border-white/20 pointer-events-none rounded-2xl" />
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-[var(--navy)] text-white p-6 sm:p-8 shadow-2xl rounded-xl"
            >
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-serif text-[var(--gold)] mb-2 font-semibold">29+</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest opacity-90">
                  Años de<br />Excelencia
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-[var(--gold)] text-sm tracking-[0.25em] uppercase mb-6 font-semibold">
              Atelier Narcisa
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--navy)] mb-6 leading-tight">
              Tradición artesanal
              <br />
              <span className="text-[var(--burgundy)] italic">en cada puntada</span>
            </h2>

            <div className="divider-luxury mb-8" />

            <div className="space-y-6 text-[var(--charcoal)]/80 text-base sm:text-lg leading-relaxed">
              <p>
                Desde 1995, <strong className="text-[var(--charcoal)]">Atelier Narcisa</strong> es sinónimo de 
                excelencia artesanal. Combinamos dos pasiones: la <strong>confección de vestidos de novia</strong> únicos 
                y la <strong>tapicería de alta calidad</strong>.
              </p>

              <p>
                Cada proyecto es tratado con dedicación absoluta. Ya sea tu vestido de novia soñado 
                o la renovación de tu sofá favorito, aplicamos el mismo nivel de cuidado y perfección.
              </p>

              <p className="text-[var(--burgundy)] font-semibold text-lg sm:text-xl">
                No solo creamos piezas, creamos recuerdos que perduran.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-[var(--charcoal)]/10"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-serif text-[var(--burgundy)] font-semibold mb-1">3500+</div>
                <div className="text-xs sm:text-sm text-[var(--charcoal)]/60 tracking-wider uppercase">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-serif text-[var(--burgundy)] font-semibold mb-1">100%</div>
                <div className="text-xs sm:text-sm text-[var(--charcoal)]/60 tracking-wider uppercase">Artesanal</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-serif text-[var(--burgundy)] font-semibold mb-1">A+</div>
                <div className="text-xs sm:text-sm text-[var(--charcoal)]/60 tracking-wider uppercase">Calidad</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
