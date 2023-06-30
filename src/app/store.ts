import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import { authReducer } from "features/auth/auth.slice";


const rootReducer = combineReducers({
	auth: authReducer
})

// export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AppRootActionsType>
export type AppRootActionsType = any


// @ts-ignore
window.store = store