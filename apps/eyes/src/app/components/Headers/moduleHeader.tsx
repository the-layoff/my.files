import React, { ReactNode } from "react";

export type HeadingTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export interface ComponentProps {
	headerTag: HeadingTagType;
	headerContent: string;
	primary: boolean | null;
	center?: boolean;
	children?: ReactNode;
}

const getSizeClasses = (type: string) => {
	switch (type) {
		case "h1": {
			return "mf-px-4 mf-py-2.5";
		}
		case "h2": {
			return "mf-px-6 mf-py-3";
		}
		case "h3": {
			return "mf-px-6 mf-py-3";
		}
		default: {
			return "mf-px-5 mf-py-2.5";
		}
	}
};

const ModuleHeader: React.FC<ComponentProps> = ({
	headerTag,
	headerContent,
	primary = false,
	center = false,
	children,
}: ComponentProps): JSX.Element | React.ReactElement => {
	const CustomHeader = `${headerTag}` as keyof JSX.IntrinsicElements;
	const moduleClassNames =
		"mf-border-white dark:mf-text-gold" +
		`${
			primary
				? " mf-text-bubble-gum mf-border-midnight"
				: "mf-text-black "
		}` +
		`${center ? "mf-text-center" : "mf-text-left "}`;

	return (
		<header className={getSizeClasses(CustomHeader)}>
			<CustomHeader data-testid='header' className={moduleClassNames}>
				{headerContent} {children}
			</CustomHeader>
		</header>
	);
};

export default ModuleHeader;
