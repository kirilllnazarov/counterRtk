import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: "counter",
	initialState: {
		incValue: 0 as number,
		maxValue: 999 as number,
	},
	reducers: (create) => ({
		increment: create.reducer((state) => {
			state.incValue += 1;
		}),

		reset: create.reducer((state) => {
			(state.incValue = 0), (state.maxValue = 0);
		}),

		setStartValue: create.reducer<{ startValue: number }>((state, action) => {
			state.incValue = action.payload.startValue;
		}),

		setMaxValue: create.reducer<{ maxValue: number }>((state, action) => {
			state.maxValue = action.payload.maxValue;
		}),
	}),
	selectors: {
		selectStartValue: (state) => state.incValue,
		selectMaxValue: (state) => state.maxValue,
	},
});

export const counterReducer = counterSlice.reducer;
export const { increment, reset, setStartValue, setMaxValue } = counterSlice.actions;
export const { selectStartValue, selectMaxValue } = counterSlice.selectors;
