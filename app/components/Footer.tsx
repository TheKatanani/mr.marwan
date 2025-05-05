import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/mock/data'; // Adjust the import path as needed

// Social media icons data
const socialIcons = [
  { src: '/facebook.svg', alt: 'Facebook', width: 12, height: 12 },
  { src: '/googlePlus.svg', alt: 'Google Plus', width: 20, height: 20 },
  { src: '/linkedIn.svg', alt: 'LinkedIn', width: 20, height: 20 },
  { src: '/twitter.svg', alt: 'X - Twitter', width: 20, height: 20 },
];

// Contact info data
const contactInfo = {
  phone: '9714225444',
  email: 'info@marwanalazzaoui.com',
  address: 'حي الزهور - الامارات',
};

export default function Footer() {
  return (
    <footer 
      className="relative bg-cover bg-center h-full   text-white pt-12 pb-10"
      style={{ backgroundImage: "url('/web-banner-background.jpg')" }}
    > 
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div> 

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right " dir="ltr">
          
          {/* Logo + Description */}
          <div className="space-y-4">
            <div className="mb-4 ">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={195} 
                height={60} 
                className="mx-auto md:mx-0 w-auto h-auto m-auto"
                priority
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed text-center">
              هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي.
            </p>
          </div>

          {/* Quick Links - Dynamic from navLinks */}
          <div className="space-y-4 text-center md:text-start">
            <h3 className="text-lg font-semibold mb-4 text-white text-end">روابط سريعة</h3>
            <div className='flex flex-col gap-4 items-end'>
              {navLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Phone & Email */}
            <div className="flex items-center justify-center md:justify-end gap-3">
              <div className="text-right">
                <div className="text-gray-300 text-sm">{contactInfo.phone}</div>
                <div className="text-gray-300 text-sm">{contactInfo.email}</div>
              </div>
              <svg className="w-8 h-8 text-[#B6D8E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 14h.01M16 10h.01M21 16.5V7.5a2.5 2.5 0 00-2.5-2.5h-13A2.5 2.5 0 003 7.5v9a2.5 2.5 0 002.5 2.5h13a2.5 2.5 0 002.5-2.5z" />
              </svg>
            </div>

            {/* Address */}
            <div className="flex items-center justify-center md:justify-end gap-3">
              <span className="text-gray-300 text-sm">{contactInfo.address}</span>
              <svg className="w-8 h-8 text-[#B6D8E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2c3.866 0 7 3.134 7 7 0 5.25-7 13-7 13S5 14.25 5 9c0-3.866 3.134-7 7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>

            {/* Social Media - Dynamic */}
            <div className="flex justify-center md:justify-end mt-4 gap-4 ">
              {socialIcons.map((icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Image 
                    src={icon.src} 
                    alt={icon.alt} 
                    width={icon.width} 
                    height={icon.height} 
                    className="w-5 h-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}