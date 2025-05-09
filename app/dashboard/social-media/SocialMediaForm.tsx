'use client';

import { updateSocialLinks } from '@/app/lib/socialMedia';
import { FormEvent, useState } from 'react'; 

interface SocialLinks { 
    facebook: string,
    twitter: string,
    linkedin: string,
    instagram: string,
    youtube: string,
    tiktok: string
}
export default function SocialMediaForm({ initialData }: { initialData: Partial<SocialLinks> }) {
  const [links, setLinks] = useState(initialData || {
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
    youtube: '',
    tiktok: ''
  });

  const handleSubmit = async (e:FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    await updateSocialLinks(links);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
      {Object.entries(links).map(([platform, url]) => (
        <div key={platform} className="grid gap-2">
          <label htmlFor={platform} className="capitalize">
            {platform}
          </label>
          <input
            id={platform}
            type="url"
            value={url}
            onChange={(e) => setLinks({...links, [platform]: e.target.value})}
            placeholder={`https://${platform}.com/yourpage`}
          />
        </div>
      ))}
      <button type="submit" className="mt-4 btn-primary">
        Save Changes
      </button>
    </form>
  );
}