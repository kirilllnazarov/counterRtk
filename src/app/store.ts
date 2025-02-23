import { configureStore, type ThunkDispatch, type UnknownAction } from "@reduxjs/toolkit";
import { appReducer, appSlice } from "./app.Slice";
import { counterReducer, counterSlice } from "../features/counter/model/counterSlice";

export const store = configureStore({
	reducer: {
		[appSlice.name]: appReducer,
		[counterSlice.name]: counterReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
