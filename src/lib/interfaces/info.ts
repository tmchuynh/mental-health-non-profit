import { IconType } from "react-icons/lib";

export interface IconBullet {
  icon: IconType;
  title: string;
  description: string;
}

export interface FeaturedDonor {
  name: string;
  quote: string;
  image: string;
  representative: string;
  type: "Foundation" | "Corporate" | "Trust" | "Individual";
}

export interface ImpactStory {
  title: string;
  subtitle: string;
  background: string;
  role: string;
  outcome: string[];
  quote: string;
}

export interface KeyStatistic {
  title: string;
  value: string;
  description?: string;
}

export interface CompanyMilestone {
  year: number;
  title: string;
  highlights: string[];
}

export interface StaffMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export interface StaffCategory {
  category: string;
  team: StaffMember[];
  quotes?: StaffQuote[];
  introduction?: string;
}

export interface StaffQuote {
  name: string;
  title: string;
  text: string;
  image: string;
}

export interface Partner {
  name: string;
  description: string;
}

export interface PartnerCategory {
  category: string;
  description: string;
  partners: Partner[];
}

export interface HelplineEntry {
  name: string;
  phone: string;
  website: string;
  description: string;
  availability: string;
}