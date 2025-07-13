"use client";

import { QuickAnswer } from "@/types"; 
import { Trash2Icon } from "lucide-react";

type Props = {
    data: QuickAnswer;
    onChange: (updated: QuickAnswer) => void;
    onDelete: () => void;
};

export default function QuestionItemEditor({
    data,
    onChange,
    onDelete,
}: Props) {
    return (
        <div className="p-6 border rounded-xl shadow bg-white space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Question (AR)
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        value={data.question.ar}
                        placeholder="اكتب السؤال بالعربية"
                        onChange={(e) =>
                            onChange({
                                ...data,
                                question: { ...data.question, ar: e.target.value },
                            })
                        }
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Question (EN)
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        value={data.question.en}
                        placeholder="Type the question in English"
                        onChange={(e) =>
                            onChange({
                                ...data,
                                question: { ...data.question, en: e.target.value },
                            })
                        }
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Answer (AR)
                    </label>
                    <textarea
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition min-h-[80px]"
                        value={data.answer.ar}
                        placeholder="اكتب الإجابة بالعربية"
                        onChange={(e) =>
                            onChange({
                                ...data,
                                answer: { ...data.answer, ar: e.target.value },
                            })
                        }
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Answer (EN)
                    </label>
                    <textarea
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition min-h-[80px]"
                        value={data.answer.en}
                        placeholder="Type the answer in English"
                        onChange={(e) =>
                            onChange({
                                ...data,
                                answer: { ...data.answer, en: e.target.value },
                            })
                        }
                    />
                </div>
            </div>

            <div className="flex justify-end">
                <button
                    className="flex items-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition"
                    onClick={onDelete}
                    type="button"
                >
                    <Trash2Icon/>
                    Delete
                </button>
            </div>
        </div>
    );
}
