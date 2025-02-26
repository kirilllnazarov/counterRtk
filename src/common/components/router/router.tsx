import { Navigate, Route, Routes } from "react-router-dom";
import { CounterSettings } from "../../../features/counter/ui/ConterSettings/CounterSettings";
import { CounterDisplay } from "../../../features/counter/ui/CounterDisplay/CounterDisplay";
import { Page404 } from "../Page 404/Page404";

export const PATH = {
	Display: "/counter_display",
	Settings: "/counter_settings",
	Error: "*",
} as const;

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to={PATH.Display} />} />
			<Route path={PATH.Display} element={<CounterDisplay />} />
			<Route path={PATH.Settings} element={<CounterSettings />} />
			<Route path={PATH.Error} element={<Page404 />} />
		</Routes>
	);
};
