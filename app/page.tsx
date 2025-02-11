"use client";

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useLoading } from '@/components/providers/LoadingProvider';

// Importações dinâmicas
const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: false });
const DynamicServices = dynamic(() => import('@/components/sections/Services'), {
  ssr: false
});
const HowItWorks = dynamic(() => import('@/components/sections/HowItWorks'), { ssr: false });
const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), { ssr: false });
const CallToAction = dynamic(() => import('@/components/sections/CallToAction'), { ssr: false });
const Footer = dynamic(() => import('@/components/sections/Footer'), { ssr: false });
const DynamicCareers = dynamic(() => import('@/app/careers/page'), {
  ssr: false
});

export default function Home() {
  const { stopLoading } = useLoading();

  useEffect(() => {
    const timer = setTimeout(() => {
      stopLoading();
    }, 500);

    return () => clearTimeout(timer);
  }, [stopLoading]);

  return (
    <main className="overflow-hidden">
      <Hero />
      <DynamicServices />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}