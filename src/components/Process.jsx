import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    { number: '01', title: 'Consulta Inicial', description: 'Nos contactas para contarnos tu proyecto. Evaluamos tus necesidades sin compromiso.', icon: '📞' },
    { number: '02', title: 'Recogida', description: 'Pasamos a recoger tu vestido o mueble. Tomamos medidas y definimos los detalles.', icon: '🚗' },
    { number: '03', title: '1ª Prueba', description: 'Primera prueba para verificar ajustes, materiales y avance del proyecto.', icon: '📐' },
    { number: '04', title: '2ª/3ª Prueba', description: 'Pruebas adicionales para asegurar la perfección del resultado.', icon: '✨' },
    { number: '05', title: 'Entrega', description: 'Entregamos el trabajo terminado a tu completa satisfacción.', icon: '🎁' },
  ];

  return (
    <section id="proceso" ref={ref} className="section relative overflow-hidden bg-gradient-to-br from-[#fafafa] via-[#f5f5f5] to-[#ffffff]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--gold)]/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--burgundy)]/5 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto mb-16 px-4"
        >
          <span className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase mb-4 block font-semibold">Cómo Trabajamos</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--navy)] mb-4">
            Nuestro proceso <span className="text-[var(--burgundy)] italic">paso a paso</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--burgundy)] to-[var(--gold)] mx-auto mb-6" />
          <p className="text-[var(--charcoal)]/70 text-base leading-relaxed">
            Un flujo de trabajo transparente para que sepas qué esperar en cada momento.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--burgundy)] via-[var(--gold)] to-[var(--burgundy)] -translate-x-1/2 hidden lg:block" />

          <div className="space-y-6 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-[var(--gold)]/30 transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <span className="text-2xl">{step.icon}</span>
                      <div>
                        <span className="text-[var(--gold)] text-xs font-bold tracking-wider">PASO {step.number}</span>
                        <h3 className="font-serif text-xl text-[var(--navy)]">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-[var(--charcoal)]/70 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-[var(--burgundy)] text-white font-serif text-lg font-bold shadow-lg z-10 border-4 border-white">
                  {step.number}
                </div>

                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:hidden mt-8 flex flex-wrap justify-center gap-2">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-[var(--burgundy)] text-white text-xs flex items-center justify-center font-bold">{step.number}</span>
              {index < steps.length - 1 && <div className="w-6 h-0.5 bg-[var(--gold)]" />}
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-[var(--charcoal)]/60 text-base mb-6">¿Tienes un proyecto en mente?</p>
          <a href="#contacto" className="btn-primary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Reservar Consulta
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
