import { createSlice } from "@reduxjs/toolkit";

export type ThemeMode = "dark" | "light";

export const appSlice = createSlice({
	name: "app",
	initialState: {
		themeMode: "light" as ThemeMode,
	},
	reducers: {
		increment: (state, action) => state + action.payload,
	},
	selectors: {},
});

export const appReducer = appSlice.reducer;
export const {} = appSlice.actions;
export const {} = appSlice.selectors;
