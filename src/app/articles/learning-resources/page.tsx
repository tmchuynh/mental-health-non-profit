"use client";

import { LearningResourceCard } from "@/components/cards/LearningResourceCard";
import { buttonVariants } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { learningResources } from "@/lib/constants/resources/resources";
import { cn } from "@/lib/utils";
import { useState } from "react";

const categories = Array.from(
  new Map(
    learningResources.map((r) => [
      r.categoryId,
      r.categoryId
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (s) => s.toUpperCase()),
    ])
  ).entries()
);

const PAGE_SIZE_OPTIONS = [3, 6, 9, 12, 24];

export default function LearningResourceOverview() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [pageSize, setPageSize] = useState<number>(6);
  const [page, setPage] = useState<number>(1);

  const toggleCategory = (id: string) => {
    setPage(1);
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((cat) => cat !== id) : [...prev, id]
    );
  };

  const clearCategories = () => {
    setPage(1);
    setSelectedCategories([]);
  };

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

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      <h1>Learning Resources</h1>
      <p>
        Explore our curated list of learning resources designed to enhance your
        knowledge and skills. Whether you're looking for online courses,
        tutorials, or educational materials, we have something for everyone.
      </p>

      <div className="flex flex-wrap items-center gap-2 my-4">
        <span className="mr-2 font-medium">Filter by Category:</span>
        {categories.map(([id, name]) => (
          <button
            key={id}
            type="button"
            className={`px-3 py-1 rounded border transition ${
              selectedCategories.includes(id)
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-gray-800 border-gray-300 hover:bg-indigo-50"
            }`}
            onClick={() => toggleCategory(id)}
          >
            {name}
          </button>
        ))}
        <button
          type="button"
          className="bg-gray-100 hover:bg-gray-200 ml-2 px-3 py-1 border border-gray-400 rounded text-gray-700"
          onClick={clearCategories}
          disabled={selectedCategories.length === 0}
        >
          Clear
        </button>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <label htmlFor="page-size" className="font-medium">
          Resources per page:
        </label>
        <select
          id="page-size"
          className="px-2 py-1 border rounded"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setPage(1);
          }}
        >
          {PAGE_SIZE_OPTIONS.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <span className="ml-4 text-gray-500 text-sm">
          Showing {paginatedResources.length} of {filteredResources.length}{" "}
          resources
        </span>
      </div>

      <section className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {paginatedResources.map((resource, index) => (
          <LearningResourceCard key={index} resource={resource} />
        ))}
      </section>

      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                variant={page === 1 ? "disabled" : "outline"}
                className={page === 1 ? "cursor-not-allowed" : "cursor-default"}
                onClick={() => handlePageChange(Math.max(1, page - 1))}
              />
            </PaginationItem>
            {renderPageNumbers().map((p, idx) =>
              p === "..." ? (
                <PaginationItem key={idx}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={p}>
                  <PaginationLink
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
                </PaginationItem>
              )
            )}
            <PaginationItem>
              <PaginationNext
                variant={page === totalPages ? "disabled" : "outline"}
                className={
                  page === totalPages ? "cursor-not-allowed" : "cursor-default"
                }
                onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
