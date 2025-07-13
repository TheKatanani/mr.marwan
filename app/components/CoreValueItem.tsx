import React from "react";

const CoreValueItem = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 relative z-10">
      <span className="w-14 h-14 rounded-full absolute left-0 translate-x-2 translate-y-[-25px] bg-[#1979ea] opacity-50 z-0" />
      <span className="relative">{icon}</span>
    </div>
    <div>
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-[17px]">{content}</p>
    </div>
  </div>
);

export default CoreValueItem;
