import { motion, useScroll, useTransform } from 'framer-motion';
import heroTexture from '../assets/hero-texture.png';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#1a1218] to-[#0d0d0d]" />
      
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${heroTexture})` }} />
      </motion.div>

      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--burgundy)]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--gold)]/10 rounded-full blur-[100px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#fafafa] pointer-events-none z-20" />

      <motion.div style={{ opacity }} className="relative z-10 container text-center px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[var(--gold)]/80 text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 font-medium"
          >
            Atelier de Alta Costura & Tapicería
          </motion.p>

          <motion.h1
            className="font-serif text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-2">Creamos con</span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold italic bg-gradient-to-r from-[var(--gold)] via-[#d4af6a] to-[var(--gold)] bg-clip-text text-transparent">
              Pasión Artesanal
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Vestidos de novia únicos y tapicería de lujo. Transformamos tus sueños en piezas extraordinarias.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
          >
            <span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--gold)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
              </svg>
              Vestidos & Confección
            </span>
            <span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--gold)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
              </svg>
              Tapicería & Textiles
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center gap-8 sm:gap-16 mb-16 py-8 border-y border-white/10"
          >
            {[{ value: '29+', label: 'Años' }, { value: '3500+', label: 'Proyectos' }, { value: '100%', label: 'Artesanal' }].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-serif text-[var(--gold)] font-semibold">{stat.value}</div>
                <div className="text-white/50 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}>
            <a href="#contacto" className="btn-primary">
              Solicitar Presupuesto
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
