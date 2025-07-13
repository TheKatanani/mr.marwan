"use client";

import { getQuickAnswers, updateQuickAnswers } from "@/app/lib/dashboard-quickAnswers";
import { QuickAnswer } from "@/types";
import { useEffect, useState } from "react";  
import QuestionItemEditor from "./QuestionItemEditor";
export default function QuickAnswersEditor() {
  const [questions, setQuestions] = useState<QuickAnswer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuickAnswers().then((data) => {
      setQuestions(data);
      setLoading(false);
    });
  }, []);

  const handleUpdate = (index: number, updated: QuickAnswer) => {
    const updatedList = [...questions];
    updatedList[index] = updated;
    setQuestions(updatedList);
  };

  const handleAdd = () => {
    setQuestions([
      ...questions,
      {
        question: { en: "", ar: "" },
        answer: { en: "", ar: "" },
      },
    ]);
  };

  const handleDelete = (index: number) => {
    setQuestions((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    await updateQuickAnswers(questions);
    alert("Updated successfully!");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Quick Answers Editor</h2>

      {questions.map((qa, index) => (
        <QuestionItemEditor
          key={index}
          data={qa}
          onChange={(updated) => handleUpdate(index, updated)}
          onDelete={() => handleDelete(index)}
        />
      ))}

      <div className="flex gap-4">
        <button onClick={handleAdd}>Add Question</button>
        <button className="btn-primary" onClick={handleSave} >
          Save All
        </button>
      </div>
    </div>
  );
}
