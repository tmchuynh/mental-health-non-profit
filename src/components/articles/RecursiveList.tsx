import { ListDetail } from "@/lib/interfaces/articles";
import { cn } from "@/lib/utils";

export const RecursiveList = ({
  list,
  depth = 3,
}: {
  list: ListDetail[];
  depth?: number;
}) => {
  return (
    <ul
      className={cn("list-decimal", {
        "list-none": depth === 4,
        "list-[upper-roman] list-inside ml-3": depth === 5,
        "ml-6": depth === 3,
      })}
    >
      {list.map((item, index) => (
        <li key={index} className={cn("text-balance", {})}>
          {item.title && (
            <>
              <strong
                className={cn("text-foreground", {
                  "text-accent": depth === 3,
                  "text-tertiary ": depth === 5,
                })}
              >
                {item.url ? (
                  <a
                    href={item.url}
                    className="underline underline-offset-2 hover:no-underline"
                  >
                    {item.title}
                  </a>
                ) : (
                  <span>{item.title}</span>
                )}
              </strong>
            </>
          )}
          {item.description && <span>: {item.description}</span>}
          {item.list && <RecursiveList list={item.list} depth={depth + 1} />}
        </li>
      ))}
    </ul>
  );
};
