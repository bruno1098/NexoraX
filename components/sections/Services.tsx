"use client";

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Code } from 'lucide-react';
import dynamicImport from 'next/dynamic';
import { useTheme } from '@/components/providers/ThemeProvider';
import { isBrowser } from '@/lib/utils';

const Player = dynamicImport(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

const animations = {
  coding: "/animations/coding.json",
  landingPage: "/animations/Animation - 1739299512900.json",
  schedule: "/animations/AnimationSchedule.json",
  dashboard: "/animations/AnimationBusiness.json",
  mobile: "/animations/AnimationMobile.json",
  erp: "/animations/AnimationErp.json",
  chat: "/animations/AnimationChatAd.json"
};

type ServiceType = {
  animation: string;
  title: string;
  description: string;
  features: string[];
  stats: string;
  align: 'left' | 'right';
};

const services: ServiceType[] = [
  {
    animation: animations.landingPage,
    title: 'Landing Pages e Sites Institucionais',
    description: 'Páginas otimizadas para conversão e sites profissionais que representam sua marca.',
    features: [
      'Design responsivo',
      'Otimização SEO',
      'Alta performance',
      'Integração com Analytics',
      'CMS para gestão de conteúdo'
    ],
    stats: '+ de 50 sites entregues',
    align: 'left'
  },
  {
    animation: animations.schedule,
    title: 'Sistemas de Agendamento Online',
    description: 'Plataforma completa para gestão de agenda, clientes e serviços.',
    features: [
      'Agendamento automático',
      'Lembretes por WhatsApp/Email',
      'Pagamento online',
      'Gestão de clientes',
      'Relatórios detalhados'
    ],
    stats: '+ de 100 mil agendamentos',
    align: 'right'
  },
  {
    animation: animations.dashboard,
    title: 'Sistemas de Gestão Empresarial',
    description: 'Dashboards inteligentes e ERP completo para visualização de dados e tomada de decisões estratégicas.',
    features: [
      'Dashboards personalizados',
      'Análise em tempo real',
      'Gráficos interativos',
      'KPIs automatizados',
      'Business Intelligence'
    ],
    stats: '+ de 1000 empresas atendidas',
    align: 'left'
  },
  {
    animation: animations.mobile,
    title: 'Aplicativos Mobile',
    description: 'Apps nativos e híbridos para iOS e Android que transformam sua ideia em realidade.',
    features: [
      'UX/UI personalizado',
      'Performance nativa',
      'Integração com APIs',
      'Push notifications',
      'Analytics e métricas'
    ],
    stats: '+ de 30 apps publicados',
    align: 'right'
  }
];

const ServiceComponent = ({ service }: { service: ServiceType }) => {
  return (
    <div>
      <div className="w-full h-64 relative">
        <Player
          autoplay
          loop
          src={service.animation}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* ... resto do componente ... */}
    </div>
  );
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      if (!isBrowser()) return;

      const ctx = gsap.context(() => {
        services.forEach((_, index) => {
          gsap.from(`.service-card-${index}`, {
            scrollTrigger: {
              trigger: `.service-card-${index}`,
              start: 'top bottom-=100',
              end: 'bottom top+=100',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            duration: 1,
            ease: "power3.out"
          });
        });
      }, sectionRef);

      // Adicionar efeito de mouse
      const section = sectionRef.current;
      const handleMouseMove = (e: MouseEvent) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        section.style.setProperty('--mouse-x', `${x}%`);
        section.style.setProperty('--mouse-y', `${y}%`);
      };

      section?.addEventListener('mousemove', handleMouseMove);
      return () => {
        ctx.revert();
        section?.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="services"
      className="section-padding services-background overflow-hidden"
    >
      <div className="container relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          >
            <Code className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Nossos Serviços</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold font-montserrat mb-6"
          >
            O Que <span className="text-gradient-animated">Fazemos</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Desenvolvemos soluções tecnológicas personalizadas para impulsionar seu negócio
          </motion.p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card-${index} flex flex-col ${
                service.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-8 md:gap-16`}
            >
              <div className="flex-1 space-y-6">
                <div className="glass inline-block px-3 py-1.5 rounded-full">
                  <p className="text-sm font-medium text-primary">{service.stats}</p>
                </div>
                
                <h3 className="text-3xl font-bold text-foreground">{service.title}</h3>
                <p className="text-lg text-muted-foreground">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="feature-item flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div 
                className="flex-1 relative perspective-container"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-3d">
                  <Player
                    src={service.animation}
                    autoplay
                    loop
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                  
                  <div className="absolute top-4 right-4 w-24 h-24">
                    <Player
                      src={animations.coding}
                      autoplay
                      loop
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <motion.a
            href="/services"
            className="btn-primary glow hover-3d inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Conheça Todos os Nossos Serviços
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}