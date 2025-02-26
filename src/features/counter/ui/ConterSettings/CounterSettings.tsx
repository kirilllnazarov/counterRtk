import { useNavigate } from "react-router-dom";
import { changeTheme, selectThemeMode } from "../../../../app/app.Slice";
import { PATH } from "../../../../common/components/Router/Router";
import { UniversalInput } from "../../../../common/components/UniversalInput";
import { useAppDispatch, useAppSelector } from "../../../../common/hooks";
import s from "./CounterSettings.module.css";
import { selectMaxValue, selectStartValue } from "../../model/counterSlice";

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

	return (
		<div className={theme === "light" ? s.settingsLight : s.settingsDark}>
			<div onClick={changeThemeHandler} className={s.themeBtn}>
				{theme === "light" ? "⚫️" : "⚪️"}
			</div>

			<UniversalInput value={startValue} onChange={() => {}} />
			<UniversalInput value={maxValue} onChange={() => {}} />

			<button onClick={buttonHandler}>disp</button>
		</div>
	);
};
