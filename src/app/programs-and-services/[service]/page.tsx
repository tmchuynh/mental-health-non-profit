"use client";

import { EventListItem } from "@/components/EventListItem";
import { serviceCategories } from "@/lib/constants/serviceCategories";
import { ServiceMeeting } from "@/lib/interfaces/services";
import { capitalize, formatUrlToID } from "@/lib/utils/format";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ServicePage() {
  const { service } = useParams();
  const formattedService = formatUrlToID(service as string);
  console.log("Service:", service);
  console.log("formattedService:", formattedService);

  const title = capitalize(service as string);

  console.log("Title:", title);

  const [serviceData, setServiceData] = useState<ServiceMeeting[]>([]);
  const [loading, setLoading] = useState(true);

  const serviceCategoryInfo = serviceCategories.find(
    (category) => category.name === title
  );

  console.log("Service Category Info:", serviceCategoryInfo);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serviceModule = await import(
          `@/lib/constants/services/${service}`
        );
        // Return the specific named export that matches toolKitID
        if (serviceModule[formattedService]) {
          setServiceData(serviceModule[formattedService]);
        } else {
          console.error(`Export named ${formattedService} not found in module`);
          return [];
        }
      } catch (error) {
        console.error(`Error loading resource: ${error}`);
        return [];
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [service, formattedService]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (serviceData.length === 0) {
    return <div>No data found for this service.</div>;
  }

  console.log("Service Data:", serviceData);

  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>{capitalize(service as string)}</h1>
      {serviceCategoryInfo && <h5>{serviceCategoryInfo.description}</h5>}

      <section className="mt-6">
        <div className="gap-5 grid lg:grid-cols-2">
          {serviceData.map((meeting) => (
            <EventListItem key={meeting.name} event={meeting} />
          ))}
        </div>
      </section>
    </div>
  );
}
