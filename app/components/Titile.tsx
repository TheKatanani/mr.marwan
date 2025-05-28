/** @format */

import React, { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Title = ({ className, children }: ContainerProps) => {
  return (
    <div className={`relative ${className}`}>
      <span className="bg-gradient-to-br w-[184] h-[165] from-[#e3f9ff] to-white rounded-full absolute top-[-80] right-[-90] z-0"></span>
      <h2 className="text-5xl font-bold text-[#048ff8] z-1 relative">{children}</h2>
    </div>
  );
};

export default Title;
