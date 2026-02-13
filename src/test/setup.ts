import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Mock next/image
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) => {
    return React.createElement('img', { ...props, fill: props.fill ? "true" : undefined });
  },
}));

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    article: ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLElement>) => React.createElement('article', props, children),
    div: ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLElement>) => React.createElement('div', props, children),
    h3: ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLElement>) => React.createElement('h3', props, children),
    p: ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLElement>) => React.createElement('p', props, children),
    span: ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLElement>) => React.createElement('span', props, children),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock lucide-react
vi.mock('lucide-react', () => ({
  Clock: () => React.createElement('div', { 'data-testid': 'clock-icon' }),
}));
