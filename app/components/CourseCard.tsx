"use client";
import { CourseCardInfo } from "@/types/course";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { LocalizedField } from "@/types"; 
import { useLocale } from "next-intl";
type Props = {
  card: CourseCardInfo;
  id: string;
};
export default function CourseCard({ card, id }: Props) {
  const locale = useLocale() as keyof LocalizedField;
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <Link href={`/courses/${id}`}>
        <div className="relative w-full aspect-[2/1]">
          <Image
            src={card?.image || "/Rectangle.png"}
            alt={card?.title[locale]}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </Link>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-semibold">{card?.title[locale]}</h3>
        <p className="text-sm text-gray-600">
          {card?.short_description[locale]}
        </p>

        <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
          <Clock className="w-4 h-4" />
          <span>{(card?.duration && card?.duration[locale]) ?? ""}</span>
        </div>

        <Link href={`/courses/${id}`}>
          <button className="bg-blue-600 text-white text-sm font-medium w-full mt-2 py-2 rounded-lg hover:bg-blue-700">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
