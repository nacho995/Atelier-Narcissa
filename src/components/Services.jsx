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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="7" width="20" height="15" rx="2" />
          <path d="M2 10h20" />
          <path d="M7 7V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
          <circle cx="7" cy="15" r="1" />
          <circle cx="17" cy="15" r="1" />
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
          <path d="M17.64 15 22 10.64" />
          <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
          <path d="M21 15.9A9 9 0 1 1 8.1 3" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="servicios"
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a1a1a] to-[#1a1a1a]" />
      
      {/* Premium Velvet Texture - Imagen Real de Terciopelo */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop')`,
            mixBlendMode: 'soft-light',
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

      {/* Elegant Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-[var(--burgundy)]/20 via-[var(--burgundy)]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-gradient-radial from-[var(--gold)]/15 via-[var(--gold)]/5 to-transparent rounded-full blur-3xl" />
      
      {/* Fade transitions */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-transparent to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none z-20" />

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
            className="inline-block text-[var(--gold)] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3 sm:mb-4 font-semibold"
          >
            Nuestros Servicios
          </motion.span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 leading-tight">
            Excelencia en
            <br />
            <span className="text-[var(--gold)] italic">Cada Proyecto</span>
          </h2>

          <div className="divider-luxury mx-auto mb-4 sm:mb-6" />

          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
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
              <div className="relative h-full p-10 sm:p-12 lg:p-14 bg-white/5 backdrop-blur-sm hover:bg-white/10 border-2 border-white/10 hover:border-[var(--gold)]/60 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(184,147,95,0.3)] rounded-[2rem] overflow-hidden">
                
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
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--burgundy)]/20 via-[#d4a574]/20 to-[var(--gold)]/20 rounded-2xl blur-xl transform rotate-6" />
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className="relative p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl shadow-lg border border-[var(--gold)]/30"
                    >
                      <div className="text-[var(--gold)] group-hover:text-white transition-colors w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                        {service.icon}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4 group-hover:text-[var(--gold)] transition-colors leading-tight font-semibold">
                  {service.title}
                </h3>

                {/* Handcrafted Divider */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-[2px] w-12 bg-gradient-to-r from-[var(--burgundy)] via-[#d4a574] to-[var(--gold)] rounded-full" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                  <div className="w-1 h-1 rounded-full bg-[#d4a574]" />
                </div>

                {/* Description */}
                <p className="text-white/70 text-base sm:text-lg mb-8 leading-[1.8] font-light">
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
                      className="flex items-start gap-3 text-sm sm:text-base text-white/80 font-medium leading-relaxed"
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
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/btn relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm text-white font-medium text-sm tracking-wide transition-all duration-300 rounded-lg w-full border border-white/20 hover:border-[var(--gold)]/60 hover:bg-white/10 hover:shadow-[0_6px_20px_rgba(184,147,95,0.2)]"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 8.97 5.7a1.94 1.94 0 0 0 2.06 0L22 7" />
                  </svg>
                  <span>Consultar Proyecto</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  
                  {/* Subtle glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--gold)]/0 via-[var(--gold)]/10 to-[var(--gold)]/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
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
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center gap-3 px-10 sm:px-12 py-4 sm:py-5 bg-white/5 backdrop-blur-sm text-white font-semibold text-sm sm:text-base tracking-[0.15em] uppercase transition-all duration-300 rounded-lg border border-[var(--gold)]/40 hover:border-[var(--gold)] hover:bg-white/10 hover:shadow-[0_8px_30px_rgba(184,147,95,0.25)]"
          >
            <span>Solicitar Presupuesto Gratuito</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            
            {/* Subtle glow */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--gold)]/0 via-[var(--gold)]/10 to-[var(--gold)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
