import SocialMediaForm from "./SocialMediaForm";

export default  function SocialMediaPage() { 

  return (
    <div className="p-6 text-gray-600">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Social Media Links</h1>
      {/* Only if getSocialLinks() is fast & returns serializable data */}
      <SocialMediaForm />
    </div>
  );
}
