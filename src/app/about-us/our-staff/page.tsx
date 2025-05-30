import { Card } from "@/components/ui/card";
import { staffDirectory } from "@/lib/constants/about/staff";
import { capitalize } from "@/lib/utils/format";
import Image from "next/image";

export default function OurStaff() {
  return (
    <main className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <header>
        <h1>Meet Our Team</h1>
        <h5>Dedicated. Passionate. Committed to making a difference.</h5>
        <p>
          Our team is a diverse group of professionals, each bringing unique
          expertise and perspectives to the table. We are united by a common
          goal: to provide the best possible support and resources for mental
          health awareness and education. Together, we strive to create a
          positive impact in our community and beyond.
        </p>
        <p>
          We are proud to have a team that reflects the diversity of the
          communities we serve. Our staff members come from various backgrounds,
          cultures, and experiences, allowing us to approach mental health care
          with empathy and understanding. We believe that this diversity is a
          strength that enhances our ability to connect with individuals and
          families from all walks of life.
        </p>
      </header>
      <div className="gap-5 grid mt-7">
        {staffDirectory.map((people, index) => (
          <section key={index} aria-labelledby={`staff-category-${index}`}>
            <h2 id={`staff-category-${index}`}>
              {capitalize(people.category)}
            </h2>
            <div className="gap-6 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto lg:mx-0 mt-8">
              {people.team.map((person) => (
                <Card key={person.name} className="px-8 py-10 rounded-2xl">
                  <Image
                    alt=""
                    src={person.image}
                    className="mx-auto rounded-full size-48 md:size-56 object-cover"
                    width={200}
                    height={200}
                  />
                  <div className="flex flex-col items-center">
                    <h3>{person.name}</h3>
                    <p>{person.title}</p>
                    <p>{person.bio}</p>
                  </div>
                </Card>
              ))}
            </div>
            {/* Quotes section */}
            {people.quotes && (
              <div className="gap-8 grid grid-cols-1 md:grid-cols-2 mx-auto mt-12 mb-8 w-11/12">
                {people.quotes.map((quote, i) => (
                  <figure
                    key={i}
                    className="flex flex-col justify-between h-full"
                  >
                    <blockquote className="flex-1">
                      <span className="text-7xl leading-none select-none">
                        “
                      </span>
                      <p className="mb-6 font-medium text-2xl md:text-3xl">
                        {quote.text}
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center mt-4">
                      <Image
                        src={quote.image}
                        alt={quote.name}
                        width={64}
                        height={64}
                        className="rounded-full w-16 h-16 object-cover"
                      />
                      <div className="ml-4">
                        <div className="font-semibold">{quote.name}</div>
                        <div className="text-sm">{quote.title}</div>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
