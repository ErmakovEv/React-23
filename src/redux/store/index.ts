import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cardsApi } from '../services/cardsService';
import searchReducer from './reducers/searchSlice';

const rootReducer = combineReducers({
  searchReducer,
  [cardsApi.reducerPath]: cardsApi.reducer,
});

// export const setupStore = () => {
//   return configureStore({
//     reducer: rootReducer,
//   });
// };
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof setupStore>;
export type AppDistaptch = typeof store.dispatch;
