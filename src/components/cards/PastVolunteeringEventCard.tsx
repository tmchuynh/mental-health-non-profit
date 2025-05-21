import { PastVolunteeringEvent } from "@/lib/interfaces/events";

export function PastVolunteeringEventCard({
  event,
}: {
  event: PastVolunteeringEvent;
}) {
  return (
    <div className="shadow-md mb-6 p-6 border rounded-xl max-w-2xl">
      <h2 className="mb-1 font-bold text-xl">{event.name}</h2>
      <div className="mb-2 text-sm">
        <span className="font-medium">Date:</span>{" "}
        {new Date(event.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div className="mb-2 text-sm">
        <span className="font-medium">Total Volunteers:</span>{" "}
        {event.totalVolunteers}
      </div>
      <div className="mb-2 text-sm">
        <span className="font-medium">Hours Contributed:</span>{" "}
        {event.hoursContributed}
      </div>
      <div className="mb-2 text-sm">
        <span className="font-medium">Cities Involved:</span>{" "}
        {event.citiesInvolved}
      </div>
      <div className="mb-2">
        <span className="font-medium">Impact Summary:</span>{" "}
        {event.impactSummary}
      </div>
      <div className="mb-2">
        <span className="font-medium">Outcomes:</span>
        <ul className="ml-4 list-disc list-inside">
          {event.outcomes.map((outcome, i) => (
            <li key={i}>{outcome}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
