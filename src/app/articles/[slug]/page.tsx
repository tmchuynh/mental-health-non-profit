"use client";

import ArticleSections from "@/components/articles/ArticleSections";
import { articles } from "@/lib/constants/articles/articles";
import { ArticleContent } from "@/lib/interfaces/articles";
import { cn } from "@/lib/utils";
import { formatUrlToID } from "@/lib/utils/format";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogArticleData() {
  const segments = usePathname().split("/");
  const article = segments[segments.length - 1];

  const articleID = formatUrlToID(article);
  const articleInformation = articles.find((a) => a.id === article);

  const [articleData, setArticleData] = useState<ArticleContent>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articleModule = await import(
          `@/lib/constants/articles/${article}`
        );
        // Return the specific named export that matches articleID
        if (articleModule[articleID]) {
          setArticleData(articleModule[articleID]);
        } else {
          console.error(`Export named ${articleID} not found in module`);
        }
      } catch (error) {
        console.error(`Error loading resource: ${error}`);
      }
    };

    fetchData();
  }, [article, articleID]);

  return (
    <>
      {articleInformation && (
        <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
          <div className="items-center gap-9 lg:gap-5 grid md:grid-cols-3 lg:grid-cols-6 mb-5">
            <div
              className={cn("md:col-span-2 lg:col-span-4", {
                "md:col-span-3 lg:col-span-6": !articleData?.image,
              })}
            >
              <h1>{articleInformation.title}</h1>
              <h5>{articleInformation.subtitle}</h5>

              {articleData?.preface.map((p, pIndex) => (
                <p key={pIndex}>{p}</p>
              ))}
            </div>
            {articleData?.image && (
              <Image
                src={articleData.image}
                alt={articleInformation.title}
                className="order-first lg:col-span-2 my-4 rounded-2xl w-full h-full object-cover object-center lg:aspect-video"
                width={1000}
                height={1000}
              />
            )}
          </div>

          {articleData && (
            <section className="flex flex-col gap-4 lg:gap-6">
              <div className="flex flex-col gap-4 lg:gap-6">
                {articleData.sections.map((section, aIndex) => (
                  <ArticleSections
                    key={aIndex}
                    section={section}
                    index={aIndex}
                  />
                ))}
              </div>

              <div>
                <h2>Conclusion</h2>
                {articleData.conclusion.map((conclusion, cIndex) => (
                  <p key={cIndex}>{conclusion}</p>
                ))}
              </div>

              <section className="mt-2">
                <h5>References</h5>
                <div className="gap-x-4 grid md:grid-cols-2 lg:grid-cols-3">
                  {articleData.references?.map((reference, rIndex) => (
                    <div key={rIndex} className="text-xs">
                      {reference.title && (
                        <>
                          <strong>
                            {reference.url ? (
                              <a
                                href={reference.url}
                                className="underline underline-offset-2 hover:no-underline"
                              >
                                {reference.title}
                              </a>
                            ) : (
                              <span>{reference.title}</span>
                            )}
                          </strong>
                        </>
                      )}
                      {reference.description && <p>{reference.description}</p>}
                    </div>
                  ))}
                </div>
              </section>
            </section>
          )}
        </div>
      )}
    </>
  );
}
