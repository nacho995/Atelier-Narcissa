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
    { title: 'Sofá Clásico Luis XV', category: 'tapizado', description: 'Tapizado completo en terciopelo italiano', year: '2024', image: sofaShowcase },
    { title: 'Sillón Vintage', category: 'restauración', description: 'Restauración estructural y tapizado', year: '2023', image: craftsmanHands },
    { title: 'Cojines Premium', category: 'confección', description: 'Cojines con bordados personalizados', year: '2024', image: heroTexture },
    { title: 'Sofá Contemporáneo', category: 'tapizado', description: 'Tapizado moderno antimanchas', year: '2024', image: sofaShowcase },
    { title: 'Butaca Art Déco', category: 'restauración', description: 'Restauración de butaca años 30', year: '2023', image: craftsmanHands },
    { title: 'Fundas Personalizadas', category: 'confección', description: 'Fundas extraíbles lavables', year: '2024', image: heroTexture },
  ];

  const filteredProjects = activeFilter === 'todos' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="galeria" ref={ref} className="relative overflow-hidden py-32 md:py-40">
      {/* Fondo artístico con patrón de tela tejida */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: '#faf8f3',
          backgroundImage: `
            linear-gradient(135deg, rgba(184, 147, 95, 0.06) 25%, transparent 25%),
            linear-gradient(225deg, rgba(184, 147, 95, 0.06) 25%, transparent 25%),
            linear-gradient(45deg, rgba(184, 147, 95, 0.06) 25%, transparent 25%),
            linear-gradient(315deg, rgba(184, 147, 95, 0.06) 25%, transparent 25%),
            radial-gradient(ellipse at center, rgba(250, 248, 243, 0.8) 0%, rgba(232, 220, 196, 0.3) 100%)
          `,
          backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px, 100% 100%',
          backgroundPosition: '0 0, 20px 0, 20px -20px, 0px 20px, center',
        }}
      />
      
      {/* Líneas diagonales sutiles tipo tela */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(184, 147, 95, 0.08) 2px,
            rgba(184, 147, 95, 0.08) 4px
          )`,
        }}
      />

      {/* Orbs decorativos */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--burgundy)]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[var(--gold)]/8 rounded-full blur-[150px]" />

      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <p className="text-[var(--gold)] text-xs md:text-sm tracking-[0.4em] uppercase mb-6 font-semibold">
            Galería
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--navy)] mb-6">
            Proyectos <span className="text-[var(--burgundy)] italic">que Inspiran</span>
          </h2>
          <p className="text-[var(--charcoal)]/50 text-lg md:text-xl max-w-xl mx-auto">
            Cada pieza cuenta una historia de dedicación
          </p>
        </motion.div>

        {/* Separador */}
        <div className="h-16 md:h-20"></div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 md:gap-5"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold capitalize 
                transition-all duration-300 rounded-full
                ${activeFilter === category 
                  ? 'bg-[var(--burgundy)] text-white shadow-lg shadow-[var(--burgundy)]/25' 
                  : 'bg-white text-[var(--charcoal)] shadow-md hover:shadow-lg hover:bg-[var(--burgundy)] hover:text-white'
                }
              `}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Separador */}
        <div className="h-16 md:h-24"></div>

        {/* Grid de proyectos */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer rounded-2xl"
            >
              <div className="aspect-[4/5]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              
              {/* Overlay en hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Contenido en hover */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-block w-fit px-4 py-2 bg-[var(--gold)] text-black text-xs uppercase tracking-wider font-bold mb-4 rounded-full">
                  {project.category}
                </span>
                <h3 className="font-serif text-2xl mb-2">{project.title}</h3>
                <p className="text-white/70">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Separador */}
        <div className="h-20 md:h-28"></div>

        {/* Cita */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center pt-16 md:pt-20 border-t border-[var(--charcoal)]/10"
        >
          <p className="font-serif text-xl md:text-2xl text-[var(--charcoal)]/70 italic max-w-2xl mx-auto">
            "Cada proyecto es una oportunidad para crear algo extraordinario"
          </p>
          <p className="text-[var(--burgundy)] font-semibold mt-6 text-sm tracking-wider">— Atelier Narcisa</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
