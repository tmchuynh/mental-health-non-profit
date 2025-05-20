import { ServiceCategoryCard } from "@/components/ServiceCategoryCard";
import { serviceCategories } from "@/lib/constants/serviceCategories";
import { highlights } from "@/lib/constants/services/highlights";

export default function ProgramsAndServices() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Programs and Services</h1>
      <div className="gap-5 grid lg:grid-cols-2">
        <p>
          At InnerLight Elevation, we are dedicated to transforming mental
          health care and support through a range of innovative programs and
          services. Our mission is to empower individuals and communities to
          prioritize mental wellness, foster resilience, and create a culture of
          understanding and acceptance. We offer a variety of programs designed
          to meet the diverse needs of our community, including educational
          workshops, support groups, outreach initiatives, and culturally
          responsive resources. Our team of experienced professionals is
          committed to providing high-quality care and support to individuals
          from all walks of life.
        </p>
        <p>
          We believe that mental health is a fundamental aspect of overall
          well-being and that everyone deserves access to the resources and
          support they need to thrive. Our programs are designed to be
          inclusive, accessible, and tailored to the unique needs of our
          community. We are proud to collaborate with a variety of organizations
          and individuals who share our commitment to making a positive impact
          in the community. Together, we are working to create a world where
          mental health is prioritized, understood, and supported. We invite you
          to explore our programs and services and to join us in this important
          work. Your support can help us continue to provide vital mental health
          resources, expand our outreach, and empower individuals to take charge
          of their mental wellness. Together, we can make a difference and
          create a brighter future for all.
        </p>
      </div>

      <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-2xl lg:max-w-none">
        <dl className="gap-x-8 gap-y-16 grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-none">
          {highlights.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="flex items-center gap-x-3 font-semibold text-base/7 text-gray-900">
                <feature.icon
                  aria-hidden="true"
                  className="flex-none text-accent size-5"
                />
                {feature.name}
              </dt>
              <dd className="flex flex-col flex-auto mt-4 text-base/7 text-gray-600">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="mt-6">
        <div className="gap-5 grid lg:grid-cols-2">
          {serviceCategories.map((event) => (
            <ServiceCategoryCard key={event.name} category={event} />
          ))}
        </div>
      </section>
    </div>
  );
}
