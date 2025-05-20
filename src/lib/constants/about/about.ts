import { IconBullet } from "@/lib/interfaces/info";
import { FaChalkboardTeacher } from "react-icons/fa";
import {
  FaBullhorn,
  FaChild,
  FaHeart,
  FaKey,
  FaLightbulb,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa6";
import { MdDiversity3, MdOutlineHandshake } from "react-icons/md";
import { SiTrustpilot } from "react-icons/si";

// 🎯 GOALS
export const goals: IconBullet[] = [
  {
    icon: MdOutlineHandshake,
    title: "Expand Access to Support",
    description:
      "Provide free and affordable mental health services through peer-led groups, virtual counseling, and partnerships with licensed professionals—ensuring no one is excluded due to cost or circumstance.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Educate and Empower",
    description:
      "Deliver evidence-based, culturally sensitive resources, workshops, and awareness campaigns that equip individuals and communities to manage and prioritize their mental health.",
  },
  {
    icon: FaUsers,
    title: "Build Inclusive Communities",
    description:
      "Create safe, welcoming spaces for BIPOC, LGBTQ+, immigrant, and underserved populations with programming designed around cultural competence and respect.",
  },
  {
    icon: FaBullhorn,
    title: "Normalize Mental Health Conversations",
    description:
      "Break down stigma by amplifying authentic stories, lived experiences, and community voices through media, events, and public campaigns.",
  },
  {
    icon: FaChild,
    title: "Support Early Intervention",
    description:
      "Develop youth-centered programs that equip students with language, tools, and resilience strategies to address mental health challenges early on.",
  },
];

// 🌱 CORE VALUES
export const coreValues: IconBullet[] = [
  {
    icon: FaHeart,
    title: "Compassion Without Condition",
    description:
      "We meet individuals exactly where they are, offering empathy, patience, and non-judgmental support regardless of their past or present.",
  },
  {
    icon: FaKey,
    title: "Access Is a Right, Not a Privilege",
    description:
      "Mental health care is a fundamental human right. We ensure services are accessible to all—regardless of income or identity.",
  },
  {
    icon: MdDiversity3,
    title: "Equity and Representation Matter",
    description:
      "Our staff, leadership, and programs reflect the diverse communities we serve—ensuring every voice is represented and respected.",
  },
  {
    icon: FaUserCheck,
    title: "Lived Experience Is Expertise",
    description:
      "We center those who’ve personally navigated mental health challenges—honoring their stories as critical to shaping effective, empathetic support.",
  },
  {
    icon: SiTrustpilot,
    title: "Transparency Builds Trust",
    description:
      "We openly share how we operate—from funding and programs to challenges and improvements—ensuring integrity across every level.",
  },
  {
    icon: FaLightbulb,
    title: "Empowerment Over Pathologizing",
    description:
      "We uplift individual agency and strengths, rejecting reductive labels and affirming the capacity for growth, choice, and recovery.",
  },
];
