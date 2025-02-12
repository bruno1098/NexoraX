"use client";

import { motion } from 'framer-motion';
import dynamicImport from 'next/dynamic';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import { 
  MessageSquare, 
  Target, 
  Rocket, 
  Code,
  Presentation,
  Users,
  CheckCircle
} from 'lucide-react';

const Player = dynamicImport(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { 
    ssr: false,
    loading: () => <div className="w-full h-64 bg-muted/10 rounded-lg animate-pulse" />
  }
);

const steps = [
  {
    icon: MessageSquare,
    title: "1. Primeiro Contato",
    description: "Entre em contato conosco compartilhando sua ideia ou necessidade. Nossa equipe estará pronta para ouvir e entender seu projeto.",
    video: "https://assets8.lottiefiles.com/packages/lf20_8wREpI.json"
  },
  {
    icon: Target,
    title: "2. Análise e Planejamento",
    description: "Realizamos reuniões detalhadas para entender seus objetivos, definir escopo e criar um planejamento estratégico.",
    video: "https://assets2.lottiefiles.com/packages/lf20_49rdyysj.json"
  },
  {
    icon: Presentation,
    title: "3. Proposta e MVP",
    description: "Apresentamos uma proposta detalhada com cronograma e custos, incluindo um MVP (Produto Mínimo Viável) para validação.",
    video: "/animations/AnimationProposal.json"
  },
  {
    icon: Code,
    title: "4. Desenvolvimento",
    description: "Nossa equipe inicia o desenvolvimento com sprints semanais e atualizações constantes sobre o progresso.",
    video: "https://assets10.lottiefiles.com/packages/lf20_w51pcehl.json"
  },
  {
    icon: Users,
    title: "5. Validação e Testes",
    description: "Realizamos testes rigorosos e validações com usuários reais para garantir a qualidade do produto.",
    video: "/animations/AnimationTest.json"
  },
  {
    icon: Rocket,
    title: "6. Lançamento",
    description: "Após aprovação final, realizamos o lançamento com suporte total e monitoramento contínuo.",
    video: "https://assets3.lottiefiles.com/packages/lf20_obhph3sh.json"
  }
];

export default function HowItWorks() {
  const { theme } = useTheme();

  return (
    <section id="funciona" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            Como <span className="text-gradient-animated">Funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Processo transparente e eficiente para transformar sua ideia em realidade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "rounded-xl p-6 backdrop-blur-md relative group hover:transform hover:-translate-y-2 transition-all duration-300",
                theme === 'light' 
                  ? "bg-white/10" 
                  : "bg-card/50"
              )}
            >
              <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
                <Player
                  autoplay
                  loop
                  src={step.video}
                  style={{ 
                    position: 'absolute',
                    width: '120%',
                    height: '120%',
                    left: '-10%',
                    top: '-10%',
                    objectFit: 'contain',
                    padding: '0.5rem'
                  }}
                />
              </div>
              
              <step.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Comece Seu Projeto
            <CheckCircle className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 