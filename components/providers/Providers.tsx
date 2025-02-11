"use client";

import { ThemeProvider } from './ThemeProvider';
import { LoadingProvider } from './LoadingProvider';
import { NavigationEvents } from '../navigation/NavigationEvents';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <NavigationEvents />
        {children}
      </LoadingProvider>
    </ThemeProvider>
  );
} 