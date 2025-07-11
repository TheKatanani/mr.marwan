import { ReactNode } from "react";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  main: string;
  sub: string;
  bg?: string;
  color?: string;
}

export default function InfoCard({
  icon,
  title,
  main,
  sub,
  bg = "bg-white",
  color = "text-black",
}: InfoCardProps) {
  return (
    <div className={`p-4 rounded-lg shadow-md text-center ${bg}`}>
      <div className={`text-3xl mb-2 mx-auto  w-fit ${color}`}>{icon}</div>
      <h4 className="font-semibold text-sm text-gray-600">{title}</h4>
      <p className={`font-bold text-lg mt-1 ${color}`}>{main}</p>
      <p className="text-sm text-gray-500">{sub}</p>
    </div>
  );
}
