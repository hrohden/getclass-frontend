import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getMomentById } from '../api/moment'
import { Loadable } from '../types/Loadable'
import { Moment } from '../types/Moment'

const initialState: Loadable<Moment> = {
  status: 'idle',
  data: {
    id: '',
    title: '',
    description: '',
    isFavorite: false,
  },
}

const momentSlice = createSlice({
  name: 'moment',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(selectMomentByIdThunk.pending, state => {
      state.status = 'loading'
    })
    builder.addCase(selectMomentByIdThunk.fulfilled, (state, { payload }) => {
      state.data = payload
      state.status = 'succeeded'
    })
    builder.addCase(selectMomentByIdThunk.rejected, state => {
      state.status = 'failed'
    })
  },
})

export const selectMomentByIdThunk = createAsyncThunk(
  'moments/selectById',
  async (id: string) => {
    const response = await getMomentById(id)
    return response
  },
)

export default momentSlice.reducer
