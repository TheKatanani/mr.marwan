import { Review } from "@/types/reviews";
import ReviewCard from "./reviewCard";
import Title from "./Titile";
import { getTranslations } from "next-intl/server";
export default async function ClientReviews({ reviews }: { reviews: Review[] }) {
  const t =await getTranslations("clientReviews");
  return (
    <section
      className="py-20  grid place-content-center bg-white "
      
    >
      <div className="container m-auto px-4 text-center">
        <Title className="mb-12 pb-10 m-auto w-fit"
        subTitle={t("subTitle")}>
          {t("title")}
        </Title>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <ReviewCard qoute={review.qoute} rating={review.rating} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
