import { ArticleContent } from "@/lib/interfaces/articles";

export const hypomaniaVsHypermania: ArticleContent = {
  image:
    "https://images.unsplash.com/photo-1557426272-fc759fdf7a8a?auto=format&fit=crop&w=1200&q=80",
  preface: [
    "In the realm of mood disorders, particularly bipolar disorder, hypomania and hypermania are often confused. While both represent states of elevated mood and increased energy, they differ significantly in severity, duration, and impact on daily life. This article aims to clarify the clinical differences between hypomania and hypermania, outline the associated risks, and offer insight into how each state is diagnosed and treated. Understanding these distinctions can empower individuals and caregivers to seek appropriate support and avoid potential crises.",
  ],
  sections: [
    {
      title: "What Is Hypomania?",
      subtitle: "A Milder Form of Mania Often Overlooked",
      paragraphs: [
        {
          topic: "Characteristics of Hypomania",
          supporting: [
            "Hypomania is a state of elevated mood, increased energy, and heightened productivity that lasts for at least four consecutive days. Unlike full mania, hypomania does not typically result in hospitalization or significant functional impairment. Individuals experiencing hypomania may feel unusually confident, creative, talkative, or energetic. They may sleep less without feeling tired, take on new projects, or become more socially outgoing. Despite these seemingly positive traits, hypomania can be dangerous if it leads to poor decision-making or escalates into mania.",
          ],
          list: [
            {
              title: "Duration",
              description:
                "Must last at least four consecutive days, but less than a week unless escalated.",
            },
            {
              title: "Severity",
              description:
                "Noticeable change in behavior, but not severe enough to cause major life disruption.",
            },
            {
              title: "Functionality",
              description:
                "The individual often remains functional and may even feel more productive.",
            },
          ],
          concluding:
            "Though hypomania might appear beneficial on the surface, it should not be romanticized. Left untreated, it can destabilize one's mental health and evolve into more serious episodes.",
        },
      ],
    },
    {
      title: "What Is Hypermania (Mania)?",
      subtitle: "When Elevated Mood Becomes Dangerous",
      paragraphs: [
        {
          topic: "Clinical Definition of Hypermania",
          supporting: [
            "Hypermania is a term often used interchangeably with 'mania,' particularly in older or non-clinical contexts. Clinically, it refers to a full manic episode. Mania is a severe condition characterized by elevated or irritable mood, inflated self-esteem, racing thoughts, distractibility, and impulsive behavior. It lasts at least seven consecutive days or requires hospitalization to prevent harm. Individuals in a manic state may engage in risky behavior such as spending sprees, reckless driving, or unsafe sexual activity. Mania can also involve psychotic features such as delusions or hallucinations, particularly in severe cases.",
          ],
          list: [
            {
              title: "Duration",
              description:
                "Lasts at least seven days or requires emergency intervention due to intensity.",
            },
            {
              title: "Impact",
              description:
                "Severely impairs functioning and may lead to financial, legal, or medical consequences.",
            },
            {
              title: "Risk Factors",
              description:
                "Often leads to hospitalization, especially when judgment is impaired or psychosis is present.",
            },
          ],
          concluding:
            "Hypermania is not just an intensified version of hypomania—it’s a medical emergency in many cases. Proper diagnosis and swift intervention are crucial.",
        },
      ],
    },
    {
      title: "Key Differences Between Hypomania and Hypermania",
      subtitle: "Understanding the Spectrum of Elevated Moods",
      paragraphs: [
        {
          topic: "How They Compare",
          supporting: [
            "While hypomania and hypermania share some common symptoms, they diverge in intensity, duration, and impact on daily life. Hypomania may enhance performance and creativity temporarily, while hypermania is disruptive and often dangerous. Only hypermania involves symptoms like delusions, hallucinations, or severe cognitive disorganization. People experiencing hypomania are usually aware of changes in their mood, while those in hypermania may lose touch with reality. Hypomania rarely leads to hospitalization, whereas hypermania almost always does if untreated.",
          ],
          list: [
            {
              title: "Insight and Awareness",
              description:
                "Hypomanic individuals often retain self-awareness, while those with hypermania may experience impaired insight.",
            },
            {
              title: "Severity of Symptoms",
              description:
                "Hypermania includes more intense mood elevation, risky behavior, and potential psychosis.",
            },
            {
              title: "Functional Disruption",
              description:
                "Hypomania may slightly disrupt routines; hypermania severely affects daily life and relationships.",
            },
          ],
          concluding:
            "Knowing the distinction helps in timely diagnosis and treatment. Mislabeling one for the other can result in insufficient or excessive treatment, both of which carry risks.",
        },
      ],
    },
    {
      title: "Diagnosis and Treatment Approaches",
      subtitle: "Managing Mood States Within Bipolar Spectrum",
      paragraphs: [
        {
          topic: "Assessment and Clinical Tools",
          supporting: [
            "Diagnosis involves structured clinical interviews and symptom tracking over time. Psychiatrists look for patterns of mood elevation, duration, and impact on functioning. Mood charting and collateral information from family members often help differentiate between hypomania and hypermania. Bipolar I disorder is diagnosed when at least one manic (hypermanic) episode occurs; Bipolar II is defined by hypomanic episodes and depressive episodes without full mania. Proper diagnosis is essential for choosing the right medication and therapeutic interventions.",
          ],
          list: [
            {
              title: "Common Assessments",
              description:
                "Mood Disorder Questionnaire (MDQ), Young Mania Rating Scale (YMRS), and DSM-5 criteria.",
            },
            {
              title: "Pharmacological Treatment",
              description:
                "Mood stabilizers such as lithium or valproate; antipsychotics for manic states.",
            },
            {
              title: "Therapeutic Support",
              description:
                "CBT, psychoeducation, and family-focused therapy play a supportive role in long-term stability.",
            },
          ],
          concluding:
            "Treating elevated mood states requires a balanced approach—both medication and therapy play vital roles. Early diagnosis and continuous monitoring are key to effective management.",
        },
      ],
    },
  ],
  conclusion: [
    "Hypomania and hypermania exist on the same spectrum of mood elevation, but the differences between them are clinically significant. Hypomania can be subtle and easy to overlook, while hypermania is often overwhelming and dangerous. Recognizing these distinctions empowers patients, families, and providers to act swiftly, ensuring that the right support is offered at the right time. Accurate diagnosis, education, and ongoing treatment can prevent escalation and improve long-term outcomes for individuals living with bipolar disorder or other mood spectrum conditions.",
  ],
  references: [
    {
      title: "National Institute of Mental Health - Bipolar Disorder",
      url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder",
    },
    {
      title: "DSM-5 Criteria for Bipolar Disorders",
      url: "https://www.psychiatry.org/psychiatrists/practice/dsm",
    },
    {
      title: "Depression and Bipolar Support Alliance",
      url: "https://www.dbsalliance.org/",
    },
  ],
};
