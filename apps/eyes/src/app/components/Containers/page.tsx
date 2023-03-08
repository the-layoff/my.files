import React, { ReactNode } from "react";

export interface ContainerProps {
	id?: string;
	children?: ReactNode;
}

const PageContainer: React.FC<ContainerProps> = ({
	id,
	children,
}: ContainerProps): JSX.Element => {
	return (
		<div
			id={id ?? undefined}
			className='mf-grid mf-min-h-screen mf-min-w-full mf-grid-cols-2 mf-gap-0 mf-w-0.5 container'
		>
			{children}
		</div>
	);
};

export default PageContainer;
