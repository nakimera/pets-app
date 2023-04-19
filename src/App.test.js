import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/pets/i);
  expect(linkElement).toBeInTheDocument();
});
