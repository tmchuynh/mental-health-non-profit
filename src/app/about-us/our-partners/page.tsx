"use client";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import {
  categorizedPartners,
  partnerQuotes,
} from "@/lib/constants/about/partners";
import { useEffect, useState } from "react";

export default function OurPartners() {
  // Carousel state
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % partnerQuotes.length);
    }, 4000); // 4 seconds per quote
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Our Partners</h1>
      <h5>Working together for a brighter future.</h5>
      <p>
        We are proud to collaborate with a variety of organizations and
        individuals who share our commitment to making a positive impact in the
        community. Without the support of our partners, we would not be able to
        do what we do. Their contributions help us to provide the best possible
        care to our clients and to make a positive impact in the community.
      </p>
      <p>
        Our partners are a diverse group of organizations and individuals who
        share our vision of a world where mental health is prioritized and
        supported. They come from various sectors, including healthcare,
        education, research, and advocacy. Together, we work to raise awareness,
        provide resources, and create safe spaces for individuals to share their
        experiences and find support.
      </p>

      {/* Carousel of partner quotes */}
      <div className="flex justify-center my-8">
        <div className="flex flex-col justify-center bg-muted shadow p-6 rounded-lg w-full md:w-2/3 lg:w-1/2 h-60 md:h-52 lg:h-48 transition-all duration-500 pointer-events-none select-none">
          <blockquote className="text-center text-lg italic">
            "{partnerQuotes[current].quote}"
          </blockquote>
          <div className="text-right mt-4 font-semibold">
            – {partnerQuotes[current].partner}
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-5 mt-7">
        {categorizedPartners.map((category, index) => (
          <div key={index}>
            <h2>{category.category}</h2>
            <p>{category.description}</p>
            <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-3 my-5">
              {category.partners.map((partner) => (
                <Card key={partner.name}>
                  <CardHeader>{partner.description}</CardHeader>
                  <CardFooter>
                    <h4>{partner.name}</h4>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
