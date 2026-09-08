import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FadeUp } from '@/components/anim/FadeUp';
import SectionHeading from '@/components/SectionHeading';

const faqs = [
  {
    q: 'What is CredGuard?',
    a: 'CredGuard is a financial technology platform concept focused on helping users track EMI obligations, prepare for upcoming payments, and improve financial discipline.',
  },
  {
    q: 'Does CredGuard guarantee that I will never miss an EMI?',
    a: 'No. CredGuard is designed to help users reduce the risk of missed payments through planning, reminders, and financial readiness tools.',
  },
  {
    q: 'Is CredGuard a bank?',
    a: 'No. CredGuard is a technology platform. Regulated financial services would require authorized partners and appropriate compliance.',
  },
  {
    q: 'Can CredGuard improve my credit score?',
    a: 'CredGuard does not guarantee credit score improvement. Consistent financial discipline and on-time repayments may contribute positively to credit health.',
  },
  {
    q: 'Is my financial information secure?',
    a: 'CredGuard aims to use modern security and privacy practices. Specific security implementations will evolve as the product develops.',
  },
  {
    q: 'When will CredGuard launch?',
    a: 'The product is currently in the early development and validation stage.',
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-800/40 backdrop-blur-sm transition-colors hover:border-white/15">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base font-semibold text-white">{q}</span>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-cyan">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-ink-secondary">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions?"
          highlight="We Have Answers."
          subtitle="Everything you need to know about CredGuard and how it works."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <FadeUp key={faq.q} delay={i * 0.05}>
              <FAQItem
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
