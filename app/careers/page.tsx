"use client";

import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { 
  Briefcase, Code, Heart, Users, Rocket, Brain, 
  GraduationCap, Coffee, Target, Zap, Send,
  MessageSquare, TrendingUp, Star, ChevronRight, Building, Clock, MapPin, DollarSign,
  Smile, Award, BarChart
} from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const stats = [
  { number: "96%", label: "Satisfação dos Colaboradores" },
  { number: "+10", label: "Colaboradores" },
  { number: "32h", label: "Média de Treinamento Mensal" }
];

const benefits = [
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
        title: "Desenvolvedor Full Stack Sênior",
        type: "Remoto",
        level: "Sênior",
        stack: ["React", "Node.js", "TypeScript", "AWS"],
        description: "Buscamos um desenvolvedor sênior para liderar projetos complexos e mentorar o time."
      },
      {
        title: "Desenvolvedor Front-end Pleno",
        type: "Remoto",
        level: "Pleno",
        stack: ["React", "Next.js", "Tailwind", "TypeScript"],
        description: "Desenvolvedor com experiência em criar interfaces modernas e responsivas."
      },
      {
        title: "Desenvolvedor Back-end Pleno",
        type: "Remoto",
        level: "Pleno",
        stack: ["Node.js", "Python", "PostgreSQL", "Docker"],
        description: "Desenvolvedor para trabalhar com microsserviços e APIs escaláveis."
      }
    ]
  },
  // Marketing
  {
    department: "Marketing",
    icon: TrendingUp,
    jobs: [
      {
        title: "Social Media Manager",
        type: "Remoto",
        level: "Pleno",
        stack: ["Redes Sociais", "Analytics", "SEO", "Copywriting"],
        description: "Profissional para gerenciar nossas redes sociais e criar conteúdo engajador."
      },
      {
        title: "Marketing Digital Specialist",
        type: "Remoto",
        level: "Sênior",
        stack: ["Google Ads", "Facebook Ads", "Analytics", "Growth"],
        description: "Especialista para desenvolver e executar estratégias de marketing digital."
      }
    ]
  },
  // Customer Success
  {
    department: "Atendimento ao Cliente",
    icon: MessageSquare,
    jobs: [
      {
        title: "Customer Success Manager",
        type: "Remoto",
        level: "Pleno/Sênior",
        stack: ["CRM", "Atendimento", "Gestão de Contas", "Relacionamento"],
        description: "Profissional para garantir o sucesso e satisfação dos nossos clientes."
      },
      {
        title: "Suporte Técnico",
        type: "Remoto",
        level: "Júnior/Pleno",
        stack: ["Suporte", "Troubleshooting", "Documentação", "Atendimento"],
        description: "Analista para fornecer suporte técnico aos nossos clientes."
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

const culture = [
  {
    title: "Inovação Constante",
    description: "Incentivamos novas ideias e soluções criativas. Aqui, cada membro da equipe tem voz ativa no processo de inovação.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80"
  },
  {
    title: "Desenvolvimento Contínuo",
    description: "Investimos fortemente no crescimento profissional e pessoal de nossa equipe através de treinamentos e mentoria.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
  },
  {
    title: "Trabalho Remoto",
    description: "Acreditamos que talento não tem localização. Nossa cultura remote-first permite que você trabalhe de onde estiver.",
    image: "https://images.unsplash.com/photo-1591382696684-38c427c7547a?auto=format&fit=crop&q=80"
  },
  {
    title: "Equilíbrio",
    description: "Valorizamos o equilíbrio entre trabalho e vida pessoal, com horários flexíveis e respeito ao tempo de cada um.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80"
  }
];

export default function CareersPage() {
  const { theme } = useTheme();
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section com Lottie Animation */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn(
          "relative py-16 md:py-32 overflow-hidden",
          theme === 'light' ? "bg-primary" : "bg-background"
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
                  theme === 'light' ? "text-white" : "text-gradient-animated"
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
                  theme === 'light' ? "text-white/80" : "text-muted-foreground"
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
                  theme === 'light' ? "bg-white/10" : "bg-card/50"
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
                    ? "bg-white/10 hover:bg-white/20" 
                    : "bg-card/50 hover:bg-card/80"
                )}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className={cn(
                    "text-lg md:text-xl font-semibold mb-2 md:mb-3",
                    theme === 'light' ? "text-white" : "text-foreground"
                  )}>
                    {item.title}
                  </h3>
                  <p className={cn(
                    "text-sm md:text-base",
                    theme === 'light' ? "text-white/80" : "text-muted-foreground"
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
                    ? "bg-white/10 hover:bg-white/20" 
                    : "bg-card/50 hover:bg-card/80"
                )}
              >
                <benefit.icon className={cn(
                  "w-8 h-8 mb-4",
                  theme === 'light' ? "text-white" : "text-primary"
                )} />
                <h3 className={cn(
                  "text-xl font-semibold mb-2",
                  theme === 'light' ? "text-white" : "text-foreground"
                )}>
                  {benefit.title}
                </h3>
                <p className={cn(
                  theme === 'light' ? "text-white/80" : "text-muted-foreground"
                )}>
                  {benefit.description}
                </p>
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
                        ? "bg-white text-primary"
                        : "bg-primary text-primary-foreground"
                    )}>
                      {index + 1}
                    </div>
                    <div className={cn(
                      "flex-1 p-6 rounded-lg",
                      theme === 'light'
                        ? "bg-white/10"
                        : "bg-card/50"
                    )}>
                      <h3 className={cn(
                        "text-xl font-semibold mb-2",
                        theme === 'light' ? "text-white" : "text-foreground"
                      )}>
                        {step.title}
                      </h3>
                      <p className={cn(
                        theme === 'light' ? "text-white/80" : "text-muted-foreground"
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

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gradient-animated"
          >
            O Que Dizem Nossos Colaboradores
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "rounded-lg p-6 backdrop-blur-md",
                  theme === 'light' 
                    ? "bg-white/10" 
                    : "bg-card/50"
                )}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className={cn(
                      "font-semibold",
                      theme === 'light' ? "text-white" : "text-foreground"
                    )}>
                      {testimonial.name}
                    </h3>
                    <p className={cn(
                      "text-sm",
                      theme === 'light' ? "text-white/80" : "text-muted-foreground"
                    )}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className={cn(
                  theme === 'light' ? "text-white/80" : "text-muted-foreground"
                )}>
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
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
                          ? "bg-white/10 hover:bg-white/20" 
                          : "bg-card/50 hover:bg-card/80"
                      )}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h4 className={cn(
                            "text-xl font-semibold mb-2 break-words",
                            theme === 'light' ? "text-white" : "text-foreground"
                          )}>
                            {job.title}
                          </h4>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className={cn(
                              "inline-flex items-center text-sm whitespace-nowrap",
                              theme === 'light' ? "text-white/80" : "text-muted-foreground"
                            )}>
                              <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                              {job.type}
                            </span>
                            <span className={cn(
                              "inline-flex items-center text-sm whitespace-nowrap",
                              theme === 'light' ? "text-white/80" : "text-muted-foreground"
                            )}>
                              <Target className="w-4 h-4 mr-1 flex-shrink-0" />
                              {job.level}
                            </span>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={cn(
                            "px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap",
                            theme === 'light'
                              ? "bg-white text-primary hover:bg-white/90"
                              : "bg-primary text-primary-foreground hover:bg-primary/90"
                          )}
                        >
                          Candidatar-se
                        </motion.button>
                      </div>
                      <p className={cn(
                        "mb-4 break-words",
                        theme === 'light' ? "text-white/80" : "text-muted-foreground"
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
                                ? "bg-white/20 text-white"
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
                ? "bg-white/10" 
                : "bg-card/50"
            )}
          >
            <h2 className={cn(
              "text-2xl md:text-3xl font-bold mb-4",
              theme === 'light' ? "text-white" : "text-foreground"
            )}>
              Não encontrou uma vaga adequada?
            </h2>
            <p className={cn(
              "mb-6",
              theme === 'light' ? "text-white/80" : "text-muted-foreground"
            )}>
              Envie seu currículo para nosso banco de talentos e fique por dentro das próximas oportunidades
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors",
                theme === 'light'
                  ? "bg-white text-primary hover:bg-white/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              <Send className="w-4 h-4" />
              Enviar Currículo
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 