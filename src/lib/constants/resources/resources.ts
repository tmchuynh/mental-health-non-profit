import { Resource } from "@/lib/interfaces/resources";

export const learningResources: Resource[] = [
  {
    id: "majorDepression",
    title: "Major Depressive Disorder",
    subtitle: "Persistent sadness, loss of interest, and fatigue",
    description:
      "Major depressive disorder is a serious mood disorder characterized by prolonged feelings of sadness, hopelessness, and a loss of interest in daily activities.",
    introduction: [
      "Major depression affects how you feel, think, and handle daily activities such as sleeping, eating, or working.",
      "It can occur at any age, but it often begins in adulthood and can become chronic if untreated.",
      "Symptoms include persistent sadness, guilt, fatigue, concentration issues, and sometimes suicidal thoughts.",
      "Treatment may involve antidepressants, psychotherapy, lifestyle changes, or a combination of all three.",
      "Support groups and routine mental health care are effective in long-term management.",
    ],
    image:
      "https://images.unsplash.com/photo-1505735231057-0d79d4c78c6e?fit=crop&w=800&q=80",
    categoryId: "moodDisorders",
  },
  {
    id: "bipolarDisorder",
    title: "Bipolar Disorder",
    subtitle: "Mood swings between depression and mania",
    description:
      "Bipolar disorder involves dramatic shifts in mood, energy, and activity levels—from manic highs to depressive lows.",
    introduction: [
      "There are several types of bipolar disorder including Bipolar I, Bipolar II, and Cyclothymia.",
      "Mania is characterized by high energy, reduced need for sleep, and impulsive behavior.",
      "Depressive episodes share features with major depression, including sadness, low energy, and hopelessness.",
      "Mood stabilizers and antipsychotic medications are commonly prescribed.",
      "Psychoeducation and consistent therapy help individuals understand and manage symptoms.",
    ],
    image:
      "https://images.unsplash.com/photo-1520975608479-4e061c78e0c2?fit=crop&w=800&q=80",
    categoryId: "moodDisorders",
  },
  {
    id: "generalizedAnxiety",
    title: "Generalized Anxiety Disorder (GAD)",
    subtitle: "Chronic, excessive worry about everyday things",
    description:
      "GAD is characterized by persistent and excessive worry that interferes with daily life, often without an obvious trigger.",
    introduction: [
      "People with GAD may expect disaster or overly worry about health, money, family, or work.",
      "Physical symptoms often include muscle tension, fatigue, restlessness, and sleep problems.",
      "GAD typically begins in childhood or adolescence and can become chronic.",
      "Treatment options include CBT, anti-anxiety medications, and mindfulness practices.",
      "InnerLight hosts regular anxiety skill-building workshops and provides access to CBT toolkits.",
    ],
    image:
      "https://images.unsplash.com/photo-1588776814546-ec7e4d40a78b?fit=crop&w=800&q=80",
    categoryId: "anxietyDisorders",
  },
  {
    id: "panicDisorder",
    title: "Panic Disorder",
    subtitle: "Sudden, intense panic attacks and fear",
    description:
      "Panic disorder involves recurrent, unexpected panic attacks that can feel like a heart attack or overwhelming terror.",
    introduction: [
      "Panic attacks may include chest pain, shortness of breath, dizziness, and fear of dying.",
      "People often live in fear of the next attack, which leads to avoidance behavior and isolation.",
      "The condition is highly treatable with exposure therapy, cognitive restructuring, and medication.",
      "Avoiding triggers can reinforce fear; facing them gradually helps retrain the nervous system.",
      "InnerLight provides guided exposure sessions and community support circles for those with panic disorder.",
    ],
    image:
      "https://images.unsplash.com/photo-1588778616201-9d8d83d84167?fit=crop&w=800&q=80",
    categoryId: "anxietyDisorders",
  },
  {
    id: "ocd",
    title: "Obsessive-Compulsive Disorder (OCD)",
    subtitle: "Intrusive thoughts and repetitive behaviors",
    description:
      "OCD is a chronic condition where individuals have recurring, unwanted thoughts (obsessions) and behaviors (compulsions) they feel driven to perform.",
    introduction: [
      "Common obsessions include fear of germs, need for symmetry, or intrusive violent images.",
      "Compulsions may include hand-washing, counting, checking, or mental rituals.",
      "The cycle of obsessions and compulsions causes significant distress and dysfunction.",
      "ERP (Exposure and Response Prevention) is the gold-standard treatment for OCD.",
      "InnerLight offers ERP coaching groups and curated educational content from licensed experts.",
    ],
    image:
      "https://images.unsplash.com/photo-1603367267815-7c43c9e43d99?fit=crop&w=800&q=80",
    categoryId: "anxietyDisorders",
  },
  {
    id: "ptsd",
    title: "Post-Traumatic Stress Disorder (PTSD)",
    subtitle: "Re-experiencing trauma through flashbacks or nightmares",
    description:
      "PTSD can develop after experiencing or witnessing a life-threatening event. It disrupts memory processing and emotional regulation.",
    introduction: [
      "Symptoms include hypervigilance, avoidance of reminders, emotional numbing, and intrusive memories.",
      "Complex PTSD includes additional symptoms such as identity confusion and dissociation.",
      "Treatments include EMDR, trauma-focused CBT, and group therapy.",
      "Self-regulation tools like breathwork and grounding techniques are vital for day-to-day management.",
      "InnerLight sponsors trauma-informed yoga, art therapy, and somatic workshops for survivors.",
    ],
    image:
      "https://images.unsplash.com/photo-1621621521848-f84a1a67d0d7?fit=crop&w=800&q=80",
    categoryId: "traumaDisorders",
  },
  {
    id: "borderlinePersonality",
    title: "Borderline Personality Disorder (BPD)",
    subtitle: "Intense emotions, fear of abandonment, unstable relationships",
    description:
      "BPD is a personality disorder that affects mood, relationships, and self-image. Individuals may struggle with abandonment fears and emotional intensity.",
    introduction: [
      "Common symptoms include mood swings, impulsive behavior, and intense relationships.",
      "People with BPD may experience chronic emptiness, self-harm urges, or dissociation.",
      "DBT (Dialectical Behavior Therapy) is the most effective treatment.",
      "BPD is highly stigmatized, which can hinder proper diagnosis and support.",
      "InnerLight advocates for BPD understanding through awareness campaigns and DBT-informed programming.",
    ],
    image:
      "https://images.unsplash.com/photo-1541558619105-3df0e4c63b1f?fit=crop&w=800&q=80",
    categoryId: "personalityDisorders",
  },
  {
    id: "schizophrenia",
    title: "Schizophrenia",
    subtitle: "Disruptions in thought, perception, and behavior",
    description:
      "Schizophrenia is a chronic brain disorder involving hallucinations, delusions, and cognitive difficulties. It often requires lifelong treatment.",
    introduction: [
      "Positive symptoms include hallucinations (hearing voices) and delusions (false beliefs).",
      "Negative symptoms include reduced motivation, social withdrawal, and flat affect.",
      "Treatment includes antipsychotic medications, skill training, and structured therapy.",
      "With support, individuals can lead stable, independent lives.",
      "InnerLight partners with psychiatric centers to provide care continuity, housing resources, and anti-stigma workshops.",
    ],
    image:
      "https://images.unsplash.com/photo-1607389444821-201ed6d346a0?fit=crop&w=800&q=80",
    categoryId: "psychoticDisorders",
  },
  {
    id: "adhd",
    title: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
    subtitle: "Difficulty with focus, hyperactivity, and impulse control",
    description:
      "ADHD is a neurodevelopmental disorder that affects attention regulation, task completion, and behavior control, especially in children and adolescents.",
    introduction: [
      "Inattentive symptoms include disorganization, forgetfulness, and difficulty sustaining focus.",
      "Hyperactive symptoms include restlessness, fidgeting, and excessive talking.",
      "ADHD can affect academic performance, self-esteem, and family dynamics.",
      "Treatment options include behavioral therapy, parent training, and stimulant medication.",
      "InnerLight creates learning accommodations guides and hosts youth focus workshops.",
    ],
    image:
      "https://images.unsplash.com/photo-1600880291929-103be62c1842?fit=crop&w=800&q=80",
    categoryId: "youthMentalHealth",
  },
  {
    id: "genderDysphoria",
    title: "Gender Dysphoria",
    subtitle:
      "Distress due to a mismatch between gender identity and assigned sex",
    description:
      "Gender dysphoria refers to psychological distress that results from an incongruence between one’s gender identity and sex assigned at birth.",
    introduction: [
      "It can lead to anxiety, depression, and identity-related stress.",
      "Supportive environments significantly reduce suicide risk among transgender individuals.",
      "Care can include gender-affirming therapy, social transition support, and, when appropriate, medical transition.",
      "InnerLight offers peer support groups and connects individuals to affirming providers and legal resources.",
      "Understanding and validation are central to healing gender-related distress.",
    ],
    image:
      "https://images.unsplash.com/photo-1615395242066-c3d7d46e64c2?fit=crop&w=800&q=80",
    categoryId: "lgbtqMentalHealth",
  },
];
