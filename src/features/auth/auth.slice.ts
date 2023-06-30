import { createSlice } from "@reduxjs/toolkit"
import { createAppAsyncThunk } from "common/utils/create-app-async-thunk"
import { authAPI } from "./auth.api"
import { ResultCode } from "common/enums/enums"

const initialState = { isLoggedIn: false }

// const signIn = createAppAsyncThunk<any, any>
// 	('auth/signIn', async (arg, { rejectWithValue }) => {
// 		const res = await authAPI.login(arg)
// 		if (res.data.resultCode === ResultCode.OK) {
// 			return { isLoggedIn: true }
// 		} else {
// 			const isShowError = !res.data.fieldsErrors.length
// 			return rejectWithValue({ data: res.data, showGlobalError: isShowError })
// 		}
// 	})

const signUp = createAppAsyncThunk<any, any>
	('auth/signUp', async (arg, { rejectWithValue }) => {
		// const res = await authAPI.register(arg)
		// if (res.data.resultCode === ResultCode.OK) {
		// 	return { isLoggedIn: true }
		// } else {
		// 	const isShowError = !res.data.fieldsErrors.length
		// 	return rejectWithValue({ data: res.data, showGlobalError: isShowError })
		// }
	})


const slice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			// .addCase(signIn.fulfilled, (state, action) => {
			// 	state.isLoggedIn = action.payload.isLoggedIn
			// })
			.addCase(signUp.fulfilled, (state, action) => {
				state.isLoggedIn = action.payload.isLoggedIn
			})
		// .addCase(logout.fulfilled, (state, action) => {
		// 	state.isLoggedIn = action.payload.isLoggedIn
		// })
		// .addCase(initializeApp.fulfilled, (state, action) => {
		// 	state.isLoggedIn = action.payload.isLoggedIn
		// })
	}
})

export const authReducer = slice.reducer
export const authActions = slice.actions
export const authThunks = { signUp }