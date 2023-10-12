import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/app/appStore'

export interface IEmailPasswordUser {
  email: string
  userName: string
  password: string
}
export interface IEmailPassword {
  email: string
  password: string
}

export interface IInitialState {
  user: string | null
  isLoading: boolean
  error: string | null
  token: string | null
  message: string
}

const initialState: IInitialState = {
  user: '',
  isLoading: false,
  error: '',
  token: '',
  message: '',
}

export interface IAuthResponse {}





const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem('token')
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem('user')
    },
    logout: (state, action) => {
      state.token = null
      localStorage.clear()
    },
  },
})

export const { addToken, addUser, logout } = authSlice.actions
export default authSlice.reducer
