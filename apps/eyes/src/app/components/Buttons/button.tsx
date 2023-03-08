import React from "react";

const buttonPrimary = "mf-bg-black mf-text-purple mf-rounded";

const buttonSecondary = "mf-bg-purple f-text-tahiti mf-rounded-lg";

const buttonPill =
	"mf-rounded-full mf-border-dashed mf-bg-stone-600 mf-border mf-px-5 mf-py-1 mf-max-w-100%";

const buttonDefault =
	"mf-h-8 mf-w-100 mf-px-8 mf-font-sans mf-font-normal hover:mf-translate-x-1 mf-transition-all transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) transition-duration: 150ms ";

const getButtonClasses = (type: string) => {
	switch (type) {
		case "primary": {
			return `${buttonDefault} ${buttonPrimary}`;
		}
		case "secondary": {
			return `${buttonDefault} ${buttonSecondary}`;
		}
		case "pill": {
			return `${buttonPill}`;
		}
		default: {
			return `${buttonDefault}`;
		}
	}
};

interface ButtonProps {
	type?: string;
	label: string;
}
const Button: React.FC<ButtonProps> = ({
	label,
	type = "",
}: ButtonProps): React.ReactElement => {
	return (
		<button
			className={getButtonClasses(type)}
			onClick={() => console.log(`Break the ${label}`)}
		>
			{label}
		</button>
	);
};

export default Button;
