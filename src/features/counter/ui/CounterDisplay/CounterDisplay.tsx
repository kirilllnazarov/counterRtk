import { useNavigate } from "react-router-dom";
import { changeTheme, selectThemeMode } from "../../../../app/app.Slice";
import { PATH } from "../../../../common/components/Router/Router";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import { increment, reset, selectStartValue } from "../../model/counterSlice";
import s from "./CounterDisplay.module.css";

export const CounterDisplay = () => {
	const value = useAppSelector(selectStartValue);
	const theme = useAppSelector(selectThemeMode);

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	function incHandler() {
		dispatch(increment());
	}

	function changeThemeHandler() {
		dispatch(changeTheme());
	}

	function setHandler() {
		navigate(PATH.Settings);
		dispatch(reset())
	}
	return (
		<div className={theme === "light" ? s.displayLight : s.displayDark}>
			<div onClick={changeThemeHandler} className={s.themeBtn}>
				{theme === "light" ? "⚫️" : "⚪️"}
			</div>

			<div className={s.value}>{value}</div>

			<div className={s.buttons}>
				<button onClick={incHandler}>inc</button>
				<button onClick={setHandler}>set</button>
			</div>
		</div>
	);
};
