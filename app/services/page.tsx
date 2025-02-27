"use client";

import { motion } from 'framer-motion';
import { type DynamicOptions, type Loader } from 'next/dynamic';
import dynamicImport from 'next/dynamic';
import { 
  Code, Server, Database, Globe, 
  ShoppingCart, Calendar, BarChart, Cloud,
  Shield, Zap, MessageSquare, Settings,
  Smartphone, Laptop, Store, Users
} from 'lucide-react';
import Header from '@/components/sections/Header';
import { usePageLoading } from '@/hooks/usePageLoading';

const Player = dynamicImport(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { 
    ssr: false,
    loading: () => <div className="w-full h-64 bg-muted/10 rounded-lg animate-pulse" />
  }
);

const animations = {
  landingPage: "/animations/Animation - 1739299512900.json",
  schedule: "/animations/AnimationSchedule.json",
  dashboard: "/animations/AnimationDashboard.json",
  mobile: "/animations/AnimationMobile.json",
  erp: "/animations/AnimationErp.json",
  chat: "/animations/AnimationChatAd.json"
};

const allServices = [
  // Serviços Web
  {
    category: "Desenvolvimento Web",
    icon: Globe,
    description: "Soluções web modernas e responsivas para sua presença online",
    services: [
      {
        title: "Landing Pages",
        animation: animations.landingPage,
        description: "Páginas otimizadas para conversão com design responsivo e alta performance",
        features: [
          "Design personalizado",
          "Otimização SEO",
          "Integração com Analytics",
          "A/B Testing",
          "Formulários inteligentes",
          "Pixel de rastreamento",
          "Cache avançado",
          "CDN Global"
        ]
      },
      {
        title: "E-commerce",
        animation: "https://assets5.lottiefiles.com/packages/lf20_5ngs2ksb.json",
        description: "Plataformas completas de comércio eletrônico",
        features: [
          "Múltiplos meios de pagamento",
          "Gestão de estoque",
          "Integração com marketplaces",
          "Checkout otimizado",
          "Carrinho abandonado",
          "Sistema de cupons",
          "Multivendedor",
          "Relatórios avançados"
        ]
      }
    ]
  },
  // Sistemas de Agendamento
  {
    category: "Sistemas de Agendamento",
    icon: Calendar,
    description: "Automatize seus agendamentos e otimize seu tempo",
    services: [
      {
        title: "Agenda Online",
        animation: animations.schedule,
        description: "Sistema completo para gestão de horários e clientes",
        features: [
          "Agendamento automático",
          "Lembretes por WhatsApp",
          "Pagamento online",
          "Gestão de clientes",
          "Relatórios detalhados",
          "Integração com Google Calendar",
          "App para profissionais",
          "Portal do cliente"
        ]
      },
      {
        title: "Gestão de Eventos",
        animation: "https://assets9.lottiefiles.com/packages/lf20_xlmz9xwm.json",
        description: "Plataforma para gerenciamento de eventos e inscrições",
        features: [
          "Venda de ingressos",
          "Check-in digital",
          "Certificados automáticos",
          "Gestão de palestrantes",
          "Área do participante",
          "Pesquisas de satisfação",
          "Marketing automatizado",
          "Relatórios em tempo real"
        ]
      }
    ]
  },
  // Sistemas Empresariais
  {
    category: "Sistemas Empresariais",
    icon: Server,
    description: "ERPs e sistemas de gestão personalizados para sua empresa",
    services: [
      {
        title: "Dashboards & BI",
        animation: animations.dashboard,
        description: "Visualização de dados e inteligência de negócios",
        features: [
          "Dashboards personalizados",
          "Análise em tempo real",
          "Gráficos interativos",
          "KPIs automatizados",
          "Business Intelligence",
          "Exportação de relatórios",
          "Alertas inteligentes",
          "Integração com APIs"
        ]
      },
      {
        title: "ERP Personalizado",
        animation: animations.erp,
        description: "Sistema integrado de gestão empresarial",
        features: [
          "Gestão financeira",
          "Controle de estoque",
          "Recursos humanos",
          "Compras e vendas",
          "Produção e custos",
          "CRM integrado",
          "Notas fiscais",
          "Multi-empresas"
        ]
      }
    ]
  },
  // Aplicativos Mobile
  
  {
    category: "Desenvolvimento Mobile",
    icon: Smartphone,
    description: "Apps nativos e híbridos para iOS e Android",
    services: [
      {
        title: "Aplicativos Corporativos",
        animation: animations.mobile,
        description: "Apps empresariais para otimizar processos internos",
        features: [
          "Apps iOS e Android",
          "Sincronização offline",
          "Autenticação segura",
          "Push notifications",
          "Analytics avançado",
          "Integração com sistemas",
          "Gestão de usuários",
          "Suporte enterprise"
        ]
      },
      {
        title: "Apps para Startups",
        animation: "https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json",
        description: "MVPs e apps escaláveis para startups",
        features: [
          "Design UX/UI",
          "Desenvolvimento ágil",
          "Testes A/B",
          "Analytics integrado",
          "Escalabilidade",
          "Métricas de engajamento",
          "Iterações rápidas",
          "Suporte ao crescimento"
        ]
      }
    ]
  },
  // categoria de Automação e IA
  {
    category: "Automação e Inteligência Artificial",
    icon: MessageSquare,
    description: "Soluções inteligentes para automatizar processos e melhorar o atendimento ao cliente",
    services: [
      {
        title: "Chatbots Inteligentes",
        animation: animations.chat,
        description: "Assistentes virtuais personalizados com IA para otimizar o atendimento 24/7",
        features: [
          "Integração com WhatsApp",
          "Machine Learning",
          "Respostas personalizadas",
          "Análise de sentimentos",
          "Multi-idiomas",
          "Relatórios de interação",
          "Transferência para humano",
          "Aprendizado contínuo"
        ]
      },
      {
        title: "Gestão de Anúncios",
        animation: animations.chat,
        description: "Sistema completo para gerenciamento e otimização de campanhas publicitárias",
        features: [
          "Automação de campanhas",
          "Análise de performance",
          "Otimização de budget",
          "A/B testing automático",
          "Integração multi-plataforma",
          "Relatórios personalizados",
          "Alertas inteligentes",
          "ROI tracking"
        ]
      }
    ]
  }
];

export default function ServicesPage() {
  usePageLoading();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="hero-section relative overflow-hidden py-20 md:py-32">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6">
                Nossas <span className="text-gradient-animated">Soluções</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Desenvolvemos soluções tecnológicas completas e personalizadas 
                para transformar sua empresa. Conheça todos os nossos serviços
                e descubra como podemos ajudar seu negócio.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Listagem de todos os serviços */}
        <section className="py-20">
          <div className="container">
            {allServices.map((category, index) => (
              <div key={index} className="mb-32">
                <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <category.icon className="w-8 h-8 text-primary" />
                    <h2 className="text-3xl md:text-4xl font-bold">{category.category}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="service-card glass p-8 rounded-2xl"
                    >
                      <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden bg-card">
                        <Player
                          src={service.animation}
                          autoplay
                          loop
                          style={{ 
                            position: 'absolute',
                            width: '130%',
                            height: '130%',
                            left: '-15%',
                            top: '-15%',
                            objectFit: 'contain',
                            padding: '1.5rem'
                          }}
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export const dynamic = 'force-dynamic'; 