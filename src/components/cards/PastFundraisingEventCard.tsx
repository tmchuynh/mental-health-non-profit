import { PastFundraisingEvent } from "@/lib/interfaces/events";
import Image from "next/image";

export function PastFundraisingEventCard({
  event,
}: {
  event: PastFundraisingEvent;
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
        <span className="font-medium">Total Raised:</span> $
        {event.totalRaised.toLocaleString()}
      </div>
      <div className="mb-2 text-sm">
        <span className="font-medium">Contributors:</span> {event.contributors}
      </div>
      <div className="mb-2 text-sm">
        <span className="font-medium">States Involved:</span>{" "}
        {event.statesInvolved}
      </div>
      <div className="mb-2">
        <span className="font-medium">Impact:</span> {event.impact}
      </div>
      <div className="mb-2">
        <span className="font-medium">Donor Tiers:</span>
        <ul className="ml-4 list-disc list-inside">
          {event.donorTiers.map((tier, i) => (
            <li key={i}>
              <span className="font-semibold">{tier.tierName}</span>:{" "}
              {tier.donorsCount} donors
            </li>
          ))}
        </ul>
      </div>
      {event.images && event.images.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {event.images.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`${event.name} image ${i + 1}`}
              className="border rounded-lg w-24 h-24 object-cover"
              width={96}
              height={96}
            />
          ))}
        </div>
      )}
    </div>
  );
}
