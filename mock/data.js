import {
  BookOpen,
  Plane,
  BadgeCheck,
  ShieldCheck,
  PlaneTakeoff,
} from "lucide-react";

export const instructors = [
  {
    name: "Captain James Wilson",
    role: "ICAO Training Specialist",
    avatar: "/trainer.jpg",
    details: [
      {
        icon: <PlaneTakeoff className="text-gray-500" size={16} />,
        text: "15,000+ Flight Hours",
      },
      {
        icon: <BadgeCheck className="text-blue-500" size={16} />,
        text: "ICAO Certified Instructor",
      },
    ],
  },
  {
    name: "Captain Sarah Martinez",
    role: "Multi-Crew Training Expert",
    avatar: "/trainer.jpg",
    details: [
      {
        icon: <PlaneTakeoff className="text-gray-500" size={16} />,
        text: "12,500+ Flight Hours",
      },
      {
        icon: <BadgeCheck className="text-blue-500" size={16} />,
        text: "MCC Specialist",
      },
    ],
  },
  {
    name: "Captain David Chen",
    role: "Aviation Safety Expert",
    avatar: "/trainer.jpg",
    details: [
      {
        icon: <PlaneTakeoff className="text-gray-500" size={16} />,
        text: "18,000+ Flight Hours",
      },
      {
        icon: <ShieldCheck className="text-blue-500" size={16} />,
        text: "Safety Management Systems",
      },
    ],
  },
];

export const navLinks = [
  {
    href: "/",
    label: "home", // corresponds to translation key: Navbar.home
    highlight: true,
  },
  {
    href: "/about",
    label: "about",
  },
  {
    href: "/services",
    label: "services",
  },
  {
    href: "/courses",
    label: "courses",
  },
  {
    href: "/blog",
    label: "blog",
  },
  {
    href: "/contact",
    label: "contact",
  },
];
export const curriculumData = [
  {
    title: "Theoretical Training",
    icon: <BookOpen className="text-white" />,
    iconBgColor: "bg-blue-500",
    items: [
      {
        title: "Air Law & Procedures",
        description: "International aviation regulations and ICAO annexes",
      },
      {
        title: "Aircraft Systems",
        description: "Advanced aircraft systems and performance",
      },
      {
        title: "Navigation & Radio",
        description: "Modern navigation systems and communications",
      },
      {
        title: "Meteorology",
        description: "Weather interpretation and flight planning",
      },
    ],
  },
  {
    title: "Practical Training",
    icon: <Plane className="text-white" />,
    iconBgColor: "bg-yellow-400",
    items: [
      {
        title: "Flight Training",
        description: "Hands-on flying experience with certified instructors",
      },
      {
        title: "Simulator Sessions",
        description: "Advanced flight simulation training",
      },
      {
        title: "Emergency Procedures",
        description: "Crisis management and safety protocols",
      },
      {
        title: "Cross-country Flights",
        description: "Long-distance navigation and planning",
      },
    ],
  },
];
// ✅ Mock course data
export const mockCourses = [
  {
    id: "1",
    title: { en: "React Basics", ar: "أساسيات React" },
    description: {
      en: "Learn the basics of React.",
      ar: "تعلم أساسيات React.",
    },
    btnText: { en: "Start Now", ar: "ابدأ الآن" },
    btnLink: "/courses/1",
    duration: { en: "2 hours", ar: "ساعتان" },
    image: "/courses.png",
  },
  {
    id: "2",
    title: { en: "TypeScript Essentials", ar: "أساسيات TypeScript" },
    description: {
      en: "Master TypeScript for scalable apps.",
      ar: "أتقن TypeScript لتطبيقات قابلة للتطوير.",
    },
    btnText: { en: "Enroll", ar: "سجل الآن" },
    btnLink: "/courses/2",
    duration: { en: "3 hours", ar: "3 ساعات" },
    image: "/courses.png",
  },
  {
    id: "3",
    title: { en: "Next.js Guide", ar: "دليل Next.js" },
    description: {
      en: "Build SSR apps with Next.js.",
      ar: "أنشئ تطبيقات SSR باستخدام Next.js.",
    },
    btnText: { en: "Join Course", ar: "انضم للدورة" },
    btnLink: "/courses/3",
    duration: { en: "4 hours", ar: "4 ساعات" },
    image: "/courses.png",
  },
  {
    id: "4",
    title: { en: "Node.js Fundamentals", ar: "أساسيات Node.js" },
    description: {
      en: "Backend development with Node.js.",
      ar: "تطوير الخلفية باستخدام Node.js.",
    },
    btnText: { en: "Start Learning", ar: "ابدأ التعلم" },
    btnLink: "/courses/4",
    duration: { en: "2.5 hours", ar: "ساعتان ونصف" },
    image: "/courses.png",
  },
  {
    id: "5",
    title: { en: "CSS Flexbox & Grid", ar: "CSS Flexbox & Grid" },
    description: {
      en: "Modern layouts with Flexbox and Grid.",
      ar: "تصاميم حديثة باستخدام Flexbox وGrid.",
    },
    btnText: { en: "View Course", ar: "عرض الدورة" },
    btnLink: "/courses/5",
    duration: { en: "1.5 hours", ar: "ساعة ونصف" },
    image: "/courses.png",
  },
  {
    id: "6",
    title: { en: "JavaScript Deep Dive", ar: "تعمق في JavaScript" },
    description: {
      en: "Advanced JavaScript concepts.",
      ar: "مفاهيم متقدمة في JavaScript.",
    },
    btnText: { en: "Explore", ar: "استكشف" },
    btnLink: "/courses/6",
    duration: { en: "5 hours", ar: "5 ساعات" },
    image: "/courses.png",
  },
  {
    id: "7",
    title: { en: "UI/UX Design Basics", ar: "أساسيات تصميم UI/UX" },
    description: {
      en: "Principles of UI/UX design.",
      ar: "مبادئ تصميم واجهة المستخدم وتجربة المستخدم.",
    },
    btnText: { en: "Get Started", ar: "ابدأ الآن" },
    btnLink: "/courses/7",
    duration: { en: "2 hours", ar: "ساعتان" },
    image: "/courses.png",
  },
];
