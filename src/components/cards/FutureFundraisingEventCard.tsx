import { FutureFundraisingEvent } from "@/lib/interfaces/events";

export function FutureFundraisingEventCard({
  event,
}: {
  event: FutureFundraisingEvent;
}) {
  return (
    <div className="shadow-md mb-6 p-6 border rounded-xl max-w-2xl">
      <h2 className="mb-1 font-bold text-xl">{event.name}</h2>
      <div className="mb-2 text-sm">
        <span className="font-medium">Date:</span> {event.dateRange}
      </div>
      <div className="mb-2 text-sm">
        <span className="font-medium">Target:</span> $
        {event.targetAmount.toLocaleString()}
      </div>
      <div className="mb-2">
        <span className="font-medium">Open to Public:</span>{" "}
        {event.openToPublic ? "Yes" : "No"}
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
      <div className="mb-2">
        <span className="font-medium">Milestones:</span>
        <ul className="ml-4 list-disc list-inside">
          {event.milestones.map((milestone, i) => (
            <li key={i}>{milestone}</li>
          ))}
        </ul>
      </div>
      <div>
        <span className="font-medium">Donor Tiers:</span>
        <div className="gap-3 grid mt-2">
          {event.donorTiers.map((tier, i) => (
            <div key={i} className="p-3 border rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{tier.tierName}</span>
                <span className="text-xs">{tier.recognitionLevel}</span>
              </div>
              <div className="mb-1 text-sm">
                Minimum Donation: ${tier.minDonation}
              </div>
              <div>
                <span className="font-medium">Perks:</span>
                <ul className="ml-4 list-disc list-inside">
                  {tier.perks.map((perk, j) => (
                    <li key={j}>{perk}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
