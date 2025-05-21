import { ServiceMeeting } from "@/lib/interfaces/services";


export function EventListItem({ event }: { event: ServiceMeeting }) {
  return (
    <div className="mb-8">
      <h3 className="font-semibold text-lg">{event.name}</h3>
      <div className="text-sm">
        <span>{event.date}</span>
        {" · "}
        <span>{event.time}</span>
        {" · "}
        <span>{event.location}</span>
      </div>
      <div className="mt-1">{event.description}</div>
      <div className="mt-1 italic">{event.introduction}</div>
      <div className="mt-1 text-sm">
        Hosted by: {event.hostedBy}
        {event.fee > 0 && (
          <>
            {" · "}
            Fee: ${event.fee}
          </>
        )}
      </div>
    </div>
  );
}
