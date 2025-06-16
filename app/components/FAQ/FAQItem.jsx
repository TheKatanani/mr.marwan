import React from 'react'

export default function FAQItem({ item, index, activeId, toggle }) {
  return (
    <div 
      className="border-2 border-[#BB8819] rounded-md relative"
    >
      <div className="flex flex-col gap-2">
        {/* Top Row: Question and Button */}
        <div className="flex justify-between gap-4  items-start">
          <div className="flex items-center gap-3 flex-1  p-4">
            <span className="text-sm text-gray-500">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-base sm:text-lg md:text-xl font-medium break-words">
              {item.question}
            </h3>
          </div>

          <button
            onClick={() => toggle(item.id)}
            className=" w-20 h-full p-7 md:p-6 text-xl font-bold bg-[#BB8819] text-white flex items-center justify-center cursor-pointer"
          >
            {activeId === item.id ? "-" : "+"}
          </button>
        </div>

        {/* Answer (if open) */}
        {activeId === item.id && (
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed  w-11/12 px-5 pb-5  leading-relaxed whitespace-pre-wrap">
            {item.answer}
          </p>
        )}
      </div>
    </div>)
}
