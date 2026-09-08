import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { FadeUp } from '@/components/anim/FadeUp';

export default function FounderVision() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-accent-blue/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-accent-cyan/10 blur-[100px]" />

      <div className="container-max relative">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <div className="text-center">
              <span className="inline-block rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                Our Vision
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                Why <span className="gradient-text">CredGuard Exists.</span>
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-12 rounded-3xl border border-white/10 bg-navy-800/60 p-8 backdrop-blur-xl sm:p-12">
              <Quote size={40} className="mx-auto text-accent-blue/30" />

              <div className="mt-6 space-y-5 text-center">
                <p className="font-display text-lg leading-relaxed text-white sm:text-xl">
                  Financial problems are not always caused by lack of income.
                </p>
                <p className="text-base leading-relaxed text-ink-secondary">
                  Sometimes they happen because life gets busy. People forget payment dates. Unexpected expenses happen. Income timing changes.
                </p>
                <p className="font-display text-lg leading-relaxed text-white sm:text-xl">
                  CredGuard was created from a simple question:
                </p>
                <p className="font-display text-xl font-bold gradient-text sm:text-2xl">
                  "What if people had a smarter safety system for their EMI obligations?"
                </p>
                <p className="text-base leading-relaxed text-ink-secondary">
                  Our vision is to build technology that helps people stay organized, prepared, and financially confident.
                </p>
              </div>

              {/* Founder */}
              <div className="mt-10 flex flex-col items-center justify-center border-t border-white/10 pt-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue to-accent-cyan"
                >
                  <span className="font-display text-2xl font-bold text-white">T</span>
                </motion.div>
                <p className="mt-4 font-display text-lg font-bold text-white">Tarun Imandi</p>
                <p className="text-sm text-ink-tertiary">Founder & Product Vision</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="mt-6 text-center text-xs text-ink-tertiary">
              CredGuard is an early-stage startup concept currently being developed. No fabricated achievements, investors, or partnerships are claimed.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
