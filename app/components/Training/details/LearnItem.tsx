import { Check } from "lucide-react";

interface LearnItemProps {
  title: string;
  description: string;
}

export default function LearnItem({ title, description }: LearnItemProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex-1 min-w-12 h-12 px-2 bg-blue-500 rounded-full flex items-center justify-center">
      <Check className="text-white" />
      </span>
      <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
