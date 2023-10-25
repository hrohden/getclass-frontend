import {
  SliceCaseReducers,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import {
  deleteMoment,
  getMoments,
  patchMoment,
  postMoment,
} from '../api/moment'
import { Loadable } from '../types/Loadable'
import { Moment } from '../types/Moment'

const initialState: Loadable<Moment[]> = {
  data: [],
  status: 'idle',
}

const momentsSlice = createSlice<
  Loadable<Moment[]>,
  SliceCaseReducers<Loadable<Moment[]>>
>({
  name: 'moments',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.data?.push(payload)
    },
    set: (_prevState, { payload }) => {
      return {
        data: payload,
        status: 'succeeded',
      }
    },
    clean: () => {
      return initialState
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMoments.pending, state => {
      state.status = 'loading'
    })
    builder.addCase(fetchMoments.fulfilled, (state, { payload }) => {
      state.data = payload
      state.status = 'succeeded'
    })
    builder.addCase(fetchMoments.rejected, state => {
      state.status = 'failed'
    })
    builder.addCase(createMoment.pending, state => {
      state.status = 'loading'
    })
    builder.addCase(createMoment.fulfilled, (state, { payload }) => {
      state.data?.push(payload)
      state.status = 'succeeded'
    })
    builder.addCase(createMoment.rejected, state => {
      state.status = 'failed'
    })
    builder.addCase(deleteMomentThunk.pending, state => {
      state.status = 'loading'
    })
    builder.addCase(deleteMomentThunk.fulfilled, (state, { payload }) => {
      state.data = state.data?.filter(moment => moment.id !== payload)
      state.status = 'succeeded'
    })
    builder.addCase(deleteMomentThunk.rejected, state => {
      state.status = 'failed'
    })
    builder.addCase(updateMomentThunk.pending, state => {
      state.status = 'loading'
    })
    builder.addCase(updateMomentThunk.fulfilled, (state, { payload }) => {
      state.data = state.data?.map(moment =>
        moment.id === payload.id ? payload : moment,
      )
      state.status = 'succeeded'
    })
    builder.addCase(updateMomentThunk.rejected, state => {
      state.status = 'failed'
    })
  },
})

export const fetchMoments = createAsyncThunk('moments/set', async () => {
  const response = await getMoments()
  return response
})

export const createMoment = createAsyncThunk(
  'moments/add',
  async (moment: Moment) => {
    const response = await postMoment(moment)
    return response
  },
)

export const deleteMomentThunk = createAsyncThunk(
  'moments/delete',
  async (id: string) => {
    const response = await deleteMoment(id)
    return response
  },
)

export const updateMomentThunk = createAsyncThunk(
  'moments/update',
  async (moment: Moment) => {
    const response = await patchMoment(moment)
    return response
  },
)

export const { add, clean, set } = momentsSlice.actions
export default momentsSlice.reducer
