"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  link: string;
}

const ServiceCard = ({ title, excerpt, imageUrl, link }: ServiceCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group overflow-hidden rounded-xl shadow hover:shadow-lg transition-all duration-300 border"
    >
      <div className="relative w-full h-52 md:h-64">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 space-y-2 relative">
        <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300 text-gray-800">
          {title}
        </h3>
        <p className="text-sm text-gray-600 pb-7">{excerpt}</p>
        <div
          className="
            absolute bottom-4 left-4
            flex items-center text-sm text-blue-600
            transform translate-y-6 opacity-0
            group-hover:translate-y-0 group-hover:opacity-100
            transition-all duration-300
          "
        >
          Read more <ArrowRight className="ml-1 w-4 h-4" />
        </div>
      </div>
    </a>
  );
};

export default ServiceCard;
