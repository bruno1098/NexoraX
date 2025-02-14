"use client";

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, Code, Laptop, Server, Database } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1
      });

      gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power4.out",
      });

      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power4.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="min-h-screen pt-32 md:pt-40 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y, opacity }} className="space-y-8">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Inovação em Código</span>
            </div>

            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat leading-tight">
              <div className="hero-title-line overflow-hidden">
                <div className="text-gradient-animated">Soluções de</div>
              </div>
              <div className="hero-title-line overflow-hidden mt-2">
                <div className="text-gradient-animated">Software</div>
              </div>
              <div className="hero-title-line overflow-hidden mt-2">
                <div>Sob Medida</div>
              </div>
              <div className="hero-title-line overflow-visible mt-2 mb-6">
                <div className="pb-4">
                  para Seu Negócio
                </div>
              </div>
            </h1>
            
            <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-xl mt-10">
              Uma nova empresa de tecnologia focada em desenvolver soluções personalizadas 
              e inovadoras. Do site ao sistema completo, transformamos suas ideias em realidade.
            </p>

            <div className="hero-cta flex flex-wrap items-center gap-4">
              <motion.a
                href="#contact"
                className="btn-primary glow hover-3d inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fale com um Especialista
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#services"
                className="text-primary font-medium hover:text-primary-dark transition-colors"
                whileHover={{ x: 5 }}
              >
                Conheça nossos serviços →
              </motion.a>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                  alt="Desenvolvimento de Software"
                  className="rounded-2xl shadow-2xl"
                />

                {/* Cards flutuantes */}
                <motion.div
                  className="absolute -right-8 top-1/4 glass p-4 rounded-lg shadow-lg"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3">
                    <Server className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Tecnologia Moderna</p>
                      <p className="text-xs text-muted-foreground">Stack Atualizada</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -left-8 bottom-1/4 glass p-4 rounded-lg shadow-lg"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="flex items-center gap-3">
                    <Database className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Inovação</p>
                      <p className="text-xs text-muted-foreground">Soluções Criativas</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}