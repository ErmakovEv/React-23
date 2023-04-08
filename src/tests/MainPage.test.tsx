import { render, screen, fireEvent } from '@testing-library/react';
import MainPage from '../pages/MainPage';
import MySearch from '../components/UI/search/MySearch';
import userEvent from '@testing-library/user-event';

describe('MainPage tests', () => {
  it('test loading...', () => {
    const { getByText } = render(<MainPage />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('test searchSubmitHandler', () => {
    const searchSubmitHandler = jest.fn();
    render(<MySearch searchSubmitHandler={searchSubmitHandler} searchValue="" />);

    const inputSearch = screen.getByTestId('search');
    userEvent.type(inputSearch, '{enter}');
    userEvent.type(inputSearch, '{a}');
    expect(searchSubmitHandler).toBeCalledTimes(1);
  });

  // it('test searchSubmitHandler', () => {
  //   const searchSubmitHandler = jest.fn();
  //   render(<MainPage />);

  //   const inputSearch = screen.getByTestId('search');
  //   fireEvent.keyPress(inputSearch, { key: 'Enter', code: 'Enter', charCode: 13 });
  //   expect(searchSubmitHandler  ).toHaveBeenCalledWith(inputSearch.value);
  // });
});
