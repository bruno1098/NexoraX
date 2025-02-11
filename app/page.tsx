"use client";

import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import HowItWorks from '@/components/sections/HowItWorks';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import CallToAction from '@/components/sections/CallToAction';
import Footer from '@/components/sections/Footer';
import { useEffect } from 'react';
import { useLoading } from '@/components/providers/LoadingProvider';

export default function Home() {
  const { stopLoading } = useLoading();

  useEffect(() => {
    // Garante que o loading pare quando a página estiver montada
    const timer = setTimeout(() => {
      stopLoading();
    }, 500);

    return () => clearTimeout(timer);
  }, [stopLoading]);

  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}