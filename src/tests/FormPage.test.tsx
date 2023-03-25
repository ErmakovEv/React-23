import { render, screen, fireEvent } from '@testing-library/react';
import FormPage from '../pages/FormPage';

describe('FormPage', () => {
  it('render form', () => {
    render(<FormPage />);
    expect(screen.getByText(/Ваше имя/)).toBeInTheDocument();
  });

  it('render form component', () => {
    render(<FormPage />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('render msg component', async () => {
    const { getByText } = render(<FormPage />);
    const submitBtn = getByText(/Отправить/i);
    fireEvent.click(submitBtn);
  });

  it('renders form property', () => {
    const { getByLabelText } = render(<FormPage />);
    const input = getByLabelText('Ваше имя');
    expect(input).toHaveAttribute('type', 'text');
  });
});
