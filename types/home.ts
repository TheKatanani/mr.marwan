export interface HeroSectionData {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  backgroundVideoUrl: string
}
export interface WhyAcademySectionData {
  title: string
  description: string
  imageUrl: string
}
interface featureItem {
  title: string
  description: string
}
export interface BookSectionData {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  image: string
  features: {
    forWhom: featureItem
    goals: featureItem
    about: featureItem
  }
}
export interface HomeBannerData {
  title: string;
  subtitle: string;
  ctaText: string; 
  backgroundImageUrl: string;
  bannerImageUrl: string;
}
