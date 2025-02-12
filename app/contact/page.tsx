"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import { 
  MessageSquare, 
  Send, 
  Phone, 
  Mail, 
  CheckCircle,
  Loader2,
  Sparkles,
  Code,
  Cpu,
  Globe,
  Building,
  Users,
  Shield,
  HeartHandshake,
  Zap,
  Clock,
  Wrench,
  Calculator,
  FileCheck
} from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import dynamicImport from 'next/dynamic';
import animationData from '@/public/animations/AnimationStartup.json';
import animationManutencao from '@/public/animations/AnimationManutencao.json';
import animationOrcamento from '@/public/animations/AnimationOrcamento.json';
import animationDocumentacao from '@/public/animations/AnimationDocumentacao.json';
import animationSuporte from '@/public/animations/AnimationSuporte.json';


const Player = dynamicImport(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { 
    ssr: false,
    loading: () => <div className="w-full h-64 bg-muted/10 rounded-lg animate-pulse" />
  }
);

const Card3D = ({ children }: { children: React.ReactNode }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

// Componente de partículas atualizado
const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="particle absolute bg-primary/10 rounded-full blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            animation: `float ${Math.random() * 10 + 10}s linear infinite`
          }}
        />
      ))}
    </div>
  );
};

// Componente de ícones flutuantes atualizado
const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          y: [-20, 20],
          x: [-10, 10],
          rotate: [-5, 5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4"
      >
        <Code className="w-8 h-8 text-primary/30" />
      </motion.div>
      <motion.div
        animate={{
          y: [20, -20],
          x: [10, -10],
          rotate: [5, -5]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute top-1/3 right-1/4"
      >
        <Cpu className="w-8 h-8 text-secondary/30" />
      </motion.div>
      <motion.div
        animate={{
          y: [-15, 15],
          x: [-8, 8],
          rotate: [-3, 3]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-1/3"
      >
        <Globe className="w-8 h-8 text-accent/30" />
      </motion.div>
    </div>
  );
};

const atendimentos = [
  {
    title: "Suporte 24/7",
    description: "Equipe técnica disponível 24 horas por dia, 7 dias por semana",
    icon: Clock,
    animation: animationSuporte
  },
  {
    title: "Manutenção Preventiva",
    description: "Planos de manutenção mensal para garantir performance",
    icon: Wrench,
    animation: animationManutencao
  },
  {
    title: "Orçamento Personalizado",
    description: "Análise detalhada do seu projeto com custos transparentes",
    icon: Calculator,
    animation: animationOrcamento
  },
  {
    title: "Documentação Completa",
    description: "Documentação técnica e manuais de usuário inclusos",
    icon: FileCheck,
    animation: animationDocumentacao
  }
];

const planos = [
  {
    titulo: "Startup",
    descricao: "Ideal para empresas em crescimento",
    icon: Building,
    animation: animationData,
    recursos: [
      "Suporte em horário comercial",
      "Manutenção preventiva mensal",
      "Backup semanal",
      "Atualizações programadas",
      "Documentação completa"
    ]
  },
  {
    titulo: "Business",
    descricao: "Para empresas estabelecidas",
    icon: Users,
    animation: "https://assets2.lottiefiles.com/packages/lf20_49rdyysj.json",
    recursos: [
      "Suporte prioritário 24/7",
      "Manutenção preventiva quinzenal",
      "Backup diário",
      "Atualizações sob demanda",
      "Monitoramento em tempo real",
      "Treinamento da equipe"
    ]
  },
  {
    titulo: "Enterprise",
    descricao: "Soluções corporativas avançadas",
    icon: Building,
    animation: "https://assets4.lottiefiles.com/packages/lf20_3rwasyjy.json",
    recursos: [
      "Suporte VIP 24/7",
      "Manutenção preventiva semanal",
      "Backup em tempo real",
      "Atualizações ilimitadas",
      "Monitoramento avançado",
      "Gerente de conta dedicado",
      "Consultoria estratégica"
    ]
  }
];

export default function Contact() {
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen">
      {/* Seção Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <TypeAnimation
                sequence={[
                  'Fale Conosco',
                  2000,
                  'Inove Conosco',
                  2000,
                  'Cresça Conosco',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gradient-animated"
              />
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            </h1>
            <p className="text-xl text-muted-foreground">
              Estamos prontos para transformar suas ideias em realidade com soluções 
              tecnológicas sob medida e suporte especializado
            </p>
          </motion.div>
        </div>

        {/* Mantenha os componentes de background existentes */}
        <ParticlesBackground />
        <FloatingIcons />
      </section>

      {/* Nova Seção de Atendimento */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Como Podemos <span className="text-gradient-animated">Ajudar?</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {atendimentos.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={cn(
                  "p-6 rounded-xl backdrop-blur-md border border-primary/20",
                  "transform-gpu transition-all duration-300 hover:shadow-lg hover:shadow-primary/20",
                  "bg-card/50 hover:bg-card/80"
                )}>
                  <Player
                    autoplay
                    loop
                    src={item.animation}
                    className="w-32 h-32 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-center mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-center">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Planos Revisada */}
      <section className="py-20 relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Planos <span className="text-gradient-animated">Personalizados</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Desenvolvemos soluções sob medida para cada cliente, com planos flexíveis 
              que se adaptam às necessidades específicas do seu negócio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {planos.map((plano, index) => (
              <motion.div
                key={plano.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative group p-8 rounded-xl backdrop-blur-md border border-primary/20",
                  "transform-gpu transition-all duration-300 hover:shadow-lg hover:shadow-primary/20",
                  "bg-card/50 hover:bg-card/80"
                )}
              >
                {/* Efeito de gradiente no hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl" />
                </div>

                {/* Conteúdo do card */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <Player
                      autoplay
                      loop
                      src={plano.animation}
                      className="w-32 h-32"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-2">{plano.titulo}</h3>
                  <p className="text-muted-foreground text-center mb-6">{plano.descricao}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {plano.recursos.map((recurso, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{recurso}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "w-full p-4 rounded-lg font-medium",
                      "bg-primary/10 hover:bg-primary/20 text-primary",
                      "transition-all duration-300",
                      "flex items-center justify-center gap-2"
                    )}
                  >
                    <MessageSquare className="w-5 h-5" />
                    Solicitar Proposta
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Seção de benefícios adicionais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-semibold mb-8">
              Todos os planos incluem
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-4">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-medium mb-2">Segurança Garantida</h4>
                <p className="text-sm text-muted-foreground">Proteção total dos seus dados</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <HeartHandshake className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-medium mb-2">Suporte Dedicado</h4>
                <p className="text-sm text-muted-foreground">Atendimento personalizado</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-medium mb-2">Alta Performance</h4>
                <p className="text-sm text-muted-foreground">Sistemas otimizados</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-medium mb-2">Time Especializado</h4>
                <p className="text-sm text-muted-foreground">Profissionais certificados</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contact" className="section-padding relative min-h-screen overflow-hidden">
        {/* Background com gradiente e efeito de brilho */}
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
          </div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <TypeAnimation
                sequence={[
                  'Fale Conosco',
                  2000,
                  'Inove Conosco',
                  2000,
                  'Crie Conosco',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gradient-animated"
              />
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para transformar sua ideia em realidade
            </p>
          </motion.div>

        

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Animação Lottie atualizada */}
              <div className="relative group">
                <Player
                  autoplay
                  loop
                  src="https://assets9.lottiefiles.com/packages/lf20_u25cckyh.json"
                  className="w-full h-[400px]"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50"
                />
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(123, 97, 255, 0.2) 0%, transparent 70%)'
                  }}
                />
              </div>

              {/* Cards de contato com efeito cyber melhorado */}
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02, rotateX: 5 }}
                  className={cn(
                    "flex items-center gap-4 p-6 rounded-xl backdrop-blur-md border border-primary/20",
                    "cyber-card transform-gpu transition-all duration-300 hover:shadow-lg hover:shadow-primary/20",
                    theme === 'light' ? "bg-white/10" : "bg-card/50"
                  )}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                    <Phone className="w-6 h-6 text-primary relative z-10" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, rotateX: 5 }}
                  className={cn(
                    "flex items-center gap-4 p-6 rounded-xl backdrop-blur-md border border-primary/20",
                    "cyber-card transform-gpu transition-all duration-300 hover:shadow-lg hover:shadow-primary/20",
                    theme === 'light' ? "bg-white/10" : "bg-card/50"
                  )}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                    <Mail className="w-6 h-6 text-primary relative z-10" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">contato@nexorax.com</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Formulário com Card3D */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card3D>
                <div
                  className={cn(
                    "p-8 rounded-2xl shadow-xl backdrop-blur-md transform-gpu",
                    theme === 'light' ? "bg-white/10" : "bg-card/50"
                  )}
                  style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold mb-2">Mensagem Enviada!</h3>
                      <p className="text-muted-foreground">
                        Entraremos em contato em breve.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Nome</label>
                        <input
                          type="text"
                          className={cn(
                            "w-full p-3 rounded-lg bg-background/50 border",
                            "focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                            theme === 'light' ? "border-white/20" : "border-border"
                          )}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          className={cn(
                            "w-full p-3 rounded-lg bg-background/50 border",
                            "focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                            theme === 'light' ? "border-white/20" : "border-border"
                          )}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Assunto</label>
                        <select
                          className={cn(
                            "w-full p-3 rounded-lg bg-background/50 border",
                            "focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                            theme === 'light' ? "border-white/20" : "border-border"
                          )}
                          required
                        >
                          <option value="">Selecione um assunto</option>
                          <option value="orcamento">Orçamento</option>
                          <option value="duvida">Dúvida</option>
                          <option value="suporte">Suporte</option>
                          <option value="parceria">Parceria</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Mensagem</label>
                        <textarea
                          className={cn(
                            "w-full p-3 rounded-lg bg-background/50 border",
                            "focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                            theme === 'light' ? "border-white/20" : "border-border"
                          )}
                          rows={4}
                          required
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full p-4 rounded-lg font-medium flex items-center justify-center gap-2",
                          "transition-all duration-300 hover:shadow-lg hover:shadow-primary/20",
                          theme === 'light'
                            ? "bg-white text-primary hover:bg-white/90"
                            : "bg-primary text-primary-foreground hover:bg-primary/90"
                        )}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Enviar Mensagem
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </div>
              </Card3D>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 