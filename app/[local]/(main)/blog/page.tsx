import Link from "next/link";
import { Metadata } from "next";
import { getPosts } from "@/app/lib/posts";
import Title from "@/app/components/Titile";
import { getLocale } from "next-intl/server";
import { LocalizedField } from "@/types";

export const metadata: Metadata = {
  title: "مدونة الدكتور مروان العزاوي",
  description:
    "اقرأ أحدث المقالات الطبية والنصائح الصحية من الدكتور مروان العزاوي.",
};

export default async function Blog() {
  const posts = await getPosts();
  const locale = await getLocale();

  return (
    <section className="bg-linear-to-r from-white via-[#e3f9ff] to-white min-h-screen py-16 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-10">
          <Title>المدونة</Title>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            لا توجد مقالات حالياً.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-bold text-[#BB8819] mb-2 line-clamp-2">
                    {post.title[locale as keyof LocalizedField]}
                  </h2>
                  <p className="text-gray-500 text-sm mb-3">
                    {post.createdAt instanceof Date
                      ? new Date(post.createdAt).toLocaleDateString("ar-EG", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : ""}
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base line-clamp-3 whitespace-pre-wrap">
                    {post.content[locale as keyof LocalizedField]}
                  </p>
                </div>

                <div className="mt-4">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-sm text-[#1E40AF] hover:underline"
                  >
                    قراءة المزيد
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
