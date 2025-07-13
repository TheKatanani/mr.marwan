"use client";
import React, { useEffect, useState } from "react";
import FAQItem from "./FAQItem";
import FAQSkeleton from "../ui/FAQSkeleton";
import { FAQType } from "@/types/FAQ";

function FAQ({ faqs }: { faqs: FAQType[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const toggle = (id: string) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  if (!faqs) return <FAQSkeleton />;

  return (
    <div className="space-y-4 text-right w-full min-h-100">
      {faqs.map((item, index) => (
        <FAQItem
          key={item.id}
          activeId={activeId}
          index={index}
          item={item}
          toggle={toggle}
        />
      ))}
    </div>
  );
}

export default FAQ;
