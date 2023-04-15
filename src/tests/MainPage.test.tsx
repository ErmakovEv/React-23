import { render, screen, act } from '@testing-library/react';
import MainPage from '../pages/MainPage';
import MySearch from '../components/UI/search/MySearch';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { configureStore } from '@reduxjs/toolkit';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPost } from '../components/post/Post.types';

describe('MainPage tests', () => {
  it('test loading...', () => {
    // interface IpostState {
    //   posts: IPost[];
    // }

    // const initialState: IpostState = {
    //   posts: [{ _id: 1 }],
    // };

    // const testSlice = createSlice({
    //   name: 'testPosts',
    //   initialState,
    //   reducers: {
    //     setSearch(state, action: PayloadAction<Record<'_id', number>>) {
    //       state.posts.push(action.payload);
    //     },
    //   },
    // });

    // const testStore = configureStore({
    //   reducer: testSlice.reducer,
    // });

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
