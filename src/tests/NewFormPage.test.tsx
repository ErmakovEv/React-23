import { render, screen, fireEvent } from '@testing-library/react';
import NewFormPage from '../pages/NewFormPage';
import { act } from 'react-dom/test-utils';

describe('NewFormPage', () => {
  it('render static form components', () => {
    render(<NewFormPage />);
    expect(screen.getByText(/You name/)).toBeInTheDocument();
  });

  it('render err from form', async () => {
    render(<NewFormPage />);
    const inputSub = screen.getByTestId('submit-btn') as HTMLInputElement;
    fireEvent.submit(inputSub);
    expect(await screen.findByText(/ERR@!@/)).toBeInTheDocument();
  });

  it('render input length err from form', async () => {
    render(<NewFormPage />);
    const inputName = screen.getByTestId('input-name') as HTMLInputElement;
    const inputSub = screen.getByTestId('submit-btn') as HTMLInputElement;
    // const newForm = screen.getByTestId('new-form') as HTMLFormElement;
    fireEvent.change(inputName, { target: { value: 'aaaa' } });
    fireEvent.submit(inputSub);
    expect(await screen.findByText(/Минимум 5 символов/)).toBeInTheDocument();
    screen.debug();
  });

  it('add file', () => {
    window.URL.createObjectURL = jest.fn();
    render(<NewFormPage />);
    const fileInput = screen.getByTestId('file-loader') as HTMLInputElement;
    fireEvent.change(fileInput, {
      target: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
      },
    });
    if (fileInput.files) {
      expect(fileInput.files[0].name).toBe('chucknorris.png');
    }
  });

  it('submit call', async () => {
    render(<NewFormPage />);
    const inputName = screen.getByTestId('input-name') as HTMLInputElement;
    const dateInput = screen.getByTestId('input-date') as HTMLInputElement;
    const genderRadio = screen.getByTestId('input-male') as HTMLInputElement;
    const specSelect = screen.getByTestId('select') as HTMLSelectElement;
    const fileInput = screen.getByTestId('file-loader') as HTMLInputElement;
    const inputSub = screen.getByTestId('submit-btn') as HTMLInputElement;

    act(async () => {
      fireEvent.change(inputName, { target: { value: 'aaaaaaaa' } });
      fireEvent.change(dateInput, { target: { value: '2023-03-22' } });
      fireEvent.click(genderRadio);
      fireEvent.change(specSelect, { target: { value: 'Frontend' } });
      fireEvent.change(fileInput, {
        target: {
          files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
        },
      });
      fireEvent.submit(inputSub);
    });
    expect(await screen.findByText(/Карточек нет/)).toBeInTheDocument();
    screen.debug();
  });
});
