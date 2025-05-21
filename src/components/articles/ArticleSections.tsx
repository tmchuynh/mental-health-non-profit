import { Section } from "@/lib/interfaces/articles";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { RecursiveList } from "./RecursiveList";

export default function ArticleSections({
  section,
  index,
}: {
  section: Section;
  index: number;
}) {
  return (
    <div>
      <div className="items-center gap-6 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 my-3">
        {section.image && (
          <div
            className={cn("col-span-3 lg:col-span-3", {
              "order-last": index % 2 === 0,
            })}
          >
            <Image
              src={section.image}
              alt={section.title}
              className="mx-auto my-4 rounded-2xl w-4/5 h-auto object-cover object-center lg:aspect-11/12"
              width={3600}
              height={3600}
            />
          </div>
        )}
        <div
          className={cn("col-span-3 lg:col-span-5", {
            "md:col-span-6 lg:col-span-8": !section.image,
          })}
        >
          {section.subtitle && <h5>{section.subtitle}</h5>}
          <h2>{section.title}</h2>
          {section.preface &&
            section.preface.map((content, sIndex) => (
              <p key={sIndex}>{content}</p>
            ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:gap-6">
        {section.paragraphs.map((paragraph, pIndex) => (
          <div key={pIndex}>
            <div
              className={cn(
                "gap-6 lg:gap-8 grid grid-cols-1 items-center md:grid-cols-6 lg:grid-cols-8"
              )}
            >
              <div
                className={cn(
                  "col-span-3 lg:col-span-4 xl:col-span-5 2xl:col-span-6",
                  {
                    "lg:col-span-5": pIndex % 2 === 0,
                    "order-last": pIndex % 3 === 0,
                    "col-span-6 lg:col-span-8 xl:col-span-8 2xl:col-span-8":
                      !paragraph.image,
                  }
                )}
              >
                <h3>{paragraph.topic}</h3>
                {paragraph.supporting.map((content, sIndex) => (
                  <p key={sIndex}>{content}</p>
                ))}
                {paragraph.list && (
                  <ul>
                    {paragraph.list.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-start gap-1">
                        {item.title && (
                          <div>
                            <p>
                              <strong>{item.title}: </strong> {item.description}
                            </p>

                            {item.list && <RecursiveList list={item.list} />}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {paragraph.image && (
                <div
                  className={cn(
                    "col-span-3 lg:col-span-4 xl:col-span-3 2xl:col-span-2 flex flex-col h-full justify-center",
                    {
                      "lg:col-span-3": pIndex % 2 === 0,
                      "": pIndex % 3 === 0,
                    }
                  )}
                >
                  <Image
                    src={paragraph.image}
                    alt={paragraph.topic}
                    className="my-4 rounded-2xl w-full h-full lg:aspect-square object-cover"
                    width={1000}
                    height={1000}
                  />
                </div>
              )}
            </div>
            {paragraph.concluding && <p>{paragraph.concluding}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
