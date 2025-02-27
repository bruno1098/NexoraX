"use client";

import { motion } from 'framer-motion';
import dynamicImport from 'next/dynamic';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { 
  Briefcase, Code, Heart, Users, Rocket, Brain, 
  GraduationCap, Coffee, Target, Zap, Send,
  MessageSquare, TrendingUp, Star, ChevronRight, Building, Clock, MapPin, DollarSign,
  Smile, Award, BarChart, LucideIcon
} from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import Modal from '../../components/ui/modal';

const Player = dynamicImport(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { 
    ssr: false,
    loading: () => <div className="w-full h-64 bg-muted/10 rounded-lg animate-pulse" />
  }
);

interface CultureItem {
  title: string;
  description: string;
  animation: string;
}

interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const stats = [
  { number: "96%", label: "Satisfação dos Colaboradores" },
  { number: "+10", label: "Colaboradores" },
  { number: "32h", label: "Média de Treinamento Mensal" }
];

const culture: CultureItem[] = [
  {
    title: "Inovação Constante",
    description: "Buscamos sempre as melhores tecnologias e práticas",
    animation: "https://assets10.lottiefiles.com/private_files/lf30_wqypnpu5.json"
  },
  {
    title: "Trabalho em Equipe",
    description: "Colaboração e sinergia em todos os projetos",
    animation: "https://assets5.lottiefiles.com/packages/lf20_2glqweqs.json"
  },
  {
    title: "Crescimento",
    description: "Oportunidades de desenvolvimento profissional",
    animation: "https://assets8.lottiefiles.com/packages/lf20_6gqtyxsc.json"
  },
  {
    title: "Qualidade",
    description: "Excelência em tudo que fazemos",
    animation: "https://assets3.lottiefiles.com/packages/lf20_touohxv0.json"
  }
];

const benefits: BenefitItem[] = [
  {
    icon: Coffee,
    title: "Ambiente Flexível",
    description: "Home office e horário flexível para seu melhor equilíbrio"
  },
  {
    icon: Brain,
    title: "Desenvolvimento",
    description: "Incentivo a cursos, certificações e eventos técnicos"
  },
  {
    icon: Heart,
    title: "Saúde e Bem-estar",
    description: "Plano de saúde, odontológico e apoio psicológico"
  },
  {
    icon: DollarSign,
    title: "Vale Refeição",
    description: "VR competitivo e flexível"
  },
  {
    icon: Clock,
    title: "Horário Flexível",
    description: "Equilibre trabalho e vida pessoal"
  },
  {
    icon: GraduationCap,
    title: "Auxílio Educação",
    description: "Bolsas de estudo e capacitação"
  }
];

const openings = [
  // Tech
  {
    department: "Tecnologia",
    icon: Code,
    jobs: [
 
      {
        title: "Desenvolvedor Front-end Júnior",
        type: "Remoto",
        level: "Pleno",
        stack: ["React", "Next.js", "Tailwind", "TypeScript"],
        description: "Desenvolvedor com sólida experiência em criar interfaces modernas e responsivas."
      }
    ]
  },
  // Marketing
  {
    department: "Marketing",
    icon: TrendingUp,
    jobs: [
      {
        title: "Nenhuma vaga disponível no momento",
        type: "N/A",
        level: "N/A",
        stack: ["N/A"],
        description: "N/A"
      }
    ]
  },
  // Customer Success
  {
    department: "Atendimento ao Cliente",
    icon: MessageSquare,
    jobs: [
      {
        title: "Nenhuma vaga disponível no momento",
        type: "N/A",
        level: "N/A",
        stack: ["N/A"],
        description: "N/A"
      }
     
    ]
  }
];

const process = [
  {
    title: "Inscrição",
    description: "Cadastre seu currículo em nossa plataforma"
  },
  {
    title: "Análise",
    description: "Avaliação do perfil e experiências"
  },
  {
    title: "Entrevista RH",
    description: "Conversa sobre carreira e expectativas"
  },
  {
    title: "Teste Técnico",
    description: "Avaliação prática das habilidades"
  },
  {
    title: "Entrevista Técnica",
    description: "Conversa com o time da área"
  },
  {
    title: "Proposta",
    description: "Apresentação da oferta"
  }
];

const testimonials = [
  {
    name: "M. Silva",
    role: "Desenvolvedor Full Stack",
    image: "/team/person1.jpg",
    content: "Trabalhar na Nexora tem sido incrível. O ambiente é colaborativo e há muito espaço para crescimento."
  },
  {
    name: "A. Santos",
    role: "Product Designer",
    image: "/team/person2.jpg",
    content: "A cultura de inovação e o foco em desenvolvimento pessoal são diferenciais únicos da empresa."
  },
  {
    name: "R. Oliveira",
    role: "Marketing Manager",
    image: "/team/person3.jpg",
    content: "Os benefícios são excelentes e o ambiente de trabalho é inspirador. Melhor empresa que já trabalhei."
  }
];


const BenefitCard = ({ benefit }: { benefit: BenefitItem }) => (
  <div className="p-6 rounded-xl bg-card">
    <benefit.icon className="w-8 h-8 text-primary mb-4" />
    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
    <p className="text-muted-foreground">{benefit.description}</p>
  </div>
);

export default function CareersPage() {
  const { theme } = useTheme();
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section com Lottie Animation */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn(
          "relative py-16 md:py-32 overflow-hidden",
          theme === 'light' ? "bg-primary/10" : "bg-background"
        )}
      >
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6",
                  theme === 'light' ? "text-primary" : "text-gradient-animated"
                )}
              >
                Faça Parte do Nosso Time
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={cn(
                  "text-base md:text-xl mb-8",
                  theme === 'light' ? "text-foreground/80" : "text-muted-foreground"
                )}
              >
                Junte-se a nós e faça parte de uma empresa que valoriza inovação, 
                crescimento e bem-estar dos colaboradores
              </motion.p>
            </div>
            <div className="flex-1 w-full max-w-md mx-auto lg:max-w-none">
              <Player
                autoplay
                loop
                src="https://assets5.lottiefiles.com/packages/lf20_xyadoh9h.json"
                style={{ height: '300px', maxWidth: '100%' }}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section com CountUp */}
      <section ref={statsRef} className="py-12 md:py-20 bg-muted/50">
        <div className="container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={cn(
                  "p-6 rounded-xl text-center",
                  theme === 'light' ? "bg-card shadow-sm" : "bg-card/50"
                )}
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {statsInView && (
                    <CountUp
                      start={0}
                      end={parseInt(stat.number)}
                      duration={2}
                      suffix={stat.number.replace(/[0-9]/g, '')}
                    />
                  )}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section com Hover Effects */}
      <section className="py-12 md:py-20">
        <div className="container px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-gradient-animated"
          >
            Nossa Cultura
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {culture.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={cn(
                  "rounded-lg overflow-hidden shadow-lg transition-all duration-300 w-full",
                  theme === 'light' 
                    ? "bg-card shadow-md" 
                    : "bg-card/50 hover:bg-card/80"
                )}
              >
                <div className="relative h-69 w-full flex items-center justify-center">
                  <Player
                    autoplay
                    loop
                    src={item.animation}
                    style={{ 
                      width: '60%',
                      height: '60%',
                      objectFit: 'cover',
                      transform: 'translateY(-20px)'
                    }}
                  />
                </div>
                <div className="p-4 md:p-6 mt-4">
                  <h3 className={cn(
                    "text-lg md:text-xl font-semibold mb-2 md:mb-3",
                    theme === 'light' ? "text-foreground" : "text-foreground"
                  )}>
                    {item.title}
                  </h3>
                  <p className={cn(
                    "text-sm md:text-base",
                    theme === 'light' ? "text-foreground/80" : "text-muted-foreground"
                  )}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section com Cards Animados */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gradient-animated"
          >
            Benefícios e Vantagens
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={cn(
                  "rounded-lg p-6 backdrop-blur-md transition-all duration-300",
                  theme === 'light' 
                    ? "bg-card shadow-sm" 
                    : "bg-card/50 hover:bg-card/80"
                )}
              >
                <BenefitCard benefit={benefit} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section com Timeline Animada */}
      <section className="py-12 md:py-20">
        <div className="container px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gradient-animated"
          >
            Processo Seletivo
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20" />
              
              <div className="space-y-8 md:space-y-12">
                {process.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 md:gap-8 relative"
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10",
                      theme === 'light'
                        ? "bg-primary text-white"
                        : "bg-primary text-primary-foreground"
                    )}>
                      {index + 1}
                    </div>
                    <div className={cn(
                      "flex-1 p-6 rounded-lg",
                      theme === 'light'
                        ? "bg-card shadow-sm"
                        : "bg-card/50"
                    )}>
                      <h3 className={cn(
                        "text-xl font-semibold mb-2",
                        theme === 'light' ? "text-foreground" : "text-foreground"
                      )}>
                        {step.title}
                      </h3>
                      <p className={cn(
                        theme === 'light' ? "text-foreground/80" : "text-muted-foreground"
                      )}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

 

      {/* Open Positions */}
      <section id="vagas" className="py-12 md:py-20 w-full overflow-hidden">
        <div className="container px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gradient-animated"
          >
            Vagas Abertas
          </motion.h2>
          <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto">
            {openings.map((department, dIndex) => (
              <motion.div
                key={department.department}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: dIndex * 0.1 }}
                className="w-full"
              >
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <department.icon className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                  <h3 className="text-xl md:text-2xl font-semibold break-words">
                    {department.department}
                  </h3>
                </div>
                <div className="space-y-4">
                  {department.jobs.map((job, jIndex) => (
                    <motion.div
                      key={job.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (dIndex + jIndex) * 0.1 }}
                      className={cn(
                        "rounded-lg p-4 md:p-6 backdrop-blur-md transition-all duration-300 w-full overflow-hidden",
                        theme === 'light' 
                          ? "bg-card shadow-sm border border-muted" 
                          : "bg-card/50 hover:bg-card/80"
                      )}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h4 className={cn(
                            "text-xl font-semibold mb-2 break-words",
                            theme === 'light' ? "text-foreground" : "text-foreground"
                          )}>
                            {job.title}
                          </h4>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className={cn(
                              "inline-flex items-center text-sm whitespace-nowrap",
                              theme === 'light' ? "text-foreground/80" : "text-muted-foreground"
                            )}>
                              <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                              {job.type}
                            </span>
                            <span className={cn(
                              "inline-flex items-center text-sm whitespace-nowrap",
                              theme === 'light' ? "text-foreground/80" : "text-muted-foreground"
                            )}>
                              <Target className="w-4 h-4 mr-1 flex-shrink-0" />
                              {job.level}
                            </span>
                          </div>
                        </div>
                        <motion.button
                          onClick={handleOpenModal}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={cn(
                            "px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap",
                            theme === 'light'
                              ? "bg-primary text-white hover:bg-primary/90"
                              : "bg-primary text-primary-foreground hover:bg-primary/90"
                          )}
                        >
                          Candidatar-se
                        </motion.button>
                      </div>
                      <p className={cn(
                        "mb-4 break-words",
                        theme === 'light' ? "text-foreground/80" : "text-muted-foreground"
                      )}>
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.stack.map((tech) => (
                          <span
                            key={tech}
                            className={cn(
                              "px-3 py-1 rounded-full text-sm whitespace-nowrap",
                              theme === 'light'
                                ? "bg-primary/10 text-primary"
                                : "bg-primary/20 text-primary"
                            )}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
              "rounded-lg p-8 text-center backdrop-blur-md",
              theme === 'light' 
                ? "bg-card shadow-sm border border-muted" 
                : "bg-card/50"
            )}
          >
            <h2 className={cn(
              "text-2xl md:text-3xl font-bold mb-4",
              theme === 'light' ? "text-foreground" : "text-foreground"
            )}>
              Não encontrou uma vaga adequada?
            </h2>
            <p className={cn(
              "mb-6",
              theme === 'light' ? "text-foreground/80" : "text-muted-foreground"
            )}>
              Envie seu currículo para nosso banco de talentos e fique por dentro das próximas oportunidades
            </p>
            <motion.button
              onClick={handleOpenModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors",
                theme === 'light'
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              <Send className="w-4 h-4" />
              Enviar Currículo
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        title="Envie seu Currículo"
      >
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Para se candidatar, envie seu currículo para o e-mail:
          </p>
          
          <a 
            href="mailto:nexorax1@gmail.com" 
            className={cn(
              "block p-3 rounded-lg text-center font-medium transition-all",
              theme === 'light'
                ? "bg-primary/10 text-primary hover:bg-primary/20"
                : "bg-primary/20 text-primary hover:bg-primary/30"
            )}
          >
            nexorax1@gmail.com
          </a>
          
          <p className="text-muted-foreground">
            Estamos ansiosos para conhecer você!
          </p>
          
          <motion.button
            onClick={handleCloseModal}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "w-full mt-4 p-3 rounded-lg font-medium transition-colors",
              theme === 'light'
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            Fechar
          </motion.button>
        </div>
      </Modal>
    </div>
  );
}

export const dynamic = 'force-dynamic'; 