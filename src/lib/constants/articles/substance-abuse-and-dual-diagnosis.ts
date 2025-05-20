import { ArticleContent } from "@/lib/interfaces/articles";

export const substanceAbuseAndDualDiagnosis: ArticleContent = {
  image:
    "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=600&q=60",
  preface: [
    "Substance use disorders frequently coexist with mental health disorders, complicating diagnosis and treatment.",
    "This dual diagnosis requires a comprehensive approach to address both conditions simultaneously.",
    "Understanding the cycle of self-medication and trauma’s role is essential for effective recovery.",
  ],
  sections: [
    {
      title: "Understanding Dual Diagnosis",
      paragraphs: [
        {
          topic: "What is dual diagnosis?",
          supporting: [
            "Dual diagnosis refers to the co-occurrence of a mental health disorder and a substance use disorder in the same individual.",
            "Many people use substances to cope with symptoms of mental illness, creating a complex interplay.",
            "This interplay can mask symptoms, complicate treatment, and increase risk of relapse.",
          ],
          concluding:
            "Recognizing dual diagnosis is critical for successful, long-term recovery.",
        },
      ],
    },
    {
      title: "The Cycle of Self-Medication",
      paragraphs: [
        {
          topic: "How addiction masks mental illness",
          supporting: [
            "Individuals may use drugs or alcohol to temporarily relieve symptoms such as anxiety, depression, or trauma.",
            "This relief is short-lived and often exacerbates underlying issues over time.",
            "Self-medication perpetuates a harmful cycle where substance use worsens mental health symptoms.",
          ],
          concluding:
            "Breaking this cycle requires integrated treatment that addresses both conditions.",
        },
      ],
    },
    {
      title: "Integrated Treatment Approaches",
      paragraphs: [
        {
          topic: "Effective strategies for dual diagnosis",
          supporting: [
            "Integrated treatment combines mental health and addiction therapies in a coordinated plan.",
            "Cognitive Behavioral Therapy (CBT) and Medication-Assisted Treatment (MAT) are common components.",
            "Harm reduction strategies help manage use while encouraging safer behaviors.",
            "Relapse prevention plans and trauma-informed care are essential elements.",
          ],
          concluding:
            "Integrated treatment improves engagement, reduces relapse, and supports holistic healing.",
        },
      ],
    },
    {
      title: "The Role of Trauma in Substance Abuse",
      paragraphs: [
        {
          topic: "Trauma as an underlying factor",
          supporting: [
            "Many individuals with dual diagnosis have histories of trauma or adverse childhood experiences.",
            "Trauma can intensify mental illness symptoms and increase vulnerability to addiction.",
            "Trauma-informed care emphasizes safety, trust, and empowerment during treatment.",
          ],
          concluding:
            "Addressing trauma is vital to breaking the cycle of addiction and promoting recovery.",
        },
      ],
    },
  ],
  conclusion: [
    "Dual diagnosis is a complex but treatable condition requiring integrated care.",
    "Understanding the cycle of self-medication and the impact of trauma leads to better outcomes.",
    "Coordinated mental health and substance use treatment provides the best chance for sustainable recovery.",
  ],
  references: [
    {
      title: "SAMHSA: Understanding Dual Diagnosis",
      url: "https://www.samhsa.gov/disorders/co-occurring",
    },
    {
      title: "National Institute on Drug Abuse: Dual Diagnosis",
      url: "https://www.drugabuse.gov/publications/drugfacts/comorbidity-addiction-mental-illness",
    },
    {
      title: "Psychology Today: Treating Dual Diagnosis",
      url: "https://www.psychologytoday.com/us/basics/dual-diagnosis",
    },
  ],
};
