import { HostedEvent } from "@/lib/interfaces/events";
import { capitalize } from "@/lib/utils/format";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

export function EventStoryCard({ story }: { story: HostedEvent }) {
  return (
    <Link
      href={`/events/stories/${story.id}`}
      className="flex gap-4 shadow-md mb-6 p-6 border rounded-2xl"
    >
      <div>
        {story.image && (
          <Image
            src={story.image}
            alt={story.title}
            className="border rounded-lg w-full h-52 lg:h-48 object-cover"
            width={400}
            height={400}
          />
        )}
      </div>
      <div>
        <Badge variant={"outline"}>{capitalize(story.type)}</Badge>
        <h3>{story.title}</h3>
        <div>{story.description}</div>
        <div>
          <p>
            Date: {story.date} - {story.time}
          </p>
          <p>Location: {story.location}</p>
        </div>
      </div>
    </Link>
  );
}

export default EventStoryCard;
