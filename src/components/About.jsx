import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="nosotros"
      ref={ref}
      className="section bg-[var(--cream)] relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--burgundy)] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--gold)] opacity-5 rounded-full blur-3xl" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
              <img
                src="/src/assets/craftsman-hands.png"
                alt="Artesano trabajando con precisión"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-8 border-white/20 pointer-events-none" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-[var(--navy)] text-white p-6 sm:p-8 md:p-10 shadow-2xl rounded-sm"
            >
              <div className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-serif text-[var(--gold)] mb-2 font-semibold leading-none">
                  29+
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest opacity-90">
                  Años de
                  <br />
                  Excelencia
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-block text-[var(--burgundy)] text-sm tracking-[0.25em] uppercase mb-6 font-semibold"
            >
              Atelier Narcissa
            </motion.span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--navy)] mb-4 sm:mb-6 leading-tight">
              Tradición y elegancia
              <br />
              <span className="text-[var(--burgundy)] italic">
                en cada detalle
              </span>
            </h2>

            <div className="divider-luxury mb-6 sm:mb-8" />

            <div className="space-y-4 sm:space-y-6 text-[var(--gray)] text-base sm:text-lg leading-relaxed">
              <p>
                Desde 1995, <strong className="text-[var(--charcoal)]">Atelier Narcissa</strong> se
                dedica al arte de la tapicería de lujo. Cada proyecto es único,
                combinando técnicas artesanales tradicionales con diseños
                contemporáneos sofisticados.
              </p>

              <p>
                Nuestro equipo de artesanos expertos transforma sofás, sillones
                y muebles antiguos en piezas únicas que reflejan tu estilo
                personal y perduran en el tiempo.
              </p>

              <p className="text-[var(--burgundy)] font-semibold text-lg sm:text-xl leading-relaxed">
                No solo restauramos muebles, creamos legados.
              </p>
            </div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12 pt-8 sm:pt-10 md:pt-12 border-t border-[var(--charcoal)]/10"
            >
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-[var(--burgundy)] font-semibold mb-1 sm:mb-2 leading-none">
                  3500+
                </div>
                <div className="text-xs sm:text-sm text-[var(--gray)] tracking-wider uppercase">
                  Proyectos
                </div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-[var(--burgundy)] font-semibold mb-1 sm:mb-2 leading-none">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-[var(--gray)] tracking-wider uppercase">
                  Artesanal
                </div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-[var(--burgundy)] font-semibold mb-1 sm:mb-2 leading-none">
                  A+
                </div>
                <div className="text-xs sm:text-sm text-[var(--gray)] tracking-wider uppercase">
                  Calidad
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
