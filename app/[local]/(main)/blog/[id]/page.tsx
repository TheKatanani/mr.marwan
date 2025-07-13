import { getPostById } from "@/app/lib/posts"; 
import { LocalizedField } from "@/types";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{ id: string }>;
};
export const metadata: Metadata = {
  title: "تفاصيل المقالة",
  description: "موقع الدكتور مروان العزاوي - تفاصيل المقالة",
};

export default async function page({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = await getPostById(id);
  const locale = await getLocale();
  if (!post) {
    notFound(); // Show 404 if post not found
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8 pt-30 min-h-screen grid place-content-center">
      <h1
        className="text-3xl font-bold text-[#BB8819] mb-4 flex
       items-center gap-2"
      >
        <Image
          src="/logo.png"
          alt="small Logo"
          width={40}
          height={40}
          className="h-7 w-auto"
        />
        {post.title[locale as keyof LocalizedField]}
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        {post.createdAt instanceof Date
          ? new Date(post.createdAt).toLocaleDateString("ar-EG", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : ""}
      </p>
      <div className="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap">
        {" "}
        {post.content[locale as keyof LocalizedField]}
      </div>
    </main>
  );
}
