import { Container } from "@/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/SocialIcons";
import image1 from "@/images/photos/image-1.jpg";
import image2 from "@/images/photos/image-2.jpg";
import image3 from "@/images/photos/image-3.jpg";
import image4 from "@/images/photos/image-4.jpg";
import image5 from "@/images/photos/image-5.jpg";
import { articleCategories } from "@/lib/constants/articleCategories";
import { sortByProperty } from "@/lib/utils/sort";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const disorderCategories = sortByProperty(articleCategories, "title");
  return (
    <>
      <Container className="pt-6 sm:pt-12 lg:pt-16">
        <div className="max-w-5xl">
          <h1>
            Understanding Mental Health Starts with Access to the Right
            Information
          </h1>
          <p>
            Whether you're seeking clarity about your own experiences,
            supporting a loved one, or simply learning more, our curated
            resources are designed to empower, educate, and reduce stigma—one
            fact at a time.
          </p>
          <div className="flex gap-6 mt-6">
            <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <main className="mx-auto pb-24 lg:pb-32 w-10/12 md:w-11/12"></main>
    </>
  );
}

function SocialLink({
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

function Photos() {
  const rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="flex justify-center gap-5 sm:gap-8 -my-4 py-4 overflow-hidden">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              "relative flex-none rounded-xl sm:rounded-2xl w-44 sm:w-72 overflow-hidden aspect-9/10",
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
