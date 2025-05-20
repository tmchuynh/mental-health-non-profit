"use client";

import { FutureFundraisingEventCard } from "@/components/FutureFundraisingEventCard";
import { PastFundraisingEventCard } from "@/components/PastFundraisingEventCard";
import {
  futureFundraisingEvents,
  pastFundraisingEvents,
} from "@/lib/constants/events/fundraising";

export default function Fundraising() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Fundraising Is The Heart of Our Organization</h1>
      <div className="gap-5 grid lg:grid-cols-2">
        <p>
          Fundraising is the lifeblood of our organization, enabling us to
          continue our mission of transforming mental health care and support.
          We are deeply grateful to our donors, partners, and supporters who
          make our work possible. Their generosity fuels our programs, outreach
          initiatives, and community engagement efforts. Through their
          contributions, we are able to expand access to mental health
          resources, develop innovative programs, and reach underserved
          populations. Fundraising allows us to create safe spaces for
          individuals to share their experiences, find community, and receive
          the support they need. It empowers us to develop culturally responsive
          educational resources that equip individuals with the knowledge and
          tools for mental wellness.
        </p>
        <p>
          We honor and celebrate our champions of mental health—partners who
          believe in the power of hope, resilience, and collective healing.
          Their commitment to mental wellness and social equity is the
          cornerstone of our progress. Together, we are making a profound impact
          on the lives of individuals and communities, fostering a culture of
          understanding, acceptance, and support. Fundraising is not just about
          raising money; it is about building a movement, creating change, and
          transforming lives. We invite you to join us in this important work.
          Your support can help us continue to provide vital mental health
          services, expand our outreach, and empower individuals to take charge
          of their mental wellness. Together, we can make a difference and
          create a brighter future for all.
        </p>
      </div>
      <p>
        Thank you for being a part of our journey and for believing in the
        transformative power of mental health care. Your support means the world
        to us and to the individuals and communities we serve. Together, we can
        create a world where mental health is prioritized, understood, and
        supported. Join us in our mission to elevate mental health care and
        support for all.
      </p>

      <section className="mt-6">
        <h2>Our Past Events</h2>
        <div className="gap-5 grid lg:grid-cols-2">
          {pastFundraisingEvents.map((event) => (
            <PastFundraisingEventCard key={event.name} event={event} />
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2>Our Upcoming Events</h2>
        <div className="gap-5 grid lg:grid-cols-2">
          {futureFundraisingEvents.map((event) => (
            <FutureFundraisingEventCard key={event.name} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
