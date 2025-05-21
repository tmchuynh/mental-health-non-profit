import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { categorizedPartners } from "@/lib/constants/about/partners";

export default function OurPartners() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Our Partners</h1>
      <h5>Working together for a brighter future.</h5>
      <p>
        We are proud to collaborate with a variety of organizations and
        individuals who share our commitment to making a positive impact in the
        community. Without the support of our partners, we would not be able to
        do what we do. Their contributions help us to provide the best possible
        care to our clients and to make a positive impact in the community.
      </p>

      <section className="flex flex-col gap-5 mt-7">
        {categorizedPartners.map((category, index) => (
          <div key={index}>
            <h2>{category.category}</h2>
            <p>{category.description}</p>
            <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-3 my-5">
              {category.partners.map((partner) => (
                <Card key={partner.name}>
                  <CardHeader>{partner.description}</CardHeader>
                  <CardFooter>
                    <h4>{partner.name}</h4>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
