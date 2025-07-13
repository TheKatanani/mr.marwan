import Image from "next/image";
import { Globe } from "lucide-react"; 
import { LocalizedField } from "@/types";
import { getLocale } from "next-intl/server";

interface Props {
  data: {
    title: LocalizedField;
    subtitle: LocalizedField;
    description: LocalizedField;
    image: string;
  };
}

export default async function AboutTraining({ data }: Props) {
  const locale = (await getLocale()) as keyof LocalizedField;

  return (
    <section className="flex flex-col md:flex-row items-start gap-10 max-w-6xl mx-auto py-16 px-4">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <div className="flex items-center gap-3 text-blue-600">
          <Globe size={28} />
          <div>
            <h2 className="text-xl font-semibold text-black">
              {data.title[locale]}
            </h2>
            <p className="text-sm text-gray-600">{data.subtitle[locale]}</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          {data.description[locale]}
        </p>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 relative">
        <Image
          src={data.image || "/trainingAbout.jpg"}
          alt="About Image"
          width={512}
          height={300}
          className="rounded-lg shadow-md w-[600px] object-cover h-[320px]"
        />
        <div className="absolute bottom-4 right-4 bg-yellow-400 text-white text-sm font-semibold px-4 py-2 rounded shadow">
          190+
          <br />
          Member States
        </div>
      </div>
    </section>
  );
}
