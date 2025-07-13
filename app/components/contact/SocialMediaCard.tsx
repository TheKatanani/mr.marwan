import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function SocialMediaCard() {
  return (
    <div className="bg-white w-full my-5 rounded-2xl shadow p-6 ">
      <h3 className="text-gray-800 font-semibold mb-4">Follow Us</h3>
      <div className="flex gap-3">
        <a href="#" className="bg-[#1877F2] text-white p-3 rounded-md hover:scale-105 transition">
          <FaFacebookF />
        </a>
        <a href="#" className="bg-[#E1306C] text-white p-3 rounded-md hover:scale-105 transition">
          <FaInstagram />
        </a>
        <a href="#" className="bg-[#0077B5] text-white p-3 rounded-md hover:scale-105 transition">
          <FaLinkedinIn />
        </a>
        <a href="#" className="bg-[#FF0000] text-white p-3 rounded-md hover:scale-105 transition">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
}
