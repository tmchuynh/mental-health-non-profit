import { FutureVolunteeringEventCard } from "@/components/FutureVolunteeringEventCard";
import { PastVolunteeringEventCard } from "@/components/PastVolunteeringEventCard";
import {
  pastVolunteeringEvents,
  futureVolunteeringEvents,
} from "@/lib/constants/events/volunteering";
import Image from "next/image";

export default function Volunteer() {
  return (
    <div>
      <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
        <h1>Volunteer With Us</h1>
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
      <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
        <section className="mt-6">
          <h2>Our Past Events</h2>
          <div className="gap-5 grid lg:grid-cols-2">
            {pastVolunteeringEvents.map((event) => (
              <PastVolunteeringEventCard key={event.name} event={event} />
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2>Our Upcoming Events</h2>
          <div className="gap-5 grid lg:grid-cols-2">
            {futureVolunteeringEvents.map((event) => (
              <FutureVolunteeringEventCard key={event.name} event={event} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
