import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Moment } from '../types/Moment'

const type = 'Moments'

export const moments = createApi({
  reducerPath: 'moments',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: builder => ({
    getMoments: builder.query<Moment[], void>({
      query: () => '/moments',
      // @ts-ignore
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type, id }) as const),
              { type, id: 'LIST' },
            ]
          : [{ type, id: 'LIST' }],
    }),
    getMomentById: builder.query<Moment, string>({
      query: id => `/moments/${id}`,
      // @ts-ignore
      providesTags: (result, error, id) => [{ type, id }],
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
      invalidatesTags: ({ id }) => [{ type, id }],
    }),
    deleteMoment: builder.mutation<void, string>({
      query: id => ({
        url: `/moments/${id}`,
        method: 'DELETE',
      }),
      // @ts-ignore
      invalidatesTags: ({ id }) => [{ type, id }],
    }),
  }),
})

export const {
  useGetMomentsQuery,
  useGetMomentByIdQuery,
  useCreateMomentMutation,
  useUpdateMomentMutation,
  useDeleteMomentMutation,
} = moments
