"use client";

import { motion } from 'framer-motion';
import { Shield, Users, Scale, FileCheck, Clock, AlertCircle } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';

const sections = [
  {
    icon: Shield,
    title: "1. Aceitação dos Termos",
    content: `Ao acessar e utilizar os serviços da NexoraX, você concorda expressamente com estes Termos de Uso. É fundamental ler atentamente todas as condições aqui estabelecidas. Caso não concorde com qualquer disposição, recomendamos não utilizar nossos serviços.

    1.1. Estes termos constituem um acordo legal entre você e a NexoraX.
    1.2. Reservamo-nos o direito de modificar estes termos a qualquer momento.
    1.3. As modificações entrarão em vigor imediatamente após sua publicação.`
  },
  {
    icon: Users,
    title: "2. Elegibilidade e Cadastro",
    content: `Para utilizar nossos serviços, você deve:

    2.1. Ter capacidade legal para contratar.
    2.2. Fornecer informações verdadeiras e atualizadas.
    2.3. Manter a confidencialidade de suas credenciais de acesso.
    2.4. Notificar imediatamente qualquer uso não autorizado de sua conta.`
  },
  {
    icon: Scale,
    title: "3. Direitos e Responsabilidades",
    content: `3.1. Direitos do Usuário:
    - Acesso aos serviços contratados
    - Suporte técnico conforme contratado
    - Confidencialidade das informações
    
    3.2. Responsabilidades do Usuário:
    - Uso adequado da plataforma
    - Respeito à propriedade intelectual
    - Não compartilhamento de credenciais
    - Pagamento dos valores acordados`
  },
  {
    icon: FileCheck,
    title: "4. Propriedade Intelectual",
    content: `4.1. Todo o conteúdo disponibilizado pela NexoraX é protegido por direitos autorais.
    4.2. É proibida a cópia, modificação ou distribuição sem autorização.
    4.3. O código-fonte desenvolvido permanece propriedade da NexoraX, salvo acordo específico.
    4.4. As personalizações específicas para o cliente seguem o contrato individual.`
  },
  {
    icon: Clock,
    title: "5. Prazo e Rescisão",
    content: `5.1. O prazo de prestação dos serviços será conforme contratado.
    5.2. A rescisão pode ocorrer:
    - Por acordo entre as partes
    - Por descumprimento dos termos
    - Por inadimplência
    5.3. Em caso de rescisão, serão observados os procedimentos de transição.`
  },
  {
    icon: AlertCircle,
    title: "6. Limitação de Responsabilidade",
    content: `6.1. A NexoraX não se responsabiliza por:
    - Uso inadequado da plataforma
    - Perdas decorrentes de força maior
    - Problemas de conexão do usuário
    6.2. O suporte técnico será prestado conforme SLA contratado.
    6.3. Backups e segurança seguem política específica.`
  }
];

export default function TermsPage() {
  const { theme } = useTheme();

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
        Termos de Uso
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
        Última atualização: {new Date().toLocaleDateString('pt-BR')}
      </motion.p>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.5,
              ease: "easeOut"
            }}
            className={cn(
              "rounded-lg p-6 backdrop-blur-md transition-all duration-300",
              theme === 'light' 
                ? "bg-white/10 hover:bg-white/20" 
                : "bg-card/50 hover:bg-card/80"
            )}
          >
            <div className="flex items-center gap-3 mb-4">
              <section.icon className={cn(
                "w-6 h-6",
                theme === 'light' ? "text-white" : "text-primary"
              )} />
              <h2 className={cn(
                "text-2xl font-semibold",
                theme === 'light' ? "text-white" : "text-foreground"
              )}>
                {section.title}
              </h2>
            </div>
            <div className={cn(
              "space-y-2 text-base leading-relaxed whitespace-pre-line",
              theme === 'light' ? "text-white/80" : "text-muted-foreground"
            )}>
              {section.content}
            </div>
          </motion.section>
        ))}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className={cn(
            "rounded-lg p-6 backdrop-blur-md text-center",
            theme === 'light' 
              ? "bg-white/10" 
              : "bg-card/50"
          )}
        >
          <p className={cn(
            theme === 'light' ? "text-white/80" : "text-muted-foreground"
          )}>
            Para dúvidas sobre nossos termos, entre em contato através do email:{' '}
            <a 
              href="mailto:legal@nexorax.com" 
              className={cn(
                "transition-colors",
                theme === 'light' 
                  ? "text-white hover:text-white/80" 
                  : "text-primary hover:text-primary/80"
              )}
            >
              legal@nexorax.com
            </a>
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
} 