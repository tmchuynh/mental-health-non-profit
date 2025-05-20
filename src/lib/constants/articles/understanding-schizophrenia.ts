import { ArticleContent } from "@/lib/interfaces/articles";

export const understandingSchizophrenia: ArticleContent = {
  image:
    "https://images.unsplash.com/photo-1624053492202-03eb9c98b19c?auto=format&fit=crop&w=600&q=60",
  preface: [
    "Schizophrenia is often misrepresented in media and public perception, leading to stigma and misunderstanding.",
    "This article aims to clarify what schizophrenia really is, based on scientific evidence and clinical experience.",
    "Early diagnosis, treatment adherence, and strong social support can greatly improve outcomes for those living with schizophrenia.",
  ],
  sections: [
    {
      title: "What is Schizophrenia?",
      paragraphs: [
        {
          topic: "Defining the disorder",
          supporting: [
            "Schizophrenia is a chronic mental disorder affecting how a person thinks, feels, and behaves.",
            "It is characterized by episodes of psychosis, including hallucinations and delusions.",
            "Despite common myths, it is not a split or multiple personality disorder.",
            "Symptoms typically appear in late adolescence or early adulthood.",
          ],
          concluding:
            "Understanding its true nature is the first step to compassion and effective care.",
        },
      ],
    },
    {
      title: "Symptoms and Manifestations",
      paragraphs: [
        {
          topic: "Positive, negative, and cognitive symptoms",
          supporting: [
            "Positive symptoms include hallucinations (seeing or hearing things that aren’t there) and delusions (false beliefs).",
            "Negative symptoms involve reduced emotional expression, lack of motivation, and social withdrawal.",
            "Cognitive symptoms affect memory, attention, and executive function, impacting daily life and work.",
            "Symptom severity and combination vary widely among individuals.",
          ],
          concluding:
            "Treatment plans must be tailored to address this symptom diversity.",
        },
      ],
    },
    {
      title: "Causes and Risk Factors",
      paragraphs: [
        {
          topic: "Biological and environmental influences",
          supporting: [
            "Schizophrenia results from a combination of genetic vulnerability and environmental triggers.",
            "Neurochemical imbalances, particularly involving dopamine and glutamate, play a key role.",
            "Early life stress, prenatal exposure to infection, and substance abuse can increase risk.",
            "No single cause explains the disorder; it’s a complex interaction of factors.",
          ],
          concluding:
            "Ongoing research continues to deepen understanding of these mechanisms.",
        },
      ],
    },
    {
      title: "Treatment and Support",
      paragraphs: [
        {
          topic: "Medications and psychosocial interventions",
          supporting: [
            "Antipsychotic medications help reduce psychotic symptoms and prevent relapse.",
            "Psychosocial therapies, including cognitive behavioral therapy and social skills training, support functioning.",
            "Family education and peer support are critical for sustained recovery.",
            "Early intervention programs have proven benefits for long-term outcomes.",
          ],
          concluding:
            "A comprehensive, individualized approach optimizes quality of life.",
        },
      ],
    },
  ],
  conclusion: [
    "Schizophrenia is a serious but manageable illness with proper treatment and support.",
    "Combating stigma through education improves care and community integration.",
    "Continued advances in research and therapy offer hope for better futures.",
  ],
  references: [
    {
      title: "National Institute of Mental Health: Schizophrenia",
      url: "https://www.nimh.nih.gov/health/topics/schizophrenia",
    },
    {
      title: "Schizophrenia & Related Disorders Alliance of America",
      url: "https://sardaa.org/about-schizophrenia/",
    },
    {
      title: "Mayo Clinic: Schizophrenia",
      url: "https://www.mayoclinic.org/diseases-conditions/schizophrenia/symptoms-causes/syc-20354443",
    },
  ],
};
