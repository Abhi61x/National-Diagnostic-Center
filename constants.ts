import { Offer, TestPackage, Testimonial } from "./types";

export const PACKAGES: TestPackage[] = [
  {
    id: '1',
    title: 'Essential Health Check',
    category: 'Full Body Checkup',
    price: 999,
    originalPrice: 1999,
    parameters: 45,
    features: ['CBC (Complete Blood Count)', 'Liver Function Test', 'Kidney Function Test', 'Blood Sugar Fasting'],
    recommendedFor: 'Adults 20-40 yrs',
    isPopular: true,
  },
  {
    id: '2',
    title: 'Advanced Full Body',
    category: 'Full Body Checkup',
    price: 2499,
    originalPrice: 4500,
    parameters: 72,
    features: ['Thyroid Profile', 'Lipid Profile', 'Vitamin D & B12', 'HbA1c', 'Iron Studies'],
    recommendedFor: 'Adults 40+ yrs',
    isPopular: true,
  },
  {
    id: '3',
    title: 'Diabetes Screening',
    category: 'Preventive Care',
    price: 599,
    originalPrice: 1200,
    parameters: 15,
    features: ['HbA1c', 'Glucose Fasting', 'Glucose PP', 'Urine Routine'],
    recommendedFor: 'Diabetic Patients',
    isPopular: false,
  },
  {
    id: '4',
    title: 'Complete Blood Count',
    category: 'Blood Test',
    price: 399,
    originalPrice: 600,
    parameters: 22,
    features: ['Hemoglobin', 'RBC', 'WBC', 'Platelets'],
    recommendedFor: 'General Fever/Infection',
    isPopular: false,
  },
  {
    id: '5',
    title: 'Senior Citizen Care',
    category: 'Preventive Care',
    price: 3499,
    originalPrice: 6000,
    parameters: 85,
    features: ['Cardiac Risk Markers', 'Bone Health', 'Detailed Urine Analysis', 'Liver & Kidney Advanced'],
    recommendedFor: 'Seniors 60+',
    isPopular: false,
  },
];

export const OFFERS: Offer[] = [
  {
    id: 'offer-1',
    title: 'Family Wellness Discount',
    description: 'Book for 3 or more family members and get flat 20% extra off on total bill.',
    code: 'FAMILY20',
    discountPercentage: 20,
    expiryDate: 'Limited Time',
    bgGradient: 'from-orange-400 to-pink-500',
  },
  {
    id: 'offer-2',
    title: 'Early Bird Special',
    description: 'Book any test between 8 AM - 10 AM and avail free home collection.',
    code: 'EARLYBIRD',
    discountPercentage: 100, // Conceptually 100% off delivery
    expiryDate: 'Daily',
    bgGradient: 'from-blue-400 to-indigo-500',
  },
  {
    id: 'offer-3',
    title: 'Vitamin Plus Pack',
    description: 'Get Vitamin D & B12 combo at lowest price of the year.',
    code: 'VITAPLUS',
    discountPercentage: 50,
    expiryDate: 'Ends this Sunday',
    bgGradient: 'from-emerald-400 to-teal-500',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Sharma',
    role: 'Mother of two',
    content: 'The home collection service was punctual and very hygienic. The phlebotomist was gentle with my kids.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Rajesh Kumar',
    role: 'IT Professional',
    content: 'Got my reports on WhatsApp within 6 hours. Super convenient and professional service.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Anita Desai',
    role: 'Regular Patient',
    content: 'Cleanest lab I have visited in the city. The staff is very polite and helpful.',
    rating: 4,
  },
];

export const CONTACT_INFO = {
  phone: "+91 75059 32068",
  whatsapp: "917505932068", // Format for wa.me link
  address: "Shop number 3, Ring Road, Tedi Pulia, Vasundhara Vihar Gate, Lucknow",
  email: "care@nationaldiagnostic.in",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.913674696879!2d80.956!3d26.878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUyJzQ4LjAiTiA4MMKwNTcnMjEuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin", // Generic placeholder for Lucknow area, ideally would use specific coords if known
  hours: {
    weekdays: "8:00 AM - 9:30 PM",
    sunday: "8:00 AM - 9:30 PM",
    emergency: "24x7 Open"
  }
};