import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders paragraph Hello', () => {
  const { getByText } = render(<App />);
  const paragraphElement = getByText(/Hello/i);
  expect(paragraphElement).toBeInTheDocument();
});
