import { ContactMessage } from "@/types";

 
type Props = {
  messages: ContactMessage[];
  onSelect: (message: ContactMessage) => void;
};

export default function MessageList({ messages, onSelect }: Props) {
  return (
    <table className="w-full text-sm border">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 text-right">الاسم</th>
          <th className="p-2 text-right">البريد</th>
          <th className="p-2 text-right">الموضوع</th>
          <th className="p-2 text-right">التاريخ</th>
          <th className="p-2 text-right">عرض</th>
        </tr>
      </thead>
      <tbody>
        {messages.map((msg) => (
          <tr key={msg.id} className="border-t">
            <td className="p-2">{msg.fullName}</td>
            <td className="p-2">{msg.email}</td>
            <td className="p-2">{msg.subject}</td>
            <td className="p-2">{new Date(msg.createdAt).toLocaleDateString()}</td>
            <td className="p-2">
              <button
                className="bg-blue-500 text-white text-xs px-3 py-1 rounded"
                onClick={() => onSelect(msg)}
              >
                عرض
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
