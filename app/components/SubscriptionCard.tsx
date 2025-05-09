// SubscriptionCard.tsx
import { SubscriptionPackage } from "@/types/servece";
import React from "react"; 
const CheckCircle = "✔️"
interface SubscriptionProps extends SubscriptionPackage {  
  tagColor: string;
  buttonColor: string;
}

const SubscriptionCard: React.FC<SubscriptionProps> = (props) => {
  return (
    <div className="relative rounded-xl shadow-lg bg-[#f0faee] flex flex-col justify-between">
      <div>
        <div className={`px-6 text-xl py-2 ${props.tagColor || "bg-[#f65d0e]"} text-white font-semibold rounded-bl-none rounded-tl-4xl absolute top-3 right-0`}>{props.packageName} 
        </div>
        <div className="p-6">
          <h3 className={`pt-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-gray-700 font-semibold text-2xl mb-3`}>{props.headline}</h3>
          <p className="  text-gray-700 mb-4">{props.description}</p>

          <div className="mb-4">
            <h4 className="font-bold   mb-1">ما ستحصل عليه:</h4>
            <ul className="list-none space-y-2">
              {props?.whatYouGet.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 ">
                  {/* <CheckCircle size={16} className="text-green-500 mt-0.5" /> */}
                  {CheckCircle +" "+ item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold  mb-1">المشاكل التي نحلها:</h4>
            <ul className="list-none space-y-2">
              {props.problemsWeSolve.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 ">
                  {/* <CheckCircle size={16} className="text-green-500 mt-0.5" /> */}
                  {CheckCircle +" "+ item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <button
          className={`w-full py-2 px-4 rounded-md font-medium transition cursor-pointer border-[#ff5722] ${props.buttonColor ||"bg-[#ff5722] text-white hover:opacity-90"}`}
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;
