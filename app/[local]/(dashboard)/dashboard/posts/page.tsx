/** @format */
import { getPosts } from "@/app/lib/posts";
import { Post } from "@/types/post";
import Link from "next/link";
import { deletePostAction } from "@/app/lib/actions"; // <-- import the server action
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { LocalizedField } from "@/types";
export const metadata: Metadata = {
  title: "انشاء المقالة",
  description: " انشاء المقالة - لوحة التحكم",
};
const PostsPage = async () => {
  const posts = await getPosts();
  const locale = await getLocale();
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 bg-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800">المقالات</h1>
          <p className="text-gray-500">قائمة بجميع المقالات المنشورة</p>
        </div>
        <Link
          href="/dashboard/posts/create"
          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-lg shadow hover:from-blue-600 hover:to-cyan-600 transition-all"
        >
          إنشاء مقال جديد
        </Link>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow">
        <table className="min-w-full bg-white text-gray-800 rtl:text-right">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-3 border-b">العنوان</th>
              <th className="px-4 py-3 border-b">تاريخ الإنشاء</th>
              <th className="px-4 py-3 border-b">تاريخ التعديل</th>
              <th className="px-4 py-3 border-b">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: Post) => (
              <tr key={post.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">
                  {post.title[locale as keyof LocalizedField]}
                </td>
                <td className="px-4 py-3">
                  {new Date(
                    post.createdAt instanceof Date
                      ? post.createdAt
                      : post.createdAt.toDate()
                  ).toLocaleDateString("ar-EG")}
                </td>
                <td className="px-4 py-3">
                  {post.updatedAt &&
                    new Date(
                      post.updatedAt instanceof Date
                        ? post.updatedAt
                        : post.updatedAt.toDate()
                    ).toLocaleDateString("ar-EG")}
                </td>
                <td className="px-4 py-3 flex gap-3">
                  <Link
                    href={`/dashboard/posts/edit/${post.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    تعديل
                  </Link>

                  {/* Delete Button using server action */}
                  <form action={deletePostAction}>
                    <input type="hidden" name="id" value={post.id} />
                    <button
                      type="submit"
                      className="text-red-600 hover:underline cursor-pointer"
                      // onClick={(e) => {
                      //   if (!confirm("هل أنت متأكد من حذف هذا المقال؟")) {
                      //     e.preventDefault(); // Prevent form submit if canceled
                      //   }
                      // }}
                    >
                      حذف
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  لا توجد مقالات حالياً.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostsPage;
