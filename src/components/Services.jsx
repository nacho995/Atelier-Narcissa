import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      title: 'Tapizado Premium',
      description:
        'Renovación completa de sofás, sillones y butacas con tejidos de alta gama seleccionados.',
      features: [
        'Tejidos exclusivos europeos',
        'Espumas de máxima densidad',
        'Acabados perfectos',
        'Garantía de durabilidad',
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: 'Restauración de Muebles',
      description:
        'Devolvemos vida a muebles antiguos y de valor sentimental con técnicas tradicionales.',
      features: [
        'Análisis estructural completo',
        'Reparación de carpintería',
        'Tratamiento de madera',
        'Conservación histórica',
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: 'Confección a Medida',
      description:
        'Fundas, cojines y textiles personalizados diseñados específicamente para tus espacios.',
      features: [
        'Diseño personalizado',
        'Medidas exactas',
        'Costuras invisibles',
        'Catálogo premium',
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="servicios"
      ref={ref}
      className="section bg-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--gold)] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[var(--burgundy)] opacity-5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 px-4"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-[var(--burgundy)] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3 sm:mb-4 font-semibold"
          >
            Nuestros Servicios
          </motion.span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--navy)] mb-4 sm:mb-6 leading-tight">
            Excelencia en
            <br />
            <span className="text-[var(--burgundy)] italic">Cada Proyecto</span>
          </h2>

          <div className="divider-luxury mx-auto mb-4 sm:mb-6" />

          <p className="text-[var(--gray)] text-base sm:text-lg leading-relaxed">
            Ofrecemos servicios integrales de tapicería y confección textil con
            los más altos estándares de calidad artesanal.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -12 }}
              className="group"
            >
              <div className="relative h-full p-10 sm:p-12 lg:p-14 bg-gradient-to-br from-[#faf8f5] via-[#f5e6d3] to-[#faf8f5] hover:from-[#fff9f0] hover:via-[#f5e6d3] hover:to-[#fff] border-2 border-[#d4a574]/20 hover:border-[var(--gold)]/60 transition-all duration-500 shadow-[0_8px_30px_rgba(44,24,16,0.08)] hover:shadow-[0_20px_60px_rgba(125,30,58,0.15)] rounded-[2rem] overflow-hidden backdrop-blur-sm">
                
                {/* Fabric Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"
                  style={{
                    backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(125,30,58,0.1) 2px, rgba(125,30,58,0.1) 4px)`,
                  }}
                />

                {/* Stitch Pattern Border */}
                <div className="absolute inset-0 rounded-[2rem] pointer-events-none"
                  style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(180,147,95,0.15) 10px, rgba(180,147,95,0.15) 12px)`,
                    backgroundSize: '100% 12px',
                    backgroundPosition: '0 0',
                    mask: 'linear-gradient(transparent 20px, black 20px, black calc(100% - 20px), transparent calc(100% - 20px))'
                  }}
                />

                {/* Icon with Artisan Touch */}
                <div className="relative mb-8 sm:mb-10">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--burgundy)]/5 via-[#d4a574]/10 to-[var(--gold)]/5 rounded-2xl blur-xl transform rotate-6" />
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className="relative p-4 bg-gradient-to-br from-white/80 to-[#f5e6d3]/50 rounded-2xl shadow-lg border border-[#d4a574]/30"
                    >
                      <div className="text-[var(--burgundy)] group-hover:text-[#9d2e4a] transition-colors w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                        {service.icon}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2c1810] mb-4 group-hover:text-[var(--burgundy)] transition-colors leading-tight font-semibold">
                  {service.title}
                </h3>

                {/* Handcrafted Divider */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-[2px] w-12 bg-gradient-to-r from-[var(--burgundy)] via-[#d4a574] to-[var(--gold)] rounded-full" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                  <div className="w-1 h-1 rounded-full bg-[#d4a574]" />
                </div>

                {/* Description */}
                <p className="text-[#6b5844] text-base sm:text-lg mb-8 leading-[1.8] font-light">
                  {service.description}
                </p>

                {/* Features List - Artisan Style */}
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-start gap-3 text-sm sm:text-base text-[#2c1810] font-medium leading-relaxed"
                    >
                      {/* Custom Needle & Thread Icon */}
                      <div className="relative flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[var(--gold)] to-[#d4a574] flex items-center justify-center shadow-sm transform rotate-45 group-hover:rotate-90 transition-transform duration-300">
                          <div className="w-2 h-2 bg-white rounded-sm transform -rotate-45" />
                        </div>
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button - Warm & Cozy */}
                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--burgundy)] via-[#9d2e4a] to-[var(--burgundy)] text-white font-bold text-sm sm:text-base tracking-wide transition-all shadow-[0_10px_40px_rgba(125,30,58,0.3)] hover:shadow-[0_15px_50px_rgba(125,30,58,0.4)] rounded-2xl overflow-hidden w-full group/btn border border-[var(--gold)]/30"
                  style={{
                    backgroundSize: '200% auto',
                  }}
                >
                  {/* Stitched Border Effect */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(255,255,255,0.1) 8px, rgba(255,255,255,0.1) 10px)`,
                    }}
                  />
                  
                  <span className="relative z-10 flex items-center gap-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Consultar Proyecto
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </span>
                  
                  {/* Soft Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.a>

                {/* Artisan Badge */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--gold)] to-[#d4a574] flex items-center justify-center shadow-xl border-2 border-white/50">
                      <span className="text-white text-[10px] font-black text-center leading-tight">100%<br/>Artesanal</span>
                    </div>
                  </div>
                </div>

                {/* Corner Flourishes */}
                <div className="absolute top-0 left-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[var(--gold)]">
                    <path d="M 0 0 L 0 30 Q 0 0 30 0 Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity rotate-180">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[var(--burgundy)]">
                    <path d="M 0 0 L 0 30 Q 0 0 30 0 Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spacer - FORZAR SEPARACIÓN */}
        <div className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32" />

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-4 px-12 sm:px-14 py-5 sm:py-6 bg-gradient-to-r from-[var(--burgundy)] via-[var(--burgundy-light)] to-[var(--burgundy)] text-white font-black text-base tracking-[0.25em] uppercase hover:shadow-[0_20px_60px_rgba(125,30,58,0.6)] transition-all duration-500 shadow-2xl rounded-2xl overflow-hidden group border-2 border-[var(--gold)]/60 hover:border-[var(--gold)]"
          >
            <span className="relative z-10 flex items-center gap-4">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🎯</span>
              Solicitar Presupuesto Gratuito
              <motion.svg 
                className="w-7 h-7" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
            
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
