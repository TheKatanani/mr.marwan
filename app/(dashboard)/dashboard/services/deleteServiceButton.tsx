// components/DeleteServiceButton.tsx
"use client";

export default function DeleteServiceButton({ id, onDelete }: { id: string; onDelete: () => void }) {
  const handleClick = async () => {
    const confirmDelete = confirm("هل أنت متأكد من حذف هذه الخدمة؟");
    if (confirmDelete) {
      await onDelete();
    }
  };

  return (
    <button
      type="button"
      className="text-red-600 hover:underline"
      onClick={handleClick}
    >
      حذف
    </button>
  );
}