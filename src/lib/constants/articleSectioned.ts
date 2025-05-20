import { ArticleIntro } from "../interfaces/articles";

const moodDisorders: ArticleIntro[] = [
  {
    categoryId: "moodDisorders",
    title: "Depression",
    subtitle:
      "Depression is a common and serious mood disorder that negatively affects how you feel, the way you think, and how you act.",
    description:
      "More than just a feeling of sadness, depression is a serious mental health condition that requires understanding and medical care. It affects how you think, feel, and handle daily activities.",
    introduction: [
      "Depression is a common and serious mood disorder that negatively affects how you feel, the way you think, and how you act. It can lead to a variety of emotional and physical problems and can decrease your ability to function at work and at home.",
      "Symptoms of depression can vary from mild to severe and can include feelings of sadness, hopelessness, or worthlessness; loss of interest or pleasure in activities once enjoyed; changes in appetite or weight; sleep disturbances; fatigue; difficulty concentrating",
      "Many people with depression may also experience physical symptoms, such as headaches or digestive issues, that do not have a clear medical cause. These symptoms can further complicate the diagnosis and treatment of depression. It's important to recognize that depression is not just a passing mood; it is a serious condition that requires appropriate treatment.",
      "Treatment for depression often includes a combination of psychotherapy, medication, and lifestyle changes. Cognitive-behavioral therapy (CBT) is a common therapeutic approach that helps individuals identify and change negative thought patterns. Antidepressant medications may also be prescribed to help balance chemicals in the brain that affect mood.",
    ],
  },
];

const anxietyDisorders: ArticleIntro[] = [
  {
    categoryId: "anxietyDisorders",
    title: "Panic Disorder",
    subtitle: "",
    description:
      "Panic disorder is characterized by recurrent and unexpected panic attacks, which are sudden periods of intense fear or discomfort that peak within minutes.",
    introduction: [
      "Panic disorder is characterized by recurrent and unexpected panic attacks, which are sudden periods of intense fear or discomfort that peak within minutes. Symptoms can include heart palpitations, sweating, trembling, shortness of breath, and feelings of impending doom.",
      "These attacks can lead to significant changes in behavior, such as avoiding situations where previous attacks occurred. The fear of having another panic attack can be debilitating and may lead to agoraphobia, where individuals avoid places or situations that might trigger an attack.",
      "Treatment often involves cognitive-behavioral therapy (CBT) to help individuals understand and manage their panic attacks. Medications, such as selective serotonin reuptake inhibitors (SSRIs) or benzodiazepines, may also be prescribed to help alleviate symptoms.",
    ],
  },
];

export const articlesMap = {
  moodDisorders: moodDisorders,
  anxietyDisorders: anxietyDisorders,
  // Add more categories here as needed, matching the categoryId used in articles
};
