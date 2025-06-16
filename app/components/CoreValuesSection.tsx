import React from "react";
import { FaRoad, FaLightbulb, FaWrench, FaHeart, FaChalkboardTeacher } from "react-icons/fa";
import Container from "./Container";
import { AboutFormData } from "@/types/about"; 
import CoreValueItem from "./CoreValueItem";

const CoreValuesSection = ({ data }: { data: AboutFormData }) => {
  return (
    <Container>
      <section className="custom-bg py-20  px-5 md:px-0">
        <div className="max-w-5xl space-y-14">
          <CoreValueItem
            icon={<FaRoad size={30} color={"#F1DD6E"}/>}
            title={data.journey?.title || ""}
            content={data.journey?.content || ""}
          />
          <CoreValueItem
            icon={<FaLightbulb size={30} color={"#F1DD6E"}/>}
            title={data.whyBuild?.title || ""}
            content={data.whyBuild?.content || ""}
          />
          <CoreValueItem
            icon={<FaWrench size={30} color={"#F1DD6E"}/>}
            title={data.howWeWork?.title || ""}
            content={data.howWeWork?.content || ""}
          />
          <CoreValueItem
            icon={<FaHeart size={30} color={"#F1DD6E"}/>}
            title={data.messageInLife?.title || ""}
            content={data.messageInLife?.content || ""}
          />
          <CoreValueItem
            icon={<FaChalkboardTeacher size={30} color={"#F1DD6E"}/>}
            title={data.messageInTraining?.title || ""}
            content={data.messageInTraining?.content || ""}
          />
        </div>
      </section>
    </Container>
  );
};

export default CoreValuesSection;
