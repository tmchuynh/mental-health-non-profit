"use client";

import { formatCamelCaseToTitle, formatIDToUrl } from "@/lib/utils/format";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export function ArticleCard({
  categoryId,
  title,
  description,
}: {
  categoryId: string;
  title: string;
  description: string;
}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  // Use the mounted state to determine if the theme is dark or light

  return (
    <article className="py-2 max-w-xl">
      <div className="mb-4 pl-4 border-l font-mono text-sm">
        {formatCamelCaseToTitle(categoryId)}
      </div>
      <h2 className="mb-2 font-bold font-mono text-lg">{title}</h2>
      <p className="mb-6 font-mono text-base">{description}</p>
      <Button
        variant={theme === "dark" ? "outline" : "link"}
        onClick={() => router.push(`/articles/${formatIDToUrl(title)}`)}
      >
        Read article
      </Button>
    </article>
  );
}
