import Hero from '@/components/Hero';
import Features from '@/components/Features';
import LotusPhilosophy from '@/components/LotusPhilosophy';
import Topics from '@/components/Topics';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <LotusPhilosophy />
      <Topics />
      <CTA />
    </main>
  );
}