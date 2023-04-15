import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import Iapi from './apiTypes';
export const cardsApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://the-one-api.dev/v2/',
    headers: {
      Authorization: 'Bearer vClo7jNTT0rLJACQeTAe',
    },
  }),
  endpoints: (build) => ({
    fetchCards: build.query<Iapi, string>({
      query: (queryName) => ({
        url: '/character',
        params: {
          name: queryName,
        },
      }),
    }),
    fetchAllCards: build.query<Iapi, void>({
      query: () => ({
        url: '/character',
      }),
    }),
  }),
});
