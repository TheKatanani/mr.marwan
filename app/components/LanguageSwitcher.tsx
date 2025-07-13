/** @format */

import { useLocale } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "");
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center text-sm gap-1 hover:text-red-500 transition"
      >
        <span className="text-xl">
          <Image
            src={locale === "ar" ? "/arabic.svg" : "/english.svg"}
            alt="us"
            width={24}
            height={17}
          />
        </span>
        <span className="uppercase">{locale}</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50">
          <div className="py-1 text-black">
            <button
              onClick={() => changeLocale("en")}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
            >
              <Image src={"/english.svg"} alt="us" width={24} height={17} />
              English
            </button>
            <button
              onClick={() => changeLocale("ar")}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
            >
              <Image src={"/arabic.svg"} alt="🇸🇦" width={24} height={17} />
              العربية
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
