import { helplineDirectory } from "@/lib/constants/crisisHelplines";

export function HelplineList() {
  return (
    <ul className="mt-6 space-y-6">
      {helplineDirectory.map((helpline) => (
        <li key={helpline.name} className="border rounded p-4 shadow-sm">
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
          <div className="text-gray-700">{helpline.description}</div>
          <div className="text-gray-500 text-sm">
            Availability: {helpline.availability}
          </div>
        </li>
      ))}
    </ul>
  );
}
