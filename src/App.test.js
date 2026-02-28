// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SmartZen title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SmartZen/i);
    expect(titleElement).toBeInTheDocument();
});
