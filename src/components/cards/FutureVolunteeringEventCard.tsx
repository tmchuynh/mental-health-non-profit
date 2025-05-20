import { FutureVolunteeringEvent } from "@/lib/interfaces/events";

export function FutureVolunteeringEventCard({
  event,
}: {
  event: FutureVolunteeringEvent;
}) {
  return (
    <div className="bg-white shadow-md mb-6 p-6 border rounded-xl max-w-2xl">
      <h2 className="mb-1 font-bold text-xl">{event.name}</h2>
      <div className="mb-2 text-gray-600 text-sm">
        <span className="font-medium">Date:</span> {event.dateRange}
      </div>
      <div className="mb-2 text-gray-600 text-sm">
        <span className="font-medium">Open Spots:</span> {event.openSpots}
      </div>
      <div className="mb-2">
        <span className="font-medium">Requirements:</span>
        <ul className="ml-4 list-disc list-inside">
          {event.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </div>
      <div className="mb-2">
        <span className="font-medium">Goals:</span>
        <ul className="ml-4 list-disc list-inside">
          {event.goals.map((goal, i) => (
            <li key={i}>{goal}</li>
          ))}
        </ul>
      </div>
      <div>
        <span className="font-medium">Milestones:</span>
        <ul className="ml-4 list-disc list-inside">
          {event.milestones.map((milestone, i) => (
            <li key={i}>{milestone}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
