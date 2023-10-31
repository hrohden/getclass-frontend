import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const momentsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: builder => ({
    getMoments: builder.query({
      query: () => '/moments',
    }),
  }),
})

export const { useGetMomentsQuery } = momentsApi
