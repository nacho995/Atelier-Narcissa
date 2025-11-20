import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Inicio', 
      href: '#inicio', 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    { 
      name: 'Nosotros', 
      href: '#nosotros', 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    },
    { 
      name: 'Servicios', 
      href: '#servicios', 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
    },
    { 
      name: 'Galería', 
      href: '#galeria', 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    },
    { 
      name: 'Contacto', 
      href: '#contacto', 
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
  ];

  return (
    <>
      <style>{`
        @media (min-width: 1024px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
      
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 50,
          transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        className={`${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-2xl py-5 border-b-2 border-[var(--gold)]/20'
            : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm py-8'
        }`}
      >
      <div className="container">
        <nav className="flex justify-between items-center">
          {/* Logo Premium */}
          <motion.a
            href="#inicio"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <div className="relative">
              {/* Logo Text */}
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 300,
                  letterSpacing: '0.02em',
                  transition: 'all 0.3s ease',
                }}
                className={`${
                  isScrolled ? 'text-[var(--gold)]' : 'text-white'
                }`}
              >
                <span className="relative">
                  Atelier{' '}
                  <span 
                    style={{ 
                      fontStyle: 'italic', 
                      fontWeight: 600,
                      color: '#C9A961'
                    }}
                  >
                    Narcissa
                  </span>
                </span>
              </h1>
              
              {/* Underline Luxury */}
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold))',
                  boxShadow: '0 2px 10px rgba(184, 147, 95, 0.5)',
                }}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
              
              {/* Premium Badge */}
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: '-14px',
                  right: '-8px',
                  fontSize: '0.65rem',
                  padding: '4px 8px',
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                  color: 'white',
                  borderRadius: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  boxShadow: '0 4px 12px rgba(184, 147, 95, 0.4)',
                  whiteSpace: 'nowrap',
                }}
                initial={{ scale: 0, rotate: -12 }}
                animate={{ scale: 1, rotate: -12 }}
                transition={{ delay: 0.3, type: 'spring' }}
              >
                DESDE 1995
              </motion.div>
            </div>
          </motion.a>

          {/* Desktop Navigation Premium */}
          <div className="desktop-nav hidden lg:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  position: 'relative',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease',
                  padding: '10px 18px',
                  borderRadius: '12px',
                }}
                className={`group ${
                  isScrolled
                    ? 'text-[var(--charcoal)] hover:text-white hover:bg-gradient-to-r hover:from-[var(--gold)] hover:to-[var(--gold-light)]'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {link.icon}
                  {link.name}
                </span>
                
                {/* Hover Effect */}
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: '6px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '0%',
                    height: '2px',
                    background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
                    borderRadius: '2px',
                  }}
                  whileHover={{ width: '70%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button Premium - MEJORADO */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              console.log('Burger clicked, current state:', isMobileMenuOpen);
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '7px',
              padding: '12px',
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              background: isScrolled 
                ? 'linear-gradient(135deg, rgba(184, 147, 95, 0.15), rgba(212, 175, 106, 0.15))' 
                : 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              border: `2px solid ${isScrolled ? 'rgba(184, 147, 95, 0.4)' : 'rgba(255, 255, 255, 0.3)'}`,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            className="mobile-menu-btn lg:hidden hover:shadow-xl"
            aria-label="Toggle menu"
          >
            {/* Línea Superior */}
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 11 : 0,
                scaleX: isMobileMenuOpen ? 1 : 0.7,
                x: isMobileMenuOpen ? 0 : -4,
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                display: 'block',
                width: '100%',
                height: '3.5px',
                borderRadius: '4px',
            background: isScrolled 
              ? 'linear-gradient(90deg, var(--gold), var(--gold-light))' 
              : 'white',
                boxShadow: isScrolled 
                  ? '0 2px 8px rgba(184, 147, 95, 0.3)' 
                  : '0 2px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
            
            {/* Línea Media */}
            <motion.span
              animate={{ 
                opacity: isMobileMenuOpen ? 0 : 1,
                scaleX: isMobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'block',
                width: '100%',
                height: '3.5px',
                borderRadius: '4px',
            background: isScrolled 
              ? 'linear-gradient(90deg, var(--gold), var(--gold-light))' 
              : 'white',
                boxShadow: isScrolled 
                  ? '0 2px 8px rgba(184, 147, 95, 0.3)' 
                  : '0 2px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
            
            {/* Línea Inferior */}
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -11 : 0,
                scaleX: isMobileMenuOpen ? 1 : 0.7,
                x: isMobileMenuOpen ? 0 : -4,
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                display: 'block',
                width: '100%',
                height: '3.5px',
                borderRadius: '4px',
            background: isScrolled 
              ? 'linear-gradient(90deg, var(--gold), var(--gold-light))' 
              : 'white',
                boxShadow: isScrolled 
                  ? '0 2px 8px rgba(184, 147, 95, 0.3)' 
                  : '0 2px 8px rgba(0, 0, 0, 0.2)',
              }}
            />
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu Premium - CON ANIMACIONES MEJORADAS */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(250,248,245,0.98) 100%)',
              backdropFilter: 'blur(20px)',
              borderTop: '2px solid rgba(184, 147, 95, 0.2)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              overflow: 'hidden',
            }}
            className="mobile-menu"
          >
            <div className="container py-10">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -50, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      scale: 1,
                    }}
                    exit={{ 
                      opacity: 0, 
                      x: 50,
                      scale: 0.8,
                    }}
                    transition={{ 
                      delay: index * 0.08, 
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ scale: 1.03, x: 5 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      padding: '18px 24px',
                      borderRadius: '16px',
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.5), rgba(250,248,245,0.5))',
                      border: '2px solid rgba(184, 147, 95, 0.15)',
                      transition: 'all 0.3s ease',
                      color: 'var(--charcoal)',
                    }}
                    className="hover:bg-gradient-to-r hover:from-[var(--gold)] hover:to-[var(--gold-light)] hover:text-white hover:border-[var(--gold)]/50 hover:shadow-xl"
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex-shrink-0">{link.icon}</span>
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
