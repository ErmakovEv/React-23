import { render, screen, act } from '@testing-library/react';
import MainPage from '../pages/MainPage';
import MySearch from '../components/UI/search/MySearch';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('MainPage tests', () => {
  it('test loading...', () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );

    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });

  it('test searchSubmitHandler', () => {
    const searchSubmitHandler = jest.fn();
    render(<MySearch searchSubmitHandler={searchSubmitHandler} searchValue="" />);

    const inputSearch = screen.getByTestId('search');
    userEvent.type(inputSearch, '{enter}');
    userEvent.type(inputSearch, '{a}');
    expect(searchSubmitHandler).toBeCalledTimes(1);
  });

  it('test searchSubmitHandler', () => {
    act(() => {
      render(
        <Provider store={store}>
          <MainPage />
        </Provider>
      );
    });
    const inputSearch = screen.getByTestId('search');
    act(() => {
      userEvent.type(inputSearch, 'New value');
      userEvent.type(inputSearch, '{enter}');
    });
    expect(store.getState().searchReducer.mySearch).toEqual('New value');
  });
});
