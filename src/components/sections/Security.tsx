import { motion } from 'framer-motion';
import { Lock, Server, UserCheck, Eye } from 'lucide-react';
import { FadeUp } from '@/components/anim/FadeUp';
import SectionHeading from '@/components/SectionHeading';

const principles = [
  {
    icon: Lock,
    title: 'Data Privacy',
    desc: 'User financial information should be handled responsibly and with care.',
  },
  {
    icon: Server,
    title: 'Secure Infrastructure',
    desc: 'Designed with modern security best practices and industry-standard approaches.',
  },
  {
    icon: UserCheck,
    title: 'User Control',
    desc: 'Users maintain control over their connected information at all times.',
  },
  {
    icon: Eye,
    title: 'Transparent Operations',
    desc: 'Clear communication about how financial features work and what they do.',
  },
];

export default function Security() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute top-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-accent-blue/10 blur-[120px]" />

      <div className="container-max relative">
        <SectionHeading
          eyebrow="Security & Privacy"
          title="Built With Security and"
          highlight="Privacy in Mind."
          subtitle="We believe trust is earned through transparency and responsible data practices."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <FadeUp key={p.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group h-full"
              >
                <div className="glass h-full rounded-2xl p-6 text-center transition-all duration-300 hover:border-accent-blue/30">
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-accent-blue/20 blur-lg transition-opacity group-hover:opacity-60" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 ring-1 ring-white/10">
                      <p.icon size={26} className="text-accent-cyan" />
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-secondary">{p.desc}</p>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-ink-tertiary">
            CredGuard is designed with modern security best practices. We do not claim certifications that do not exist, and security implementations will continue to evolve as the product develops.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
