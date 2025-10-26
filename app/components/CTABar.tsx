import { GraduationCap, Phone } from "lucide-react";

export default function CTABar() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-400 text-white py-16 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Start Your ICAO Training?
        </h2>
        <p className="text-sm md:text-base text-white/90 mb-8">
          Join pilots worldwide who trust our ICAO-certified training programs
          <br />
          for their aviation careers
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-800 font-medium py-3 px-6 rounded-md flex items-center justify-center gap-2 transition">
            <GraduationCap className="w-5 h-5" />
            Enroll Now
          </button>
          <button className="border border-white hover:bg-white hover:text-blue-700 font-medium py-3 px-6 rounded-md flex items-center justify-center gap-2 transition">
            <Phone className="w-5 h-5" />
            Contact Advisor
          </button>
        </div>
      </div>
    </section>
  );
}
