"use client";
import React, { useEffect, useState } from "react";
import FAQItem from "./FAQItem";
import { getFAQs } from "../../lib/faq"; 
import FAQSkeleton from "../ui/FAQSkeleton";

function FAQ() {
  const [faqs, setFaqs] = useState<FAQType[] | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    const fetchFAQs = async () => {
      const data = await getFAQs();
      setFaqs(data);
    };
    fetchFAQs();
  }, []);

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
