import { BookUser } from "@/types";

type Props = {
  bookUsers: BookUser[];
  onSelect: (bookuser: BookUser) => void;
};

export default function BookList({ bookUsers, onSelect }: Props) {
  return (
    <table className="w-full text-sm border">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 text-right">الاسم</th>
          <th className="p-2 text-right">البريد</th>
          <th className="p-2 text-right">التاريخ</th>
          <th className="p-2 text-right">عرض</th>
        </tr>
      </thead>
      <tbody>
        {bookUsers.map((msg) => (
          <tr key={msg.id} className="border-t">
            <td className="p-2">{msg.name}</td>
            <td className="p-2">{msg.email}</td>
            <td className="p-2">
              {new Date(msg.createdAt).toLocaleDateString()}
            </td>
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
