"use client";

import { HostedEventCard } from "@/components/cards/HostedEventCard";
import { buttonVariants } from "@/components/ui/button";
import { hostedEvents } from "@/lib/constants/events/hostedEvents";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Events() {
  const [filter, setFilter] = useState<string>("All");
  const eventTypes = [
    "All",
    ...Array.from(new Set(hostedEvents.map((e) => e.type))),
  ];
  const filteredEvents =
    filter === "All"
      ? hostedEvents
      : hostedEvents.filter((event) => event.type === filter);

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Join us for one of our events!</h1>
      <h5>Connect with others and learn more about mental health.</h5>
      <p>
        Our events are designed to foster community, provide education, and
        promote mental well-being. Whether you're looking to learn, share, or
        simply connect with others, we have something for everyone. Join us for
        workshops, seminars, support groups, and more. Together, we can create a
        culture of understanding and support for mental health. We look forward
        to seeing you at our next event!
      </p>

      <section className="mt-2">
        <div className="flex flex-wrap gap-2 my-4">
          {eventTypes.map((type) => (
            <button
              key={type}
              className={cn(
                "px-3 py-1 rounded border font-medium flex items-center gap-2",
                buttonVariants({
                  variant: filter === type ? "secondary" : "outline",
                })
              )}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="gap-2 grid lg:grid-cols-2">
          {filteredEvents.map((event) => (
            <HostedEventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
