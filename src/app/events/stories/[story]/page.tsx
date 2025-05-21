"use client";

import ArticleSections from "@/components/articles/ArticleSections";
import { pastEvents } from "@/lib/constants/events/pastEvents";
import { ArticleContent } from "@/lib/interfaces/articles";
import { cn } from "@/lib/utils";
import { formatUrlToID } from "@/lib/utils/format";
import { getStoryData } from "@/lib/utils/get";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Story() {
  const segments = usePathname().split("/");
  const id = segments[segments.length - 1];
  const camelCaseId = formatUrlToID(id);

  const [eventData, setEventData] = useState<ArticleContent>();
  const [loading, setLoading] = useState(true);

  console.log("ID:", id);
  console.log("CamelCase ID:", camelCaseId);

  const eventInformation = pastEvents.find((a) => a.id === id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Await the Promise from getToolResource
        const data = await getStoryData(id, camelCaseId);
        setEventData(data);
      } catch (error) {
        console.error("Failed to load affirmation cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, camelCaseId]);

  if (loading) {
    return (
      <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
        <h1>Loading...</h1>
      </div>
    );
  }

  console.log("Event Data:", eventData);

  return (
    <>
      {eventInformation && (
        <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
          <div className="items-center gap-9 lg:gap-5 grid md:grid-cols-3 lg:grid-cols-6 mb-5">
            <div
              className={cn("md:col-span-2 lg:col-span-4", {
                "md:col-span-3 lg:col-span-6": !eventInformation?.image,
              })}
            >
              <h1>{eventInformation.title}</h1>

              {eventData?.preface.map((p, pIndex) => (
                <p key={pIndex}>{p}</p>
              ))}
            </div>
            {eventInformation?.image && (
              <Image
                src={eventInformation.image}
                alt={eventInformation.title}
                className="order-first lg:col-span-2 my-4 rounded-2xl w-full h-full object-cover object-center lg:aspect-video"
                width={1000}
                height={1000}
              />
            )}
          </div>

          {eventData && (
            <section className="flex flex-col gap-4 lg:gap-6">
              <div className="flex flex-col gap-4 lg:gap-6">
                {eventData.sections.map((section, aIndex) => (
                  <ArticleSections
                    key={aIndex}
                    section={section}
                    index={aIndex}
                  />
                ))}
              </div>

              <div>
                <h2>Conclusion</h2>
                {eventData.conclusion.map((conclusion, cIndex) => (
                  <p key={cIndex}>{conclusion}</p>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </>
  );
}
