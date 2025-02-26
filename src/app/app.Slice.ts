import { createSlice } from "@reduxjs/toolkit";

export type ThemeMode = "dark" | "light";

export const appSlice = createSlice({
	name: "app",

	initialState: {
		themeMode: "light" as ThemeMode,
	},

	reducers: (create) => ({
		changeTheme: create.reducer((state) => {
			state.themeMode = state.themeMode === "light" ? "dark" : "light";
		}),
	}),

	selectors: {
		selectThemeMode: (state) => state.themeMode,
	},
});

export const appReducer = appSlice.reducer;
export const { changeTheme } = appSlice.actions;
export const { selectThemeMode } = appSlice.selectors;
