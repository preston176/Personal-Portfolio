// src/@types/splide-react.d.ts
declare module '@splidejs/react-splide' {
    import { ComponentType, ReactNode } from 'react';
  
    export interface SplideOptions {
      type?: string;
      perPage?: number;
      gap?: string;
      arrows?: boolean;
      pagination?: boolean;
      drag?: boolean;
      // Add any additional options you need
    }
  
    export const Splide: ComponentType<{ options?: SplideOptions; children: ReactNode }>;
    export const SplideSlide: ComponentType<{ children: ReactNode }>;
  }
  