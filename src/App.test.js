import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders login form', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const loginElements = screen.getAllByText(/login/i);
  expect(loginElements.length).toBe(2);
  expect(loginElements[0]).toBeInTheDocument();
  expect(loginElements[1]).toBeInTheDocument();
});