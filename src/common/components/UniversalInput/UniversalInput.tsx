import type { ChangeEvent, InputHTMLAttributes } from "react";

type UniversalInputType = InputHTMLAttributes<HTMLInputElement>;

export const UniversalInput = ({ value, onChange, ...props }: UniversalInputType) => {

	function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.currentTarget.value);
		onChange?.(event)
	}
	return <input type={"number"} value={value} onChange={onChangeHandler} {...props} />;
};
