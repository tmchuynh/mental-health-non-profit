import { Resource } from "@/lib/interfaces/resources";
import Image from "next/image";
import { useState } from "react";
import { Card } from "../ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export function LearningResourceCard({ resource }: { resource: Resource }) {
  const [open, setOpen] = useState(false);
  const [links, setLinks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch resource links when dialog opens
  const handleOpenChange = async (isOpen: boolean) => {
    setOpen(isOpen);
    if (isOpen && links.length === 0 && !loading) {
      setLoading(true);
      try {
        const mod = await import(`@/lib/constants/resources/${resource.id}`);
        setLinks(mod[resource.id] || []);
      } catch {
        setLinks([]);
      }
      setLoading(false);
    }
  };

  return (
    <>
      <Card
        className="flex flex-col gap-3 shadow-md mx-auto mb-6 p-6 border rounded-xl max-w-2xl cursor-pointer"
        onClick={() => handleOpenChange(true)}
        tabIndex={0}
        role="button"
        aria-label={`Open details for ${resource.title}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleOpenChange(true);
        }}
      >
        <div className="flex flex-col gap-4 h-full">
          <div>
            {resource.image && (
              <Image
                src={resource.image}
                alt={resource.title}
                className="border rounded-lg w-full h-52 lg:h-48 object-cover"
                width={96}
                height={96}
              />
            )}
          </div>
          <div>
            <h3>{resource.title}</h3>
            <h5>{resource.subtitle}</h5>
            <div>{resource.description}</div>
          </div>
        </div>
      </Card>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="rounded-2xl max-w-[75%] max-h-[80%]">
          <DialogHeader>
            <DialogTitle>{resource.title} Resources</DialogTitle>
            <DialogClose />
          </DialogHeader>
          <div className="flex-1 px-6 overflow-y-auto">
            {loading ? (
              <div>Loading...</div>
            ) : links.length > 0 ? (
              <ul className="space-y-4 list-decimal list-outside">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:no-underline"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div>No resources found.</div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
