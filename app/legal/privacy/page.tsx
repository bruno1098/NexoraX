"use client";

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileKey, Database, Share2, Bell, Settings } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';

const privacyTopics = [
  {
    icon: Shield,
    title: "Coleta de Dados",
    content: `Coletamos apenas os dados necessários para:
    • Prestação dos serviços contratados
    • Melhorias na experiência do usuário
    • Comunicações relevantes
    • Cumprimento de obrigações legais`
  },
  {
    icon: Lock,
    title: "Segurança",
    content: `Implementamos medidas rigorosas de segurança:
    • Criptografia de ponta a ponta
    • Firewalls avançados
    • Monitoramento 24/7
    • Backups regulares`
  },
  {
    icon: Eye,
    title: "Transparência",
    content: `Garantimos total transparência sobre:
    • Como seus dados são utilizados
    • Onde são armazenados
    • Com quem são compartilhados
    • Seus direitos como titular`
  },
  {
    icon: FileKey,
    title: "Conformidade LGPD",
    content: `Seguimos todas as diretrizes da LGPD:
    • Bases legais para tratamento
    • Direitos dos titulares
    • Relatório de impacto
    • Governança de dados`
  },
  {
    icon: Database,
    title: "Armazenamento",
    content: `Seus dados são armazenados com segurança:
    • Servidores próprios no Brasil
    • Redundância geográfica
    • Política de retenção clara
    • Descarte seguro`
  },
  {
    icon: Share2,
    title: "Compartilhamento",
    content: `Compartilhamento restrito apenas:
    • Quando autorizado
    • Para prestadores essenciais
    • Por obrigação legal
    • Com medidas de segurança`
  },
  {
    icon: Bell,
    title: "Notificações",
    content: `Você será notificado sobre:
    • Alterações na política
    • Incidentes de segurança
    • Solicitações de dados
    • Atualizações importantes`
  },
  {
    icon: Settings,
    title: "Seus Direitos",
    content: `Você tem direito a:
    • Acessar seus dados
    • Solicitar correções
    • Pedir exclusão
    • Revogar consentimento`
  }
];

export default function PrivacyPage() {
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
        Política de Privacidade
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
        Protegendo seus dados com transparência e segurança
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6">
        {privacyTopics.map((topic, index) => (
          <motion.div
            key={topic.title}
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
            <topic.icon className={cn(
              "w-8 h-8 mb-4",
              theme === 'light' ? "text-white" : "text-primary"
            )} />
            <h2 className={cn(
              "text-xl font-semibold mb-3",
              theme === 'light' ? "text-white" : "text-foreground"
            )}>
              {topic.title}
            </h2>
            <p className={cn(
              "whitespace-pre-line",
              theme === 'light' ? "text-white/80" : "text-muted-foreground"
            )}>
              {topic.content}
            </p>
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
          Para exercer seus direitos ou tirar dúvidas, contate nosso DPO:{' '}
          <a 
            href="mailto:nexorax1@gmail.com" 
            className={cn(
              "transition-colors",
              theme === 'light' 
                ? "text-white hover:text-white/80" 
                : "text-primary hover:text-primary/80"
            )}
          >
            privacidade@nexorax.com
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
} 