import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cardsApi } from '../services/cardsService';
import searchReducer from './reducers/searchSlice';
import cardsReduscer from './reducers/cardsSlice';

const rootReducer = combineReducers({
  searchReducer,
  cardsReduscer,
  [cardsApi.reducerPath]: cardsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDistaptch = typeof store.dispatch;
