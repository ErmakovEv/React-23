import { render, screen, fireEvent } from '@testing-library/react';
import NewFormPage from '../pages/NewFormPage';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('test newForm', () => {
  it('submit call', async () => {
    render(
      <Provider store={store}>
        <NewFormPage />
      </Provider>
    );
    const inputName = screen.getByTestId('input-name') as HTMLInputElement;
    const dateInput = screen.getByTestId('input-date') as HTMLInputElement;
    const genderRadio = screen.getByTestId('input-male') as HTMLInputElement;
    const specSelect = screen.getByTestId('select') as HTMLSelectElement;
    const fileInput = screen.getByTestId('file-loader') as HTMLInputElement;
    const inputSub = screen.getByTestId('submit-btn') as HTMLInputElement;
    const newForm = screen.getByTestId('new-form') as HTMLFormElement;
    userEvent.type(inputName, 'testName');
    userEvent.type(dateInput, '2023-03-22');
    userEvent.click(genderRadio);
    fireEvent.change(specSelect, { target: { value: 'Frontend' } });
    userEvent.upload(fileInput, new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' }));
    userEvent.click(inputSub);
    userEvent.click(newForm);
    expect(await screen.findByText(/testName/)).toBeInTheDocument();
  });
});
