"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import useSmallScreen from "@/hooks/useSmallScreen";
import { articles } from "@/lib/constants/articles/articles";
import { articlesMap } from "@/lib/constants/articleSectioned";
import {
  formatCamelCaseToTitle,
  formatIDToUrl,
  generateRandomString,
} from "@/lib/utils/format";
import {
  CheckIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

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

function Categories({ selected }: { selected?: string }) {
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

  return (
    <div className="flex flex-wrap justify-between items-center gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="flex justify-between items-center gap-2 font-medium">
            {selected
              ? allCategories.find(({ categoryId }) => categoryId === selected)
                  ?.title || "All categories"
              : "All categories"}
            <ChevronUpDownIcon className="size-4 fill-gray-900" />
          </MenubarTrigger>
          <MenubarContent className="bg-white shadow-lg p-1 rounded-lg ring-1 ring-gray-200 min-w-40 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]">
            <MenubarItem>
              <Link
                href="/articles"
                data-selected={selected === undefined ? true : undefined}
                className="group items-center gap-2 grid grid-cols-[1rem_1fr] data-focus:bg-gray-950/5 px-2 py-1 rounded-md"
              >
                <CheckIcon className="group-data-selected:block hidden size-4" />
                <p className="col-start-2 text-sm/6">All categories</p>
              </Link>
            </MenubarItem>
            {allCategories.map((category) => (
              <MenubarItem key={category.categoryId}>
                <Link
                  href={`/articles?category=${category.categoryId}`}
                  data-selected={
                    category.categoryId === selected ? true : undefined
                  }
                  className="group items-center gap-2 grid grid-cols-[16px_1fr] data-focus:bg-gray-950/5 px-2 py-1 rounded-md"
                >
                  <CheckIcon className="group-data-selected:block hidden size-4" />
                  <p className="col-start-2 text-sm/6">{category.title}</p>
                </Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

function Posts({ category }: { category?: string }) {
  // Filter articles by categoryId only
  let filteredArticles = articles;
  const isSmallDevice = useSmallScreen();
  if (category) {
    filteredArticles = articles.filter((a) => a.categoryId === category);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(5);

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
      <section className="flex flex-col md:justify-end items-center mt-4">
        <label htmlFor="articlesPerPage" className="mr-2">
          <p>Articles per page:</p>
        </label>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full">
            <div className="bg-muted px-5 p-2 rounded text-sm md:text-md lg:text-lg">
              {articlesPerPage} articles per page
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {[5, 10, 15].map((size) => (
              <DropdownMenuItem
                key={size}
                onClick={() => handleArticlesPerPageChange(size)}
                className="px-3 md:text-md lg:text-lg"
              >
                {size} articles per page
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
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

  const categoryString = searchParamsHook.get("category");
  const category = categoryString !== null ? categoryString : undefined;

  return (
    <main className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h5>Articles</h5>
      <h1>Learn More About Mental Health</h1>
      <section className="mt-9">
        <Categories selected={category} />
        <Posts category={category} />
      </section>
    </main>
  );
}
