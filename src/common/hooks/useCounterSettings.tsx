import { ChangeEvent, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppSelector } from "./useAppSelector";
import { selectThemeMode, changeTheme } from "../../app/app.Slice";
import {
	selectStartValue,
	selectMaxValue,
	increment,
	reset,
	setStartValue,
	setMaxValue,
} from "../../features/counter/model/counterSlice";
import { useAppDispatch } from "./useAppDispatch";
import { PATH } from "../components/Router";

export const useCounterSettings = () => {
	// Селекторы состояния
	const theme = useAppSelector(selectThemeMode);
	const incValue = useAppSelector(selectStartValue);
	const maxValue = useAppSelector(selectMaxValue);

	// Хуки для навигации и диспатча
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [, setSearchParams] = useSearchParams();

	// Функция для смены темы
	const changeThemeHandler = () => {
		dispatch(changeTheme());
	};

	// Функция для перехода на страницу отображения
	const displayButtonHandler = () => {
		navigate(PATH.Display);
	};

	// Функция для увеличения значения
	const incHandler = () => {
		if (incValue < maxValue) {
			dispatch(increment());
		}
	};

	// Функция для перехода на страницу настроек и сброса состояния
	const setButtonHandler = () => {
		navigate(PATH.Settings);
		dispatch(reset());
	};

	// Обработчик для установки стартового значения
	const setStartValuesHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		if (value >= 0) {
			dispatch(setStartValue({ startValue: value }));
		}
	};

	// Обработчик для установки максимального значения
	const setMaxValuesHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		if (value > 0) {
			dispatch(setMaxValue({ maxValue: value }));
		}
	};

	// Обновление query-параметров в URL при изменении значений
	useEffect(() => {
		const params = {
			start_value: incValue.toString(),
			max_value: maxValue.toString(),
			theme: theme.toString(),
		};
		setSearchParams(params);
	}, [incValue, maxValue, theme, setSearchParams]);

	return {
		theme,
		incValue,
		maxValue,
		changeThemeHandler,
		displayButtonHandler,
		incHandler,
		setButtonHandler,
		setStartValuesHandler,
		setMaxValuesHandler,
	};
};
