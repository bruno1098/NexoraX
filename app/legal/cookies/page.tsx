"use client";

import { motion } from 'framer-motion';
import { Cookie, Info, Settings, Shield } from 'lucide-react';

const cookieTypes = [
  {
    icon: Cookie,
    title: "Cookies Essenciais",
    description: "Necessários para o funcionamento básico do site"
  },
  {
    icon: Settings,
    title: "Cookies de Preferências",
    description: "Armazenam suas configurações e personalização"
  },
  {
    icon: Info,
    title: "Cookies Analíticos",
    description: "Nos ajudam a melhorar sua experiência"
  },
  {
    icon: Shield,
    title: "Cookies de Segurança",
    description: "Garantem uma navegação segura"
  }
];

export default function CookiesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent"
      >
        Política de Cookies
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {cookieTypes.map((type, index) => (
          <motion.div
            key={type.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
          >
            <type.icon className="w-8 h-8 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">{type.title}</h2>
            <p className="text-muted-foreground">{type.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Adicione mais conteúdo conforme necessário */}
    </motion.div>
  );
} 