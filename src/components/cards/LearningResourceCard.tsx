import { Resource } from "@/lib/interfaces/resources";
import Image from "next/image";

export function LearningResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="flex flex-col gap-3 bg-white shadow-md mb-6 p-6 border rounded-xl max-w-2xl">
      <div className="flex items-center gap-4">
        {resource.image && (
          <Image
            src={resource.image}
            alt={resource.title}
            className="border rounded-lg w-24 h-24 object-cover"
            width={96}
            height={96}
          />
        )}
        <div>
          <h2 className="font-bold text-xl">{resource.title}</h2>
          <h3 className="font-semibold text-indigo-700">{resource.subtitle}</h3>
        </div>
      </div>
      <div className="text-gray-700">{resource.description}</div>
      {resource.introduction && resource.introduction.length > 0 && (
        <div>
          {resource.introduction.map((item, i) => (
            <p key={i} className="text-gray-700 whitespace-pre-line">
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
