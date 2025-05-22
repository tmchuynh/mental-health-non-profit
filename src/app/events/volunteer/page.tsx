"use client";

import { FutureVolunteeringEventCard } from "@/components/cards/FutureVolunteeringEventCard";
import { PastVolunteeringEventCard } from "@/components/cards/PastVolunteeringEventCard";
import {
  futureVolunteeringEvents,
  pastVolunteeringEvents,
  volunteerTestimonials,
} from "@/lib/constants/events/volunteering";
import Image from "next/image";

export default function Volunteer() {
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
          opportunities available. By volunteering with us, you will have the
          chance to make a meaningful impact on the lives of individuals and
          communities. Your support can help us expand access to mental health
          resources, develop innovative programs, and reach underserved
          populations. Together, we can create a culture of understanding,
          acceptance, and support for mental wellness.
        </p>
        <p>
          We invite you to join us in this important work. Your time and
          dedication can help us continue to provide vital mental health
          services, empower individuals to take charge of their mental wellness,
          and foster a sense of community and connection. Together, we can make
          a difference and create a brighter future for all.
        </p>
      </div>

      <section className="mx-auto mt-12 w-10/12 md:w-11/12">
        <h2 className="mb-2 font-semibold text-3xl">What Our Volunteers Say</h2>
        <p className="mb-5">
          Hear from those who have made a difference with us. Our volunteers are
          the heart of our mission, and their stories inspire others to join.
          Together, we are creating a community of support, understanding, and
          empowerment. Their experiences reflect the impact of our work and the
          transformative power of volunteering. We are grateful for their
          dedication and commitment to making a difference in the lives of
          individuals and communities. Their voices remind us of the importance
          of mental health care and the role we all play in fostering a culture
          of understanding and acceptance. We invite you to join us in this
          important work and become a part of our community of volunteers. Your
          time and dedication can help us continue to provide vital mental
          health services, empower individuals to take charge of their mental
          wellness, and foster a sense of community and connection. Together, we
          can make a difference and create a brighter future for all.
        </p>
        <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
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
