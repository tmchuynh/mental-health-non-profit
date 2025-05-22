"use client";

import { ImpactStoryCard } from "@/components/cards/ImpactStoryCard";
import { Button } from "@/components/ui/button";
import { impactStories } from "@/lib/constants/about/story";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Testimonials() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const router = useRouter();

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Testimonials</h1>
      <p>
        Hear from those who have experienced our programs and services
        firsthand. Their stories inspire us to continue our mission and make a
        difference in the community.
      </p>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mt-8">
        {/* Left: Selected Testimonial */}
        <div className="md:col-span-2">
          <ImpactStoryCard story={impactStories[selectedIdx]} />
        </div>
        {/* Right: List of Testimonials */}
        <div className="flex flex-col gap-4">
          {impactStories.map((story, idx) => (
            <Button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              variant={idx === selectedIdx ? "accent" : "outline"}
              className="flex flex-col items-start h-fit text-left"
              aria-current={idx === selectedIdx}
            >
              <h5
                className={cn("", {
                  "text-accent-foreground": idx === selectedIdx,
                })}
              >
                {story.title}
              </h5>
              <p>{story.subtitle}</p>
            </Button>
          ))}
        </div>
      </div>

      <section className="my-20">
        <div className="mb-14 text-center">
          <h2 className="mb-4 font-semibold text-3xl md:text-4xl">
            Get Involved & Learn More
          </h2>
          <p className="text-lg">
            Explore ways to support our mission, get involved, and learn about
            our commitment to mental health and inclusion.
          </p>
        </div>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col gap-2 shadow-sm p-6 border rounded-xl transition">
            <h3 className="mb-2 text-2xl">🌱</h3>
            <h4 className="font-semibold">Programs & Services</h4>
            <p className="text-sm">
              Discover the programs and services we offer to support mental
              health in our community.
            </p>
            <Button
              onClick={() => router.push("/programs-and-services")}
              variant="outline"
              className="mt-2"
            >
              Learn More
            </Button>
          </div>
          <div className="flex flex-col gap-2 shadow-sm p-6 border rounded-xl transition">
            <h3 className="mb-2 text-2xl">💖</h3>
            <h4 className="font-semibold">Donations</h4>
            <p className="text-sm">
              Support our cause by making a donation and help us reach more
              people in need.
            </p>
            <Button
              onClick={() => router.push("/donate")}
              variant="outline"
              className="mt-2"
            >
              Donate
            </Button>
          </div>
          <div className="flex flex-col gap-2 shadow-sm p-6 border rounded-xl transition">
            <h3 className="mb-2 text-2xl">🙋‍♂️</h3>
            <h4 className="font-semibold">Volunteer</h4>
            <p className="text-sm">
              Join our team of volunteers and make a direct impact in the
              community.
            </p>
            <Button
              onClick={() => router.push("/volunteer")}
              variant="outline"
              className="mt-2"
            >
              Volunteer
            </Button>
          </div>
          <div className="flex flex-col gap-2 shadow-sm p-6 border rounded-xl transition">
            <h3 className="mb-2 text-2xl">🎉</h3>
            <h4 className="font-semibold">Fundraising</h4>
            <p className="text-sm">
              Organize or participate in fundraising events to support our
              mission.
            </p>
            <Button
              onClick={() => router.push("/fundraising")}
              variant="outline"
              className="mt-2"
            >
              Fundraise
            </Button>
          </div>
          <div className="flex flex-col gap-2 shadow-sm p-6 border rounded-xl transition">
            <h3 className="mb-2 text-2xl">📝</h3>
            <h4 className="font-semibold">Mental Health Pledge</h4>
            <p className="text-sm">
              Take the pledge to support mental health awareness and advocacy.
            </p>
            <Button
              onClick={() => router.push("/mental-health-pledge")}
              variant="outline"
              className="mt-2"
            >
              Take the Pledge
            </Button>
          </div>
          <div className="flex flex-col gap-2 shadow-sm p-6 border rounded-xl transition">
            <h3 className="mb-2 text-2xl">🌍</h3>
            <h4 className="font-semibold">Diversity & Inclusion Statement</h4>
            <p className="text-sm">
              Read about our commitment to diversity, equity, and inclusion.
            </p>
            <Button
              onClick={() => router.push("/diversity-and-inclusion")}
              variant="outline"
              className="mt-2"
            >
              Read Statement
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
