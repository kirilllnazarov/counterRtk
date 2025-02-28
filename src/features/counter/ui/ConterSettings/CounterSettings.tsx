import { useNavigate } from "react-router-dom";
import { changeTheme, selectThemeMode } from "../../../../app/app.Slice";
import { PATH } from "../../../../common/components/Router/Router";
import { UniversalInput } from "../../../../common/components/UniversalInput";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { selectMaxValue, selectStartValue, setMaxValue, setStartValue } from "../../model/counterSlice";
import s from "../Counter.module.css";
import type { ChangeEvent } from "react";

export const CounterSettings = () => {
	const theme = useAppSelector(selectThemeMode);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const startValue = useAppSelector(selectStartValue);
	const maxValue = useAppSelector(selectMaxValue);

	function changeThemeHandler() {
		dispatch(changeTheme());
	}

	function buttonHandler() {
		navigate(PATH.Display);
	}

	function setStartValues(e: ChangeEvent<HTMLInputElement>) {
		const value = Number(e.target.value);
		if (value >= 0) {
			dispatch(setStartValue({ startValue: value }));
		}
	}

	function setMaxValues(e: ChangeEvent<HTMLInputElement>) {
		const value = Number(e.target.value);
		if (value > 0) {
			dispatch(setMaxValue({ maxValue: value}));
		}
	}

	return (
		<div className={theme === "light" ? s.settingsLight : s.settingsDark}>
			<div onClick={changeThemeHandler} className={s.themeBtn}>
				{theme === "light" ? "⚫️" : "⚪️"}
			</div>

			<UniversalInput value={startValue} onChange={setStartValues} label={'Start value'}/>
			<UniversalInput value={maxValue} onChange={setMaxValues} label={'Max value'}/>

			<button onClick={buttonHandler}>disp</button>
		</div>
	);
};
