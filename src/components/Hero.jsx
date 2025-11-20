import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(
              135deg,
              rgba(26, 35, 50, 0.85) 0%,
              rgba(125, 30, 58, 0.75) 100%
            ), url('/src/assets/hero-texture.png')`,
          }}
        />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[var(--gold)] opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[var(--burgundy)] opacity-10 rounded-full blur-3xl" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container text-center px-4 py-20 sm:py-32 min-h-screen flex flex-col justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-[var(--champagne)] text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6 font-light px-4"
          >
            Tapicería de Lujo desde 1995
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            className="font-serif text-white mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-3 sm:mb-4 font-light leading-tight">
              Artesanía en
            </span>
            <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold italic text-gradient leading-tight">
              Cada Puntada
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light px-4 sm:px-6"
          >
            Transformamos tus muebles en obras maestras únicas.
            <br className="hidden sm:block" />
            <span className="sm:inline"> </span>Especialistas en tapizado premium y confección textil a medida.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-white/20"
          >
            <div className="text-center px-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--gold)] font-semibold mb-1 sm:mb-2">
                29+
              </div>
              <div className="text-white/70 text-xs sm:text-sm md:text-base uppercase tracking-wider">
                Años
              </div>
            </div>
            <div className="text-center px-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--gold)] font-semibold mb-1 sm:mb-2">
                3500+
              </div>
              <div className="text-white/70 text-xs sm:text-sm md:text-base uppercase tracking-wider">
                Proyectos
              </div>
            </div>
            <div className="text-center px-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-[var(--gold)] font-semibold mb-1 sm:mb-2">
                100%
              </div>
              <div className="text-white/70 text-xs sm:text-sm md:text-base uppercase tracking-wider">
                Satisfacción
              </div>
            </div>
          </motion.div>

          {/* Spacer - FORZAR SEPARACIÓN */}
          <div className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56" />

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex justify-center"
          >
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-12 sm:px-16 py-5 sm:py-6 bg-gradient-to-r from-[var(--burgundy)] via-[var(--burgundy-light)] to-[var(--burgundy)] text-white font-black text-base sm:text-lg tracking-[0.25em] uppercase shadow-[0_20px_60px_rgba(125,30,58,0.5)] hover:shadow-[0_25px_80px_rgba(184,147,95,0.6)] transition-all duration-500 rounded-2xl flex items-center gap-4 overflow-hidden group border-2 border-[var(--gold)]/60 hover:border-[var(--gold)]"
              style={{
                backgroundSize: '200% auto',
                backgroundPosition: 'left center'
              }}
            >
              <span className="relative z-10 flex items-center gap-4">
                <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">💎</span>
                Consulta Gratuita
                <motion.svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                initial={{ x: '-150%' }}
                animate={{ x: '250%' }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
