import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const { theme } = useTheme();

  // Impedir rolagem do body quando o modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay com backdrop blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          />
          
          {/* Conteúdo do modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "relative rounded-xl shadow-xl p-6 max-w-md w-full mx-4",
              "border border-primary/20",
              theme === 'light' 
                ? "bg-white text-foreground" 
                : "bg-card text-card-foreground"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de fechar */}
            <motion.button 
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={cn(
                "absolute top-3 right-3 p-1.5 rounded-full",
                "transition-colors duration-200",
                theme === 'light'
                  ? "bg-muted/10 hover:bg-muted/20 text-foreground"
                  : "bg-muted/20 hover:bg-muted/30 text-muted-foreground hover:text-foreground"
              )}
            >
              <X className="w-5 h-5" />
            </motion.button>
            
            {/* Título do modal (opcional) */}
            {title && (
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gradient-animated">
                {title}
              </h2>
            )}
            
            {/* Conteúdo */}
            <div className="mt-2">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;