/** @format */

import { CldUploadWidget, CldImage } from "next-cloudinary";

export default function ImageUpload() {
  return (
    <CldUploadWidget uploadPreset="your_preset">
      {({ open }) => (
        <button onClick={() => open()}>Upload SEO-Friendly Image</button>
      )}
    </CldUploadWidget>
  );
}
