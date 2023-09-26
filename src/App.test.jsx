import { render, screen } from '@testing-library/react';
import App from './App';

it('Testa 2', () => {
  render(<App />);
  expect(screen.getByText(/Edit/i)).toBeInTheDocument();
});
