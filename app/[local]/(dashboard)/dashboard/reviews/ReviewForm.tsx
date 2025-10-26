import { ReviewDoc } from "@/types/reviews";
import { useState } from "react";
 type FormState = Omit<ReviewDoc, "id">
type Props = {
  initialData?: FormState;
  onSubmit: (data: FormState) => Promise<void>;
};

export default function ReviewForm({ initialData, onSubmit }: Props) {
  const [form, setForm] = useState<FormState>(
    initialData || {
      qoute: { ar: "", en: "" },
      rating: 5,
    }
  );

  const handleQouteChange = (lang: "ar" | "en", value: string) => {
    setForm((prev) => ({
      ...prev,
      qoute: { ...prev.qoute, [lang]: value },
    }));
  };

  const handleRatingChange = (value: number) => {
    setForm((prev) => ({ ...prev, rating: value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-4 text-gray-800"
    >
      {(["ar", "en"] as const).map((lang) => (
        <div key={lang}>
          <h3 className="text-lg font-semibold capitalize">{lang} Quote</h3>
          <textarea
            value={form.qoute[lang]}
            onChange={(e) => handleQouteChange(lang, e.target.value)}
            className="textarea w-full"
            placeholder={`Quote in ${lang}`}
            required
          />
        </div>
      ))}
      <div>
        <label className="block mb-1 font-semibold">Rating (1–5)</label>
        <input
          type="number"
          min={1}
          max={5}
          value={form.rating}
          onChange={(e) => handleRatingChange(Number(e.target.value))}
          className="input w-24"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
}
