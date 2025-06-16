import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { getPosts } from "@/app/lib/posts";
import Title from "@/app/components/Titile";

export const metadata: Metadata = {
  title: "مدونة الدكتور مروان العزاوي",
  description:
    "اقرأ أحدث المقالات الطبية والنصائح الصحية من الدكتور مروان العزاوي.",
};
export default async function Blog() {
  const posts = await getPosts();

  return (
    <div
      dir="rtl"
      className="bg-gradient-to-r py-25 from-white via-[#e3f9ff] to-white max-w-5xl mx-auto p-4 text-gray-800 min-h-screen grid place-items-center"
    >
      <Title className="pt-8">المدونة</Title>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500 pt-10">
          لا توجد مقالات حالياً.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:w-[600px] pt-10 m-auto">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 border border-gray-100"
            >
              <h2 className="text-xl font-bold text-[#BB8819] mb-2  flex items-center gap-3">
                {/* <Image
                  src="/smallLogoMarwan.PNG"
                  alt="small Logo"
                  width={30}
                  height={30}
                /> */}
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {post.createdAt instanceof Date
                  ? new Date(post.createdAt).toLocaleDateString("ar-EG", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : ""}
              </p>
              <p className="text-gray-700 line-clamp-3 whitespace-pre-wrap">
                {post.content}
              </p>
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
  );
}
