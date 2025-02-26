import type { ButtonHTMLAttributes } from "react";

type UneversalButtonType = ButtonHTMLAttributes<HTMLButtonElement>

export const UniversalButton = ({children, onClick, disabled, ...rest}: UneversalButtonType) => {

	return <button onClick={onClick} disabled={disabled} {...rest}>{children}</button>;
};
