import { render, screen } from '@testing-library/react';
import Calculator from './calculator';

test('renders Calculator and headline', () => {



  render(<Calculator/>);
  const otsikko = screen.getByText(/Lape laskuri/i);
  expect(otsikko).toBeInTheDocument();
});