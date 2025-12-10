import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a1a1a] to-[#1a1a1a]" />
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, transparent, transparent 2px, var(--gold) 2px, var(--gold) 3px),
          repeating-linear-gradient(-45deg, transparent, transparent 2px, var(--burgundy) 2px, var(--burgundy) 3px)
        `
      }} />

      {/* Elegant Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[var(--burgundy)]/20 via-[var(--burgundy)]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-radial from-[var(--gold)]/15 via-[var(--gold)]/5 to-transparent rounded-full blur-3xl" />

      {/* Fade transition from Contact */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1a1a1a] to-transparent pointer-events-none z-20" />

      {/* Top Golden Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent shadow-[0_0_20px_rgba(184,147,95,0.5)]" />

      <div className="container relative z-10" style={{ padding: 'clamp(4rem, 8vw, 6rem) 1rem' }}>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16" style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-2" style={{ lineHeight: '1.2' }}>
                Atelier <span className="italic font-semibold text-[var(--gold)]">Narcissa</span>
              </h3>
              <div className="flex items-center gap-3 text-[var(--gold)]/70 text-sm tracking-[0.25em] uppercase font-bold">
                <span>Desde</span>
                <div className="h-[2px] w-8 bg-[var(--gold)]/50" />
                <span>1995</span>
              </div>
            </div>
            
            <p className="text-white/60 text-base leading-loose mb-8 max-w-md" style={{ lineHeight: '2' }}>
              Tres décadas creando <strong className="text-white/80">piezas únicas</strong> que trascienden el tiempo. 
              Especialistas en tapicería de lujo, restauración de muebles y confección textil premium.
            </p>

            {/* Premium Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group w-14 h-14 flex items-center justify-center bg-white/5 backdrop-blur-sm border-2 border-white/20 hover:border-[var(--gold)] rounded-xl transition-all duration-300 overflow-hidden"
                aria-label="Instagram"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/0 to-[var(--gold)]/0 group-hover:from-[var(--gold)]/20 group-hover:to-[var(--burgundy)]/20 transition-all duration-300" />
                <svg className="w-6 h-6 text-white/70 group-hover:text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group w-14 h-14 flex items-center justify-center bg-white/5 backdrop-blur-sm border-2 border-white/20 hover:border-[var(--gold)] rounded-xl transition-all duration-300 overflow-hidden"
                aria-label="Facebook"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/0 to-[var(--gold)]/0 group-hover:from-[var(--gold)]/20 group-hover:to-[var(--burgundy)]/20 transition-all duration-300" />
                <svg className="w-6 h-6 text-white/70 group-hover:text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group w-14 h-14 flex items-center justify-center bg-white/5 backdrop-blur-sm border-2 border-white/20 hover:border-[var(--gold)] rounded-xl transition-all duration-300 overflow-hidden"
                aria-label="Pinterest"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/0 to-[var(--gold)]/0 group-hover:from-[var(--gold)]/20 group-hover:to-[var(--burgundy)]/20 transition-all duration-300" />
                <svg className="w-6 h-6 text-white/70 group-hover:text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group w-14 h-14 flex items-center justify-center bg-white/5 backdrop-blur-sm border-2 border-white/20 hover:border-[var(--gold)] rounded-xl transition-all duration-300 overflow-hidden"
                aria-label="WhatsApp"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/0 to-[var(--gold)]/0 group-hover:from-[var(--gold)]/20 group-hover:to-[var(--burgundy)]/20 transition-all duration-300" />
                <svg className="w-6 h-6 text-white/70 group-hover:text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white text-sm uppercase tracking-[0.25em] font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[var(--gold)] to-transparent" />
              Navegación
            </h4>
            <ul className="space-y-4 text-base">
              {[
                { name: 'Inicio', href: '#inicio', icon: '→' },
                { name: 'Nosotros', href: '#nosotros', icon: '→' },
                { name: 'Servicios', href: '#servicios', icon: '→' },
                { name: 'Galería', href: '#galeria', icon: '→' },
                { name: 'Contacto', href: '#contacto', icon: '→' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-3 text-white/60 hover:text-[var(--gold)] transition-all duration-300"
                    style={{ lineHeight: '1.8' }}
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                      {link.icon}
                    </span>
                    <span className="transform group-hover:translate-x-2 transition-all duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white text-sm uppercase tracking-[0.25em] font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[var(--gold)] to-transparent" />
              Contacto
            </h4>
            <ul className="space-y-5 text-sm">
              <li>
                <a
                  href="mailto:narcissaatelier@gmail.com"
                  className="group flex items-start gap-3 text-white/60 hover:text-[var(--gold)] transition-colors"
                  style={{ lineHeight: '1.8' }}
                >
                  <svg className="w-5 h-5 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 8.97 5.7a1.94 1.94 0 0 0 2.06 0L22 7" />
                  </svg>
                  <span>narcissaatelier@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+34912345678"
                  className="group flex items-start gap-3 text-white/60 hover:text-[var(--gold)] transition-colors"
                  style={{ lineHeight: '1.8' }}
                >
                  <svg className="w-5 h-5 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+34 912 345 678</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60" style={{ paddingTop: '0.5rem', lineHeight: '1.8' }}>
                <svg className="w-5 h-5 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  Calle Mayor 45, Local 3
                  <br />
                  28013 Madrid, España
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="relative" style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm"
          style={{ paddingBottom: 'clamp(1rem, 2vw, 1.5rem)' }}
        >
          <p className="text-white/50 text-center md:text-left" style={{ lineHeight: '1.8' }}>
            © {currentYear} <strong className="text-white/70">Atelier Narcissa</strong>. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#" className="text-white/50 hover:text-[var(--gold)] transition-colors" style={{ lineHeight: '1.8' }}>
              Privacidad
            </a>
            <a href="#" className="text-white/50 hover:text-[var(--gold)] transition-colors" style={{ lineHeight: '1.8' }}>
              Términos
            </a>
            <a href="#" className="text-white/50 hover:text-[var(--gold)] transition-colors" style={{ lineHeight: '1.8' }}>
              Cookies
            </a>
          </div>
        </motion.div>

        {/* Elegant Signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center pt-8 border-t border-white/5"
        >
          <p className="font-serif text-white/30 italic text-sm sm:text-base" style={{ lineHeight: '1.8' }}>
            ✨ Artesanía con alma, diseño con propósito ✨
          </p>
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--gold)]/5 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;
