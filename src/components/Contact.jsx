import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({ type: 'success', message: data.message });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.message || 'Error al enviar el mensaje' 
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Error de conexión. Por favor intenta de nuevo.' 
        });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32"
    >
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a1a1a] to-[#1a1a1a]" />
      
      {/* Premium Fabric with Stitching - Imagen Real */}
      <div className="absolute inset-0 opacity-[0.12]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2000&auto=format&fit=crop')`,
            mixBlendMode: 'overlay',
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />

      {/* Elegant Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[var(--gold)]/20 via-[var(--gold)]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[var(--burgundy)]/15 via-[var(--burgundy)]/5 to-transparent rounded-full blur-3xl" />
      
      {/* Fade transitions */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-transparent to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none z-20" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border-2 border-[var(--gold)]/40 shadow-lg">
              <span className="text-[var(--gold)] font-bold tracking-[0.2em] uppercase text-sm">Contacto</span>
            </span>
          </motion.div>
          
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Comencemos tu <span className="italic text-[var(--gold)]">Proyecto</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <span className="text-2xl">✨</span>
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[var(--gold)]" />
          </div>
          
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Transformamos tus muebles en obras maestras únicas. Cuéntanos tu visión y la haremos realidad con nuestra artesanía de más de 29 años.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 sm:gap-12 md:gap-16 lg:gap-16 xl:gap-20 items-start max-w-7xl mx-auto">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-24"
          >
            {/* Welcome Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl shadow-2xl border-3 border-white/10"
              style={{ padding: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}
            >
              <div className="flex items-start gap-6" style={{ marginBottom: 'clamp(2rem, 4vw, 2.5rem)' }}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[var(--burgundy)] to-[var(--burgundy-light)] rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white" style={{ marginBottom: '1.25rem', lineHeight: '1.4' }}>
                    ¡Hablemos!
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base" style={{ lineHeight: '2' }}>
                    Estamos aquí para dar vida a tus ideas
                  </p>
                </div>
              </div>
              
              <div className="h-[2px] bg-gradient-to-r from-[var(--gold)] via-[var(--burgundy)] to-[var(--gold)] opacity-30" style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }} />
              
              <p className="text-white/70 text-base" style={{ lineHeight: '2', marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
                Con <strong className="text-white">más de 29 años</strong> transformando espacios, cada proyecto es una oportunidad para crear algo extraordinario que perdure generaciones.
              </p>

              <div className="flex flex-wrap gap-3" style={{ gap: 'clamp(0.75rem, 2vw, 1rem)' }}>
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-semibold text-[var(--gold)] border border-[var(--gold)]/30" style={{ padding: '0.75rem 1.25rem', lineHeight: '1.8' }}>
                  ✨ Artesanía Premium
                </span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-semibold text-[var(--gold)] border border-[var(--gold)]/30" style={{ padding: '0.75rem 1.25rem', lineHeight: '1.8' }}>
                  ⚡ Respuesta 24h
                </span>
              </div>
            </motion.div>

            {/* Contact Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.25rem, 3vw, 1.5rem)' }}>
                <motion.a
                href="mailto:narcissaatelier@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group block bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-white/20 hover:border-[var(--gold)]/50 hover:shadow-2xl transition-all duration-300"
                style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}
              >
                <div className="flex items-center gap-4" style={{ marginBottom: '1rem' }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--gold)] to-[var(--gold)]/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m2 7 8.97 5.7a1.94 1.94 0 0 0 2.06 0L22 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-[0.15em] font-bold" style={{ marginBottom: '0.75rem', lineHeight: '1.6' }}>
                      Correo Electrónico
                    </div>
                    <div className="text-white font-bold text-base group-hover:text-[var(--gold)] transition-colors" style={{ lineHeight: '1.8' }}>
                      narcissaatelier@gmail.com
                    </div>
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+34912345678"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group block bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-white/20 hover:border-[var(--gold)]/50 hover:shadow-2xl transition-all duration-300"
                style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}
              >
                <div className="flex items-center gap-4" style={{ marginBottom: '1rem' }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--burgundy)] to-[var(--burgundy-light)] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-[0.15em] font-bold" style={{ marginBottom: '0.75rem', lineHeight: '1.6' }}>
                      Teléfono Directo
                    </div>
                    <div className="text-white font-bold text-lg group-hover:text-[var(--gold)] transition-colors" style={{ lineHeight: '1.8' }}>
                      +34 912 345 678
                    </div>
                  </div>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-white/20"
                style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}
              >
                <div className="flex items-start gap-4" style={{ marginBottom: '1rem' }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--camel)] to-[var(--beige)] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-white/50 text-xs uppercase tracking-[0.15em] font-bold" style={{ marginBottom: '0.75rem', lineHeight: '1.6' }}>
                      Nuestro Taller
                    </div>
                    <div className="text-white font-bold text-base" style={{ lineHeight: '2' }}>
                      Calle Mayor 45, Local 3
                      <br />
                      28013 Madrid, España
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-white/20"
              style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', marginTop: 'clamp(1.25rem, 3vw, 1.5rem)' }}
            >
              <div className="flex items-center gap-3" style={{ marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
                <div className="w-10 h-10 bg-[var(--gold)]/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-[var(--gold)]/30">
                  <svg className="w-6 h-6 text-[var(--gold)]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="text-white font-serif text-xl sm:text-2xl font-bold" style={{ lineHeight: '1.4' }}>
                  Horario de Atención
                </h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 2vw, 1.25rem)' }}>
                <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all" style={{ padding: 'clamp(1.25rem, 3vw, 1.5rem)' }}>
                  <span className="text-white/90 font-medium flex items-center gap-2" style={{ lineHeight: '1.8' }}>
                    <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse"></span>
                    Lunes - Viernes
                  </span>
                  <span className="text-white font-bold" style={{ lineHeight: '1.8' }}>9:00 - 19:00</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all" style={{ padding: 'clamp(1.25rem, 3vw, 1.5rem)' }}>
                  <span className="text-white/90 font-medium flex items-center gap-2" style={{ lineHeight: '1.8' }}>
                    <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
                    Sábado
                  </span>
                  <span className="text-white font-bold" style={{ lineHeight: '1.8' }}>10:00 - 14:00</span>
                </div>
                <div className="flex items-center justify-between bg-[var(--gold)]/20 backdrop-blur-sm rounded-xl border-2 border-[var(--gold)]/30" style={{ padding: 'clamp(1.25rem, 3vw, 1.5rem)' }}>
                  <span className="text-white font-medium flex items-center gap-2" style={{ lineHeight: '1.8' }}>
                    <svg className="w-4 h-4 text-[var(--gold)]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                    Domingo
                  </span>
                  <span className="text-[var(--gold)] font-bold text-sm" style={{ lineHeight: '1.8' }}>Solo con cita</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] shadow-2xl border-3 border-white/10 relative overflow-hidden">
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[var(--gold)]/10 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[var(--burgundy)]/10 to-transparent rounded-tr-full" />
              
              <div 
                className="relative z-10" 
                style={{ 
                  paddingTop: '3rem',
                  paddingBottom: '3rem',
                  paddingLeft: 'clamp(2rem, 6vw, 8rem)',
                  paddingRight: 'clamp(2rem, 6vw, 8rem)'
                }}
              >
                {/* Form Header */}
                <div className="text-center mb-16">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="inline-block mb-8"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-[var(--gold)] to-[var(--burgundy)] rounded-3xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-500">
                      <span className="text-5xl">✉️</span>
                    </div>
                  </motion.div>
                  <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6 tracking-tight">
                    Cuéntanos tu Idea
                  </h3>
                  <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-lg mx-auto font-medium">
                    Completa el formulario y te responderemos en menos de 24 horas
                  </p>
                </div>

              <div className="flex flex-col gap-12">
                {/* Name */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="relative group"
                >
                  <label
                    htmlFor="name"
                    className="block text-[var(--gold)] text-sm font-bold mb-6 uppercase tracking-[0.25em] flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-8 py-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 focus:border-[var(--gold)] focus:bg-white/20 text-white placeholder-white/40 transition-all duration-300 outline-none text-xl rounded-2xl hover:border-[var(--gold)]/40 hover:shadow-lg font-medium"
                      placeholder="Tu nombre completo"
                    />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity scale-110">
                      <span className="text-[var(--gold)] text-2xl">✨</span>
                    </div>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="relative group"
                >
                  <label
                    htmlFor="email"
                    className="block text-[var(--gold)] text-sm font-bold mb-6 uppercase tracking-[0.25em] flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
                    Correo Electrónico *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-8 py-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 focus:border-[var(--gold)] focus:bg-white/20 text-white placeholder-white/40 transition-all duration-300 outline-none text-xl rounded-2xl hover:border-[var(--gold)]/40 hover:shadow-lg font-medium"
                      placeholder="tu@email.com"
                    />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity scale-110">
                      <span className="text-[var(--gold)] text-2xl">📧</span>
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="relative group"
                >
                  <label
                    htmlFor="phone"
                    className="block text-[var(--gold)] text-sm font-bold mb-6 uppercase tracking-[0.25em] flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--gold)]/50"></span>
                    Teléfono <span className="text-[var(--brown)]/50 font-normal lowercase tracking-normal text-xs ml-1">(opcional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-8 py-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 focus:border-[var(--gold)] focus:bg-white/20 text-white placeholder-white/40 transition-all duration-300 outline-none text-xl rounded-2xl hover:border-[var(--gold)]/40 hover:shadow-lg font-medium"
                      placeholder="+34 600 000 000"
                    />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity scale-110">
                      <span className="text-[var(--gold)] text-2xl">📱</span>
                    </div>
                  </div>
                </motion.div>

                {/* Service */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  className="relative group"
                >
                  <label
                    htmlFor="service"
                    className="block text-[var(--gold)] text-sm font-bold mb-6 uppercase tracking-[0.25em] flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
                    Servicio de Interés *
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-8 py-6 bg-[var(--cream)]/30 border-2 border-[var(--gold)]/20 focus:border-[var(--burgundy)] focus:bg-white text-[var(--brown)] transition-all duration-300 outline-none appearance-none cursor-pointer text-xl rounded-2xl hover:border-[var(--gold)]/40 hover:shadow-lg font-medium"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%237d1e3a'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 2rem center',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '4rem',
                      }}
                    >
                      <option value="" className="bg-[#1a1a1a] text-white/50">
                        Selecciona un servicio
                      </option>
                      <option value="tapizado" className="bg-[#1a1a1a] text-white">
                        Tapizado Premium
                      </option>
                      <option value="restauracion" className="bg-[#1a1a1a] text-white">
                        Restauración de Muebles
                      </option>
                      <option value="confeccion" className="bg-[#1a1a1a] text-white">
                        Confección a Medida
                      </option>
                      <option value="otro" className="bg-[#1a1a1a] text-white">
                        Consulta General
                      </option>
                    </select>
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 }}
                  className="relative group"
                >
                  <label
                    htmlFor="message"
                    className="block text-[var(--gold)] text-sm font-bold mb-6 uppercase tracking-[0.25em] flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
                    Cuéntanos tu Proyecto *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-8 py-6 bg-[var(--cream)]/30 border-2 border-[var(--gold)]/20 focus:border-[var(--burgundy)] focus:bg-white text-[var(--brown)] placeholder-[var(--brown)]/40 transition-all duration-300 outline-none resize-none text-xl rounded-2xl hover:border-[var(--gold)]/40 hover:shadow-lg leading-relaxed font-medium"
                      placeholder="Describe tu proyecto, el tipo de mueble que necesitas restaurar o cualquier consulta que tengas..."
                    />
                    <div className="absolute right-6 bottom-6 opacity-0 group-focus-within:opacity-100 transition-opacity scale-110">
                      <span className="text-[var(--gold)] text-2xl">💭</span>
                    </div>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.0 }}
                  whileHover={{ y: isSubmitting ? 0 : -2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`group relative w-full py-5 bg-white/10 backdrop-blur-sm text-white font-semibold text-base tracking-[0.1em] uppercase transition-all duration-300 rounded-lg mt-6 flex items-center justify-center gap-3 border border-[var(--gold)]/40 hover:border-[var(--gold)] hover:bg-white/15 hover:shadow-[0_8px_30px_rgba(184,147,95,0.25)] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m2 7 8.97 5.7a1.94 1.94 0 0 0 2.06 0L22 7" />
                      </svg>
                      <span>Enviar Consulta</span>
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
                    </>
                  )}
                  
                  {/* Subtle glow */}
                  {!isSubmitting && (
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--gold)]/0 via-[var(--gold)]/10 to-[var(--gold)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className={`mt-6 p-5 rounded-2xl text-center font-semibold shadow-xl ${
                      submitStatus.type === 'success' 
                        ? 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border-2 border-green-200' 
                        : 'bg-gradient-to-r from-red-50 to-rose-50 text-red-800 border-2 border-red-200'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-2xl">
                        {submitStatus.type === 'success' ? '✅' : '❌'}
                      </span>
                      <span>{submitStatus.message}</span>
                    </div>
                  </motion.div>
                )}

                {/* Info Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.1 }}
                  className="mt-8 pt-6 border-t-2 border-[var(--gold)]/20"
                >
                  <div className="flex items-center justify-center gap-3 text-white text-sm text-center">
                    <div className="w-8 h-8 bg-[var(--gold)]/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-semibold">
                      <span className="text-[var(--gold)]">⚡</span> Respuesta garantizada en menos de <strong>24 horas</strong>
                    </p>
                  </div>
                </motion.div>
              </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
