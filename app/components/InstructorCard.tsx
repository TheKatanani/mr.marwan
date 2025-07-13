import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  name: string;
  role: string;
  avatar: string;
  details: {
    icon: ReactNode;
    text: string;
  }[];
};

export default function InstructorCard({ name, role, avatar, details }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 text-center">
      <div className="relative w-20 h-20 mx-auto mb-4">
        <Image
          src={avatar}
          alt={name}
          className="rounded-full object-cover"
          fill
        />
      </div>
      <h4 className="font-semibold text-lg">{name}</h4>
      <p className="text-sm text-gray-500">{role}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray-700 text-left max-w-xs mx-auto">
        {details.map((item, index) => (
          <li key={index} className="flex items-center justify-center gap-2">
            {item.icon}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
