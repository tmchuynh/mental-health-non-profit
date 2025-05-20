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
  {
    id: "socialAnxiety",
    title: "Social Anxiety Disorder",
    subtitle: "Intense fear of social situations and being judged",
    description:
      "Social Anxiety Disorder causes overwhelming anxiety and self-consciousness in everyday social situations, often leading to avoidance.",
    introduction: [
      "People with social anxiety may fear embarrassment, rejection, or scrutiny.",
      "Symptoms include blushing, sweating, trembling, and difficulty speaking in groups.",
      "The disorder can interfere with work, school, and relationships.",
      "CBT and exposure therapy are highly effective treatments.",
      "InnerLight offers social skills groups and peer-led exposure workshops.",
    ],
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=800&q=80",
    categoryId: "anxietyDisorders",
  },
  {
    id: "specificPhobia",
    title: "Specific Phobias",
    subtitle: "Intense, irrational fear of specific objects or situations",
    description:
      "Specific phobias are marked by excessive fear of a particular object or situation, such as heights, animals, or flying.",
    introduction: [
      "Exposure to the phobic stimulus almost always provokes immediate anxiety.",
      "People may go to great lengths to avoid the feared object or situation.",
      "Phobias can develop in childhood or adulthood and may persist if untreated.",
      "Gradual exposure therapy is the most effective intervention.",
      "InnerLight provides phobia-specific support groups and therapist referrals.",
    ],
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?fit=crop&w=800&q=80",
    categoryId: "anxietyDisorders",
  },
  {
    id: "autismSpectrum",
    title: "Autism Spectrum Disorder (ASD)",
    subtitle: "Differences in social communication and behavior",
    description:
      "ASD is a neurodevelopmental condition characterized by challenges in social interaction, communication, and restricted or repetitive behaviors.",
    introduction: [
      "Symptoms and abilities vary widely across the spectrum.",
      "Early intervention and tailored education plans can improve outcomes.",
      "Many autistic individuals have unique strengths and perspectives.",
      "Support may include speech therapy, occupational therapy, and social skills training.",
      "InnerLight partners with neurodiversity advocates to provide inclusive resources.",
    ],
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?fit=crop&w=800&q=80",
    categoryId: "youthMentalHealth",
  },
  {
    id: "dissociativeIdentity",
    title: "Dissociative Identity Disorder (DID)",
    subtitle: "Presence of two or more distinct identities",
    description:
      "DID, formerly known as Multiple Personality Disorder, involves disruptions in identity, memory, and perception, often linked to severe trauma.",
    introduction: [
      "Individuals may experience gaps in memory and changes in behavior or voice.",
      "DID is often misunderstood and stigmatized.",
      "Treatment focuses on integration, trauma processing, and building safety.",
      "Therapy may include trauma-informed approaches and grounding techniques.",
      "InnerLight provides DID education and trauma survivor peer support.",
    ],
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=800&q=80",
    categoryId: "personalityDisorders",
  },
  {
    id: "premenstrualDysphoric",
    title: "Premenstrual Dysphoric Disorder (PMDD)",
    subtitle: "Severe mood symptoms before menstruation",
    description:
      "PMDD is a mood disorder causing significant emotional and physical symptoms in the luteal phase of the menstrual cycle.",
    introduction: [
      "Symptoms include irritability, depression, anxiety, and physical discomfort.",
      "PMDD can disrupt relationships, work, and daily functioning.",
      "Diagnosis requires tracking symptoms over several cycles.",
      "Treatment may involve SSRIs, hormonal therapy, and lifestyle changes.",
      "InnerLight offers PMDD support circles and menstrual health education.",
    ],
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=800&q=80",
    categoryId: "moodDisorders",
  },
];
