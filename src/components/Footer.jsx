import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--charcoal)] text-white/70 relative overflow-hidden">
      {/* Top Border */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

      <div className="container py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4 font-light">
              Atelier <span className="italic font-medium">Narcissa</span>
            </h3>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 max-w-md">
              Desde 1995, creando piezas únicas que trascienden el tiempo.
              Especialistas en tapicería de lujo, restauración de muebles y
              confección textil premium.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/20 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all rounded-sm"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/20 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all rounded-sm"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/20 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all rounded-sm"
                aria-label="Pinterest"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white/20 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all rounded-sm"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6 font-semibold">
              Navegación
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Nosotros', href: '#nosotros' },
                { name: 'Servicios', href: '#servicios' },
                { name: 'Galería', href: '#galeria' },
                { name: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[var(--gold)] transition-colors inline-block hover:translate-x-1 transform duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6 font-semibold">
              Contacto
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href="mailto:narcissaatelier@gmail.com"
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  narcissaatelier@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+34912345678"
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  +34 912 345 678
                </a>
              </li>
              <li className="pt-2">
                Calle Mayor 45, Local 3
                <br />
                28013 Madrid, España
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="h-[1px] bg-white/10 mb-6 sm:mb-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm"
        >
          <p className="text-center md:text-left">
            © {currentYear} Atelier Narcissa. Todos los derechos reservados.
          </p>

          <div className="flex gap-4 sm:gap-6 md:gap-8">
            <a
              href="#"
              className="hover:text-[var(--gold)] transition-colors"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="hover:text-[var(--gold)] transition-colors"
            >
              Términos
            </a>
            <a
              href="#"
              className="hover:text-[var(--gold)] transition-colors"
            >
              Cookies
            </a>
          </div>
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-6 sm:mt-8 text-[10px] sm:text-xs text-white/40 font-serif italic"
        >
          Artesanía con alma, diseño con propósito
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
