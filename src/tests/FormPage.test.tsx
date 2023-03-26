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

  // it('adds a card when the form is submitted', () => {
  //   const { getByText } = render(<FormPage />);
  //   const nameInput = screen.getByLabelText('Ваше имя') as HTMLInputElement;

  //   fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  //   // const maleInput = screen.getByLabelText('Ваш пол') as HTMLInputElement;
  //   // fireEvent.click(maleInput);
  //   // const fileInput = screen.getByLabelText('Avatar') as HTMLInputElement;
  //   // const file = new File(['test file'], 'test.png', { type: 'image/png' });
  //   // fireEvent.change(fileInput, { target: { files: [file] } });
  //   const submitBtn = getByText(/Отправить/i);
  //   fireEvent.submit(submitBtn);
  //   expect(screen.findByText('John Doe')).toBeInTheDocument();
  // });
});
