import { helplineDirectory } from "@/lib/constants/crisisHelplines";

export function HelplineList() {
  return (
    <ul className="gap-4 grid lg:grid-cols-2 mt-6">
      {helplineDirectory.map((helpline) => (
        <li key={helpline.name} className="shadow-sm p-4 border rounded">
          <div className="font-semibold text-base">{helpline.name}</div>
          <div>
            <span className="font-medium">Phone:</span> {helpline.phone}
          </div>
          <div>
            <span className="font-medium">Website:</span>{" "}
            <a
              href={helpline.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {helpline.website}
            </a>
          </div>
          <div className="">{helpline.description}</div>
          <div className="text-sm">Availability: {helpline.availability}</div>
        </li>
      ))}
    </ul>
  );
}
