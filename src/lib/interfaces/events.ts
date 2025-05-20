export interface DonorTierBreakdown {
  tierName: string;
  donorsCount: number;
}

export interface PastFundraisingEvent {
  name: string;
  date: string;
  totalRaised: number;
  contributors: number;
  statesInvolved: number;
  impact: string;
  donorTiers: DonorTierBreakdown[];
}

export interface FutureFundraisingEvent {
  name: string;
  dateRange: string;
  targetAmount: number;
  openToPublic: boolean;
  requirements: string[];
  goals: string[];
  milestones: string[];
  donorTiers: {
    tierName: string;
    minDonation: number;
    perks: string[];
    recognitionLevel: string;
  }[];
}

export interface PastVolunteeringEvent {
  name: string;
  date: string;
  totalVolunteers: number;
  hoursContributed: number;
  citiesInvolved: number;
  impactSummary: string;
  outcomes: string[];
}

export interface FutureVolunteeringEvent {
  name: string;
  dateRange: string;
  openSpots: number;
  requirements: string[];
  goals: string[];
  milestones: string[];
}
