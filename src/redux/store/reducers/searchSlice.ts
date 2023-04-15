import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IsearchState {
  mySearch: string;
}

const initialState: IsearchState = {
  mySearch: '',
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
