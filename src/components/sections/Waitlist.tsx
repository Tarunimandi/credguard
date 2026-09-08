import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { FadeUp } from '@/components/anim/FadeUp';
import { supabase } from '@/lib/supabase';

const userTypes = [
  'Salaried Professional',
  'Freelancer',
  'Student',
  'Business Owner',
  'Other',
];

export default function Waitlist() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('waitlist').insert({
        full_name: fullName.trim(),
        email: email.trim().toLowerCase(),
        user_type: userType || null,
      });

      if (error) {
        if (error.code === '23505') {
          setErrorMsg('This email is already on the waitlist.');
        } else {
          setErrorMsg('Something went wrong. Please try again.');
        }
        setStatus('error');
        return;
      }

      setStatus('success');
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="waitlist" className="section-pad relative overflow-hidden">
      <div className="absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent-blue/15 blur-[140px]" />
      <div className="absolute bottom-0 left-1/3 h-[300px] w-[400px] rounded-full bg-accent-cyan/10 blur-[120px]" />

      <div className="container-max relative">
        <div className="mx-auto max-w-2xl">
          <FadeUp>
            <div className="text-center">
              <span className="inline-block rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                Join Early Access
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                Be Among the First to{' '}
                <span className="gradient-text">Experience CredGuard.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-secondary sm:text-lg">
                Join the early access waitlist and follow the journey as we build the future of EMI management.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-10 rounded-3xl border border-white/10 bg-navy-800/60 p-8 backdrop-blur-xl sm:p-10">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-success/15 ring-2 ring-success/30"
                    >
                      <CheckCircle2 size={40} className="text-success" />
                    </motion.div>
                    <h3 className="mt-6 font-display text-xl font-bold text-white">
                      You're on the list!
                    </h3>
                    <p className="mt-2 text-sm text-ink-secondary">
                      Thank you for joining the CredGuard journey. We'll be in touch soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-ink-secondary">
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-white/10 bg-navy-700/50 px-4 py-3 text-sm text-white placeholder:text-ink-tertiary focus:border-accent-blue/50 focus:outline-none focus:ring-2 focus:ring-accent-blue/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-secondary">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-white/10 bg-navy-700/50 px-4 py-3 text-sm text-white placeholder:text-ink-tertiary focus:border-accent-blue/50 focus:outline-none focus:ring-2 focus:ring-accent-blue/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="userType" className="mb-2 block text-sm font-medium text-ink-secondary">
                        What best describes you? <span className="text-ink-tertiary">(optional)</span>
                      </label>
                      <select
                        id="userType"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-navy-700/50 px-4 py-3 text-sm text-white focus:border-accent-blue/50 focus:outline-none focus:ring-2 focus:ring-accent-blue/20"
                      >
                        <option value="">Select an option</option>
                        {userTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 rounded-xl border border-danger/20 bg-danger/10 px-4 py-3 text-sm text-danger"
                      >
                        <AlertCircle size={16} />
                        {errorMsg}
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary group w-full disabled:opacity-60"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Joining...
                        </>
                      ) : (
                        <>
                          Join Early Access
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-ink-tertiary">
                      By joining, you agree to receive updates about CredGuard. No spam, ever.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
