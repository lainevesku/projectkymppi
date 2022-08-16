import { render, screen } from '@testing-library/react';
import Header from './header';

test('renders Header text', () => {
  render(<Header />);
  const header = screen.getByText(/La'Pete/i);
  expect(header).toBeInTheDocument();
});
