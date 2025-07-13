import React from "react";
import { FAQType } from "@/types/FAQ";
import { useLocale } from "next-intl";
import { LocalizedField } from "@/types";

type Props = {
  item: FAQType;
  index: number;
  activeId: string | null;
  toggle: (id: string) => void;
};

export default function FAQItem({ item, index, activeId, toggle }: Props) {
  const locale = useLocale();

  return (
    <div className="border-2 border-[#1979eb] rounded-md mb-4">
      <div className="flex justify-between">
        <div className="flex-1 p-4 flex items-center gap-3">
          <span className="text-sm text-gray-500">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-medium">
            {item.question && item.question[locale as keyof LocalizedField]}
          </h3>
        </div>
        <button
          onClick={() => toggle(item.id!)}
          className="bg-[#1979eb] text-white px-4"
        >
          {activeId === item.id ? "-" : "+"}
        </button>
      </div>
      {activeId === item.id && (
        <p className="p-4 text-gray-600 whitespace-pre-wrap">
          {item.answer && item.answer[locale as keyof LocalizedField]}
        </p>
      )}
    </div>
  );
}
