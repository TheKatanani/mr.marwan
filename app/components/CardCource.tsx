/** @format */

import Link from "next/link";
import React from "react";

const CardCources  = ({ plan }: { plan: { title: string } }) => {
  return (
    <div className="flex flex-col justify-between bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">
      <h3 className="text-xl font-bold mb-4">{plan.title}</h3>

      <p className="text-sm text-right text-gray-600 space-y-3 mb-6">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من مولد النص العربى،{" "}
      </p>
      <ul className="text-gray-600 text-sm space-y-3 text-right">
        <li>✔️ نص مثالي لاستبداله بمحتوى حقيقي.</li>
        <li>✔️ نص مثالي لاستبداله بمحتوى حقيقي.</li>
        <li>✔️ نص مثالي لاستبداله بمحتوى حقيقي.</li>
      </ul>
      <Link href={""} target="_blank">
        <button className="btn-primary mt-5 cursor-pointer hover:bg-pink-700 ">
          اطلب الآن
        </button>
      </Link>
    </div>
  );
};

export default CardCources ;
