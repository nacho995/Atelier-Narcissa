import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import sofaShowcase from '../assets/sofa-showcase.png';
import craftsmanHands from '../assets/craftsman-hands.png';
import heroTexture from '../assets/hero-texture.png';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('todos');

  const categories = ['todos', 'tapizado', 'restauración', 'confección'];

  const projects = [
    {
      title: 'Sofá Clásico Luis XV',
      category: 'tapizado',
      description: 'Tapizado completo en terciopelo italiano burgundy',
      year: '2024',
      image: sofaShowcase,
    },
    {
      title: 'Sillón Vintage Restaurado',
      category: 'restauración',
      description: 'Restauración estructural y tapizado en lino belga',
      year: '2023',
      image: craftsmanHands,
    },
    {
      title: 'Colección de Cojines Premium',
      category: 'confección',
      description: 'Confección de cojines con bordados personalizados',
      year: '2024',
      image: heroTexture,
    },
    {
      title: 'Sofá Contemporáneo',
      category: 'tapizado',
      description: 'Tapizado moderno con tejido antimanchas premium',
      year: '2024',
      image: sofaShowcase,
    },
    {
      title: 'Butaca Art Déco',
      category: 'restauración',
      description: 'Restauración completa de butaca de los años 30',
      year: '2023',
      image: craftsmanHands,
    },
    {
      title: 'Fundas Personalizadas',
      category: 'confección',
      description: 'Fundas extraíbles lavables para sofá modular',
      year: '2024',
      image: heroTexture,
    },
  ];

  const filteredProjects =
    activeFilter === 'todos'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="galeria"
      ref={ref}
      className="section relative overflow-hidden"
    >
      {/* Soft White Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] via-[#f5f5f5] to-[#fafafa]" />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(184,147,95,0.1) 2px, rgba(184,147,95,0.1) 3px),
            repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(125,30,58,0.05) 2px, rgba(125,30,58,0.05) 3px)
          `
        }} />
      </div>

      {/* Soft Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[var(--burgundy)]/8 via-[var(--burgundy)]/2 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-radial from-[var(--gold)]/10 via-[var(--gold)]/3 to-transparent rounded-full blur-3xl" />
      
      {/* Fade transitions */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1a1a1a] via-transparent to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent pointer-events-none z-20" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 px-4"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-[var(--gold)] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3 sm:mb-4 font-semibold"
          >
            Portfolio
          </motion.span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--navy)] mb-4 sm:mb-6 leading-tight">
            Nuestros
            <br />
            <span className="text-[var(--burgundy)] italic">Proyectos</span>
          </h2>

          <div className="divider-luxury mx-auto" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12 md:mb-14 px-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 text-xs sm:text-sm font-semibold tracking-[0.1em] capitalize transition-all duration-300 rounded-lg ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-[var(--burgundy)] to-[var(--burgundy-light)] text-white shadow-[0_4px_15px_rgba(125,30,58,0.3)] border border-[var(--gold)]'
                  : 'bg-white border border-[var(--charcoal)]/10 text-[var(--charcoal)] hover:bg-[var(--cream)] hover:border-[var(--burgundy)]/30 shadow-md hover:shadow-lg'
              }`}
            >
              <span className="relative z-10">
                {category}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Spacer - SEPARACIÓN entre filtros y fotos */}
        <div className="h-12 sm:h-16 md:h-20 lg:h-24" />

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative aspect-[3/4] overflow-hidden bg-[var(--charcoal)] shadow-xl cursor-pointer rounded-sm"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.div
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Category Badge */}
                  <span className="inline-block px-2 sm:px-3 py-1 bg-[var(--gold)] text-[var(--navy)] text-[10px] sm:text-xs uppercase tracking-wider font-bold mb-2 sm:mb-3 rounded-sm">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 font-semibold leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/80 mb-1 sm:mb-2 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Year */}
                  <p className="text-xs text-[var(--gold)]">{project.year}</p>

                  {/* View Details Link */}
                  <div className="flex items-center gap-2 text-sm mt-4 text-[var(--gold)]">
                    Ver detalles
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--gold)] opacity-0 group-hover:opacity-30 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12 sm:mt-16 md:mt-20 pt-12 sm:pt-16 border-t border-[var(--charcoal)]/10 px-4"
        >
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[var(--charcoal)] italic max-w-3xl mx-auto leading-relaxed">
            "Cada proyecto es una oportunidad para crear algo extraordinario que
            perdure generaciones"
          </p>
          <p className="text-[var(--burgundy)] font-semibold mt-4 sm:mt-6 tracking-wider text-sm sm:text-base">
            — Atelier Narcissa
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
