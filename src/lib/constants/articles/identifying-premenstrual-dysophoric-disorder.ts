import { ArticleContent } from "@/lib/interfaces/articles";

export const identifyingPremenstrualDysphoricDisorder: ArticleContent = {
  image:
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=60",
  preface: [
    "Premenstrual Dysphoric Disorder (PMDD) is a severe, often disabling condition that affects a small percentage of menstruating individuals. It goes beyond typical premenstrual syndrome (PMS) symptoms, causing significant emotional and physical distress. This article aims to clarify the symptoms, diagnosis criteria, and treatment options to help those affected seek proper care.",
  ],
  sections: [
    {
      title: "Understanding PMDD",
      subtitle: "How It Differs From PMS",
      paragraphs: [
        {
          topic: "Definition and Core Symptoms",
          supporting: [
            "PMDD is characterized by intense mood disturbances including severe irritability, depression, anxiety, and mood swings occurring in the luteal phase of the menstrual cycle. Physical symptoms such as breast tenderness, bloating, and fatigue commonly accompany the emotional symptoms. Unlike PMS, PMDD symptoms are debilitating and significantly interfere with daily functioning. Diagnosis requires symptom tracking across at least two menstrual cycles to confirm the cyclical pattern.",
          ],
        },
      ],
    },
    {
      title: "Causes and Risk Factors",
      paragraphs: [
        {
          topic: "Biological and Psychological Factors",
          supporting: [
            "PMDD is linked to abnormal responses to normal hormonal fluctuations, particularly involving serotonin pathways in the brain. Genetic predisposition and a personal or family history of mood disorders increase risk. Stress, lifestyle factors, and overall health can influence symptom severity.",
          ],
        },
      ],
    },
    {
      title: "Treatment and Management",
      paragraphs: [
        {
          topic: "Evidence-Based Approaches",
          supporting: [
            "Selective serotonin reuptake inhibitors (SSRIs) are the first-line pharmacological treatment for PMDD and can be effective even when taken only during the symptomatic phase. Cognitive-behavioral therapy (CBT) helps manage mood symptoms and coping strategies. Lifestyle modifications including regular exercise, dietary changes, and stress management can reduce symptom intensity. Hormonal treatments, such as birth control pills, may also be prescribed to stabilize hormonal fluctuations.",
          ],
          list: [
            {
              title: "SSRIs",
              description:
                "Medications that adjust serotonin levels, reducing emotional symptoms of PMDD.",
            },
            {
              title: "CBT",
              description:
                "Therapy focused on altering negative thought patterns and improving emotional regulation.",
            },
            {
              title: "Lifestyle Changes",
              description:
                "Incorporating exercise, balanced nutrition, and relaxation techniques to improve overall well-being.",
            },
          ],
        },
      ],
    },
  ],
  conclusion: [
    "Premenstrual Dysphoric Disorder is a serious mood disorder that requires recognition and appropriate treatment. Accurate diagnosis differentiates PMDD from less severe PMS and guides effective interventions. With proper medical and psychological support, individuals affected by PMDD can manage symptoms and improve quality of life. Awareness and education among healthcare providers and patients are essential for timely care.",
  ],
  references: [
    {
      title:
        "American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders (5th ed.).",
      url: "https://www.psychiatry.org/psychiatrists/practice/dsm",
    },
    {
      title:
        "National Institute of Mental Health. Premenstrual Dysphoric Disorder.",
      url: "https://www.nimh.nih.gov/health/topics/premenstrual-dysphoric-disorder",
    },
    {
      title:
        "Steiner, M., et al. (2011). Premenstrual Dysphoric Disorder: Epidemiology and Treatment.",
      url: "https://pubmed.ncbi.nlm.nih.gov/21364069/",
    },
  ],
};
