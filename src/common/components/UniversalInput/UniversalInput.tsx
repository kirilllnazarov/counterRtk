import type { InputHTMLAttributes } from "react";
import s from './UniversalInput.module.css'

type UniversalInputType = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
};

export const UniversalInput = ({ label, value, onChange, ...props }: UniversalInputType) => {
	return (
		<fieldset className={s.fieldset}>
			<legend>{label}</legend>
			<input type={"number"} value={value} onChange={onChange} {...props} />
		</fieldset>
	);
};
