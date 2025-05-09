/** @format */

// Subscriptions.tsx
import React from "react";
import SubscriptionCard from "../../components/SubscriptionCard";
import type { SubscriptionPackage } from "@/types/servece";
import Titile from "../../components/Titile";
const Subscriptions = ({
  subscriptions,
}: {
  subscriptions: SubscriptionPackage[];
}) => {
  return (
    <section className="bg-[#f9fdfc] py-16 px-4 md:px-12 lg:px-24 text-gray-800">
      <Titile className="mb-12 pb-10 m-auto w-fit">الباقات</Titile>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {subscriptions.map((sub, index) => {
          let tagColor = "",
            buttonColor = "";
          switch (index) {
            case 0:
              tagColor = "bg-[#5cb85c]";
              buttonColor = "bg-white border text-black hover:bg-gray-100";
              break;
            case 1:
              tagColor = "bg-[#f65d0e]";
              buttonColor = "bg-[#ff5722] text-white hover:opacity-90";
              break;
            case 2:
              tagColor = "bg-[#9c27b0]";
              buttonColor = "bg-white border text-black hover:bg-gray-100";
              break;
          }

          return (
            <SubscriptionCard
              key={index}
              {...{ ...sub, tagColor, buttonColor }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Subscriptions;
