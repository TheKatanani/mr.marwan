import {
  ShieldCheck,
  Globe,
  Award,
  BadgeCheck,
} from "lucide-react"; // Or use any icon library you prefer
import { getTranslations } from "next-intl/server";

const items = [
  {
    icon: <BadgeCheck className="w-8 h-8 text-blue-400" />,
    label: "FAA Certified",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
    label: "Safety First",
  },
  {
    icon: <Award className="w-8 h-8 text-blue-400" />,
    label: "Excellence Award",
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    label: "ICAO Standards",
  },
];

export default async function TrustedByAuthorities() {
  const t = await getTranslations("trusted");
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-10">
          {t("title")}
        </h2>
        <div className="flex flex-wrap justify-center gap-10 items-center">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              {item.icon}
              <p className="text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
