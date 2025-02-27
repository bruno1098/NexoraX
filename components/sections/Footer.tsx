"use client";

import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Github,
  Code,
  Briefcase
} from 'lucide-react';
import { cn } from '@/lib/utils';

const footerLinks = {
  company: [
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Cases', href: '#cases' },
    { label: 'Contato', href: '#contact' },
    { label: 'Trabalhe Conosco', href: '/careers' },
  ],
  legal: [
    { label: 'Termos de Uso', href: '/legal/terms' },
    { label: 'Privacidade', href: '/legal/privacy' },
    { label: 'FAQ', href: '/legal/faq' },
  ],
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/_nexorax_/', icon: Instagram },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/nexorax', icon: Linkedin },
  
  ],
};

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="space-y-4"
    >
      <h3 className="font-semibold mb-4">Social</h3>
      <div className="relative flex justify-start items-center py-8 pl-4">
        {footerLinks.social.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            className={cn(
              "relative w-20 h-24 bg-gradient-to-t from-transparent to-white/10",
              "border border-white/10 rounded-xl backdrop-blur-md",
              "flex flex-col justify-center items-center transition-all duration-500",
              "group -mx-4",
              "hover:bg-white/20"
            )}
            style={{
              transform: `rotate(${(index - 1) * 15}deg)`,
            }}
            whileHover={{
              rotate: 0,
              marginLeft: "1rem",
              marginRight: "1rem",
              scale: 1.1,
            }}
            aria-label={social.label}
          >
            <social.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
            <motion.span 
              className="absolute bottom-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300"
              initial={{ y: 10 }}
              whileHover={{ y: 0 }}
            >
              {social.label}
            </motion.span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.li
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <motion.a
      href={href}
      className="text-muted-foreground hover:text-primary transition-colors relative group flex items-center gap-2"
      whileHover={{ x: 5 }}
    >
      <motion.div
        className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      />
      <span className="relative">
        {children}
        <motion.span 
          className="absolute -bottom-0.5 left-0 h-0.5 bg-primary"
          initial={{ width: "0%" }}
          whileHover={{ width: "100%" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
      </span>
    </motion.a>
  </motion.li>
);

export default function Footer() {
  return (
    <footer className="section-padding bg-gradient-to-b from-background to-card">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Code className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">NexoraX</span>
            </motion.div>
            <p className="text-muted-foreground">
              Transformando ideias em soluções digitais inovadoras para impulsionar seu negócio.
            </p>
          </motion.div>

          {/* Links da Empresa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </motion.div>

          {/* Links Legais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </motion.div>

         
          <SocialLinks />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} NexoraX. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}