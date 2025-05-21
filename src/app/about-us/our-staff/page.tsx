import { Card } from "@/components/ui/card";
import { staffDirectory } from "@/lib/constants/about/staff";
import { capitalize } from "@/lib/utils/format";
import Image from "next/image";

export default function OurStaff() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Meet our team</h1>
      <h5>Dedicated. Passionate. Committed to making a difference.</h5>
      <p>
        Our team is a diverse group of professionals, each bringing unique
        expertise and perspectives to the table. We are united by a common goal:
        to provide the best possible support and resources for mental health
        awareness and education. Together, we strive to create a positive impact
        in our community and beyond.
      </p>
      <div className="gap-5 grid mt-7">
        {staffDirectory.map((people, index) => (
          <section key={index}>
            <h2>{capitalize(people.category)}</h2>

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
          </section>
        ))}
      </div>
    </div>
  );
}
