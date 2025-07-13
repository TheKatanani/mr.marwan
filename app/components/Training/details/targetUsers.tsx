import Container from "../../Container";
import Title from "../../Titile";
import TargetUserCard from "../../TargetUserCard"; 
import { TargetUsersType } from "@/types/course"; 
import { getLocale } from "next-intl/server";
import { LocalizedField } from "@/types";

const TargetUsers =async ({ data }: { data: TargetUsersType[] }) => {
  const locale = await getLocale() as keyof LocalizedField;
  return (
    <section
      id="about"
      className="w-full bg-gray-50 text-gray-900 py-16 flex items-center"
    >
      <Container className="w-full">
        <div className="w-full md:w-2/3 mx-auto text-center px-4 mb-12">
          <Title subTitle={"staticTexts.subTitle"}>{"staticTexts.title"}</Title>
        </div>
        <div className="w-full grid gap-8 md:grid-cols-4 text-center">
          {data.map((item, idx) => (
            <TargetUserCard
              key={idx} 
              title={item.title[locale]}
              description={item.description[locale]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TargetUsers;
