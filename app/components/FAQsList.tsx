import { CourseFAQ } from "@/types/course";

const FAQList = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: { question: { en: string; ar: string }; answer: { en: string; ar: string } }[];
  onChange: (
    val: CourseFAQ[]
  ) => void;
}) => {
  const updateItem = (
    index: number,
    part: "question" | "answer",
    lang: "en" | "ar",
    val: string
  ) => {
    const updated = [...value];
    updated[index][part][lang] = val;
    onChange(updated);
  };
  const addItem = () =>
    onChange([...value, { question: { en: "", ar: "" }, answer: { en: "", ar: "" } }]);
  const removeItem = (index: number) => {
    const updated = [...value];
    updated.splice(index, 1);
    onChange(updated);
  };
  return (
    <div>
      <h3 className="font-semibold mb-2">{label}</h3>
      {value.map((item, index) => (
        <div key={index} className="space-y-1 mb-4 border p-3 rounded">
          <input
            className="w-full border px-2 py-1"
            placeholder="Question (EN)"
            value={item.question?.en}
            onChange={(e) => updateItem(index, "question", "en", e.target.value)}
          />
          <input
            className="w-full border px-2 py-1"
            placeholder="Question (AR)"
            value={item.question?.ar}
            onChange={(e) => updateItem(index, "question", "ar", e.target.value)}
          />
          <textarea
            className="w-full border px-2 py-1"
            placeholder="Answer (EN)"
            value={item.answer?.en}
            onChange={(e) => updateItem(index, "answer", "en", e.target.value)}
          />
          <textarea
            className="w-full border px-2 py-1"
            placeholder="Answer (AR)"
            value={item.answer?.ar}
            onChange={(e) => updateItem(index, "answer", "ar", e.target.value)}
          />
          <button
            onClick={() => removeItem(index)}
            className="text-red-600 text-sm mt-1"
          >
            Remove FAQ
          </button>
        </div>
      ))}
      <button onClick={addItem} className="text-blue-600 text-sm">
        + Add FAQ
      </button>
    </div>
  );
};

export default FAQList;