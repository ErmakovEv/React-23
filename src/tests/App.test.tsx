import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('render App component', () => {
    render(<App />);
    // expect(screen.getByText(/Main/)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
