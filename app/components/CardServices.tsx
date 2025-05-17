import { Service } from "@/types/servece";
import Link from "next/link";
import React from "react";

const CardServices = ({ service }: { service: Service }) => {
  return (
    <div className="flex flex-col justify-between bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">
      <h3 className="text-xl font-bold mb-4">{service?.headline}</h3>

      <p className="text-sm text-right text-gray-600 space-y-3 mb-6">
        {service?.description ? (
          <>
            {service?.description.length > 200
              ? `${service.description.slice(0, 200)}...`
              : service.description}
          </>
        ) : (
          "نص مثالي لاستبداله بمحتوى حقيقي."
        )}
      </p>
      <ul className="text-gray-600 text-sm space-y-3 text-right">
        {service?.features.length > 0 ? (
          service.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-pink-500">✔️</span> {feature}
            </li>
          ))
        ) : (
          <>
            <li>✔️ نص مثالي لاستبداله بمحتوى حقيقي.</li>
            <li>✔️ نص مثالي لاستبداله بمحتوى حقيقي.</li>
            <li>✔️ نص مثالي لاستبداله بمحتوى حقيقي.</li>
          </>
        )}
      </ul>  
      <Link href={`/services/${service.id}`} >
        <button className="btn-primary mt-5 cursor-pointer hover:bg-pink-700 ">
        عرض تفاصيل الخدمة
        </button>
      </Link>
    </div>
  );
};

export default CardServices;
