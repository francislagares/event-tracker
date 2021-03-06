import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Hello text', () => {
  const { getByText } = render(<App />);
  const el = getByText(/Hello/i);
  expect(el).toBeInTheDocument();
});
