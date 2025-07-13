import { ContactMessage } from "@/types";

 
type Props = {
  message: ContactMessage | null;
};

export default function MessageViewer({ message }: Props) {
  if (!message) return <div className="text-gray-500">اختر رسالة لعرضها هنا</div>;

  return (
    <table className="w-full text-sm border mb-6">
      <tbody>
        <tr><td className="font-bold p-2">الاسم</td><td>{message.fullName}</td></tr>
        <tr><td className="font-bold p-2">البريد الإلكتروني</td><td>{message.email}</td></tr>
        <tr><td className="font-bold p-2">رقم الهاتف</td><td>{message.phone}</td></tr>
        <tr><td className="font-bold p-2">نوع الاستفسار</td><td>{message.inquiryType}</td></tr>
        <tr><td className="font-bold p-2">الموضوع</td><td>{message.subject}</td></tr>
        <tr><td className="font-bold p-2">الرسالة</td><td>{message.message}</td></tr>
        <tr><td className="font-bold p-2">تاريخ الإرسال</td><td>{new Date(message.createdAt).toLocaleString()}</td></tr>
      </tbody>
    </table>
  );
}
