"use client";

import { HostedEventCard } from "@/components/cards/HostedEventCard";
import { hostedEvents } from "@/lib/constants/events/hostedEvents";
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
      <h1>Events</h1>
      <p>
        We are excited to announce that we will be hosting a series of events
        throughout the year. These events will provide an opportunity for
        networking, learning, and collaboration among professionals in the
        industry.
      </p>
      <p>
        Stay tuned for more details on the upcoming events, including dates,
        locations, and registration information.
      </p>

      <section className="mt-6">
        <h2>Join us for one of our events!</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {eventTypes.map((type) => (
            <button
              key={type}
              className={`px-3 py-1 rounded-full border ${
                filter === type
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-indigo-700 border-indigo-300"
              } transition`}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="gap-5 grid lg:grid-cols-2">
          {filteredEvents.map((event) => (
            <HostedEventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
