import { createSlice } from '@reduxjs/toolkit'

import { AddedUserType, SignInType, SignUpType, authAPI } from './auth.api'

import { createAppAsyncThunk } from 'common/utils/create-app-async-thunk'

const initialState = { isLoggedIn: false }

const signIn = createAppAsyncThunk<any, SignInType>(
  'auth/signIn',
  async (arg, { rejectWithValue }) => {
    const res = await authAPI.signIn(arg)
    // if (res.data.resultCode === ResultCode.OK) {

    return { isLoggedIn: true }
    // } else {
    // 	const isShowError = !res.data.fieldsErrors.length
    // 	return rejectWithValue({ data: res.data, showGlobalError: isShowError })
    // }
  }
)

const signUp = createAppAsyncThunk<AddedUserType, SignUpType>(
  'auth/signUp',
  async (arg, { rejectWithValue }) => {
    const res = await authAPI.signUp(arg)
    const error = res.data.error

    if (!error) {
      return { addedUser: res.data.addedUser, error: res.data.error }
    } else {
      return rejectWithValue({ data: res.data, showGlobalError: true })
    }
  }
)

const initializeApp = createAppAsyncThunk<{ isLoggedIn: boolean }, void>(
  'app/initializeApp',
  async (_, { dispatch, rejectWithValue }) => {
    const res = await authAPI.me()

    return { isLoggedIn: true }
  }
)

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        // redirect to signin page
      })
      .addCase(initializeApp.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn
      })
  },
})

export const authReducer = slice.reducer
export const authActions = slice.actions
export const authThunks = { signIn, signUp, initializeApp }
