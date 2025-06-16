/** @format */

import React from "react";
import Image from "next/image";
import { FaUserFriends, FaFlag, FaBookOpen } from "react-icons/fa";
import Container from "../Container";
import { fetchBookSection } from "@/app/lib/home/book";
import Link from "next/link";
import FeatureCard from "../FeatureCard";

const MarketingEbookSection = async () => {
  const bookData = await fetchBookSection();
  return (
    <section className="custom-bg py-20 text-gray-800" dir="rtl">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          {/* Book image */}
          <div className="relative w-full lg:w-1/2 h-[400px]">
            <Image
              src={bookData?.image || "/book.jpg"}
              alt="the book image"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-right text-gray-800">
            <h2 className="text-3xl lg:text-4xl font-bold">
              {bookData?.title || "دليلك الشامل لحملات تسويقية ناجحة"}
            </h2>
            <p className="text-lg leading-relaxed">
              {bookData?.description ||
                "اكتشف أسرار التخطيط لحملات تسويقية ناجحة مع هذا الكتاب الشامل. تعلم كيفية تحديد الأهداف، اختيار القنوات المناسبة، وقياس النتائج بفعالية."}
            </p>
            <Link href={bookData?.ctaLink || "/"} target="_blank">
              <button className="btn-primary">← {bookData?.ctaText}</button>
            </Link>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid gap-8 md:grid-cols-3 text-center text-gray-800">
          <FeatureCard
            icon={<FaUserFriends size={40} />}
            title={bookData?.features.forWhom.title || ""}
            description={bookData?.features.forWhom.description || ""}
          />
          <FeatureCard
            icon={<FaFlag size={40} />}
            title={bookData?.features.goals.title || ""}
            description={bookData?.features.goals.description || ""}
          />
          <FeatureCard
            icon={<FaBookOpen size={40} />}
            title={bookData?.features.about.title || ""}
            description={bookData?.features.about.description || ""}
          />
        </div>
      </Container>
    </section>
  );
};

export default MarketingEbookSection;
