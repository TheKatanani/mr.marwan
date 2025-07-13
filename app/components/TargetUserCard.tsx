import { Crosshair } from "lucide-react";
import React, { ReactNode } from "react";
interface Props {
  title: string;
  description: string;
}

export default function TargetUserCard({ title, description }: Props) {
  return (
    <div className="bg-white rounded-xl p-6 backdrop-blur-sm hover:bg-gray-50 transition text-center ">
      <div className="mb-4 flex justify-center ">
        <Crosshair className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold  text-black p-3">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
