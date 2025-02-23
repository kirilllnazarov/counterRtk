import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: "counter",
	initialState: {

	},
	reducers: {
		increment: (state, action) => state + action.payload,
	},
	selectors: {},
});

export const counterReducer = counterSlice.reducer;
export const {} = counterSlice.actions;
export const {} = counterSlice.selectors;