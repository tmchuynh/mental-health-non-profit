"use client";

import { LearningResourceCard } from "@/components/cards/LearningResourceCard";
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
import { learningResources } from "@/lib/constants/resources/resources";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

// Build categories as array of { id, name }
const categories = Array.from(
  new Map(
    learningResources.map((r) => [
      r.categoryId,
      r.categoryId
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (s) => s.toUpperCase()),
    ])
  ).entries()
).map(([id, name]) => ({ id, name }));

const PAGE_SIZE_OPTIONS = [3, 6, 9, 12, 24];

export default function LearningResourceOverview() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [pageSize, setPageSize] = useState<number>(6);
  const [page, setPage] = useState<number>(1);

  const indexOfLastArticle = page * pageSize;
  const indexOfFirstArticle = indexOfLastArticle - pageSize;

  // Filtering logic
  const filteredResources =
    selectedCategories.length === 0
      ? learningResources
      : learningResources.filter((r) =>
          selectedCategories.includes(r.categoryId)
        );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredResources.length / pageSize)
  );
  const paginatedResources = filteredResources.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  // Category button handlers
  const handleToggleCategory = (id: string) => {
    setPage(1);
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((cat) => cat !== id) : [...prev, id]
    );
  };

  const handleClearCategories = () => {
    setPage(1);
    setSelectedCategories([]);
  };

  // Pagination
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render page numbers (with ellipsis)
  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (page <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (page >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Helpful Resources</h1>
      <h5>Explore our curated list of mental health resources</h5>
      <p>
        Each resource card is curated with links to various articles, videos,
        and other materials to help you learn more about mental health topics.
        We encourage you to explore these resources and find the ones that
        resonate with you. Whether you're looking for information on specific
        conditions, coping strategies, or general mental health tips, we have
        something for everyone. Our goal is to provide you with the tools and
        knowledge you need to support your mental well-being and that of your
        loved ones. We hope you find these resources helpful and informative. If
        you have any questions or need further assistance, please don't hesitate
        to reach out to us. We're here to help you on your journey to better
        mental health.
      </p>

      {/* Category filter buttons, matching articles page style */}
      <div className="flex flex-wrap gap-2 my-4">
        <button
          type="button"
          onClick={handleClearCategories}
          className={cn(
            "px-3 py-1 rounded border font-medium",
            buttonVariants({
              variant:
                selectedCategories.length === 0 ? "secondary" : "outline",
            })
          )}
          aria-pressed={selectedCategories.length === 0}
        >
          All categories
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => handleToggleCategory(cat.id)}
            className={cn(
              "px-3 py-1 rounded border font-medium flex items-center gap-2",
              buttonVariants({
                variant: selectedCategories.includes(cat.id)
                  ? "secondary"
                  : "outline",
              })
            )}
            aria-pressed={selectedCategories.includes(cat.id)}
          >
            {selectedCategories.includes(cat.id) && (
              <CheckIcon className="size-4" />
            )}
            {cat.name}
          </button>
        ))}
      </div>

      {/* Per-page dropdown, matching articles page style */}
      <div className="flex items-center gap-2 mb-4">
        <label htmlFor="page-size" className="font-medium">
          Resources per page:
        </label>
        <DropdownMenu>
          <DropdownMenuTrigger aria-label="Resources per page">
            <div className="flex items-center gap-2 bg-muted px-5 p-2 rounded text-sm md:text-md lg:text-lg">
              {pageSize} resources per page
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {PAGE_SIZE_OPTIONS.map((size) => (
              <DropdownMenuItem
                key={size}
                onClick={() => {
                  setPageSize(size);
                  setPage(1);
                }}
                className={cn(
                  "px-3 md:text-md lg:text-lg flex items-center gap-2",
                  pageSize === size ? "font-semibold" : ""
                )}
                aria-checked={pageSize === size}
                role="menuitemradio"
              >
                {pageSize === size && (
                  <CheckIcon className="text-primary size-4" />
                )}
                {size} resources per page
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="ml-4 text-sm">
          Showing {indexOfFirstArticle + 1} - {indexOfLastArticle} of{" "}
          {paginatedResources.length} resources
        </span>
      </div>

      <section className="justify-around gap-6 grid grid-cols-1 lg:grid-cols-2 mt-6">
        {paginatedResources.map((resource, index) => (
          <LearningResourceCard key={index} resource={resource} />
        ))}
      </section>

      {totalPages > 1 && (
        <Pagination className="flex items-center gap-5 mt-6">
          <PaginationPrevious
            variant={page === 1 ? "disabled" : "outline"}
            className={page === 1 ? "cursor-not-allowed" : "cursor-default"}
            onClick={() => handlePageChange(Math.max(1, page - 1))}
          />
          {renderPageNumbers().map((p, idx) =>
            p === "..." ? (
              <PaginationItem key={idx} className="px-2 select-none">
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationLink
                key={p}
                isActive={p === page}
                className={cn(
                  "px-3 py-1 rounded border",
                  buttonVariants({
                    variant: p === page ? "secondary" : "outline",
                  })
                )}
                variant={p === page ? "secondary" : "outline"}
                onClick={() => handlePageChange(Number(p))}
              >
                {p}
              </PaginationLink>
            )
          )}
          <PaginationNext
            variant={page === totalPages ? "disabled" : "outline"}
            className={
              page === totalPages ? "cursor-not-allowed" : "cursor-default"
            }
            onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
          />
        </Pagination>
      )}
    </div>
  );
}
