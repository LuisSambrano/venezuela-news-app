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
vi.mock('framer-motion', () => {
  const motionMock = {
    article: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) => React.createElement('article', props, children),
    div: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) => React.createElement('div', props, children),
    h1: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) => React.createElement('h1', props, children),
    h2: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) => React.createElement('h2', props, children),
    h3: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) => React.createElement('h3', props, children),
    p: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) => React.createElement('p', props, children),
    span: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) => React.createElement('span', props, children),
    section: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) => React.createElement('section', props, children),
    ul: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) => React.createElement('ul', props, children),
    li: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) => React.createElement('li', props, children),
    a: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) => React.createElement('a', props, children),
    button: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) => React.createElement('button', props, children),
    img: ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) => React.createElement('img', props, children),
  };
  return {
    motion: motionMock,
    m: motionMock,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    LazyMotion: ({ children }: { children: React.ReactNode }) => children,
    domAnimation: {},
    useMotionTemplate: () => {},
    useMotionValue: () => {},
  };
});

// Mock lucide-react
vi.mock('lucide-react', () => ({
  Clock: () => React.createElement('div', { 'data-testid': 'clock-icon' }),
  Check: () => React.createElement('div', { 'data-testid': 'check-icon' }),
  ChevronLeft: () => React.createElement('div', { 'data-testid': 'chevron-left' }),
  ChevronRight: () => React.createElement('div', { 'data-testid': 'chevron-right' }),
  // Add others as needed if tests fail
}));

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', { value: vi.fn(), writable: true });
