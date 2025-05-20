"use client";

import { ArticleIntro } from "@/lib/interfaces/articles";
import { createContext, ReactNode, useContext } from "react";

export interface ArticleContextType {
  article: any;
  articleCategory: string;
  articleInfo?: ArticleIntro | undefined;
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: ArticleContextType;
}) => {
  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
};

export const useArticleContext = () => {
  const context = useContext(ArticleContext);
  if (context === undefined) {
    throw new Error("useArticleContext must be used within a ArticleProvider");
  }
  return context;
};
