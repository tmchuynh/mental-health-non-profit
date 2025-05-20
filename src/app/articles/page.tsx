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
import { formatCamelCaseToTitle, formatIDToUrl } from "@/lib/utils/format";
import {
  CheckIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Handle articles per page change
  const handleArticlesPerPageChange = (value: number) => {
    setArticlesPerPage(value);
    setCurrentPage(1); // Reset to the first page when articles per page changes
  };

  // Calculate total pages
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  if (filteredArticles.length === 0) {
    return <p className="mt-6 text-gray-500">No posts found.</p>;
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
            <DropdownMenuItem
              onClick={() => handleArticlesPerPageChange(5)}
              className="px-3 md:text-md lg:text-lg"
            >
              5 articles per page
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleArticlesPerPageChange(10)}
              className="px-3 md:text-md lg:text-lg"
            >
              10 articles per page
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleArticlesPerPageChange(15)}
              className="px-3 md:text-md lg:text-lg"
            >
              15 articles per page
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
      {currentArticles.map((article) => (
        <div
          key={article.id}
          className="relative max-sm:gap-3 grid grid-cols-1 sm:grid-cols-3 py-10 first:border-t first:border-t-gray-200 border-b border-b-gray-100"
        >
          <div>
            <div className="sm:font-medium text-sm/5 max-sm:text-gray-700">
              {article.subtitle}
            </div>
          </div>
          <div className="sm:col-span-2 sm:max-w-2xl">
            <h2 className="font-medium text-sm/5">{article.title}</h2>
            <p className="mt-3 text-gray-500 text-sm/6">
              {article.description}
            </p>
            <div className="mt-4">
              <Link
                href={`/articles/${formatIDToUrl(article.title)}`}
                className="flex items-center gap-1 font-medium text-sm/5"
              >
                <span className="absolute inset-0" />
                Read more
                <ChevronRightIcon className="size-4 fill-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination controls */}
      <Pagination className="flex items-center gap-5">
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
        {!isSmallDevice && (
          <section className="text-center">
            {indexOfLastArticle >= filteredArticles.length &&
            totalPages === 1 ? (
              filteredArticles.length === filteredArticles.length ? (
                <p>Showing all {filteredArticles.length} blogs</p>
              ) : (
                <p>Showing all {filteredArticles.length} filtered blogs</p>
              )
            ) : (
              <p>
                Showing {indexOfFirstArticle + 1} to{" "}
                {indexOfLastArticle > filteredArticles.length
                  ? filteredArticles.length
                  : indexOfLastArticle}{" "}
                of {filteredArticles.length} blogs
              </p>
            )}
          </section>
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
          size={undefined}
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
