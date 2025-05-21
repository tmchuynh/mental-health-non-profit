import Link from "next/link";

export default function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="w-6 h-6 transition fill-secondary group-hover:fill-tertiary" />
    </Link>
  );
}
