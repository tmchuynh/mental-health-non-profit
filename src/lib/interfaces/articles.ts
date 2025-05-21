export interface Category {
  id: string;
  title: string;
  subtitle: string;
  introduction?: string;
  overview?: string[];
  warningText: string;
  href?: string;
  image?: string;
}

export interface ArticleIntro {
  title: string;
  description: string;
  categoryId: Category["id"];
  subtitle: string;
  introduction: string[];
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  categoryId: string;
  darkImage: string;
  introduction: string;
}

export interface ArticleContent {
  image?: string;
  preface: string[];
  sections: Section[];
  conclusion: string[];
  references?: ListDetail[];
}

export type Section = {
  image?: string;
  title: string;
  subtitle?: string;
  preface?: string[];
  paragraphs: Paragraph[];
};

export type Paragraph = {
  image?: string;
  topic: string;
  supporting: string[];
  list?: ListDetail[];
  concluding?: string;
};

export type ListDetail = {
  title?: string;
  description?: string;
  url?: string;
  list?: ListDetail[];
};
