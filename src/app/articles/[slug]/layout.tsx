"use client";

import { ArticleProvider } from "@/context/ArticleContext";
import { articlesMap } from "@/lib/constants/articleSectioned";
import { capitalize } from "@/lib/utils/format";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const article = usePathname().split("/").slice(-1)[0];
  const articleCategory = usePathname().split("/").slice(-2)[0];

  const toolKitID = "moodDisorders";
  const toolName = capitalize(article);

  console.log("toolKitID", toolKitID);
  console.log("toolName", toolName);

  const correspondingTools = articlesMap[toolKitID as keyof typeof articlesMap];

  const articleInfo = correspondingTools?.find(
    (toolInfo) => toolInfo.title === toolName
  );

  return (
    <ArticleProvider value={{ article, articleCategory, articleInfo }}>
      {children}
    </ArticleProvider>
  );
}
