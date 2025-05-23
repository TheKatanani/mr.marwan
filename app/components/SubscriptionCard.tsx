// SubscriptionCard.tsx
import { SubscriptionPackage } from "@/types/servece";
import React from "react";

const CheckCircle = "✔️";

interface SubscriptionProps extends SubscriptionPackage {
  tagColor: string;
  buttonColor: string;
}

const SubscriptionCard: React.FC<SubscriptionProps> = (props) => {
  return (
    <div className="relative rounded-xl shadow-lg bg-[#f0faee] flex flex-col justify-between w-full max-w-sm m-auto sm:m-3">
      <div className="pt-10">
        <div
          className={`px-4 py-1 text-base sm:text-lg ${props.tagColor || "bg-[#f65d0e]"} text-white font-semibold rounded-bl-none rounded-tl-4xl absolute top-3 right-0`}
        >
          {props.packageName}
        </div>
        <div className="p-4 sm:p-6 pt-14">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-gray-700 font-semibold text-xl sm:text-2xl mb-3">
            {props.headline}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base mb-4">{props.description}</p>

          <div className="mb-4">
            <h4 className="font-bold mb-1 text-sm sm:text-base">ما ستحصل عليه:</h4>
            <ul className="list-none space-y-2 text-sm sm:text-base">
              {props?.whatYouGet.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  {CheckCircle + " " + item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-1 text-sm sm:text-base">المشاكل التي نحلها:</h4>
            <ul className="list-none space-y-2 text-sm sm:text-base">
              {props.problemsWeSolve.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  {CheckCircle + " " + item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 pt-0">
        <button
          className={`w-full py-2 px-4 rounded-md font-medium transition cursor-pointer border-[#ff5722] text-sm sm:text-base ${props.buttonColor || "bg-[#ff5722] text-white hover:opacity-90"}`}
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
