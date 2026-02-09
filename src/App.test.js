// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GasMeter title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GasMeter/i);
    expect(titleElement).toBeInTheDocument();
});
