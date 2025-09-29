import React, { StrictMode } from 'react';
import { render, screen } from '@testing-library/react';
import App from './app/App';
import { createRoot } from 'react-dom/client';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
