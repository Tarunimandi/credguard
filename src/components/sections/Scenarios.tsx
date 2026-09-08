import { motion } from 'framer-motion';
import { Briefcase, Laptop, GraduationCap } from 'lucide-react';
import { FadeUp } from '@/components/anim/FadeUp';
import SectionHeading from '@/components/SectionHeading';

const scenarios = [
  {
    icon: Briefcase,
    name: 'Rahul',
    role: 'The Busy Professional',
    desc: 'Rahul has three EMIs and often forgets payment dates. CredGuard helps him track all payments and receive alerts before deadlines.',
    gradient: 'from-accent-blue to-accent-cyan',
    initials: 'R',
  },
  {
    icon: Laptop,
    name: 'Priya',
    role: 'The Freelancer',
    desc: 'Priya has irregular monthly income. She uses an EMI Buffer strategy to prepare for future obligations during higher-income months.',
    gradient: 'from-accent-cyan to-accent-purple',
    initials: 'P',
  },
  {
    icon: GraduationCap,
    name: 'Arjun',
    role: 'The Young Professional',
    desc: 'Arjun recently purchased a laptop and phone on EMI. CredGuard gives him a clear picture of his monthly financial commitments.',
    gradient: 'from-accent-purple to-accent-blue',
    initials: 'A',
  },
];

export default function Scenarios() {
  return (
    <section className="section-pad relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Real Life Stories"
          title="Built for"
          highlight="Real Life."
          subtitle="Different people, different financial situations — one platform designed to help them all stay on track."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {scenarios.map((s, i) => (
            <FadeUp key={s.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group h-full"
              >
                <div className="glass h-full overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:border-white/20">
                  {/* Avatar */}
                  <div className="flex items-center gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient}`}>
                      <span className="font-display text-xl font-bold text-white">{s.initials}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">{s.name}</h3>
                      <p className="text-xs text-ink-tertiary">{s.role}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-accent-cyan">
                    <s.icon size={22} />
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-secondary">{s.desc}</p>

                  {/* Mini visual */}
                  <div className="mt-5 flex gap-2 border-t border-white/10 pt-4">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="flex-1">
                        <div className="h-1.5 rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${n === 1 ? '90%' : n === 2 ? '65%' : '80%'}` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 + n * 0.1 }}
                            className={`h-full rounded-full bg-gradient-to-r ${s.gradient}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
