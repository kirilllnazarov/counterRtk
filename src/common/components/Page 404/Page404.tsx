import { useNavigate } from "react-router-dom";
import { UniversalButton } from "../UneversalButton";
import s from "./Page404.module.css";
import { PATH } from "../Router/Router";

export const Page404 = () => {
	const navigate = useNavigate()

function onClickHandler () {
	navigate(PATH.Display)
}
	return (
		<div className={s.errPage}>
			<h1 className={s.title}>404</h1>
			<h2 className={s.subTitle}>page not found</h2>
			<UniversalButton onClick={onClickHandler} className={s.button}>Back to the counter</UniversalButton>
		</div>
	);
};
