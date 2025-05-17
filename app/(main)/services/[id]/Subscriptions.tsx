/** @format */

import React from "react";
import type { SubscriptionPackage } from "@/types/servece";
import SubscriptionCard from "@/app/components/SubscriptionCard";
import Title from "@/app/components/Titile";
import Container from "@/app/components/Container";
const Subscriptions = ({
  subscriptions,
}: {
  subscriptions: SubscriptionPackage[];
}) => {
  return (
    <section className="bg-[#f9fdfc] py-16 px-4 md:px-6 xl:px-18 text-gray-800">
      <Container>
        <Title className="mb-12 pb-10 m-auto w-fit">الباقات</Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10">
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
      </Container>
    </section>
  );
};

export default Subscriptions;
