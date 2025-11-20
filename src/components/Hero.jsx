import { motion, useScroll, useTransform } from 'framer-motion';
import heroTexture from '../assets/hero-texture.png';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a1a1a] to-[#1a1a1a]" />
      
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
            ), url(${heroTexture})`,
          }}
        />
      </motion.div>

      {/* Elegant Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-[var(--burgundy)]/20 via-[var(--burgundy)]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-gradient-radial from-[var(--gold)]/15 via-[var(--gold)]/5 to-transparent rounded-full blur-3xl" />
      
      {/* Top Golden Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent shadow-[0_0_20px_rgba(184,147,95,0.5)]" />
      
      {/* Bottom fade transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-20" />

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
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: 'clamp(1.5rem, 3vw, 2rem) clamp(3rem, 5vw, 5rem)',
              }}
              className="group relative inline-flex items-center justify-center gap-4 bg-gradient-to-r from-[var(--gold)] via-[var(--gold-light)] to-[var(--gold)] text-white font-black text-base sm:text-lg md:text-xl tracking-[0.2em] uppercase transition-all duration-400 rounded-2xl border-2 border-white/30 shadow-[0_20px_60px_rgba(184,147,95,0.4)] hover:shadow-[0_30px_80px_rgba(184,147,95,0.6)] hover:border-white overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold-light)] via-[var(--gold)] to-[var(--gold-light)] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              
              {/* Icon */}
              <svg 
                className="relative z-10 w-6 h-6 sm:w-7 sm:h-7" 
                fill="none" 
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              
              <span className="relative z-10 font-black">Consulta Gratuita</span>
              
              <svg 
                className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:translate-x-2" 
                fill="none" 
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              
              {/* Shine effect */}
              <div className="absolute inset-0 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              
              {/* Glow pulse */}
              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-400" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
