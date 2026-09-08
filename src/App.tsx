import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Problems from '@/components/sections/Problems';
import HowItWorks from '@/components/sections/HowItWorks';
import Steps from '@/components/sections/Steps';
import Features from '@/components/sections/Features';
import Dashboard from '@/components/sections/Dashboard';
import EmiBuffer from '@/components/sections/EmiBuffer';
import Scenarios from '@/components/sections/Scenarios';
import Comparison from '@/components/sections/Comparison';
import Security from '@/components/sections/Security';
import Roadmap from '@/components/sections/Roadmap';
import FounderVision from '@/components/sections/FounderVision';
import Waitlist from '@/components/sections/Waitlist';
import FAQ from '@/components/sections/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <HowItWorks />
        <Steps />
        <Features />
        <Dashboard />
        <EmiBuffer />
        <Scenarios />
        <Comparison />
        <Security />
        <Roadmap />
        <FounderVision />
        <Waitlist />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
