import { ServiceCategoryCard } from "@/components/cards/ServiceCategoryCard";
import { serviceCategories } from "@/lib/constants/serviceCategories";
import { highlights } from "@/lib/constants/services/highlights";

export default function ProgramsAndServices() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Programs and Services</h1>
      <h5>Empowering Mental Wellness for All</h5>
      <p>
        At InnerLight Elevation, we believe mental health is not a luxury—it’s a
        necessity. Our programs and services are built on the foundation that
        mental wellness is an essential part of every person’s overall
        well-being. We are committed to delivering inclusive, accessible, and
        culturally responsive support to individuals and communities from all
        walks of life. Whether someone is navigating a mental health condition,
        facing a life transition, or simply seeking tools to strengthen
        emotional resilience, our offerings are here to help.
      </p>
      <div className="gap-5 grid lg:grid-cols-2">
        <div>
          <p>
            Every program is designed with flexibility and sensitivity in mind.
            We listen to our community, adapt to evolving needs, and prioritize
            accessibility—whether that means offering services online,
            in-person, or through hybrid formats. We continually assess and
            refine our efforts to ensure that the support we provide is
            relevant, respectful, and effective.
          </p>
          <p>
            Our impact is amplified through strategic collaboration. We work
            alongside mental health professionals, educators, nonprofit
            organizations, community leaders, and advocates who share our
            vision: a world where mental health is recognized, supported, and
            treated with the urgency and dignity it deserves. Together, we are
            dismantling stigma, expanding access, and laying the groundwork for
            sustainable mental health equity.
          </p>
        </div>
        <div>
          <p>
            We invite you to explore our programs and join us in this vital
            mission. Whether you’re seeking support, want to get involved, or
            are simply looking to learn more, your presence matters. With your
            engagement, we can continue to grow our reach, expand our resources,
            and empower more people to take charge of their mental wellness.
          </p>
          <p>
            Together, we can build a future where mental health is not just
            treated—it is respected, prioritized, and celebrated.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-4 sm:mt-8 lg:mt-12">
        <dl className="gap-x-8 gap-y-16 grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-none">
          {highlights.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="flex items-center gap-x-3 font-semibold">
                <feature.icon
                  aria-hidden="true"
                  className="flex-none text-accent size-5"
                />
                {feature.name}
              </dt>
              <dd className="flex flex-col flex-auto mt-4">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="mt-12">
        <div className="gap-5 grid lg:grid-cols-2">
          {serviceCategories.map((event) => (
            <ServiceCategoryCard key={event.name} category={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
