import { ServiceCategory } from "../interfaces/services";

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Peer Support Groups",
    description:
      "Confidential, community-based support circles led by trained peers who have lived experience with mental health challenges.",
    features: [
      "Weekly themed support sessions",
      "LGBTQ+ and BIPOC affinity groups",
      "Drop-in and recurring options",
    ],
  },
  {
    name: "Workshops & Education",
    description:
      "Interactive educational events designed to equip participants with practical tools for emotional regulation, self-care, and stress management.",
    features: [
      "Mental Health First Aid certification",
      "Self-Care Bootcamps",
      "Anxiety & Depression 101",
    ],
  },
  {
    name: "1-on-1 Counseling",
    description:
      "Affordable, private sessions with licensed professionals or supervised trainees, offered virtually or in select locations.",
    features: [
      "Sliding scale pricing",
      "Virtual and in-person options",
      "Trauma-informed and culturally competent care",
    ],
  },
  {
    name: "Youth Outreach Programs",
    description:
      "School and community-based programs providing youth with education, mentorship, and early intervention resources.",
    features: [
      "Mindfulness for Teens workshops",
      "Youth mentor matching",
      "School partnership programs",
    ],
  },
];
