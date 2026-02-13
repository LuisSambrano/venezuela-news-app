import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { NewsCard } from '../NewsCard';
import React from 'react';

const mockItem = {
  id: '1',
  title: 'Test News Title',
  subtitle: 'Test News Subtitle',
  category: 'Politics',
  image_url: 'https://example.com/image.jpg',
  published_at: new Date().toISOString(),
  author: 'John Doe',
  slug: 'test-news-title',
};

describe('NewsCard', () => {
  it('renders news item correctly', () => {
    render(<NewsCard item={mockItem} />);

    expect(screen.getByText(mockItem.title)).toBeInTheDocument();
    expect(screen.getByText(mockItem.subtitle)).toBeInTheDocument();
    expect(screen.getByText(mockItem.category)).toBeInTheDocument();

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', mockItem.image_url);
    expect(image).toHaveAttribute('alt', mockItem.title);
  });

  it('displays "Just now" for very recent articles', () => {
    const recentItem = { ...mockItem, published_at: new Date().toISOString() };
    render(<NewsCard item={recentItem} />);
    expect(screen.getByText(/Just now/i)).toBeInTheDocument();
  });

  it('displays minutes ago for articles from 5 minutes ago', () => {
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    const item = { ...mockItem, published_at: fiveMinutesAgo };
    render(<NewsCard item={item} />);
    expect(screen.getByText(/5m ago/i)).toBeInTheDocument();
  });

  it('displays hours ago for articles from 3 hours ago', () => {
    const threeHoursAgo = new Date(Date.now() - 3 * 3600 * 1000).toISOString();
    const item = { ...mockItem, published_at: threeHoursAgo };
    render(<NewsCard item={item} />);
    expect(screen.getByText(/3h ago/i)).toBeInTheDocument();
  });

  it('displays days ago for articles from 2 days ago', () => {
    const twoDaysAgo = new Date(Date.now() - 2 * 86400 * 1000).toISOString();
    const item = { ...mockItem, published_at: twoDaysAgo };
    render(<NewsCard item={item} />);
    expect(screen.getByText(/2d ago/i)).toBeInTheDocument();
  });

  it('handles invalid dates gracefully', () => {
    const item = { ...mockItem, published_at: 'invalid-date' };
    render(<NewsCard item={item} />);
    expect(screen.getByText(/Recently/i)).toBeInTheDocument();
  });
});
