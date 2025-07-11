import React from "react";
import { FaRoad, FaLightbulb, FaWrench, FaHeart, FaChalkboardTeacher } from "react-icons/fa";
import Container from "./Container";
import { AboutFormData } from "@/types/about"; 
import CoreValueItem from "./CoreValueItem";
import { getLocale } from "next-intl/server";
import { LocalizedField } from "@/types";

const CoreValuesSection =async ({ data }: { data: AboutFormData }) => {
    const locale = await getLocale(); 
  return (
    <Container>
      <section className="custom-bg py-20  px-5 md:px-0">
        <div className="max-w-5xl space-y-14">
          <CoreValueItem
            icon={<FaRoad size={30} color={"#F1DD6E"}/>}
            title={data.journey?.title[locale as keyof LocalizedField] || ""}
            content={data.journey?.content[locale as keyof LocalizedField] || ""}
          />
          <CoreValueItem
            icon={<FaLightbulb size={30} color={"#F1DD6E"}/>}
            title={data.whyBuild?.title[locale as keyof LocalizedField] || ""}
            content={data.whyBuild?.content[locale as keyof LocalizedField] || ""}
          />
          <CoreValueItem
            icon={<FaWrench size={30} color={"#F1DD6E"}/>}
            title={data.howWeWork?.title[locale as keyof LocalizedField] || ""}
            content={data.howWeWork?.content[locale as keyof LocalizedField] || ""}
          />
          <CoreValueItem
            icon={<FaHeart size={30} color={"#F1DD6E"}/>}
            title={data.messageInLife?.title[locale as keyof LocalizedField] || ""}
            content={data.messageInLife?.content[locale as keyof LocalizedField] || ""}
          />
          <CoreValueItem
            icon={<FaChalkboardTeacher size={30} color={"#F1DD6E"}/>}
            title={data.messageInTraining?.title[locale as keyof LocalizedField] || ""}
            content={data.messageInTraining?.content[locale as keyof LocalizedField] || ""}
          />
        </div>
      </section>
    </Container>
  );
};

export default CoreValuesSection;
