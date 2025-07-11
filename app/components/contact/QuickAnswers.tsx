import { fetchQuickAnswers } from "@/app/lib/contact";
import { getTranslations } from "next-intl/server";
export default async function QuickAnswers() {
  const { questions } = await fetchQuickAnswers();
  const t = await getTranslations("contact.quickAnswers");
  if (!questions)
    return (
      <div className="bg-gray-50 p-8 rounded shadow">
        No quick answers available
      </div>
    ); 
  return (
    <div className="bg-gray-50 p-8 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">{t("title")}</h2>
      <div>
        {questions.map((item, index) => (
          <details key={index} className="mb-4">
            <summary className="font-medium cursor-pointer">
              {item.question}
            </summary>
            <p className="mt-2 text-sm text-gray-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
