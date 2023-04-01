import { render, screen, fireEvent } from '@testing-library/react';
import NewFormPage from '../pages/NewFormPage';
import NewForm from '../components/newForm/NewForm';
import { act } from 'react-dom/test-utils';
import { FormTypes } from '../components/newForm/NewForm.types';
import { ICard } from '../components/card/Card.types';
import Card from '../components/card/Card';
import userEvent from '@testing-library/user-event';

describe('NewFormPage', () => {
  // it('render static form components', () => {
  //   render(<NewFormPage />);
  //   expect(screen.getByText(/You name/)).toBeInTheDocument();
  // });
  // it('render err from form', async () => {
  //   render(<NewFormPage />);
  //   const inputSub = screen.getByTestId('submit-btn') as HTMLInputElement;
  //   fireEvent.submit(inputSub);
  //   expect(await screen.findByText(/ERR@!@/)).toBeInTheDocument();
  // });
  it('render input length err from form', async () => {
    render(<NewFormPage />);
    const inputName = screen.getByTestId('input-name') as HTMLInputElement;
    const inputSub = screen.getByTestId('submit-btn') as HTMLInputElement;
    // const newForm = screen.getByTestId('new-form') as HTMLFormElement;
    fireEvent.change(inputName, { target: { value: 'aaaa' } });
    fireEvent.submit(inputSub);
    expect(await screen.findByText(/Минимум 5 символов/)).toBeInTheDocument();
  });

  it('add file', () => {
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

  const mockLogin = jest.fn((card: ICard) => {
    console.log(card);
  });

  // it('submit call', async () => {
  //   // act(() => {
  //   render(<NewFormPage />);
  //   // });
  //   const inputName = screen.getByTestId('input-name') as HTMLInputElement;
  //   const dateInput = screen.getByTestId('input-date') as HTMLInputElement;
  //   const genderRadio = screen.getByTestId('input-male') as HTMLInputElement;
  //   const specSelect = screen.getByTestId('select') as HTMLSelectElement;
  //   const fileInput = screen.getByTestId('file-loader') as HTMLInputElement;
  //   const inputSub = screen.getByTestId('submit-btn') as HTMLInputElement;
  //   userEvent.type(inputName, 'testName');
  //   userEvent.type(dateInput, '2023-03-22');
  //   userEvent.click(genderRadio);
  //   userEvent.type(specSelect, 'Frontend');
  //   await userEvent.upload(
  //     fileInput,
  //     new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })
  //   );
  //   userEvent.click(inputSub);
  //   expect(await screen.findByText(/testName/)).toBeInTheDocument();
  //   screen.debug();
  // });
  // const mockLogin = jest.fn((card: ICard) => {
  //   console.log(card);
  // });
  it('submit call1', async () => {
    render(<NewFormPage />);
    const inputName = screen.getByTestId('input-name') as HTMLInputElement;
    const dateInput = screen.getByTestId('input-date') as HTMLInputElement;
    const genderRadio = screen.getByTestId('input-male') as HTMLInputElement;
    const specSelect = screen.getByTestId('select') as HTMLSelectElement;
    const fileInput = screen.getByTestId('file-loader') as HTMLInputElement;
    const inputSub = screen.getByTestId('submit-btn') as HTMLInputElement;
    const newForm = screen.getByTestId('new-form') as HTMLFormElement;
    fireEvent.change(inputName, { target: { value: 'aaaaaaaa' } });
    fireEvent.change(dateInput, { target: { value: '2023-03-22' } });
    fireEvent.click(genderRadio);
    fireEvent.change(specSelect, { target: { value: 'Frontend' } });
    await fireEvent.change(fileInput, {
      target: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
      },
    });
    fireEvent.click(inputSub);
    // fireEvent.submit(newForm);
    expect(await screen.findByText(/aaaaaaaa/)).toBeInTheDocument();
    // expect(mockLogin).toHaveBeenCalled();
    // screen.debug();
  });
});
