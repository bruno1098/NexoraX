"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote, Shield, Clock, HeartHandshake, Zap, Target, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/providers/ThemeProvider';

gsap.registerPlugin(ScrollTrigger);


export default function Testimonials() {
  const { theme } = useTheme();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nosso <span className="text-gradient-animated">Compromisso</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Como uma empresa nova, nossa prioridade é superar suas expectativas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Qualidade Garantida",
              description: "Comprometimento com excelência técnica e código limpo em cada linha escrita.",
              gradient: "from-[#af40ff] via-[#5b42f3] to-[#00ddeb]",
              buttonText: "Padrões"
            },
            {
              icon: HeartHandshake,
              title: "Atendimento Próximo",
              description: "Comunicação clara e acompanhamento personalizado durante todo o projeto.",
              gradient: "from-[#ff4040] via-[#f34242] to-[#eb0000]",
              buttonText: "Processo"
            },
            {
              icon: Clock,
              title: "Prazos Respeitados",
              description: "Entregas pontuais e transparência total no cronograma de desenvolvimento.",
              gradient: "from-[#40ff8d] via-[#42f374] to-[#00eb6a]",
              buttonText: "Cronograma"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative h-[330px] rounded-2xl overflow-hidden"
            >
              {/* Card Background with Animated Waves */}
              <div className="absolute inset-0 bg-background/10 backdrop-blur-sm" />
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={cn(
                    "absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] rounded-[40%]",
                    `bg-gradient-to-r ${item.gradient}`
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

              {/* Card Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                    <item.icon className={cn(
                      "w-16 h-16 relative z-10",
                      theme === 'light' ? "text-foreground" : "text-white"
                    )} />
                  </div>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={cn(
                    "text-xl font-semibold mb-4",
                    theme === 'light' ? "text-foreground" : "text-white"
                  )}
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={cn(
                    theme === 'light' ? "text-foreground/80" : "text-white/80"
                  )}
                >
                  {item.description}
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={cn(
                    "mt-6 px-6 py-2 rounded-full backdrop-blur-md border transition-colors",
                    theme === 'light' 
                      ? "bg-foreground/10 text-foreground border-foreground/20 hover:bg-foreground/20" 
                      : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                  )}
                >
                  {item.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}