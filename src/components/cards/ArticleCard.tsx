import { formatCamelCaseToTitle, formatIDToUrl } from "@/lib/utils/format";
import Link from "next/link";

export function ArticleCard({
  categoryId,
  title,
  description,
}: {
  categoryId: string;
  title: string;
  description: string;
}) {
  return (
    <article className="py-2 max-w-xl">
      <div className="mb-4 pl-4 border-l font-mono text-gray-400 text-sm">
        {formatCamelCaseToTitle(categoryId)}
      </div>
      <h2 className="mb-2 font-bold font-mono text-lg">{title}</h2>
      <p className="mb-6 font-mono text-base text-gray-700">{description}</p>
      <Link
        href={`/articles/${formatIDToUrl(title)}`}
        className="flex items-center gap-1 font-mono text-primary hover:underline"
      >
        Read article
      </Link>
    </article>
  );
}
