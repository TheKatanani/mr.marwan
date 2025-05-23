import { Service } from "@/types/servece";

export const emptyService: Service = {
  headline: "",
  description: "",
  subscribeURL: "",
  headImage: "",
  videoUrl: "",
  features: [""],
  featuresImage: "",
  subscriptions: [
    {
      packageName: "",
      headline: "",
      description: "",
      whatYouGet: [""],
      problemsWeSolve: [""],
      subscribeURL: "",
    },
  ],
  gallery: {
    images: [""],
    videos: [""],
  },
  reviews: [
    {
      qoute: "",
      rating: 5,
    },
  ],
  partners: [""],
};
