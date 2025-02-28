import { useNavigate } from "react-router-dom";
import { changeTheme, selectThemeMode } from "../../../../app/app.Slice";
import { PATH } from "../../../../common/components/Router/Router";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { increment, reset, selectMaxValue, selectStartValue } from "../../model/counterSlice";
import s from "../Counter.module.css";

export const CounterDisplay = () => {
	const value = useAppSelector(selectStartValue);
	const theme = useAppSelector(selectThemeMode);
	const maxValue = useAppSelector(selectMaxValue);
	const incValue = useAppSelector(selectStartValue);

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	function incHandler() {
		if (incValue < maxValue) {
			dispatch(increment());
		}
	}

	function changeThemeHandler() {
		dispatch(changeTheme());
	}

	function setHandler() {
		navigate(PATH.Settings);
		dispatch(reset());
	}
	return (
		<div className={theme === "light" ? s.displayLight : s.displayDark}>
			<div onClick={changeThemeHandler} className={s.themeBtn}>
				{theme === "light" ? "⚫️" : "⚪️"}
			</div>

			<div className={s.value}>{value}</div>

			<div className={s.buttons}>
				<button onClick={incHandler} disabled={incValue === maxValue}>
					inc
				</button>
				<button onClick={setHandler}>set</button>
			</div>
		</div>
	);
};
