type ImpactStory = {
  title: string;
  subtitle: string;
  background: string;
  role: string;
  outcome: string[];
  quote: string;
};

export function ImpactStoryCard({ story }: { story: ImpactStory }) {
  return (
    <div className="flex flex-col gap-3 bg-white shadow-md mb-6 p-6 border rounded-xl break-inside-avoid">
      <h2 className="font-bold text-lg">{story.title}</h2>
      <h3 className="font-semibold text-base text-indigo-700">
        {story.subtitle}
      </h3>
      <div className="text-gray-700 whitespace-pre-line">
        {story.background}
      </div>
      <div className="text-gray-700 whitespace-pre-line">{story.role}</div>
      <div>
        <span className="font-medium">Outcomes:</span>
        <ul className="ml-4 list-disc list-inside">
          {story.outcome.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <blockquote className="mt-2 pl-4 border-indigo-400 border-l-4 text-base text-gray-800 italic">
        {story.quote}
      </blockquote>
    </div>
  );
}
