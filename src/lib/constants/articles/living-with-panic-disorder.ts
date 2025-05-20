import { ArticleContent } from "@/lib/interfaces/articles";

export const livingWithPanicDisorder: ArticleContent = {
  image:
    "https://images.unsplash.com/photo-1639601831549-6e03e83c1f6a?auto=format&fit=crop&w=600&q=60",
  preface: [
    "Panic disorder involves sudden, intense episodes of fear that can disrupt daily life and cause significant distress.",
    "Understanding the physiological and psychological aspects of panic attacks empowers individuals to manage their symptoms effectively.",
    "This article covers the neurological basis of panic, treatment options like exposure therapy, and practical coping strategies.",
  ],
  sections: [
    {
      title: "What is Panic Disorder?",
      paragraphs: [
        {
          topic: "Defining the disorder",
          supporting: [
            "Panic disorder is marked by recurrent, unexpected panic attacks—sudden surges of overwhelming fear or discomfort.",
            "These attacks can include symptoms such as heart palpitations, shortness of breath, dizziness, and a fear of losing control.",
            "The persistent worry about future attacks often leads to avoidance behaviors that impact quality of life.",
            "It is distinct from generalized anxiety disorder, which involves more constant and less intense worry.",
          ],
          concluding:
            "Recognition of these patterns is crucial for diagnosis and treatment.",
        },
      ],
    },
    {
      title: "What Happens During a Panic Attack?",
      paragraphs: [
        {
          topic: "Brain and body response",
          supporting: [
            "Panic attacks trigger the body's fight-or-flight response, releasing stress hormones like adrenaline.",
            "This leads to physical symptoms including rapid heartbeat, sweating, trembling, and shortness of breath.",
            "The brain misinterprets harmless bodily sensations as threats, escalating the fear.",
            "Understanding this cycle helps reduce fear of the symptoms themselves.",
          ],
          concluding:
            "Awareness is the first step toward breaking the panic cycle.",
        },
      ],
    },
    {
      title: "Treatment Approaches",
      paragraphs: [
        {
          topic: "Therapies and medications",
          supporting: [
            "Cognitive-behavioral therapy (CBT), especially exposure therapy, is effective in reducing panic symptoms.",
            "Interoceptive exposure involves controlled exposure to feared bodily sensations to reduce sensitivity.",
            "Medications such as SSRIs or benzodiazepines may be prescribed to manage symptoms.",
            "A combination of therapy and medication often yields the best outcomes.",
          ],
          concluding:
            "Early and consistent treatment significantly improves prognosis.",
        },
      ],
    },
    {
      title: "Coping Strategies for Everyday Life",
      paragraphs: [
        {
          topic: "Practical techniques",
          supporting: [
            "Breathing exercises and mindfulness help calm the nervous system during panic episodes.",
            "Developing a panic action plan reduces fear by preparing for attacks.",
            "Regular physical activity and sleep hygiene support overall mental health.",
            "Seeking social support and avoiding substance use can also mitigate symptoms.",
          ],
          concluding:
            "Empowering oneself with tools and knowledge builds resilience.",
        },
      ],
    },
  ],
  conclusion: [
    "Panic disorder is a manageable condition with appropriate treatment and support.",
    "Understanding the mechanics of panic attacks demystifies the experience and reduces stigma.",
    "With therapy, medication, and coping techniques, individuals can regain control and improve their quality of life.",
  ],
  references: [
    {
      title: "National Institute of Mental Health: Panic Disorder",
      url: "https://www.nimh.nih.gov/health/topics/panic-disorder",
    },
    {
      title: "Anxiety and Depression Association of America: Panic Disorder",
      url: "https://adaa.org/understanding-anxiety/panic-disorder-agoraphobia",
    },
    {
      title: "Mayo Clinic: Panic Attacks and Panic Disorder",
      url: "https://www.mayoclinic.org/diseases-conditions/panic-attacks/symptoms-causes/syc-20376021",
    },
  ],
};
