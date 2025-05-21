import Image from "next/image";

type StaffHighlightProps = {
  name: string;
  position: string;
  image: string;
};

export function StaffHighlight({ name, position, image }: StaffHighlightProps) {
  return (
    <div className="flex items-center gap-4 p-3 max-w-md">
      <Image
        src={image}
        alt={name}
        width={56}
        height={56}
        className="border rounded-full w-12 h-12 object-cover"
      />
      <div>
        <h4>{name}</h4>
        <p className="text-sm">{position}</p>
      </div>
    </div>
  );
}
