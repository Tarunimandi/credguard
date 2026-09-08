import { motion } from 'framer-motion';
import { Plus, Wallet, Bell, Shield } from 'lucide-react';
import { FadeUp } from '@/components/anim/FadeUp';
import SectionHeading from '@/components/SectionHeading';

const steps = [
  {
    num: '01',
    icon: Plus,
    title: 'Connect Your EMI Information',
    desc: 'Add your loans, EMIs, and upcoming financial obligations in one place.',
    visual: 'connect',
  },
  {
    num: '02',
    icon: Wallet,
    title: 'Build Your EMI Buffer',
    desc: 'Create a dedicated financial safety reserve for future EMI obligations.',
    visual: 'buffer',
  },
  {
    num: '03',
    icon: Bell,
    title: 'Stay Ahead with Smart Alerts',
    desc: 'Receive reminders and financial insights before your payment dates arrive.',
    visual: 'alerts',
  },
  {
    num: '04',
    icon: Shield,
    title: 'Stay Financially Protected',
    desc: 'Reduce the risk of accidental missed payments and maintain stronger financial discipline.',
    visual: 'protected',
  },
];

function StepVisual({ type }: { type: string }) {
  if (type === 'connect') {
    return (
      <div className="space-y-2">
        {['Car Loan — ₹8,000', 'Laptop EMI — ₹5,000', 'Personal Loan — ₹5,500'].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2"
          >
            <span className="text-xs text-ink-secondary">{item.split(' — ')[0]}</span>
            <span className="text-xs font-semibold text-white">{item.split(' — ')[1]}</span>
          </motion.div>
        ))}
      </div>
    );
  }
  if (type === 'buffer') {
    return (
      <div>
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="text-ink-tertiary">Buffer Goal: ₹50,000</span>
          <span className="font-semibold text-success">₹15,000</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-navy-600">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '30%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan"
          />
        </div>
        <p className="mt-2 text-xs text-ink-tertiary">30% of target reached</p>
      </div>
    );
  }
  if (type === 'alerts') {
    return (
      <div className="space-y-2">
        {[
          { text: 'Car Loan due in 3 days', color: 'text-warning' },
          { text: 'Reminder sent to your email', color: 'text-accent-cyan' },
          { text: 'Buffer coverage: 3 months', color: 'text-success' },
        ].map((alert, i) => (
          <motion.div
            key={alert.text}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2"
          >
            <Bell size={12} className={alert.color} />
            <span className="text-xs text-ink-secondary">{alert.text}</span>
          </motion.div>
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-success/15 ring-2 ring-success/30"
      >
        <Shield size={28} className="text-success" />
      </motion.div>
      <p className="mt-2 text-xs font-semibold text-success">Payment Readiness: 92%</p>
    </div>
  );
}

export default function Steps() {
  return (
    <section className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="The Journey"
          title="Four Steps to"
          highlight="Financial Confidence."
          subtitle="A simple, guided process that takes you from scattered EMI management to complete financial readiness."
        />

        {/* Desktop horizontal timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-blue/30 via-accent-cyan/30 to-accent-purple/30" />

            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <FadeUp key={step.num} delay={i * 0.15}>
                  <div className="relative pt-8">
                    {/* Node */}
                    <div className="absolute top-0 left-0 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan ring-4 ring-navy-900">
                      <span className="text-xs font-bold text-white">{step.num}</span>
                    </div>

                    <div className="glass rounded-2xl p-5">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-blue/15 text-accent-blue">
                        <step.icon size={20} />
                      </div>
                      <h3 className="font-display text-base font-bold text-white">{step.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-ink-secondary">{step.desc}</p>
                      <div className="mt-4 border-t border-white/10 pt-4">
                        <StepVisual type={step.visual} />
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-12 lg:hidden">
          <div className="relative space-y-8 pl-8">
            <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-gradient-to-b from-accent-blue/30 via-accent-cyan/30 to-accent-purple/30" />

            {steps.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.1}>
                <div className="relative">
                  <div className="absolute -left-8 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan ring-4 ring-navy-900">
                    <span className="text-[10px] font-bold text-white">{step.num}</span>
                  </div>
                  <div className="glass rounded-2xl p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-blue/15 text-accent-blue">
                      <step.icon size={20} />
                    </div>
                    <h3 className="font-display text-base font-bold text-white">{step.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-secondary">{step.desc}</p>
                    <div className="mt-4 border-t border-white/10 pt-4">
                      <StepVisual type={step.visual} />
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
