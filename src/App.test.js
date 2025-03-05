import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login form', () => {
  render(<App />);
  const loginElements = screen.getAllByText(/login/i);
  expect(loginElements.length).toBe(2); // Expecting both the header and button
  expect(loginElements[0]).toBeInTheDocument(); // Check the first one (e.g., <h1>)
  expect(loginElements[1]).toBeInTheDocument(); // Check the second one (e.g., <button>)
});