"use client";

import useSmallScreen from "@/hooks/useSmallScreen";
import { articles } from "@/lib/constants/articles/articles";
import { articlesMap } from "@/lib/constants/articleSectioned";
import {
  formatCamelCaseToTitle,
  formatIDToUrl,
  generateRandomString,
} from "@/lib/utils/format";
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

// Categories component: use buttons, allow multiple selection
function Categories({
  selected,
  onChange,
}: {
  selected: string[];
  onChange: (categories: string[]) => void;
}) {
  // Get all categories from articlesMap
  const allCategories = Object.keys(articlesMap).map((categoryId) => ({
    categoryId,
    title:
      formatCamelCaseToTitle(
        articlesMap[categoryId as keyof typeof articlesMap][0]?.categoryId
      ) ?? categoryId.charAt(0).toUpperCase() + categoryId.slice(1),
  }));

  if (allCategories.length === 0) {
    return null;
  }

  const handleToggle = (categoryId: string) => {
    if (selected.includes(categoryId)) {
      onChange(selected.filter((id) => id !== categoryId));
    } else {
      onChange([...selected, categoryId]);
    }
  };

  const handleAll = () => {
    onChange([]);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <button
        type="button"
        onClick={handleAll}
        className={cn(
          "px-3 py-1 rounded border font-medium",
          buttonVariants({
            variant: selected.length === 0 ? "secondary" : "outline",
          })
        )}
        aria-pressed={selected.length === 0}
      >
        All categories
      </button>
      {allCategories.map((category) => (
        <button
          key={category.categoryId}
          type="button"
          onClick={() => handleToggle(category.categoryId)}
          className={cn(
            "px-3 py-1 rounded border font-medium flex items-center gap-2",
            buttonVariants({
              variant: selected.includes(category.categoryId)
                ? "secondary"
                : "outline",
            })
          )}
          aria-pressed={selected.includes(category.categoryId)}
        >
          {selected.includes(category.categoryId) && (
            <CheckIcon className="size-4" />
          )}
          {category.title}
        </button>
      ))}
    </div>
  );
}

// Posts: filter by all selected categories
function Posts({
  categories,
  resetPageSignal,
}: {
  categories: string[];
  resetPageSignal: number;
}) {
  // Filter articles by selected categories (if any)
  let filteredArticles = articles;
  const isSmallDevice = useSmallScreen();
  if (categories.length > 0) {
    filteredArticles = articles.filter((a) =>
      categories.includes(a.categoryId)
    );
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(5);

  // Reset to first page when resetPageSignal changes
  useEffect(() => {
    setCurrentPage(1);
  }, [resetPageSignal]);

  // Calculate the indexes for pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Calculate total pages
  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / articlesPerPage)
  );

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle articles per page change
  const handleArticlesPerPageChange = (value: number) => {
    setArticlesPerPage(value);
    setCurrentPage(1); // Reset to the first page when articles per page changes
  };

  // Helper to render page numbers (with ellipsis if needed)
  const renderPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  if (filteredArticles.length === 0) {
    return <p className="mt-6 title">No posts found.</p>;
  }

  return (
    <div className="mt-6">
      <section className="flex items-center mt-4">
        <label htmlFor="articlesPerPage" className="mr-2">
          <p>Articles per page:</p>
        </label>
        <DropdownMenu>
          <DropdownMenuTrigger aria-label="Articles per page">
            <div className="flex items-center gap-2 bg-muted px-5 p-2 rounded text-sm md:text-md lg:text-lg">
              {articlesPerPage} articles per page
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {[5, 10, 15].map((size) => (
              <DropdownMenuItem
                key={size}
                onClick={() => handleArticlesPerPageChange(size)}
                className={cn(
                  "px-3 md:text-md lg:text-lg flex items-center gap-2",
                  articlesPerPage === size ? "font-semibold" : ""
                )}
                aria-checked={articlesPerPage === size}
                role="menuitemradio"
              >
                {articlesPerPage === size && (
                  <CheckIcon className="text-primary size-4" />
                )}
                {size} articles per page
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="ml-4 text-sm">
          Showing {indexOfFirstArticle + 1} - {indexOfLastArticle} of{" "}
          {filteredArticles.length} articles
        </span>
      </section>
      {currentArticles.map((article) => (
        <div
          key={article.id}
          className="relative max-sm:gap-3 grid grid-cols-1 sm:grid-cols-3 py-10 first:border-t first:border-t-gray-200 border-b border-b-gray-100"
        >
          <div>
            <div className="sm:font-medium text-sm/5">{article.subtitle}</div>
          </div>
          <div className="sm:col-span-2 sm:max-w-2xl">
            <h2 className="font-medium text-sm/5">{article.title}</h2>
            <p className="mt-3 text-sm/6 title">{article.description}</p>
            <div className="mt-4">
              <Link
                href={`/articles/${formatIDToUrl(article.title)}`}
                className="flex items-center gap-1 font-medium text-sm/5"
              >
                <span className="absolute inset-0" />
                Read more
                <ChevronRightIcon className="size-4 fill-primary" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination controls */}
      <Pagination className="flex items-center gap-5 mt-6">
        <PaginationPrevious
          onClick={() => {
            if (currentPage > 1) {
              handlePageChange(currentPage - 1);
            }
          }}
          variant={currentPage === 1 ? "disabled" : "outline"}
          className={
            currentPage === 1 ? "cursor-not-allowed" : "cursor-default"
          }
        />
        {renderPageNumbers().map((p, idx) =>
          p === "..." ? (
            <PaginationItem
              key={`${idx}-${generateRandomString}`}
              className="px-2 titleselect-none"
            >
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationLink
              key={p}
              isActive={p === currentPage}
              className={cn(
                "px-3 py-1 rounded border",
                buttonVariants({
                  variant: p === currentPage ? "secondary" : "outline",
                })
              )}
              variant={p === currentPage ? "secondary" : "outline"}
              onClick={() => handlePageChange(Number(p))}
            >
              {p}
            </PaginationLink>
          )
        )}
        <PaginationNext
          onClick={() => {
            if (currentPage < totalPages) {
              handlePageChange(currentPage + 1);
            }
          }}
          variant={currentPage === totalPages ? "disabled" : "outline"}
          className={
            currentPage === totalPages ? "cursor-not-allowed" : "cursor-default"
          }
        />
      </Pagination>
    </div>
  );
}

export default function Blog() {
  const searchParamsHook = useSearchParams();
  const router = useRouter();

  // Parse selected categories from query string (comma-separated)
  const categoryString = searchParamsHook.get("category");
  const selectedCategories =
    categoryString && categoryString.length > 0
      ? categoryString.split(",")
      : [];

  // Track a signal to reset page in Posts when categories change
  const [resetPageSignal, setResetPageSignal] = useState(0);

  // Keep selected categories in state and sync with URL
  const [categories, setCategories] = useState<string[]>(selectedCategories);

  // Sync state to URL when categories change and reset page
  useEffect(() => {
    const params = new URLSearchParams(searchParamsHook.toString());
    if (categories.length > 0) {
      params.set("category", categories.join(","));
    } else {
      params.delete("category");
    }
    router.replace(`/articles?${params.toString()}`);
    setResetPageSignal((s) => s + 1);
  }, [categories]);

  return (
    <main className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1 className="max-w-3xl">
        Understanding the Mind, One Article at a Time
      </h1>
      <h5>Mental health, explained with clarity and care</h5>
      <p>
        Mental health is personal, complex, and deeply human. That’s why we’ve
        created a space where clarity, empathy, and science come together.
        Whether you're seeking to understand your own experiences, support
        someone you care about, or deepen your knowledge as a professional, our
        library of thoughtfully written articles offers guidance grounded in
        research and real-world relevance. From anxiety and trauma to
        neurodivergence and mood disorders, each piece is crafted to inform
        without overwhelm—and to remind you that healing begins with
        understanding.
      </p>

      <section className="mt-9">
        <Categories selected={categories} onChange={setCategories} />
        <Posts categories={categories} resetPageSignal={resetPageSignal} />
      </section>
    </main>
  );
}
