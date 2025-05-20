import { ArticleContent } from "@/lib/interfaces/articles";

export const understandingPTSD: ArticleContent = {
  image:
    "https://images.unsplash.com/photo-1588776814486-6df6dc1e38fa?auto=format&fit=crop&w=600&q=60",
  preface: [
    "Post-Traumatic Stress Disorder (PTSD) develops after exposure to a traumatic event, profoundly impacting mental and physical health.",
    "This article provides a detailed overview of PTSD symptoms, common triggers, and evidence-based treatments.",
    "Understanding PTSD helps reduce stigma and encourages those affected to seek appropriate care.",
  ],
  sections: [
    {
      title: "The Neurological and Emotional Impact of Trauma",
      paragraphs: [
        {
          topic: "How trauma affects the brain",
          supporting: [
            "Trauma alters brain regions involved in fear response, memory, and emotional regulation, such as the amygdala, hippocampus, and prefrontal cortex.",
            "These changes can cause heightened alertness, intrusive memories, and difficulty distinguishing safe from threatening situations.",
            "The nervous system may become stuck in a state of hyperarousal or dissociation as a protective mechanism.",
            "Understanding these biological changes underscores why PTSD symptoms are not simply a matter of willpower.",
          ],
          concluding:
            "Trauma reshapes the brain, impacting behavior and emotional health.",
        },
      ],
    },
    {
      title: "Recognizing PTSD Symptoms and Triggers",
      paragraphs: [
        {
          topic: "Common manifestations",
          supporting: [
            "Intrusive memories or flashbacks of the traumatic event that disrupt daily life.",
            "Avoidance of places, people, or activities that remind one of the trauma.",
            "Negative changes in mood or thoughts, including feelings of guilt, shame, or detachment.",
            "Heightened arousal symptoms such as irritability, difficulty sleeping, or hypervigilance.",
            "Triggers vary widely and can include sounds, smells, or situations that recall the trauma.",
          ],
          concluding:
            "Identifying symptoms and triggers is essential for targeted treatment.",
        },
      ],
    },
    {
      title: "Effective Treatment Approaches",
      paragraphs: [
        {
          topic: "Therapies and healing modalities",
          supporting: [
            "Eye Movement Desensitization and Reprocessing (EMDR) helps process traumatic memories and reduce their emotional impact.",
            "Trauma-focused cognitive behavioral therapy (TF-CBT) assists in reshaping negative thought patterns related to the trauma.",
            "Somatic therapies focus on body awareness and releasing trauma stored in muscle tension and nervous system dysregulation.",
            "Medication may be prescribed to manage symptoms such as anxiety or depression alongside therapy.",
            "A multidisciplinary approach tailored to individual needs yields the best outcomes.",
          ],
          concluding:
            "Multiple evidence-based treatments exist to support recovery from PTSD.",
        },
      ],
    },
    {
      title: "Building Safety and Support",
      paragraphs: [
        {
          topic: "Importance of environment and relationships",
          supporting: [
            "Creating a safe, predictable environment reduces triggers and supports healing.",
            "Supportive relationships with family, friends, or peer groups provide emotional validation and reduce isolation.",
            "Education about PTSD helps loved ones understand and respond appropriately to symptoms.",
            "Self-care practices and coping skills empower individuals to manage stress effectively.",
          ],
          concluding:
            "A strong support system is crucial for long-term recovery.",
        },
      ],
    },
  ],
  conclusion: [
    "PTSD is a complex condition that profoundly affects the brain, emotions, and behavior.",
    "Recognizing symptoms early and accessing evidence-based treatments can significantly improve quality of life.",
    "Healing is possible with the right combination of therapy, support, and self-care.",
  ],
  references: [
    {
      title:
        "National Institute of Mental Health: Post-Traumatic Stress Disorder",
      url: "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd",
    },
    {
      title: "American Psychological Association: Understanding PTSD",
      url: "https://www.apa.org/topics/ptsd",
    },
    {
      title: "U.S. Department of Veterans Affairs: PTSD Treatment",
      url: "https://www.ptsd.va.gov/understand_tx/tx_basics.asp",
    },
  ],
};
