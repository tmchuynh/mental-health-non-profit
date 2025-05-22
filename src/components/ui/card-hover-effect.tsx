import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

export const HoverEffect = ({
  index: idx,
  title,
  description,
  introduction,
  link,
  className,
}: {
  index: number;
  title: string;
  description: string;
  introduction?: string;
  link?: string;
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <a
      href={link}
      key={link}
      className={cn("group block relative p-2 w-full h-full", className)}
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === idx && (
          <motion.span
            className="block -z-10 absolute inset-0 bg-tertiary/10 rounded-3xl w-full h-full"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.35 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.35, delay: 0.25 },
            }}
          />
        )}
      </AnimatePresence>
      <Card className="flex flex-col justify-between h-full">
        <CardHeader className="h-full">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-foreground/70">
            {description}
          </CardDescription>
        </CardHeader>
        {introduction && (
          <CardContent className="h-full text-sm">{introduction}</CardContent>
        )}
      </Card>
    </a>
  );
};
