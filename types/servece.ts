export interface SubscriptionPackage {
  packageName: string;
  headline: string;
  description: string;
  whatYouGet: string[];
  problemsWeSolve: string[];
  subscribeURL: string;
} 
interface Review {
  qoute: string;
  rating: number;
}
export interface Gallery { 
    images: string[];
    videos: string[]; 
}
export interface Partner {
    logo: string;
    link?: string;
  }
export interface Service {
  id?: string;
  headline: string;
  description: string;
  subscribeURL: string;
  headImage: string;
  videoUrl: string;
  features: string[];
  featuresImage: string;
  subscriptions: SubscriptionPackage[];
  gallery: Gallery;
  reviews: Review[];
  partners: Partner[];
}
