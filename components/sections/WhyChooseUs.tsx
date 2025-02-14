"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated, SpringValue } from 'react-spring';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Rocket,
  Shield,
  Zap,
  Users,
  HeartHandshake,
  Trophy,
  Code,
  Clock,
  Target
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Reason {
  icon: React.ElementType;
  title: string;
  description: string;
  stats: string;
  highlight: string;
}

interface Card3DProps {
  reason: Reason;
  index: number;
}

interface AnimatedDivProps {
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  style?: {
    transform?: SpringValue<string>;
    opacity?: SpringValue<number>;
  };
  children?: React.ReactNode;
}

const AnimatedDiv = animated('div') as unknown as React.FC<AnimatedDivProps>;

const reasons = [
  {
    icon: Rocket,
    title: 'Soluções Personalizadas',
    description: 'Sistemas adaptados ao seu negócio, desenvolvidos com tecnologias modernas.',
    stats: 'Projetos 100% personalizados',
    highlight: 'Cada projeto é único como seu negócio'
  },
  {
    icon: Shield,
    title: 'Tecnologia de Ponta',
    description: 'Utilizamos as mais modernas tecnologias e frameworks para garantir performance e segurança.',
    stats: 'Stack tecnológico atual',
    highlight: 'Sempre atualizados com as últimas tecnologias'
  },
  {
    icon: Zap,
    title: 'Entrega Ágil',
    description: 'Metodologia ágil para desenvolvimento rápido e eficiente, com entregas contínuas.',
    stats: 'Primeira versão em até 30 dias',
    highlight: 'Resultados rápidos e tangíveis'
  },
  {
    icon: Users,
    title: 'Time Especializado',
    description: 'Equipe jovem e dinâmica com conhecimento em desenvolvimento de software.',
    stats: 'Equipe dedicada ao seu projeto',
    highlight: 'Profissionais atualizados e comprometidos'
  },
  {
    icon: HeartHandshake,
    title: 'Suporte Dedicado',
    description: 'Acompanhamento próximo do projeto com suporte técnico especializado.',
    stats: 'Atendimento personalizado',
    highlight: 'Sempre prontos para ajudar'
  },
  {
    icon: Trophy,
    title: 'Foco em Resultados',
    description: 'Comprometimento total com o sucesso do seu projeto e satisfação.',
    stats: 'Satisfação garantida',
    highlight: 'Seu sucesso é nossa prioridade'
  },
  {
    icon: Code,
    title: 'Código Limpo',
    description: 'Desenvolvimento com as melhores práticas de programação para garantir manutenibilidade.',
    stats: 'Código bem documentado',
    highlight: 'Qualidade em cada linha de código'
  },
  {
    icon: Clock,
    title: 'Pontualidade',
    description: 'Comprometimento com prazos e entregas dentro do cronograma estabelecido.',
    stats: 'Entregas no prazo combinado',
    highlight: 'Seu projeto no tempo certo'
  },
  {
    icon: Target,
    title: 'Visão Inovadora',
    description: 'Uma nova perspectiva para desenvolvimento de software com foco em inovação.',
    stats: 'Empresa jovem e dinâmica',
    highlight: 'Inovação é nosso DNA'
  }
];

const Card3D = ({ reason, index }: Card3DProps) => {
  const [isHovered, setHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const Icon = reason.icon;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const springs = useSpring({
    transform: isHovered
      ? 'scale(1.05) skewX(0deg)'
      : 'scale(1) skewX(10deg)',
    config: { mass: 5, tension: 500, friction: 80 }
  });

  if (!isMounted) {
    return null; // ou um placeholder/loading state
  }

  return (
    <AnimatedDiv
      className="reason-card relative group min-h-[400px] transition-transform md:transform-none hover:md:transform-none"
      style={springs}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="card-3d-content bg-white/30 backdrop-blur-md rounded-xl p-6 h-full border-b-2 border-l border-white/40 shadow-[rgba(0,0,0,0.28)_-40px_50px_30px]"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: index * 0.2
          }
        }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-[#ff605c] shadow-[-5px_5px_5px_rgba(0,0,0,0.28)]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd44] shadow-[-5px_5px_5px_rgba(0,0,0,0.28)]" />
          <div className="w-3 h-3 rounded-full bg-[#00ca4e] shadow-[-5px_5px_5px_rgba(0,0,0,0.28)]" />
        </div>

        <div className="icon-container mb-6 relative">
          <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
          <Icon className="w-12 h-12 text-primary relative z-10" />
        </div>

        <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          {reason.title}
        </h3>

        <p className="text-muted-foreground mb-6">
          {reason.description}
        </p>

        <motion.div
          className="bg-primary/10 rounded-lg p-4"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { delay: index * 0.3 }
          }}
          viewport={{ once: true }}
        >
          <p className="text-lg font-semibold text-primary">{reason.stats}</p>
          <p className="text-sm text-muted-foreground">{reason.highlight}</p>
        </motion.div>
      </motion.div>
    </AnimatedDiv>
  );
};

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const cards = document.querySelectorAll('.reason-card');

        cards.forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=50',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 30,
            duration: 0.5,
            delay: index * 0.1,
          });
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      id="whyChooseUs"
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16 section-title"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
            Por Que Escolher a <span className="text-gradient-animated">NexoraX</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma nova empresa com visão inovadora e foco total na satisfação do cliente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card3D key={index} reason={reason} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comece Seu Projeto
            <Rocket className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}