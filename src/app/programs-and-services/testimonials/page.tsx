import { ImpactStoryCard } from "@/components/cards/ImpactStoryCard";
import { impactStories } from "@/lib/constants/about/story";

export default function Testimonials() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Testimonials</h1>
      <p>
        Hear from those who have experienced our programs and services
        firsthand. Their stories inspire us to continue our mission and make a
        difference in the community.
      </p>
      <div className="mt-8">
        {impactStories.map((story, idx) => (
          <ImpactStoryCard key={idx} story={story} />
        ))}
      </div>
    </div>
  );
}
