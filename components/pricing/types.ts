export interface PricingPlan {
  name: string;
  price: string;  // Keep as string since we're displaying it
  isPopular?: boolean;
  features: string[];
} 