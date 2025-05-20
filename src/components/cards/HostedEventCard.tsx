import { HostedEvent } from "@/lib/interfaces/events";
import Image from "next/image";

export function HostedEventCard({ event }: { event: HostedEvent }) {
  return (
    <div className="flex md:flex-row flex-col gap-4 shadow-md mb-6 p-6 border rounded-xl max-w-2xl">
      <div className="flex-shrink-0">
        <Image
          src={event.image}
          alt={event.title}
          width={160}
          height={160}
          className="rounded-lg w-40 h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3>{event.title}</h3>
        <div className="mb-2">{event.description}</div>
        <div className="flex flex-col">
          <div className="inline-flex items-center">
            <h5 className="font-medium">Type:</h5> {event.type}
          </div>
          <div className="inline-flex items-center">
            <h5 className="font-medium">Date:</h5> {event.date}
          </div>
          <div className="inline-flex items-center">
            <h5 className="font-medium">Time:</h5> {event.time}
          </div>

          <div className="inline-flex items-center">
            <h5 className="font-medium">Location:</h5> {event.location}
          </div>
        </div>
      </div>
    </div>
  );
}
