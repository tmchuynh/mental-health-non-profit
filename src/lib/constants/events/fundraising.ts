import {
  FutureFundraisingEvent,
  PastFundraisingEvent,
} from "@/lib/interfaces/events";

export const pastFundraisingEvents: PastFundraisingEvent[] = [
  {
    name: "Light the Path Walkathon",
    date: "2024-09-12",
    totalRaised: 124000,
    contributors: 890,
    statesInvolved: 12,
    impact:
      "Funds were used to expand InnerLight’s free peer counseling program, resulting in over 4,000 sessions completed and a 23% increase in community mental health accessibility.",
    donorTiers: [
      { tierName: "Pathfinder", donorsCount: 520 },
      { tierName: "Trailblazer", donorsCount: 260 },
      { tierName: "Beacon", donorsCount: 85 },
      { tierName: "Luminary", donorsCount: 25 },
    ],
  },
  {
    name: "Voices of Hope Charity Gala",
    date: "2023-11-04",
    totalRaised: 212500,
    contributors: 330,
    statesInvolved: 5,
    impact:
      "Proceeds funded the opening of two new community healing centers in underserved neighborhoods, providing trauma-informed therapy and group support programs.",
    donorTiers: [
      { tierName: "Listener", donorsCount: 110 },
      { tierName: "Advocate", donorsCount: 150 },
      { tierName: "Visionary", donorsCount: 70 },
    ],
  },
  {
    name: "Kindness for Kids School Drive",
    date: "2022-08-01",
    totalRaised: 78600,
    contributors: 670,
    statesInvolved: 8,
    impact:
      "Provided 6,200 wellness kits with emotional support materials to elementary students in low-income school districts across California and Arizona.",
    donorTiers: [
      { tierName: "Kindness Seed", donorsCount: 410 },
      { tierName: "Empowerer", donorsCount: 200 },
      { tierName: "Champion for Children", donorsCount: 60 },
    ],
  },
];

export const futureFundraisingEvents: FutureFundraisingEvent[] = [
  {
    name: "Illuminate Hope Virtual Challenge",
    dateRange: "2025-08-01 to 2025-08-31",
    targetAmount: 150000,
    openToPublic: true,
    requirements: [
      "Sign up online",
      "Log miles through the InnerLight app",
      "Share progress on social media with #IlluminateHope",
    ],
    goals: [
      "Raise funds to launch 24/7 emotional support text line",
      "Engage 1,500+ virtual participants from all 50 states",
      "Build national awareness around accessible peer support",
    ],
    milestones: [
      "50K raised = Infrastructure for SMS-based counseling",
      "100K raised = Hire and train 40 part-time responders",
      "150K raised = National campaign expansion and media rollout",
    ],
    donorTiers: [
      {
        tierName: "Igniter",
        minDonation: 25,
        perks: [
          "Personalized thank-you badge",
          "Social media shoutout",
          "Discount on InnerLight merch",
        ],
        recognitionLevel: "Bronze",
      },
      {
        tierName: "Fueler",
        minDonation: 100,
        perks: [
          "Custom digital badge & wallpaper pack",
          "Virtual meet-and-greet with mental health advocate",
          "Name in annual campaign thank-you roll",
        ],
        recognitionLevel: "Silver",
      },
      {
        tierName: "Torchbearer",
        minDonation: 500,
        perks: [
          "Limited edition challenge hoodie",
          "Recognition in campaign highlight reel",
          "Custom message from InnerLight founder",
        ],
        recognitionLevel: "Gold",
      },
      {
        tierName: "Flamekeeper",
        minDonation: 1000,
        perks: [
          "VIP donor box mailed with curated self-care items",
          "Featured on donor spotlight page",
          "Honorary listing on national campaign banner",
        ],
        recognitionLevel: "Platinum",
      },
    ],
  },
  {
    name: "Voices That Heal Concert for Awareness",
    dateRange: "2025-10-12",
    targetAmount: 250000,
    openToPublic: true,
    requirements: [
      "Purchase digital ticket or make a minimum donation",
      "Optional in-person attendance in Los Angeles",
      "Sign the Mental Health Pledge to unlock exclusive access",
    ],
    goals: [
      "Raise funds for InnerLight’s youth suicide prevention initiative",
      "Reach 2 million people via livestream and partners",
      "Provide 10K emergency therapy grants by year-end",
    ],
    milestones: [
      "75K = Launch emergency grant application portal",
      "150K = Expand suicide prevention into 10 high-risk districts",
      "250K = Fund media literacy curriculum in 200+ schools",
    ],
    donorTiers: [
      {
        tierName: "Echo",
        minDonation: 10,
        perks: ["Digital pass to event", "Shoutout in livestream pre-show"],
        recognitionLevel: "Bronze",
      },
      {
        tierName: "Voice",
        minDonation: 100,
        perks: [
          "Event poster mailed to your home",
          "Name featured in closing credits roll",
          "Access to behind-the-scenes interviews",
        ],
        recognitionLevel: "Silver",
      },
      {
        tierName: "Amplifier",
        minDonation: 500,
        perks: [
          "Signed artist memorabilia",
          "VIP virtual backstage pass",
          "Year-round InnerLight insider access",
        ],
        recognitionLevel: "Gold",
      },
      {
        tierName: "Legend",
        minDonation: 1000,
        perks: [
          "All-access in-person seating (or private stream link)",
          "Recognition on digital billboard in Times Square",
          "Lifetime Luminary Society membership",
        ],
        recognitionLevel: "Platinum",
      },
    ],
  },
];
