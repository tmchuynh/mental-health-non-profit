"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { articles } from "@/lib/constants/articles/articles";
import { articlesMap } from "@/lib/constants/articleSectioned";
import { formatIDToUrl } from "@/lib/utils/format";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const postsPerPage = 5;

function Categories({ selected }: { selected?: string }) {
  const allCategories = Object.values(articlesMap).flat();
  const categories =
    selected && articlesMap[selected as keyof typeof articlesMap]
      ? articlesMap[selected as keyof typeof articlesMap]
      : allCategories;

  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-between items-center gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="flex justify-between items-center gap-2 font-medium">
            {selected
              ? categories.find(({ categoryId }) => categoryId === selected)
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

function Posts({ page, category }: { page: number; category?: string }) {
  let filteredArticles = articles;
  if (category) {
    filteredArticles = articles.filter(
      (a) =>
        a.categoryId === category ||
        a.title.toLowerCase().includes(category.toLowerCase())
    );
  }

  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;
  const paginatedArticles = filteredArticles.slice(start, end);

  if (paginatedArticles.length === 0) {
    return <p className="mt-6 text-gray-500">No posts found.</p>;
  }

  return (
    <div className="mt-6">
      {paginatedArticles.map((article) => (
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
    </div>
  );
}

function Pagination({ page, category }: { page: number; category?: string }) {
  function url(page: number) {
    const params = new URLSearchParams();

    if (category) params.set("category", category);
    if (page > 1) params.set("page", page.toString());

    return params.size !== 0 ? `/articles?${params.toString()}` : "/articles";
  }

  let totalPosts = articles.length;
  if (category) {
    totalPosts = articles.filter(
      (a) =>
        a.categoryId === category ||
        a.title.toLowerCase().includes(category.toLowerCase())
    ).length;
  }

  const hasPreviousPage = page - 1;
  const previousPageUrl = hasPreviousPage ? url(page - 1) : undefined;
  const hasNextPage = page * postsPerPage < totalPosts;
  const nextPageUrl = hasNextPage ? url(page + 1) : undefined;
  const pageCount = Math.ceil(totalPosts / postsPerPage);

  if (pageCount < 2) {
    return null;
  }

  return (
    <div className="flex justify-between items-center gap-2 mt-6">
      {previousPageUrl ? (
        <Link href={previousPageUrl}>
          <Button variant="outline">
            <ChevronLeftIcon className="size-4" />
            Previous
          </Button>
        </Link>
      ) : (
        <Button variant="outline" disabled>
          <ChevronLeftIcon className="size-4" />
          Previous
        </Button>
      )}
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              "rounded-lg font-medium text-center text-sm/7 size-7",
              "data-hover:bg-gray-100",
              "data-active:shadow-sm data-active:ring-1 data-active:ring-black/10",
              "data-active:data-hover:bg-gray-50"
            )}
          />
        ))}

        {nextPageUrl ? (
          <Link href={nextPageUrl}>
            <Button variant="outline">
              Next
              <ChevronRightIcon className="size-4" />
            </Button>
          </Link>
        ) : (
          <Button variant="outline" disabled>
            Next
            <ChevronRightIcon className="size-4" />
          </Button>
        )}
        <Button
          variant="outline"
          onClick={() => nextPageUrl && (window.location.href = nextPageUrl)}
          disabled={!nextPageUrl}
        >
          Next
          <ChevronRightIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
}

export default function Blog({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const unwrappedSearchParams = React.use(searchParams);

  const page =
    "page" in unwrappedSearchParams
      ? typeof unwrappedSearchParams.page === "string" &&
        parseInt(unwrappedSearchParams.page) > 1
        ? parseInt(unwrappedSearchParams.page)
        : notFound()
      : 1;

  const category =
    typeof unwrappedSearchParams.category === "string"
      ? unwrappedSearchParams.category
      : undefined;

  return (
    <main className="overflow-hidden">
      <Container>
        <h5 className="mt-16">Articles</h5>
        <h1 className="mt-2">What’s happening at Radiant.</h1>
        <p className="mt-6 max-w-3xl">
          Stay informed with product updates, company news, and insights on how
          to sell smarter at your company.
        </p>
      </Container>
      <Container className="mt-16 pb-24">
        <Categories selected={category} />
        <Posts page={page} category={category} />
        <Pagination page={page} category={category} />
      </Container>
    </main>
  );
}
