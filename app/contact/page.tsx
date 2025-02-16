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
  FileCheck,
  Linkedin,
  Instagram,
  ArrowRight
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
    titulo: "Individual",
    descricao: "Ideal para profissionais autônomos e pequenas empresas",
    icon: Users,
    animation: "https://assets8.lottiefiles.com/packages/lf20_M9p23l.json",
    recursos: [
      "Suporte em horário comercial",
      "Manutenção básica mensal",
      "Backup semanal",
      "Atualizações programadas",
      "Documentação essencial"
    ]
  },
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
  }
];

export default function Contact() {
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        empresa: formData.get('empresa'),
        cargo: formData.get('cargo'),
        tipoProjeto: formData.get('tipoProjeto'),
        orcamento: formData.get('orcamento'),
        prazo: formData.get('prazo'),
        detalhes: formData.get('detalhes'),
        origem: formData.get('origem')
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem');
      }

      const result = await response.json();
      console.log('Resposta do servidor:', result);
      setSubmitted(true);
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setIsSubmitting(false);
    }
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
                className="relative h-[600px] rounded-2xl overflow-hidden group"
              >
                {/* Background com ondas animadas */}
                <div className="absolute inset-0 bg-background/10 backdrop-blur-sm" />
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={cn(
                      "absolute w-[540px] h-[700px] opacity-40 left-0 top-0 -ml-[50%] -mt-[70%] rounded-[40%]",
                      `bg-gradient-to-r ${
                        index === 0
                          ? "from-[#3b82f6] via-[#2563eb] to-[#1d4ed8]"
                          : index === 1
                          ? "from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9]"
                          : "from-[#ec4899] via-[#db2777] to-[#be185d]"
                      }`
                    )}
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 20 + i * 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}

                {/* Conteúdo do card */}
                <div className="relative z-10 h-full flex flex-col p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-center mb-6"
                  >
                    <Player
                      autoplay
                      loop
                      src={plano.animation}
                      className="w-32 h-32"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                  >
                    <h3 className={cn(
                      "text-2xl font-bold mb-2",
                      theme === 'light' ? "text-foreground" : "text-white"
                    )}>
                      {plano.titulo}
                    </h3>
                    <p className={cn(
                      "mb-6",
                      theme === 'light' ? "text-muted-foreground" : "text-white/80"
                    )}>
                      {plano.descricao}
                    </p>
                  </motion.div>

                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-4 mb-8 flex-grow"
                  >
                    {plano.recursos.map((recurso, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle className={cn(
                          "w-5 h-5 shrink-0 mt-0.5",
                          theme === 'light' ? "text-primary" : "text-white"
                        )} />
                        <span className={cn(
                          "text-sm",
                          theme === 'light' ? "text-foreground/80" : "text-white/80"
                        )}>
                          {recurso}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                    className={cn(
                      "group relative w-full p-4 rounded-lg font-medium overflow-hidden",
                      "backdrop-blur-md transition-all duration-300",
                      "flex items-center justify-center gap-3",
                      theme === 'light'
                        ? "bg-gradient-to-r from-foreground/80 to-foreground text-background hover:from-foreground hover:to-foreground/80"
                        : "bg-gradient-to-r from-white/90 to-white text-background hover:from-white hover:to-white/90",
                    )}
                  >
                    {/* Efeito de brilho */}
                    <div className="absolute inset-0 w-1/2 h-full transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    
                    {/* Bordas com gradiente */}
                    <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50">
                      <div className={cn(
                        "h-full w-full rounded-lg",
                        theme === 'light'
                          ? "bg-gradient-to-r from-foreground/80 to-foreground"
                          : "bg-gradient-to-r from-white/90 to-white"
                      )} />
                    </div>

                    {/* Ícone animado */}
                    <div className="relative">
                      <MessageSquare className={cn(
                        "w-5 h-5 transition-transform duration-300 group-hover:scale-110",
                        theme === 'light' ? "text-background" : "text-background"
                      )} />
                      <div className="absolute inset-0 blur-sm opacity-50 group-hover:opacity-100 transition-opacity">
                        <MessageSquare className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Texto com efeito */}
                    <span className="relative font-semibold">
                      Solicitar Proposta
                      <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </span>

                    {/* Seta animada */}
                    <motion.div
                      className="relative"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowRight className={cn(
                        "w-5 h-5 transition-transform duration-300 group-hover:translate-x-1",
                        theme === 'light' ? "text-background" : "text-background"
                      )} />
                      <div className="absolute inset-0 blur-sm opacity-50 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>
                    </motion.div>
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
                    <Mail className="w-6 h-6 text-primary relative z-10" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:nexorax1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      nexorax1@gmail.com
                    </a>
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
                    <Linkedin className="w-6 h-6 text-primary relative z-10" />
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <a href="https://www.linkedin.com/company/nexorax" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      /company/nexorax
                    </a>
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
                    <Instagram className="w-6 h-6 text-primary relative z-10" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Instagram</h3>
                    <a href="https://www.instagram.com/_nexorax_" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      @nexorax
                    </a>
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Nome Completo *</label>
                          <input
                            type="text"
                            name="nome"
                            placeholder="Seu nome completo"
                            className={cn(
                              "w-full p-3 rounded-lg bg-background/50 border",
                              "focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                              theme === 'light' ? "border-white/20" : "border-border"
                            )}
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Email Profissional *</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="seu@email.com"
                            className={cn(
                              "w-full p-3 rounded-lg bg-background/50 border",
                              "focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                              theme === 'light' ? "border-white/20" : "border-border"
                            )}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Empresa</label>
                          <input
                            type="text"
                            name="empresa"
                            placeholder="Nome da sua empresa"
                            className={cn(
                              "w-full p-3 rounded-lg bg-background/50 border",
                              "focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                              theme === 'light' ? "border-white/20" : "border-border"
                            )}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Cargo</label>
                          <input
                            type="text"
                            name="cargo"
                            placeholder="Sua função na empresa"
                            className={cn(
                              "w-full p-3 rounded-lg bg-background/50 border",
                              "focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                              theme === 'light' ? "border-white/20" : "border-border"
                            )}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Tipo de Projeto *</label>
                        <select
                          name="tipoProjeto"
                          className={cn(
                            "w-full p-3 rounded-lg bg-background/50 border",
                            "focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                            theme === 'light' ? "border-white/20" : "border-border"
                          )}
                          required
                        >
                          <option value="">Selecione o tipo de projeto</option>
                          <option value="landing-page">Landing Page</option>
                          <option value="site-institucional">Site Institucional</option>
                          <option value="ecommerce">E-commerce</option>
                          <option value="sistema-web">Sistema Web</option>
                          <option value="aplicativo">Aplicativo Mobile</option>
                          <option value="automacao">Automação de Processos</option>
                          <option value="consultoria">Consultoria Técnica</option>
                          <option value="manutencao">Manutenção de Sistema</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Orçamento Estimado</label>
                        <select
                          name="orcamento"
                          className={cn(
                            "w-full p-3 rounded-lg bg-background/50 border",
                            "focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                            theme === 'light' ? "border-white/20" : "border-border"
                          )}
                        >
                          <option value="">Selecione uma faixa de orçamento</option>
                          <option value="ate-5k">Até R$ 5.000</option>
                          <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                          <option value="10k-20k">R$ 10.000 - R$ 20.000</option>
                          <option value="20k-50k">R$ 20.000 - R$ 50.000</option>
                          <option value="50k+">Acima de R$ 50.000</option>
                          <option value="definir">A definir</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Prazo Desejado</label>
                        <select
                          name="prazo"
                          className={cn(
                            "w-full p-3 rounded-lg bg-background/50 border",
                            "focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                            theme === 'light' ? "border-white/20" : "border-border"
                          )}
                        >
                          <option value="">Selecione o prazo estimado</option>
                          <option value="urgente">Urgente (até 15 dias)</option>
                          <option value="curto">Curto (15-30 dias)</option>
                          <option value="medio">Médio (1-3 meses)</option>
                          <option value="longo">Longo (3+ meses)</option>
                          <option value="definir">A definir</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Detalhes do Projeto *</label>
                        <textarea
                          name="detalhes"
                          placeholder="Descreva seu projeto, objetivos, funcionalidades desejadas e qualquer informação relevante..."
                          className={cn(
                            "w-full p-3 rounded-lg bg-background/50 border",
                            "focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                            theme === 'light' ? "border-white/20" : "border-border"
                          )}
                          rows={6}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Como nos encontrou?</label>
                        <select
                          name="origem"
                          className={cn(
                            "w-full p-3 rounded-lg bg-background/50 border",
                            "focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                            theme === 'light' ? "border-white/20" : "border-border"
                          )}
                        >
                          <option value="">Selecione uma opção</option>
                          <option value="google">Google</option>
                          <option value="linkedin">LinkedIn</option>
                          <option value="instagram">Instagram</option>
                          <option value="indicacao">Indicação</option>
                          <option value="outro">Outro</option>
                        </select>
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
                            Enviar Solicitação
                          </>
                        )}
                      </motion.button>

                      <p className="text-sm text-muted-foreground text-center mt-4">
                        * Campos obrigatórios
                      </p>
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