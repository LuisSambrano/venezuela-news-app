import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Mock next/image
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return React.createElement('img', { ...props, fill: props.fill ? "true" : undefined });
  },
}));

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    article: ({ children, ...props }: any) => React.createElement('article', props, children),
    div: ({ children, ...props }: any) => React.createElement('div', props, children),
    h3: ({ children, ...props }: any) => React.createElement('h3', props, children),
    p: ({ children, ...props }: any) => React.createElement('p', props, children),
    span: ({ children, ...props }: any) => React.createElement('span', props, children),
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock lucide-react
vi.mock('lucide-react', () => ({
  Clock: () => React.createElement('div', { 'data-testid': 'clock-icon' }),
}));
