"use client";

import { buttonVariants } from "@/components/ui/button";
import { featuredDonors } from "@/lib/constants/about/donors";
import { cn } from "@/lib/utils";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import { CheckIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useState } from "react";

export default function Donors() {
  const donorTypes = Array.from(
    new Set(featuredDonors.map((donor) => donor.type))
  ).sort();

  // Multiple selection, empty = all types
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleToggle = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleAll = () => {
    setSelectedTypes([]);
  };

  // Filter donors by selected types (empty = all)
  const filteredDonors =
    selectedTypes.length === 0
      ? featuredDonors
      : featuredDonors.filter((donor) => selectedTypes.includes(donor.type));

  const sortedDonors = groupAndSortByProperties(filteredDonors, "type", "name");

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Our Valued Donors</h1>
      <h5>Champions of Mental Health and Wellness</h5>
      <p>
        At InnerLight Elevation, the generosity of our donors fuels every step
        of our mission to transform mental health care and support. We are
        deeply grateful to the individuals, foundations, and corporate partners
        whose significant contributions enable us to expand access, innovate
        programs, and reach communities in need.
      </p>
      <p>
        Their commitment to mental wellness and social equity is the cornerstone
        of our progress. Through their visionary support, we have been able to:
      </p>
      <ul className="pl-5 list-disc">
        <li>
          Launch peer-led support groups that provide safe spaces for
          individuals to share their experiences and find community.
        </li>
        <li>
          Develop culturally responsive educational resources that empower
          individuals with knowledge and tools for mental wellness.
        </li>
        <li>
          Expand outreach initiatives to connect with underserved populations
          and reduce barriers to care.
        </li>
      </ul>
      <p>
        We honor and celebrate these champions of mental health—partners who
        believe in the power of hope, resilience, and collective healing.
      </p>

      {/* Filter Button Group */}
      <div className="flex flex-wrap items-center gap-2 my-6">
        <button
          type="button"
          onClick={handleAll}
          className={cn(
            "px-3 py-1 rounded border font-medium",
            buttonVariants({
              variant: selectedTypes.length === 0 ? "secondary" : "outline",
            })
          )}
          aria-pressed={selectedTypes.length === 0}
        >
          All types
        </button>
        {donorTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => handleToggle(type)}
            className={cn(
              "px-3 py-1 rounded border font-medium flex items-center gap-2",
              buttonVariants({
                variant: selectedTypes.includes(type) ? "secondary" : "outline",
              })
            )}
            aria-pressed={selectedTypes.includes(type)}
          >
            {selectedTypes.includes(type) && <CheckIcon className="size-4" />}
            {type}
          </button>
        ))}
      </div>

      <section>
        <ul
          role="list"
          className="gap-x-4 grid lg:grid-cols-2 xl:col-span-3 divide-y divide-gray-200"
        >
          {sortedDonors.map((person) => (
            <li
              key={person.name}
              className="flex sm:flex-row flex-col gap-10 py-12"
            >
              <Image
                alt=""
                src={person.image}
                className="flex-none rounded-2xl w-52 aspect-4/5 object-cover"
                width={208}
                height={208}
              />
              <div className="flex-auto max-w-xl">
                <h3>{person.name}</h3>
                <h5>{person.type}</h5>
                <blockquote className="mt-4 pl-3 border-l">
                  {person.quote}
                </blockquote>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
