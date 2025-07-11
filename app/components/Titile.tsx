/** @format */

import React, { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;  
  subTitle?: string;
  className?: string;
}

const Title = ({ className, children, subTitle }: ContainerProps) => {
  return (
    <div className={`relative ${className}`}> 
      <h2 className="text-4xl font-bold text-black z-1 relative p-3">{children}</h2>
      <p className="text-gray-600 text-lg w-lg m-auto">{subTitle}</p>
    </div>
  );
};

export default Title;
