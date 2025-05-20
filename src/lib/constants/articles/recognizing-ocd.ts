import { ArticleContent } from "@/lib/interfaces/articles";

export const recognizingOCD: ArticleContent = {
  image:
    "https://images.unsplash.com/photo-1610395214731-75033ac223ff?auto=format&fit=crop&w=600&q=60",
  preface: [
    "Obsessive-Compulsive Disorder (OCD) is frequently misunderstood and stigmatized.",
    "This article aims to clarify the real symptoms and cognitive patterns involved in OCD.",
    "It also highlights effective treatments, especially evidence-based therapies like Exposure and Response Prevention (ERP).",
  ],
  sections: [
    {
      title: "Understanding OCD Beyond Stereotypes",
      paragraphs: [
        {
          topic: "What OCD really is",
          supporting: [
            "OCD is characterized by intrusive, unwanted thoughts (obsessions) that cause significant anxiety or distress.",
            "These obsessions lead to repetitive behaviors or mental acts (compulsions) intended to reduce the distress or prevent feared outcomes.",
            "It is not just about cleanliness or perfectionism, which are common misconceptions.",
            "OCD symptoms can involve fears of harm, contamination, symmetry, taboo thoughts, or a need for certainty.",
          ],
          concluding:
            "Recognizing the diverse manifestations of OCD is essential for proper diagnosis.",
        },
      ],
    },
    {
      title: "The Neuroscience and Cognitive Patterns of OCD",
      paragraphs: [
        {
          topic: "Brain mechanisms involved",
          supporting: [
            "OCD involves abnormal activity in brain circuits that regulate error detection, fear response, and habit formation, particularly in the cortico-striato-thalamo-cortical loop.",
            "Neurotransmitter imbalances, especially serotonin dysregulation, play a key role.",
            "Cognitive patterns include inflated responsibility, overestimation of threat, and intolerance of uncertainty.",
            "These factors drive the cycle of obsession and compulsion, making it difficult for individuals to break free without intervention.",
          ],
          concluding:
            "Understanding OCD's neurological and cognitive basis reduces stigma and guides treatment.",
        },
      ],
    },
    {
      title:
        "Evidence-Based Treatments: Exposure and Response Prevention (ERP)",
      paragraphs: [
        {
          topic: "How ERP works",
          supporting: [
            "ERP is a type of cognitive-behavioral therapy that involves gradual, controlled exposure to feared thoughts or situations without engaging in compulsive behaviors.",
            "Over time, this reduces the anxiety linked to obsessions and breaks the compulsive cycle.",
            "ERP is considered the gold standard treatment and has a strong evidence base supporting its effectiveness.",
            "Medication, such as selective serotonin reuptake inhibitors (SSRIs), can complement therapy but is rarely sufficient alone.",
            "Therapists tailor ERP to individual needs, emphasizing gradual progress and coping skills.",
          ],
          concluding:
            "ERP empowers individuals to regain control over OCD symptoms and improve quality of life.",
        },
      ],
    },
    {
      title: "Breaking the Stigma and Seeking Help",
      paragraphs: [
        {
          topic: "Why stigma persists and how to combat it",
          supporting: [
            "Misconceptions about OCD trivialize the disorder and discourage people from seeking help.",
            "Education about the true nature of OCD helps reduce shame and misunderstandings.",
            "Early diagnosis and treatment significantly improve outcomes.",
            "Support from family, friends, and mental health professionals is critical.",
            "Access to specialized care remains a challenge, highlighting the need for awareness and advocacy.",
          ],
          concluding:
            "Breaking stigma and promoting understanding leads to better support and recovery.",
        },
      ],
    },
  ],
  conclusion: [
    "OCD is a complex, serious disorder that goes beyond common stereotypes.",
    "Recognizing its symptoms and understanding its neurological basis is key to effective treatment.",
    "Evidence-based therapies like ERP provide hope for managing and overcoming OCD.",
    "Reducing stigma encourages more people to seek the help they need.",
  ],
  references: [
    {
      title: "International OCD Foundation: What is OCD?",
      url: "https://iocdf.org/about-ocd/",
    },
    {
      title:
        "American Psychological Association: Obsessive-Compulsive Disorder",
      url: "https://www.apa.org/topics/ocd",
    },
    {
      title:
        "National Institute of Mental Health: Obsessive-Compulsive Disorder",
      url: "https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd",
    },
  ],
};
