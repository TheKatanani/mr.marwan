import { ReactNode } from 'react';
import Link from 'next/link';

interface FeatureCardProps {
  id?: string;
  icon: ReactNode;
  title: string;
  description: string;
}

const InternationalCard = ({ id, icon, title, description }: FeatureCardProps) => (
  <div className="bg-white rounded-xl p-6 backdrop-blur-sm hover:bg-gray-50 transition text-center">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold text-black p-3">{title}</h3>
    <p className="text-sm text-gray-400 mb-4">{description}</p>
    {id && (
      <Link
        href={`/training/${id}`}
        className="inline-block px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        Learn More
      </Link>
    )}
  </div>
);

export default InternationalCard;
