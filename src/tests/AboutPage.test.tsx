import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from '../pages/AboutPage';

describe('AboutPage components', () => {
  it('AboutPage renders', () => {
    render(<AboutPage />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
