import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-gray-50 rounded-xl p-6 backdrop-blur-sm hover:bg-white transition text-center ">
    <div className="mb-4 flex justify-center ">{icon}</div>
    <h3 className="text-xl font-semibold  text-black p-4">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

export default FeatureCard;
