import InfoCard from "./InfoCard";
import { Clock, DollarSign, BarChart4, Laptop, BadgeCheck } from "lucide-react";
import { CourseFeatures } from "@/types/course";

// Order must match the visual structure
const iconConfigs = [
  {
    key: "duration",
    icon: <Clock />,
    bg: "bg-white",
    color: "text-[#1979EB]",
  },
  {
    key: "investment",
    icon: <DollarSign />,
    bg: "bg-yellow-50",
    color: "text-[#EED869]",
  },
  {
    key: "level",
    icon: <BarChart4 />,
    bg: "bg-green-100",
    color: "text-[#16A34A]",
  },
  {
    key: "trainingMode",
    icon: <Laptop />,
    bg: "bg-purple-100",
    color: "text-[#9333EA]",
  },
  {
    key: "certification",
    icon: <BadgeCheck />,
    bg: "bg-orange-100",
    color: "text-orange-400",
  },
];

function splitMainSub(text: string) {
  const [main, ...rest] = text.split(" ");
  return {
    main,
    sub: rest.join(" "),
  };
}

export default function InfoCardsSection({ data }: { data: CourseFeatures }) {
  return (
    <section className="container text mx-auto px-2 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-gray-800">
      {iconConfigs.map(({ key, icon, bg, color }) => {
        const item = data[key as keyof CourseFeatures];
        const localizedTitle = item?.title?.en ?? "";
        const localizedDesc = item?.description?.en ?? "";
        const { main, sub } = splitMainSub(localizedDesc || "");

        return (
          <InfoCard
            key={key}
            icon={icon}
            title={localizedTitle}
            main={main}
            sub={sub}
            bg={bg}
            color={color}
          />
        );
      })}
    </section>
  );
}
