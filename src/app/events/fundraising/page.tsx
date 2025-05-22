"use client";

import { FutureFundraisingEventCard } from "@/components/cards/FutureFundraisingEventCard";
import { PastFundraisingEventCard } from "@/components/cards/PastFundraisingEventCard";
import {
  fundraisingEventMetrics,
  fundraisingTestimonials,
  futureFundraisingEvents,
  pastFundraisingEvents,
} from "@/lib/constants/events/fundraising";
import Image from "next/image";

export default function Fundraising() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Fundraising Is The Heart of Our Organization</h1>
      <h5>Join us in our mission to elevate mental health care and support.</h5>
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

      {/* Fundraising Metrics Section */}
      <section className="mt-8 mb-12 w-full">
        <div className="mx-auto w-10/12 md:w-9/12 text-center">
          <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {fundraisingEventMetrics.map((metric, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 rounded-xl"
              >
                <span className="font-bold text-4xl text-tertiary">
                  {metric.metric}
                </span>
                <div className="mt-2 font-medium">{metric.title}</div>
                <div className="mt-1 text-gray-500 text-sm">
                  {metric.subtitle}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-gray-600">
            Thanks to your generosity, our fundraising events have made a real
            difference in the community.
          </p>
        </div>
      </section>

      {/* Fundraising Story/Images Section */}
      <section className="py-12 w-full">
        <div className="flex lg:flex-row flex-col items-center gap-10">
          <div className="flex-1">
            <h2>See the Impact in Action</h2>
            <p>
              Our fundraising events are more than just numbers—they are moments
              of connection, hope, and transformation. From community walks to
              gala dinners, every event brings people together to support mental
              health and create lasting change. The photos below capture the
              spirit of our supporters, volunteers, and beneficiaries. Together,
              we are building a future where mental wellness is accessible to
              all.
            </p>
            <p>
              Thank you for being part of our story. Your generosity and
              participation make these moments possible!
            </p>
            <p>
              Each fundraiser is an opportunity to raise awareness, foster
              community, and provide essential resources for those in need.
              Whether you attended an event, made a donation, or volunteered
              your time, you have played a crucial role in our mission.
            </p>
            <p>
              We are continually inspired by the dedication and compassion of
              our supporters. Your involvement helps us launch new initiatives,
              support innovative mental health programs, and reach more
              individuals every year. Together, we are breaking down barriers
              and building a brighter, more inclusive future for mental health.
            </p>
          </div>
          <div className="flex-1 gap-4 grid grid-cols-2">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="Fundraising Walk"
              className="rounded-xl w-full h-40 object-cover"
              width={400}
              height={400}
            />
            <Image
              src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80"
              alt="Gala Dinner"
              className="rounded-xl w-full h-40 object-cover"
              width={400}
              height={400}
            />
            <Image
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
              alt="Community Gathering"
              className="rounded-xl w-full h-40 object-cover"
              width={400}
              height={400}
            />
            <Image
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
              alt="Supporters Cheering"
              className="rounded-xl w-full h-40 object-cover"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Fundraising Testimonials Section */}
      <section className="my-10 py-14 w-full">
        <h2>Loved by our supporters</h2>
        <p>
          Our fundraising events bring together passionate individuals and
          organizations. Here’s what our supporters have to say about their
          experience.
        </p>
        <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3 mt-7">
          {fundraisingTestimonials.map((quote, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 rounded-xl"
            >
              <p>“{quote.message}”</p>
              <div className="flex items-center gap-3 mt-4">
                <Image
                  src={quote.image}
                  alt="Supporter"
                  className="rounded-full w-9 h-9 object-cover"
                  height={50}
                  width={50}
                />
                <div className="text-left">
                  <div className="font-semibold">{quote.name}</div>
                  <div className="text-gray-500 text-xs">{quote.role}</div>
                </div>
              </div>
            </div>
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

      <section className="mt-6">
        <h2>Our Past Events</h2>
        <div className="gap-5 grid lg:grid-cols-2">
          {pastFundraisingEvents.map((event) => (
            <PastFundraisingEventCard key={event.name} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
