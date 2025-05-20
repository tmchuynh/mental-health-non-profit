import { featuredDonors } from "@/lib/constants/about/donors";
import { groupAndSortByProperties } from "@/lib/utils/sort";
import Image from "next/image";

export default function Donors() {
  const sortedDonors = groupAndSortByProperties(featuredDonors, "type", "name");
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Our Valued Donors</h1>
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
