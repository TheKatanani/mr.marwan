import { BookUser } from "@/types";

type Props = {
  bookUser: BookUser | null;
};

export default function BookViewer({  bookUser }: Props) {
  if (!bookUser)
    return <div className="text-gray-500">اختر رسالة لعرضها هنا</div>;

  return (
    <table className="w-full text-sm border mb-6">
      <tbody>
        <tr>
          <td className="font-bold p-2">الاسم</td>
          <td>{bookUser.name}</td>
        </tr>
        <tr>
          <td className="font-bold p-2">البريد الإلكتروني</td>
          <td>{bookUser.email}</td>
        </tr>
        <tr>
          <td className="font-bold p-2">رقم الهاتف</td>
          <td>{bookUser.phone}</td>
        </tr>
        <tr>
          <td className="font-bold p-2">تاريخ الإرسال</td>
          <td>{new Date(bookUser.createdAt).toLocaleString()}</td>
        </tr>
      </tbody>
    </table>
  );
}
