export interface TestPackage {
  id: string;
  title: string;
  category: 'Blood Test' | 'Full Body Checkup' | 'Preventive Care';
  price: number;
  originalPrice: number;
  parameters: number;
  features: string[];
  recommendedFor: string;
  isPopular?: boolean;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  code: string;
  discountPercentage: number;
  expiryDate: string;
  bgGradient: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}