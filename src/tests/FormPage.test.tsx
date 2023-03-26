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

  it('test unvalid name in nameInput', () => {
    render(<FormPage />);
    const nameInput = screen.getByLabelText('Ваше имя') as HTMLInputElement;
    const form = screen.getByTestId('form') as HTMLFormElement;
    fireEvent.change(nameInput, { target: { value: 'невалидное имя' } });
    fireEvent.submit(form);
    screen.debug();
    expect(screen.getByText(/неправильное имя/i)).toBeInTheDocument();
  });

  it('add file', () => {
    window.URL.createObjectURL = jest.fn();
    render(<FormPage />);
    const fileInput = screen.getByTestId('photo-uploader') as HTMLInputElement;
    fireEvent.change(fileInput, {
      target: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
      },
    });
    if (fileInput.files) {
      expect(fileInput.files[0].name).toBe('chucknorris.png');
    }
  });

  it('radio ', () => {
    render(<FormPage />);
    const input = screen.getByTestId('radio') as HTMLInputElement;
    fireEvent.click(input);
    expect(input).toBeChecked();
  });

  it('add card', () => {
    render(<FormPage />);

    const input = screen.getByTestId('radio') as HTMLInputElement;
    fireEvent.click(input);
    const fileInput = screen.getByTestId('photo-uploader') as HTMLInputElement;
    fireEvent.change(fileInput, {
      target: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
      },
    });
    const nameInput = screen.getByLabelText('Ваше имя') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'Valid Name' } });
    const form = screen.getByTestId('form') as HTMLFormElement;
    fireEvent.submit(form);
    expect(screen.getByText(/Карточек нет/i)).toBeInTheDocument();
  });
});
