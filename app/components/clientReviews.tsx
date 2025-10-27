import { Review } from "@/types/reviews";
import ReviewCard from "./reviewCard";
import Title from "./Titile";
import { getTranslations } from "next-intl/server";

export default async function ClientReviews({ reviews }: { reviews: Review[] }) {
  const t = await getTranslations("clientReviews");

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <Title
          className="mb-10 sm:mb-14 lg:mb-16 mx-auto w-fit"
          subTitle={t("subTitle")}
        >
          {t("title")}
        </Title>

        <div
          className="
            mt-10 sm:mt-12
            grid gap-6 sm:gap-8 lg:gap-10
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            justify-items-center
          "
        >
          {reviews.map((review, idx) => (
            <ReviewCard
              qoute={review.qoute}
              rating={review.rating}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
