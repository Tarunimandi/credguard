import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Why CredGuard', href: '#why-credguard' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong py-3' : 'py-4 bg-transparent'
      }`}
    >
      <nav className="container-max flex items-center justify-between px-5 sm:px-8 lg:px-12">
        <button onClick={() => handleNavClick('#home')} aria-label="CredGuard home">
          <Logo size="md" />
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="rounded-lg px-4 py-2 text-sm font-medium text-ink-secondary transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="text-sm font-semibold text-ink-secondary transition-colors hover:text-white">
            Login
          </button>
          <button
            onClick={() => handleNavClick('#waitlist')}
            className="btn-primary group"
          >
            Join Waitlist
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="glass-strong mx-4 mt-3 rounded-2xl p-5">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="rounded-lg px-4 py-3 text-left text-sm font-medium text-ink-secondary transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-4">
                  <button className="rounded-xl px-4 py-3 text-sm font-semibold text-ink-secondary transition-colors hover:text-white">
                    Login
                  </button>
                  <button
                    onClick={() => handleNavClick('#waitlist')}
                    className="btn-primary"
                  >
                    Join Waitlist
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
