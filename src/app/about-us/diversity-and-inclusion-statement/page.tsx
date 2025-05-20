"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function DiversityAndInclusionStatement() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Diversity and Inclusion Statement</h1>

      <section>
        <div className="gap-2 grid lg:grid-cols-2">
          <div>
            <p>
              At InnerLight Elevation, we firmly believe that mental health care
              is a universal right that must be accessible and affirming to
              every individual, regardless of their background or identity. Our
              commitment to diversity, equity, and inclusion is not merely a
              statement but a foundational principle that guides every aspect of
              our organization—from program design and community outreach to
              hiring practices and partnerships.
            </p>
            <p>
              We recognize that the mental health challenges faced by
              individuals are deeply intertwined with their cultural, social,
              and personal contexts. Marginalized communities often experience
              unique stressors, systemic barriers, and stigmas that can prevent
              them from seeking or receiving appropriate care. To address this,
              InnerLight Elevation intentionally cultivates a welcoming
              environment where people of all races, ethnicities, genders,
              sexual orientations, ages, abilities, socioeconomic statuses,
              religions, and lived experiences feel seen, heard, and valued.
            </p>
          </div>
          <div>
            <p>
              Our programs and services are thoughtfully developed to be
              culturally responsive and trauma-informed. We actively seek input
              from diverse communities to ensure that our resources are
              relevant, respectful, and effective. We prioritize language
              access, representation in leadership and staff, and partnerships
              with organizations that serve underrepresented populations.
            </p>
            <p>
              Inclusion at InnerLight Elevation means more than access; it means
              empowerment. We strive to create spaces where individuals can
              authentically express their identities without fear of judgment or
              exclusion. We celebrate the strength that diversity brings to
              healing, recognizing that collective resilience arises from the
              rich tapestry of perspectives, stories, and experiences.
            </p>
          </div>
        </div>
        <div className="gap-4 grid lg:grid-cols-2">
          <p>
            Our commitment extends to continuous self-reflection and
            organizational growth. We invest in ongoing diversity and anti-bias
            training for our staff and volunteers, regularly assess our policies
            and practices through an equity lens, and welcome constructive
            feedback from the communities we serve.
          </p>
          <p>
            We understand that achieving true equity is an ongoing journey that
            requires humility, dedication, and partnership. InnerLight Elevation
            pledges to hold itself accountable to these values, advocating for
            systemic change in the mental health field and beyond. We envision a
            future where mental health care is not a privilege for some, but a
            fundamental support accessible to all.
          </p>
        </div>
        <p>
          By embedding diversity and inclusion into our core mission, InnerLight
          Elevation not only enriches the healing process but also contributes
          to building a more just, compassionate, and equitable society.
        </p>
      </section>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="mx-auto mt-9 md:w-10/12"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex justify-center items-center p-6 aspect-square">
                    <span className="font-semibold text-3xl">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
