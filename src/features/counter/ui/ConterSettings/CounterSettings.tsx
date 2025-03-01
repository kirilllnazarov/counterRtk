import { useEffect, type ChangeEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { changeTheme, selectThemeMode } from "../../../../app/app.Slice";
import { PATH } from "../../../../common/components/Router/Router";
import { UniversalButton } from "../../../../common/components/UneversalButton";
import { UniversalInput } from "../../../../common/components/UniversalInput";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { selectMaxValue, selectStartValue, setMaxValue, setStartValue } from "../../model/counterSlice";
import s from "../Counter.module.css";
import { useCounterSettings } from "../../../../common/hooks/useCounterSettings";

export const CounterSettings = () => {
	// // selectors
	// const theme = useAppSelector(selectThemeMode);
	// const incValue = useAppSelector(selectStartValue);
	// const maxValue = useAppSelector(selectMaxValue);

	// //hooks
	// const navigate = useNavigate();
	// const dispatch = useAppDispatch();
	// const [_, setSearchParams] = useSearchParams();

	// function changeThemeHandler() {
	// 	dispatch(changeTheme());
	// }

	// function displayButtonHandler() {
	// 	navigate(PATH.Display);
	// }

	// function setStartValuesHandler(e: ChangeEvent<HTMLInputElement>) {
	// 	const value = Number(e.target.value);
	// 	if (value >= 0) {
	// 		dispatch(setStartValue({ startValue: value }));
	// 	}
	// }

	// function setMaxValuesHandler(e: ChangeEvent<HTMLInputElement>) {
	// 	const value = Number(e.target.value);
	// 	if (value > 0) {
	// 		dispatch(setMaxValue({ maxValue: value }));
	// 	}
	// }

	// // search params
	// useEffect(() => {
	// 	const params = {
	// 		start_value: incValue.toString(),
	// 		max_value: maxValue.toString(),
	// 		theme: theme.toString(),
	// 	};
	// 	setSearchParams(params);
	// }, [incValue, maxValue, theme]);

	const {
		theme,
		incValue,
		maxValue,
		changeThemeHandler,
		displayButtonHandler,
		setStartValuesHandler,
		setMaxValuesHandler,
	  } = useCounterSettings();

	return (
		<div className={theme === "light" ? s.settingsLight : s.settingsDark}>
			<div onClick={changeThemeHandler} className={s.themeBtn}>
				{theme === "light" ? "⚫️" : "⚪️"}
			</div>

			<UniversalInput value={incValue} onChange={setStartValuesHandler} label={"Start value"} />
			<UniversalInput value={maxValue} onChange={setMaxValuesHandler} label={"Max value"} />

			<div>{!maxValue && "Max value must be greater than 0!"}</div>
			<div>{maxValue === incValue && "Max value should not be equal to Start value!"}</div>
			<div>{maxValue < incValue && "Max value should not be more then Start value!"}</div>

			<UniversalButton className={s.button} onClick={displayButtonHandler} disabled={!maxValue && !incValue}>
				display
			</UniversalButton>
		</div>
	);
};
