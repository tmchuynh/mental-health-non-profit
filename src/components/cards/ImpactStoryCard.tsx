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
    <div className="flex flex-col gap-3 shadow-md mb-6 p-6 border rounded-xl break-inside-avoid">
      <h3>{story.title}</h3>
      <h5>{story.subtitle}</h5>
      <div className="whitespace-pre-line">{story.background}</div>
      <div className="whitespace-pre-line">{story.role}</div>
      <div>
        <span className="font-medium">Outcomes:</span>
        <ul className="ml-4 list-disc list-inside">
          {story.outcome.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <blockquote className="mt-2 pl-4 border-primary border-l-4 text-base italic">
        {story.quote}
      </blockquote>
    </div>
  );
}
