import React, { ReactNode } from "react";

export type HeadingTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export interface ComponentProps {
	headerTag: HeadingTagType;
	headerContent: string;
	primary: boolean | null;
	children?: ReactNode;
}

// const MODULE_HEADER_CLASSES = 'mf-text-black dark:mf-text-white ';

const getSizeClasses = (type: string) => {
	switch (type) {
		case "h1": {
			return "px-4 py-2.5";
		}
		case "h2": {
			return "px-6 py-3";
		}
		case "h3": {
			return "px-6 py-3";
		}
		default: {
			return "px-5 py-2.5";
		}
	}
};

// const getModeClasses = (primary: boolean) =>
//   primary ? 'text-white bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700'
// : 'text-slate-700 bg-transparent border-slate-700 dark:text-white dark:border-white';

const ModuleHeader: React.FC<ComponentProps> = ({
	headerTag,
	headerContent,
	primary,
	children,
}: ComponentProps): JSX.Element | React.ReactElement => {
	const CustomHeader = `${headerTag}` as keyof JSX.IntrinsicElements;
	const moduleClassNames =
		"   mf-text-black mf-border-white dark:mf-text-gold" +
		`${primary ? "mf-border-purple" : "mf-border-gold"}`;

	return (
		<header className={getSizeClasses(CustomHeader)}>
			<CustomHeader data-testid='header' className={moduleClassNames}>
				{headerContent} {children}
			</CustomHeader>
		</header>
	);
};

export default ModuleHeader;
