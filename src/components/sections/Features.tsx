import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Bell,
  Shield,
  Calendar,
  Gauge,
  HeartPulse,
  Send,
  TrendingUp,
} from 'lucide-react';
import { FadeUp } from '@/components/anim/FadeUp';
import SectionHeading from '@/components/SectionHeading';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Smart EMI Dashboard',
    desc: 'View all upcoming EMIs in one place with a clear, organized overview.',
    span: 'lg:col-span-2',
    accent: 'from-accent-blue to-accent-cyan',
  },
  {
    icon: Bell,
    title: 'Intelligent Reminders',
    desc: 'Receive timely alerts before payment deadlines.',
    span: '',
    accent: 'from-warning to-accent-blue',
  },
  {
    icon: Shield,
    title: 'EMI Buffer System',
    desc: 'Build a dedicated financial safety reserve.',
    span: '',
    accent: 'from-success to-accent-cyan',
  },
  {
    icon: Calendar,
    title: 'Financial Calendar',
    desc: 'Understand your upcoming monthly obligations at a glance.',
    span: '',
    accent: 'from-accent-purple to-accent-blue',
  },
  {
    icon: Gauge,
    title: 'Payment Readiness Insights',
    desc: 'Know whether you\'re financially prepared for upcoming payments.',
    span: 'lg:col-span-2',
    accent: 'from-accent-cyan to-accent-blue',
  },
  {
    icon: HeartPulse,
    title: 'Credit Health Awareness',
    desc: 'Monitor important credit-related indicators through authorized integrations.',
    span: '',
    accent: 'from-danger to-accent-purple',
  },
  {
    icon: Send,
    title: 'Smart Notifications',
    desc: 'Receive alerts for important financial events.',
    span: '',
    accent: 'from-accent-blue to-accent-purple',
  },
  {
    icon: TrendingUp,
    title: 'Financial Discipline Insights',
    desc: 'Understand your EMI habits and payment patterns over time.',
    span: 'lg:col-span-2',
    accent: 'from-success to-accent-blue',
  },
];

export default function Features() {
  return (
    <section id="features" className="section-pad relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent-blue/10 blur-[120px]" />

      <div className="container-max relative">
        <SectionHeading
          eyebrow="Features"
          title="Everything You Need to Stay"
          highlight="Ahead of Your EMIs."
          subtitle="A comprehensive suite of tools designed to bring clarity, control, and confidence to your financial life."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <FadeUp key={f.title} delay={(i % 4) * 0.1} className={f.span}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group h-full"
              >
                <div className="glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-white/20">
                  <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${f.accent} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`} />
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} p-0.5`}>
                    <div className="flex h-full w-full items-center justify-center rounded-xl bg-navy-800">
                      <f.icon size={22} className="text-white" />
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{f.desc}</p>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
