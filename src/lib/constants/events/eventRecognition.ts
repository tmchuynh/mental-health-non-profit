interface FundraisingRecognitionTier {
  tierName: string;
  minDonation: number;
  maxDonation?: number;
  perks: string[];
  specialMention: string;
}

interface EventRecognition {
  eventName: string;
  tiers: FundraisingRecognitionTier[];
}

export const fundraisingRecognition: EventRecognition[] = [
  {
    eventName: "Light the Path Walkathon",
    tiers: [
      {
        tierName: "Pathfinder",
        minDonation: 1,
        maxDonation: 99,
        perks: [
          "Thank-you email with digital badge",
          "Name listed on donor wall (online only)",
          "Exclusive event wallpaper download",
        ],
        specialMention: "You lit the first step forward.",
      },
      {
        tierName: "Trailblazer",
        minDonation: 100,
        maxDonation: 499,
        perks: [
          "Personalized digital certificate",
          "Name displayed at walkathon banners",
          "Free entry into a mental wellness workshop",
        ],
        specialMention: "Your support paved the way for healing.",
      },
      {
        tierName: "Beacon",
        minDonation: 500,
        maxDonation: 999,
        perks: [
          "Limited edition event T-shirt",
          "Name included in annual report",
          "VIP invitation to post-event reception",
        ],
        specialMention: "Your generosity became a guiding light.",
      },
      {
        tierName: "Luminary",
        minDonation: 1000,
        perks: [
          "Feature in video thank-you montage",
          "Private call with a program leader or beneficiary",
          "Commemorative glass plaque sent via mail",
        ],
        specialMention: "You helped illuminate thousands of lives.",
      },
    ],
  },
  {
    eventName: "Voices of Hope Charity Gala",
    tiers: [
      {
        tierName: "Listener",
        minDonation: 1,
        maxDonation: 249,
        perks: [
          "Digital thank-you postcard",
          "Gala name tag with supporter ribbon",
        ],
        specialMention: "You heard the call and responded.",
      },
      {
        tierName: "Advocate",
        minDonation: 250,
        maxDonation: 999,
        perks: [
          "Printed recognition in gala program",
          "Invitation to exclusive donor Q&A panel",
          "Framed thank-you letter from InnerLight Elevation",
        ],
        specialMention: "Your voice strengthened our cause.",
      },
      {
        tierName: "Visionary",
        minDonation: 1000,
        perks: [
          "Front-row gala seating and dinner experience",
          "Custom engraved gift",
          "Special introduction during gala speech",
        ],
        specialMention: "Your vision shapes a better tomorrow.",
      },
    ],
  },
  {
    eventName: "Kindness for Kids School Drive",
    tiers: [
      {
        tierName: "Kindness Seed",
        minDonation: 1,
        maxDonation: 49,
        perks: [
          "Thank-you badge for social sharing",
          "Name included in email newsletter",
        ],
        specialMention: "You planted a seed of support.",
      },
      {
        tierName: "Empowerer",
        minDonation: 50,
        maxDonation: 199,
        perks: [
          "Hand-drawn thank-you from a student",
          "Shoutout on social media",
        ],
        specialMention: "Your kindness helped students thrive.",
      },
      {
        tierName: "Champion for Children",
        minDonation: 200,
        perks: [
          "Name listed on special donor board at partner schools",
          "Invitation to school assembly or livestream",
          "Signed certificate from school principals",
        ],
        specialMention: "You became a hero to future generations.",
      },
    ],
  },
];
