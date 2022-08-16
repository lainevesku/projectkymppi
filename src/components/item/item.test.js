import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Item from './item';

test('renders Item with props data', () => {
  render(
    <Router>
        <Item data={{
            nimi: "Laine" ,
            location: "Turku" ,
            periodStart: "2022-08-10" ,
            periodEnd: "2022-08-15",   
        }}/>
    </Router>
    );
  const nimi = screen.getByText(/Laine/i);
  expect(nimi).toBeInTheDocument();
  const location = screen.getByText(/Turku/i);
  expect(location).toBeInTheDocument();
  const start = screen.getByText(/10.8.2022/i);
  expect(start).toBeInTheDocument();
  const end = screen.getByText(/15.8.2022/i);
  expect(end).toBeInTheDocument();

});
