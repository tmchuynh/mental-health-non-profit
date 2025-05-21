"use client";

import EventStoryCard from "@/components/cards/EventStoryCard";
import { buttonVariants } from "@/components/ui/button";
import { pastEvents } from "@/lib/constants/events/pastEvents";
import { cn } from "@/lib/utils";
import { useState } from "react";

const EVENT_TYPES = [
  { label: "All", value: "all" },
  { label: "Fundraiser", value: "fundraiser" },
  { label: "Volunteering", value: "volunteering" },
];

export default function EventStoriesOverview() {
  const [filter, setFilter] = useState<string>("all");

  const filteredEvents =
    filter === "all"
      ? pastEvents
      : pastEvents.filter((event) => event.type === filter);

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Event Stories Overview</h1>
      <p>
        Explore the stories and experiences from our recent events. These
        narratives highlight the impact of our programs and the community's
        engagement.
      </p>

      <div className="flex gap-3 mt-6 mb-4">
        {EVENT_TYPES.map((t) => (
          <button
            key={t.value}
            className={cn(
              "px-3 py-1 rounded border font-medium flex items-center gap-2",
              buttonVariants({
                variant: filter === t.value ? "secondary" : "outline",
              })
            )}
            onClick={() => setFilter(t.value)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <section className="gap-5 grid lg:grid-cols-2 mt-7">
        {filteredEvents.map((event, index) => (
          <EventStoryCard key={index} story={event} />
        ))}
      </section>
    </div>
  );
}
