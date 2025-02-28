import type { InputHTMLAttributes } from "react";

type UniversalInputType = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
};

export const UniversalInput = ({ label, value, onChange, ...props }: UniversalInputType) => {
	return (
		<fieldset>
			<legend>{label}</legend>
			<input type={"number"} value={value} onChange={onChange} {...props} />
		</fieldset>
	);
};
