import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICard } from '../../../components/card/Card.types';

interface IsearchState {
  mySearch: string;
  count: number;
}

const initialState: IsearchState = {
  mySearch: '',
  count: 0,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.mySearch = action.payload;
    },
  },
});

export default searchSlice.reducer;
