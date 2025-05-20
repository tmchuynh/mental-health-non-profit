import {
  FutureVolunteeringEvent,
  PastVolunteeringEvent,
} from "@/lib/interfaces/events";

export const pastVolunteeringEvents: PastVolunteeringEvent[] = [
  {
    name: "Healing Spaces Outreach Weekend",
    date: "2024-06-15",
    totalVolunteers: 160,
    hoursContributed: 1280,
    citiesInvolved: 7,
    impactSummary:
      "Volunteers came together to revitalize community centers and shelters, creating safer, calming environments for mental health recovery.",
    outcomes: [
      "6 centers received full interior repainting with calming colors",
      "Meditation rooms and trauma-safe spaces were created in 3 shelters",
      "Distributed 400 wellness kits to unhoused individuals",
      "Partnered with art therapists to create healing murals",
    ],
  },
  {
    name: "Community Listening Circles Facilitator Training",
    date: "2023-11-04",
    totalVolunteers: 45,
    hoursContributed: 630,
    citiesInvolved: 3,
    impactSummary:
      "We trained volunteers in trauma-informed listening, equipping them to lead peer-led support circles in local neighborhoods.",
    outcomes: [
      "Established 12 active listening circles across Southern California",
      "Improved social connectedness in underserved urban areas",
      "Reduced waitlists for clinical mental health services by 9% regionally",
      "Received overwhelmingly positive testimonials from attendees",
    ],
  },
  {
    name: "Youth Mentor Orientation Series",
    date: "2022-08-20",
    totalVolunteers: 80,
    hoursContributed: 950,
    citiesInvolved: 5,
    impactSummary:
      "Volunteers were trained to become mental wellness mentors for local teens, helping build resilience and reduce isolation among youth.",
    outcomes: [
      "Paired 65 teens with trained mentors within 3 months",
      "Hosted 9 wellness retreats co-led by mentors",
      "Improved student attendance and self-esteem scores (tracked via partner schools)",
      "Created lasting connections between teens and adult role models",
    ],
  },
];

export const futureVolunteeringEvents: FutureVolunteeringEvent[] = [
  {
    name: "Mental Health First Responder Training Series",
    dateRange: "2025-08-10 to 2025-08-20",
    openSpots: 75,
    requirements: [
      "Ages 18+",
      "Commit to 2 full-day training sessions",
      "Background check required for client-facing roles",
    ],
    goals: [
      "Equip volunteers with mental health crisis de-escalation skills",
      "Build a county-wide network of certified non-clinical support responders",
      "Reduce emergency room dependency for low-risk mental health cases",
    ],
    milestones: [
      "25 volunteers trained = 1 full mobile response team in Orange County",
      "50 volunteers trained = Launch support hotline with human backup",
      "75 volunteers trained = Expand to partner cities by Q4",
    ],
  },
  {
    name: "Back-to-School Emotional Wellness Kits Drive",
    dateRange: "2025-07-01 to 2025-07-30",
    openSpots: 200,
    requirements: [
      "Volunteers must attend 1 orientation webinar",
      "Flexible shift hours available (in-person & remote)",
      "Able to assemble, organize, or distribute physical kits",
    ],
    goals: [
      "Distribute 5,000 school wellness kits across California",
      "Ensure youth return to school with emotional support tools",
      "Integrate affirmations, coping cards, and mindfulness guides into student lives",
    ],
    milestones: [
      "1,000 kits = Serve 10 schools in underserved districts",
      "3,000 kits = Cover all Title I elementary schools in Orange County",
      "5,000 kits = Expand into Los Angeles and Riverside districts",
    ],
  },
  {
    name: "Mental Health Advocacy Day 2025",
    dateRange: "2025-10-05",
    openSpots: 120,
    requirements: [
      "Sign up by September 15",
      "Attend virtual advocacy prep session",
      "Must be comfortable engaging in civic discussions or sharing stories",
    ],
    goals: [
      "Send 150+ volunteers to state capitol to meet with lawmakers",
      "Share firsthand stories about therapy access and funding needs",
      "Push for 3 legislative changes on insurance equity and school mental health",
    ],
    milestones: [
      "30 volunteers = Community testimony presented at health committee",
      "80 volunteers = Full delegation meets with state senators",
      "120 volunteers = Media coverage and viral awareness campaign launched",
    ],
  },
];
