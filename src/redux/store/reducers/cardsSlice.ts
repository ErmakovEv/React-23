import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICard } from '../../../components/card/Card.types';

interface IsearchState {
  cards: ICard[];
}

const initialState: IsearchState = {
  cards: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards(state, action: PayloadAction<ICard>) {
      state.cards.push(action.payload);
    },
  },
});

export default cardsSlice.reducer;
