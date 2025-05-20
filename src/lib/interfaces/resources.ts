import { ArticleContent, Category } from "./articles";

export interface ResourceIntro {
  title: string;
  subtitle: string;
  description: string;
  categoryId: Category["id"];
  introduction: string;
}

export interface Resource {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  introduction: string[];
  image?: string;
  categoryId: Category["id"];
}

export interface ResourceContent extends ArticleContent {
  commonSymptons: string[];
  similarDisorders: string[];
  treatmentOptions?: string[];
  tools?: string[];
  interventionTechniques?: string[];
  providingSupport?: string[];
  stressors?: string[];
  causes: string[];
}
