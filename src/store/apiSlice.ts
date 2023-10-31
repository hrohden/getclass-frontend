import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Moment } from '../types/Moment'

export const momentsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: builder => ({
    getMoments: builder.query<Moment[], void>({
      query: () => '/moments',
      // @ts-ignore
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Moments', id }) as const),
              { type: 'Moments', id: 'LIST' },
            ]
          : [{ type: 'Moments', id: 'LIST' }],
    }),
    getMomentById: builder.query<Moment, string>({
      query: id => `/moments/${id}`,
      // @ts-ignore
      providesTags: (result, error, id) => [{ type: 'Moments', id }],
    }),
    createMoment: builder.mutation<Moment, Moment>({
      query: body => ({
        url: '/moments',
        method: 'POST',
        body,
      }),
    }),
    updateMoment: builder.mutation<Moment, Partial<Moment>>({
      query: ({ id, ...body }) => ({
        url: `/moments/${id}`,
        method: 'PATCH',
        body,
      }),
      // @ts-ignore
      invalidatesTags: ({ id }) => [{ type: 'Moments', id }],
    }),
    deleteMoment: builder.mutation<void, string>({
      query: id => ({
        url: `/moments/${id}`,
        method: 'DELETE',
      }),
      // @ts-ignore
      invalidatesTags: ({ id }) => [{ type: 'Moments', id }],
    }),
  }),
})

export const {
  useGetMomentsQuery,
  useGetMomentByIdQuery,
  useCreateMomentMutation,
  useUpdateMomentMutation,
  useDeleteMomentMutation,
} = momentsApi
