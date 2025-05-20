"use client";

import { ServiceCategory } from "@/lib/interfaces/services";
import { formatIDToUrl } from "@/lib/utils/format";
import { useRouter } from "next/navigation";

export function ServiceCategoryCard({
  category,
}: {
  category: ServiceCategory;
}) {
  const router = useRouter();
  return (
    <div className="bg-white shadow-md mb-6 p-6 border rounded-xl max-w-2xl">
      <h2
        className="mb-2 font-bold text-xl underline-offset-2 hover:underline cursor-pointer"
        onClick={() =>
          router.push(`/programs-and-services/${formatIDToUrl(category.name)}`)
        }
      >
        {category.name}
      </h2>
      <div className="mb-2 text-gray-700">{category.description}</div>
      <div>
        <span className="font-medium">Features:</span>
        <ul className="ml-4 list-disc list-inside">
          {category.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
