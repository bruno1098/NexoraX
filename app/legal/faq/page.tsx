"use client";

import { motion } from 'framer-motion';
import { 
  Code, Settings, Shield, Users, Clock, CreditCard, 
  Laptop, Cloud, Database, HeartHandshake, Rocket,
  MessageSquare, Globe, Zap, Server
} from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';

const faqs = [
  {
    category: "Desenvolvimento",
    icon: Code,
    questions: [
      {
        q: "Quais tecnologias vocês utilizam?",
        a: "Trabalhamos com as tecnologias mais modernas do mercado, incluindo:\n• Frontend: React, Next.js, Vue.js\n• Backend: Node.js, Python, Java\n• Mobile: React Native, Flutter\n• Banco de Dados: PostgreSQL, MongoDB\n• Cloud: AWS, Google Cloud, Azure"
      },
      {
        q: "Como é o processo de desenvolvimento?",
        a: "Nosso processo segue metodologias ágeis:\n1. Discovery e Planejamento\n2. Design e Prototipação\n3. Desenvolvimento em Sprints\n4. Testes e QA\n5. Deploy e Monitoramento"
      },
      {
        q: "Vocês fazem integrações com outros sistemas?",
        a: "Sim, realizamos integrações com diversos sistemas e APIs:\n• ERPs\n• CRMs\n• Gateways de Pagamento\n• Sistemas Legados\n• APIs de Terceiros"
      },
      {
        q: "Como garantem a qualidade do código?",
        a: "Utilizamos diversas práticas:\n• Code Review\n• Testes Automatizados\n• CI/CD\n• Monitoramento em Tempo Real\n• Análise Estática de Código"
      }
    ]
  },
  {
    category: "Infraestrutura",
    icon: Server,
    questions: [
      {
        q: "Como é feito o deploy das aplicações?",
        a: "Utilizamos práticas modernas de DevOps:\n• Containers Docker\n• Kubernetes\n• CI/CD Automatizado\n• Blue/Green Deployment\n• Monitoramento 24/7"
      },
      {
        q: "Qual a infraestrutura de hospedagem?",
        a: "Trabalhamos com múltiplas clouds:\n• AWS\n• Google Cloud\n• Azure\n• Infraestrutura Híbrida\n• Data Centers Certificados"
      },
      {
        q: "Como é feito o backup dos dados?",
        a: "Sistema completo de backup:\n• Backup Diário\n• Replicação Geográfica\n• Disaster Recovery\n• Retenção Configurável\n• Restauração Rápida"
      }
    ]
  },
  {
    category: "Suporte",
    icon: HeartHandshake,
    questions: [
      {
        q: "Qual o horário de atendimento?",
        a: "Oferecemos suporte flexível:\n• Horário Comercial: 8h às 18h\n• Plantão 24/7 para Emergências\n• Suporte via Chat, Email e Telefone\n• SLA Personalizado"
      },
      {
        q: "Como funciona o suporte pós-lançamento?",
        a: "Nosso suporte inclui:\n• Monitoramento Proativo\n• Atualizações de Segurança\n• Correções de Bugs\n• Melhorias Contínuas\n• Análise de Performance"
      },
      {
        q: "Vocês oferecem treinamento?",
        a: "Sim, oferecemos treinamento completo:\n• Capacitação da Equipe\n• Documentação Detalhada\n• Workshops\n• Vídeos Tutoriais\n• Suporte Contínuo"
      }
    ]
  },
  {
    category: "Comercial",
    icon: CreditCard,
    questions: [
      {
        q: "Como é feito o orçamento?",
        a: "Processo transparente de orçamento:\n• Análise de Requisitos\n• Escopo Detalhado\n• Cronograma\n• Custos por Etapa\n• Condições de Pagamento"
      },
      {
        q: "Quais as formas de pagamento?",
        a: "Oferecemos várias opções:\n• Pagamento Mensal\n• Pagamento por Sprint\n• Milestone\n• Boleto ou Transferência\n• Parcelamento"
      },
      {
        q: "Qual o prazo médio dos projetos?",
        a: "Varia conforme o escopo:\n• MVPs: 2-3 semanas\n• Projetos Médios: 1-3 meses\n• Projetos Grandes: 6-12 meses\n• Desenvolvimento Contínuo"
      }
    ]
  },
  {
    category: "Segurança",
    icon: Shield,
    questions: [
      {
        q: "Como garantem a segurança dos dados?",
        a: "Múltiplas camadas de segurança:\n• Criptografia End-to-End\n• Firewall Avançado\n• Monitoramento 24/7\n• Testes de Penetração\n• Conformidade LGPD"
      },
      {
        q: "Vocês são compatíveis com LGPD?",
        a: "Total conformidade com LGPD:\n• Políticas de Privacidade\n• Termos de Uso\n• Gestão de Consentimento\n• Proteção de Dados\n• Direitos dos Usuários"
      }
    ]
  },
  {
    category: "Metodologia",
    icon: Rocket,
    questions: [
      {
        q: "Como acompanho o progresso do projeto?",
        a: "Oferecemos total transparência:\n• Dashboard em Tempo Real\n• Reuniões Semanais\n• Relatórios Detalhados\n• Ambiente de Homologação\n• Comunicação Constante"
      },
      {
        q: "Posso solicitar alterações durante o projeto?",
        a: "Sim, somos flexíveis:\n• Gestão de Mudanças\n• Sprints Adaptativas\n• Priorização Ágil\n• Feedback Contínuo\n• Entregas Incrementais"
      }
    ]
  }
];

export default function FAQPage() {
  const { theme } = useTheme();
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev => 
      prev.includes(question) 
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center text-gradient-animated"
      >
        Dúvidas Frequentes
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={cn(
          "text-center mb-12",
          theme === 'light' ? "text-white/80" : "text-muted-foreground"
        )}
      >
        Encontre respostas para as principais dúvidas sobre nossos serviços
      </motion.p>

      <div className="space-y-6">
        {faqs.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
            className={cn(
              "rounded-lg overflow-hidden backdrop-blur-md transition-all duration-300",
              theme === 'light' 
                ? "bg-white/10" 
                : "bg-card/50"
            )}
          >
            <button
              onClick={() => toggleCategory(category.category)}
              className={cn(
                "w-full p-6 flex items-center gap-4 transition-colors",
                theme === 'light'
                  ? "hover:bg-white/5"
                  : "hover:bg-card/80"
              )}
            >
              <category.icon className={cn(
                "w-6 h-6",
                theme === 'light' ? "text-white" : "text-primary"
              )} />
              <h2 className={cn(
                "text-2xl font-semibold flex-1 text-left",
                theme === 'light' ? "text-white" : "text-foreground"
              )}>
                {category.category}
              </h2>
              <motion.div
                animate={{ rotate: openCategory === category.category ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "w-6 h-6 flex items-center justify-center",
                  theme === 'light' ? "text-white" : "text-primary"
                )}
              >
                +
              </motion.div>
            </button>

            {openCategory === category.category && (
              <div className="px-6 pb-6 space-y-4">
                {category.questions.map((item, questionIndex) => (
                  <motion.div
                    key={item.q}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: questionIndex * 0.1 }}
                    className={cn(
                      "border-b last:border-0 pb-4 last:pb-0",
                      theme === 'light' ? "border-white/10" : "border-border"
                    )}
                  >
                    <button
                      onClick={() => toggleQuestion(item.q)}
                      className="w-full text-left flex items-center justify-between gap-4 py-2"
                    >
                      <span className={cn(
                        "font-medium",
                        theme === 'light' ? "text-white" : "text-foreground"
                      )}>
                        {item.q}
                      </span>
                      <motion.div
                        animate={{ rotate: openQuestions.includes(item.q) ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                          "w-4 h-4 flex items-center justify-center flex-shrink-0",
                          theme === 'light' ? "text-white" : "text-primary"
                        )}
                      >
                        +
                      </motion.div>
                    </button>
                    {openQuestions.includes(item.q) && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className={cn(
                          "mt-2 whitespace-pre-line",
                          theme === 'light' ? "text-white/80" : "text-muted-foreground"
                        )}
                      >
                        {item.a}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className={cn(
          "rounded-lg p-6 backdrop-blur-md text-center mt-8",
          theme === 'light' 
            ? "bg-white/10" 
            : "bg-card/50"
        )}
      >
        <p className={cn(
          theme === 'light' ? "text-white/80" : "text-muted-foreground"
        )}>
          Não encontrou o que procurava? Entre em contato:{' '}
          <a 
            href="mailto:suporte@nexorax.com" 
            className={cn(
              "transition-colors",
              theme === 'light' 
                ? "text-white hover:text-white/80" 
                : "text-primary hover:text-primary/80"
            )}
          >
            suporte@nexorax.com
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
} 