"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loading from '../ui/Loading';

interface LoadingContextType {
  startLoading: () => void;
  stopLoading: () => void;
  isLoading: boolean;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); 

      return () => clearTimeout(timer);
    }
  }, [isLoading]);


  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', () => setIsLoading(false));
    }
  }, []);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ startLoading, stopLoading, isLoading }}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50"
          >
            <Loading />
          </motion.div>
        ) : (
          children
        )}
      </AnimatePresence>
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading deve ser usado dentro de LoadingProvider');
  }
  return context;
} 