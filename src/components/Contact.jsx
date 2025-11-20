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
      className="relative overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32 bg-gradient-to-b from-[#faf8f5] via-[#f5e6d3] to-[#faf8f5]"
    >
      {/* Decorative Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 35px, var(--burgundy) 35px, var(--burgundy) 36px),
            repeating-linear-gradient(-45deg, transparent, transparent 35px, var(--gold) 35px, var(--gold) 36px)
          `
        }} />
      </div>

      {/* Elegant Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[var(--gold)]/20 via-[var(--gold)]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[var(--burgundy)]/15 via-[var(--burgundy)]/5 to-transparent rounded-full blur-3xl" />

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
            <span className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border-2 border-[var(--gold)]/30 shadow-lg">
              <span className="text-3xl">💎</span>
              <span className="text-[var(--burgundy)] font-bold tracking-[0.2em] uppercase text-sm">Contacto</span>
            </span>
          </motion.div>
          
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--burgundy)] mb-6 leading-tight">
            Comencemos tu <span className="italic text-[var(--gold)]">Proyecto</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <span className="text-2xl">✨</span>
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[var(--gold)]" />
          </div>
          
          <p className="text-[var(--brown)] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Transformamos tus muebles en obras maestras únicas. Cuéntanos tu visión y la haremos realidad con nuestra artesanía de más de 29 años.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-16 xl:gap-20 items-start max-w-7xl mx-auto">
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
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border-3 border-[var(--gold)]/20 mb-8"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[var(--burgundy)] to-[var(--burgundy-light)] rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
                  <span className="text-3xl sm:text-4xl">🎨</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[var(--burgundy)] mb-2 leading-tight">
                    ¡Hablemos!
                  </h3>
                  <p className="text-[var(--brown)]/70 text-sm sm:text-base leading-relaxed">
                    Estamos aquí para dar vida a tus ideas
                  </p>
                </div>
              </div>
              
              <div className="h-[2px] bg-gradient-to-r from-[var(--gold)] via-[var(--burgundy)] to-[var(--gold)] mb-6 opacity-30" />
              
              <p className="text-[var(--brown)] text-base leading-relaxed mb-6">
                Con <strong>más de 29 años</strong> transformando espacios, cada proyecto es una oportunidad para crear algo extraordinario que perdure generaciones.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[var(--cream)] rounded-full text-xs font-semibold text-[var(--burgundy)] border border-[var(--gold)]/20">
                  ✨ Artesanía Premium
                </span>
                <span className="px-4 py-2 bg-[var(--cream)] rounded-full text-xs font-semibold text-[var(--burgundy)] border border-[var(--gold)]/20">
                  ⚡ Respuesta 24h
                </span>
              </div>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
                <motion.a
                href="mailto:narcissaatelier@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group block bg-white rounded-2xl p-6 shadow-xl border-2 border-[var(--gold)]/20 hover:border-[var(--gold)]/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--gold)] to-[var(--gold)]/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[var(--brown)]/60 text-xs uppercase tracking-[0.15em] font-bold mb-1">
                      Correo Electrónico
                    </div>
                    <div className="text-[var(--burgundy)] font-bold text-base group-hover:text-[var(--gold)] transition-colors">
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
                className="group block bg-white rounded-2xl p-6 shadow-xl border-2 border-[var(--gold)]/20 hover:border-[var(--gold)]/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--burgundy)] to-[var(--burgundy-light)] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[var(--brown)]/60 text-xs uppercase tracking-[0.15em] font-bold mb-1">
                      Teléfono Directo
                    </div>
                    <div className="text-[var(--burgundy)] font-bold text-lg group-hover:text-[var(--gold)] transition-colors">
                      +34 912 345 678
                    </div>
                  </div>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[var(--gold)]/20"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--camel)] to-[var(--beige)] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[var(--brown)]/60 text-xs uppercase tracking-[0.15em] font-bold mb-1">
                      Nuestro Taller
                    </div>
                    <div className="text-[var(--burgundy)] font-bold text-base leading-relaxed">
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
              className="bg-gradient-to-br from-[var(--burgundy)] to-[var(--burgundy-light)] rounded-2xl p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-serif text-xl sm:text-2xl font-bold">
                  Horario de Atención
                </h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all">
                  <span className="text-white/90 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse"></span>
                    Lunes - Viernes
                  </span>
                  <span className="text-white font-bold">9:00 - 19:00</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all">
                  <span className="text-white/90 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--gold)]"></span>
                    Sábado
                  </span>
                  <span className="text-white font-bold">10:00 - 14:00</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[var(--gold)]/20 backdrop-blur-sm rounded-xl border-2 border-[var(--gold)]/30">
                  <span className="text-white font-medium flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--gold)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Domingo
                  </span>
                  <span className="text-[var(--gold)] font-bold text-sm">Solo con cita</span>
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
            <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] shadow-2xl border-3 border-[var(--gold)]/30 relative overflow-hidden">
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
                  <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[var(--burgundy)] mb-6 tracking-tight">
                    Cuéntanos tu Idea
                  </h3>
                  <p className="text-[var(--brown)]/80 text-lg sm:text-xl leading-relaxed max-w-lg mx-auto font-medium">
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
                    className="block text-[var(--burgundy)] text-sm font-bold mb-6 uppercase tracking-[0.25em] flex items-center gap-3"
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
                      className="w-full px-8 py-6 bg-[var(--cream)]/30 border-2 border-[var(--gold)]/20 focus:border-[var(--burgundy)] focus:bg-white text-[var(--brown)] placeholder-[var(--brown)]/40 transition-all duration-300 outline-none text-xl rounded-2xl hover:border-[var(--gold)]/40 hover:shadow-lg font-medium"
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
                    className="block text-[var(--burgundy)] text-sm font-bold mb-6 uppercase tracking-[0.25em] flex items-center gap-3"
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
                      className="w-full px-8 py-6 bg-[var(--cream)]/30 border-2 border-[var(--gold)]/20 focus:border-[var(--burgundy)] focus:bg-white text-[var(--brown)] placeholder-[var(--brown)]/40 transition-all duration-300 outline-none text-xl rounded-2xl hover:border-[var(--gold)]/40 hover:shadow-lg font-medium"
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
                    className="block text-[var(--burgundy)] text-sm font-bold mb-6 uppercase tracking-[0.25em] flex items-center gap-3"
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
                      className="w-full px-8 py-6 bg-[var(--cream)]/30 border-2 border-[var(--gold)]/20 focus:border-[var(--burgundy)] focus:bg-white text-[var(--brown)] placeholder-[var(--brown)]/40 transition-all duration-300 outline-none text-xl rounded-2xl hover:border-[var(--gold)]/40 hover:shadow-lg font-medium"
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
                    className="block text-[var(--burgundy)] text-sm font-bold mb-6 uppercase tracking-[0.25em] flex items-center gap-3"
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
                      <option value="" className="bg-white text-[var(--brown)]/50">
                        Selecciona un servicio
                      </option>
                      <option value="tapizado" className="bg-white text-[var(--brown)]">
                        ✨ Tapizado Premium
                      </option>
                      <option value="restauracion" className="bg-white text-[var(--brown)]">
                        🎨 Restauración de Muebles
                      </option>
                      <option value="confeccion" className="bg-white text-[var(--brown)]">
                        ✂️ Confección a Medida
                      </option>
                      <option value="otro" className="bg-white text-[var(--brown)]">
                        💬 Consulta General
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
                    className="block text-[var(--burgundy)] text-sm font-bold mb-6 uppercase tracking-[0.25em] flex items-center gap-3"
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
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -4 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`relative w-full py-6 bg-gradient-to-r from-[var(--burgundy)] via-[var(--burgundy-light)] to-[var(--burgundy)] bg-size-200 text-white font-bold text-base tracking-[0.15em] uppercase transition-all duration-500 shadow-2xl hover:shadow-[0_25px_60px_rgba(125,30,58,0.4)] rounded-2xl mt-6 flex items-center justify-center gap-3 overflow-hidden group border-3 border-white/20 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  style={{
                    backgroundSize: '200% auto',
                    backgroundPosition: 'left center'
                  }}
                >
                  {!isSubmitting && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '200%' }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    />
                  )}
                  
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-5 h-5 border-3 border-white border-t-transparent rounded-full"
                        />
                        <span>Enviando</span>
                        <motion.span
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          ...</motion.span>
                      </>
                    ) : (
                      <>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Enviar Consulta</span>
                        <motion.svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </>
                    )}
                  </span>
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
                  <div className="flex items-center justify-center gap-3 text-[var(--burgundy)] text-sm text-center">
                    <div className="w-8 h-8 bg-[var(--gold)]/10 rounded-full flex items-center justify-center">
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
