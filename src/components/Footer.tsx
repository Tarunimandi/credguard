import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Instagram, Twitter, Github } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'FAQ', href: '#faq' },
];

const legalLinks = ['Privacy Policy', 'Terms of Use', 'Disclaimer'];

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'X / Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-navy-800/50 pt-16 pb-8">
      <div className="absolute top-0 left-1/2 h-[200px] w-[600px] -translate-x-1/2 rounded-full bg-accent-blue/5 blur-[100px]" />

      <div className="container-max relative px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo size="md" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-secondary">
              Building smarter tools for EMI management and financial preparedness.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ink-secondary transition-all hover:border-accent-blue/30 hover:text-accent-cyan"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm font-bold text-white">Navigation</h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-ink-secondary transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-sm font-bold text-white">Legal</h4>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link}>
                  {link === 'Disclaimer' ? (
                    <button
                      onClick={() => setDisclaimerOpen(true)}
                      className="text-sm text-ink-secondary transition-colors hover:text-white"
                    >
                      {link}
                    </button>
                  ) : (
                    <span className="text-sm text-ink-secondary">{link}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-ink-tertiary">
            © 2026 CredGuard. All Rights Reserved.
          </p>
          <p className="mt-2 text-center text-xs text-ink-tertiary">
            CredGuard is currently an independent startup concept under development.
          </p>
        </div>
      </div>

      {/* Disclaimer Modal */}
      <AnimatePresence>
        {disclaimerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setDisclaimerOpen(false)}
          >
            <div className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong relative max-w-lg rounded-3xl p-8"
            >
              <button
                onClick={() => setDisclaimerOpen(false)}
                className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-ink-secondary hover:text-white"
              >
                <X size={16} />
              </button>
              <h3 className="font-display text-xl font-bold text-white">Disclaimer</h3>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink-secondary">
                <p>
                  CredGuard is a technology platform concept currently under development. The platform does not provide banking, lending, investment, credit rating, or regulated financial services unless operated through appropriately licensed and authorized partners.
                </p>
                <p>
                  Any future financial integrations, payment automation, credit information services, or investment-related functionality will be subject to applicable laws, regulations, licensing requirements, and partner availability.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
