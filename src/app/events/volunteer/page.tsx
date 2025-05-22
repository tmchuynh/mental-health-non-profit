"use client";

import { FutureVolunteeringEventCard } from "@/components/cards/FutureVolunteeringEventCard";
import { PastVolunteeringEventCard } from "@/components/cards/PastVolunteeringEventCard";
import {
  futureVolunteeringEvents,
  pastVolunteeringEvents,
  volunteerTestimonials,
} from "@/lib/constants/events/volunteering";
import Image from "next/image";
import { useState } from "react";

const INFO_CARDS = [
  {
    key: "impact",
    icon: (
      <span className="inline-block text-2xl" role="img" aria-label="Impact">
        🌱
      </span>
    ),
    title: "Your Impact",
    subtitle: "See how your volunteering makes a difference.",
    content: (
      <div>
        <h4>How Volunteers Make a Difference</h4>
        <p>
          Volunteers are the heart of our mission. Every hour you give helps us
          reach more people in need of mental health support, whether through
          direct service, event organization, or community outreach. Your
          efforts help us:
        </p>
        <ul className="mt-2 ml-5 list-disc">
          <li>
            Expand access to mental health resources in underserved communities
          </li>
          <li>Host educational workshops and support groups</li>
          <li>Provide peer-to-peer support and mentorship</li>
          <li>Raise awareness and reduce stigma around mental health</li>
        </ul>
        <p className="mt-2">
          Together, we build a stronger, more compassionate community where
          everyone can thrive.
        </p>
      </div>
    ),
  },
  {
    key: "roles",
    icon: (
      <span className="inline-block text-2xl" role="img" aria-label="Roles">
        🤝
      </span>
    ),
    title: "Volunteer Roles",
    subtitle: "Find the right opportunity for you.",
    content: (
      <div>
        <h4>Ways You Can Help</h4>
        <ul className="ml-5 list-disc">
          <li>
            <b>Event Support:</b> Help organize, set up, and run community
            events, workshops, and fundraisers.
          </li>
          <li>
            <b>Community Outreach:</b> Distribute resources, share information,
            and connect with local organizations to spread awareness.
          </li>
          <li>
            <b>Peer Support & Mentorship:</b> Offer guidance and a listening ear
            to those seeking mental health support.
          </li>
          <li>
            <b>Advocacy & Fundraising:</b> Assist with campaigns, social media,
            and outreach to help us grow our impact.
          </li>
          <li>
            <b>Administrative Help:</b> Support our team with behind-the-scenes
            tasks, communications, and logistics.
          </li>
        </ul>
        <p className="mt-2">
          No matter your background or skill set, there is a place for you on
          our team!
        </p>
      </div>
    ),
  },
  {
    key: "process",
    icon: (
      <span className="inline-block text-2xl" role="img" aria-label="Process">
        📝
      </span>
    ),
    title: "How to Get Started",
    subtitle: "Simple steps to join our volunteer team.",
    content: (
      <div>
        <h4>Becoming a Volunteer</h4>
        <ol className="ml-5 list-decimal">
          <li>
            <b>Apply Online:</b> Fill out our volunteer application form with
            your interests and availability.
          </li>
          <li>
            <b>Attend Orientation:</b> Join a brief session to learn about our
            mission, values, and volunteer expectations.
          </li>
          <li>
            <b>Get Matched:</b> We’ll connect you with opportunities that fit
            your skills and passions.
          </li>
          <li>
            <b>Start Volunteering:</b> Begin making a difference in your
            community and receive ongoing support from our team.
          </li>
        </ol>
      </div>
    ),
  },
];

export default function Volunteer() {
  const [selected, setSelected] = useState(INFO_CARDS[0].key);

  const selectedCard = INFO_CARDS.find((c) => c.key === selected);

  return (
    <div>
      <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
        <h1>Volunteer With Us</h1>
        <h5>Join us in making a difference in mental health care.</h5>

        <p>
          At InnerLight Elevation, we believe that everyone has the power to
          make a difference. Our volunteer program is designed to empower
          individuals to contribute their time, skills, and passion to support
          our mission of transforming mental health care and support. Whether
          you are looking to gain experience, give back to the community, or
          connect with like-minded individuals, we have a variety of volunteer
          opportunities available.
        </p>
        <p>
          By volunteering with us, you will have the chance to make a meaningful
          impact on the lives of individuals and communities. Your support can
          help us expand access to mental health resources, develop innovative
          programs, and reach underserved populations. Together, we can create a
          culture of understanding, acceptance, and support for mental wellness.
        </p>
        <p>
          We invite you to join us in this important work. Your time and
          dedication can help us continue to provide vital mental health
          services, empower individuals to take charge of their mental wellness,
          and foster a sense of community and connection. Together, we can make
          a difference and create a brighter future for all.
        </p>
      </div>

      <Image
        src={
          "https://images.unsplash.com/photo-1620302044868-e061ebf02bfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1lbnRhbCUyMGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D"
        }
        alt="Volunteer"
        className="mx-auto mt-5 w-full h-[10em] object-cover"
        width={600}
        height={400}
      />
      <section className="mx-auto mt-12 w-10/12 md:w-11/12">
        <h2 className="mb-2 font-semibold text-3xl">What Our Volunteers Say</h2>
        <p className="mb-10">
          Hear from those who have made a difference with us. Our volunteers are
          the heart of our mission, and their stories inspire others to join.
        </p>
        <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3 mt-7">
          {volunteerTestimonials.map((quote, index) => (
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

      <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
        <section className="mt-6">
          <h2>Our Upcoming Events</h2>
          <div className="gap-5 grid lg:grid-cols-2">
            {futureVolunteeringEvents.map((event) => (
              <FutureVolunteeringEventCard key={event.name} event={event} />
            ))}
          </div>
        </section>

        {/* Interactive Info Cards */}
        <div className="flex flex-col items-center mx-auto mt-10">
          <div className="flex md:flex-row flex-col md:justify-center gap-6 w-full">
            {INFO_CARDS.map((card) => (
              <button
                key={card.key}
                className={`flex-1 rounded-2xl border p-5 text-left transition-all ${
                  selected === card.key
                    ? "bg-tertiary/10 border-tertiary shadow"
                    : " hover:bg-muted"
                }`}
                style={{ minWidth: 220 }}
                onClick={() => setSelected(card.key)}
                type="button"
              >
                <div className="flex items-center gap-3 mb-2">
                  {card.icon}
                  <span className="font-semibold">{card.title}</span>
                </div>
                <div className="text-gray-600 text-sm">{card.subtitle}</div>
              </button>
            ))}
          </div>
          <div className="shadow-sm mt-6 p-6 border rounded-xl w-full min-h-[120px]">
            {selectedCard?.content}
          </div>
        </div>

        <section className="mt-18">
          <h2>Our Past Events</h2>
          <div className="gap-5 grid lg:grid-cols-2">
            {pastVolunteeringEvents.map((event) => (
              <PastVolunteeringEventCard key={event.name} event={event} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
