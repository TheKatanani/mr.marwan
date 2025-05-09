/** @format */

import { getSocialLinks } from "@/app/lib/socialMedia";
import SocialMediaForm from "./SocialMediaForm";

interface SocialLinks {
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  youtube: string;
  tiktok: string;
}
export default async function SocialMediaPage() {
  const links: SocialLinks = await getSocialLinks();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Social Media Links</h1>
      <SocialMediaForm initialData={links} />
    </div>
  );
}
