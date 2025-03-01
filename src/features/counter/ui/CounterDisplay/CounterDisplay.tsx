import { useNavigate, useSearchParams } from "react-router-dom";
import { changeTheme, selectThemeMode } from "../../../../app/app.Slice";
import { PATH } from "../../../../common/components/Router/Router";
import { UniversalButton } from "../../../../common/components/UneversalButton";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { increment, reset, selectMaxValue, selectStartValue } from "../../model/counterSlice";
import s from "../Counter.module.css";
import { useEffect } from "react";
import { useCounterSettings } from "../../../../common/hooks/useCounterSettings";

export const CounterDisplay = () => {
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

	// function incHandler() {
	// 	if (incValue < maxValue) {
	// 		dispatch(increment());
	// 	}
	// }

	// function setButtonHandler() {
	// 	navigate(PATH.Settings);
	// 	dispatch(reset());
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
		incHandler,
		setButtonHandler,
	  } = useCounterSettings();
	  
	return (
		<div className={theme === "light" ? s.displayLight : s.displayDark}>
			<div onClick={changeThemeHandler} className={s.themeBtn}>
				{theme === "light" ? "⚫️" : "⚪️"}
			</div>

			<div className={incValue === maxValue ? s.valueRed : s.value}>{incValue}</div>

			<div className={s.buttons}>
				<UniversalButton className={s.button} onClick={incHandler} disabled={incValue === maxValue}>
					increment
				</UniversalButton>
				<UniversalButton className={s.button} onClick={setButtonHandler}>
					settings
				</UniversalButton>
			</div>
		</div>
	);
};
