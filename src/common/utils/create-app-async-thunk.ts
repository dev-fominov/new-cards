import { AppDispatchType, AppRootStateType } from 'app/store'
import { createAsyncThunk } from '@reduxjs/toolkit'

/**
 * A utility function that adapts `createAsyncThunk` to use the correct types for the app.
 *
 * @function
 * @template TRequestPayload - The type of the payload for the request.
 * @template TResponse - The type of the response.
 * @template TThunkApiConfig - The type of the `thunkAPI`.
 * @returns {AsyncThunk<TResponse, TRequestPayload, TThunkApiConfig>} The async thunk.
 */

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppRootStateType
  dispatch: AppDispatchType
  rejectValue: null | RejectValueType
}>()

export type RejectValueType = {
  data: any
  showGlobalError: boolean
}
