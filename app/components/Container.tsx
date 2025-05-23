// components/Container.tsx

import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`w-full max-w-7xl mx-auto sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
