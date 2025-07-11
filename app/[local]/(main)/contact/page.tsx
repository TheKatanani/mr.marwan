import ContactForm from "@/app/components/contact/ContactForm";
import ContactHeader from "@/app/components/contact/ContactHeader";
import ContactInfo from "@/app/components/contact/ContactInfo";
import QuickAnswers from "@/app/components/contact/QuickAnswers";
import SocialMediaCard from "@/app/components/contact/SocialMediaCard";

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-800">
      <ContactHeader />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-16">
        <ContactForm />
        <div>
          <ContactInfo />
          <SocialMediaCard />
          <QuickAnswers />
        </div>
      </div>
    </div>
  );
}
