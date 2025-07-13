/** Dashboard Page */

"use client";

import { useState } from "react";
import HeroDashboard from "./hero"; 
import { Language } from "@/types";
import Image from "next/image";
import AboutDashboardPage from "./About";
import MilestonesDashboardPage from "./milestones"; 
import JoinCommunityDashboard from "./joinCommunity";

function Page() {
  const [lang, setLang] = useState<Language>("ar");

  return (
    <div className="space-y-6 p-6 text-gray-800">
      <div className="flex justify-end items-center gap-3">
        <div className="text-xl">
          <Image
            src={lang === "ar" ? "/arabic.svg" : "/english.svg"}
            alt="us"
            width={24}
            height={17}
          />
        </div>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value as Language)}
          className="border rounded px-4 py-2"
        >
          <option value="ar"> 
            العربية
          </option>
          <option value="en"> 
            English
          </option>
        </select>
      </div>

      <HeroDashboard lang={lang} />
      <AboutDashboardPage/>
      <MilestonesDashboardPage/>
      <JoinCommunityDashboard/>
      {/* <WhyAcademy lang={lang} />
      <EbookSectionForm lang={lang} />
      <BannerDashboard lang={lang} /> */}
    </div>
  );
}

export default Page;
