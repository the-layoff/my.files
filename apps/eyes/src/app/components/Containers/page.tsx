import React, { ReactNode } from 'react';

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
      className="container mf-grid mf-min-h-screen mf-min-w-full mf-grid-cols-2 mf-gap-0"
    >
      {children}
    </div>
  );
};

export default PageContainer;
