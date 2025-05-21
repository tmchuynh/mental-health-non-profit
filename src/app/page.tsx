"use client";

import { ArticleCard } from "@/components/cards/ArticleCard";
import { Container } from "@/components/Container";
import Photos from "@/components/HeroPhotos";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/SocialIcons";
import SocialLink from "@/components/SocialLink";
import { StaffHighlight } from "@/components/StaffHighlight";
import { Button } from "@/components/ui/button";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { staffDirectory } from "@/lib/constants/about/staff";
import { articles } from "@/lib/constants/articles/articles";
import { categories } from "@/lib/constants/disorderCategories";
import { sortByProperty } from "@/lib/utils/sort";
import { useRouter } from "next/navigation";

export default function Home() {
  const disorderCategories = sortByProperty(categories, "title");
  const router = useRouter();
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
      <main className="mx-auto pb-24 lg:pb-32 w-10/12 md:w-11/12">
        <div className="gap-5 xl:gap-8 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-7 mt-20 h-full">
          <section className="gap-6 grid lg:grid-cols-2 lg:col-span-2 2xl:col-span-5">
            {articles.slice(0, 6).map((article, index) => (
              <ArticleCard
                key={index}
                categoryId={article.categoryId}
                title={article.title}
                description={article.description}
              />
            ))}
          </section>

          <section className="space-y-6 2xl:col-span-2">
            {staffDirectory.map((categories, index) => (
              <div key={index}>
                <h5>{categories.category}</h5>
                <div className="my-3 xl:pl-3 xl:border-l">
                  {categories.team.slice(0, 2).map((team, index) => (
                    <StaffHighlight
                      key={index}
                      name={team.name}
                      position={team.title}
                      image={team.image}
                    />
                  ))}
                </div>
              </div>
            ))}
            <Button onClick={() => router.push("/about-us/our-staff")}>
              Meet The Rest of Our Team
            </Button>
          </section>
        </div>

        <section className="gap-6 grid md:grid-cols-2 lg:grid-cols-3 mt-16">
          {disorderCategories.map((category, index) => (
            <HoverEffect
              key={index}
              title={category.title}
              description={category.subtitle}
              introduction={category.introduction}
              index={index}
            />
          ))}
        </section>
      </main>
    </>
  );
}
