import {
  SliceCaseReducers,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import { postAuthentication } from '../api/authentication'
import { Identity } from '../types/AppStore'

const initialState: Identity = {
  isAuthenticated: false,
}

const identitySlice = createSlice<Identity, SliceCaseReducers<Identity>>({
  name: 'identity',
  initialState,
  reducers: {
    login: (_prevState, { payload }) => {
      return {
        isAuthenticated: true,
        userName: payload.userName,
        accessToken: payload.accessToken,
      }
    },
    logout: () => {
      return initialState
    },
  },
  extraReducers: builder => {
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.isAuthenticated = true
      state.authentication = payload
    })
  },
})

export const loginThunk = createAsyncThunk(
  'identity/login',
  async (loginForm: LoginFormInputs) => {
    const response = await postAuthentication(loginForm)
    return response
  },
)

export const { login, logout } = identitySlice.actions
export default identitySlice.reducer
