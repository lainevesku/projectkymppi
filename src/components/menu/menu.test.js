import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './menu';

test('renders Menu with links', () => {
  render(<Router><Menu /></Router>);
});