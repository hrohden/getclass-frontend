import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Moment } from '../types/Moment'

export const momentsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: builder => ({
    getMoments: builder.query({
      query: () => '/moments',
    }),
    getMomentById: builder.query({
      query: (id: string) => `/moments/${id}`,
    }),
    createMoment: builder.mutation<Moment, Moment>({
      query: body => ({
        url: '/moments',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetMomentsQuery,
  useGetMomentByIdQuery,
  useCreateMomentMutation,
} = momentsApi
