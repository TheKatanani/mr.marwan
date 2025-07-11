import Image from "next/image";
import { Facilities } from "@/types";

const OurFacilitiesCard = (facilitie: Facilities) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg w-full max-w-sm mx-auto flex flex-col"> 
      {/* <Link href={`/courses/${facilitie.id}`}> */}
        <div className="relative w-full aspect-[3/2]">
          <Image
            src={facilitie.image || "/Rectangle.png"}
            alt={facilitie.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      {/* </Link> */}

      {/* Content Section */}
      <div className="p-4 space-y-2 text-start  flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-semibold text-black">{facilitie.title}</h3>
        <p className="text-sm text-gray-600 leading-snug">{facilitie.description}</p>  
      </div>
    </div>
  );
};

export default OurFacilitiesCard;
