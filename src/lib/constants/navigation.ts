export const menuData = [
  {
    label: "InnerLight Elevation",
    items: [
      { type: "item", label: "About Us", href: "/about-us" },
      { type: "item", label: "Our Staff", href: "/about-us/our-staff" },
      { type: "item", label: "Our Partners", href: "/about-us/our-partners" },
      { type: "separator" },

      {
        type: "sub",
        label: "Statements",
        items: [
          {
            type: "item",
            label: "Mental Health Pledge",
            href: "/about-us/mental-health-pledge",
          },
          {
            type: "item",
            label: "Diversity & Inclusion Statement",
            href: "/about-us/diversity-and-inclusion-statement",
          },
        ],
      },
    ],
  },
  {
    label: "Get Involved",
    items: [
      { type: "item", label: "Donations", href: "/donations" },
      { type: "item", label: "Featured Donors", href: "/donations/donors" },
      { type: "item", label: "Volunteer", href: "/events/volunteer" },
      { type: "item", label: "Fundraising", href: "/events/fundraising" },
      { type: "separator" },
      {
        type: "sub",
        label: "Events",
        items: [
          { type: "item", label: "View Future Events", href: "/events" },
          {
            type: "item",
            label: "Read About Past Events",
            href: "/events/stories",
          },
        ],
      },
    ],
  },
  {
    label: "Programs & Services",
    items: [
      { type: "item", label: "Overview", href: "/programs-and-services" },
      {
        type: "item",
        label: "Testimonials",
        href: "/programs-and-services/testimonials",
      },
    ],
  },
  {
    label: "More Information",
    items: [
      { type: "item", label: "Articles", href: "/articles" },
      {
        type: "item",
        label: "Learning Resources",
        href: "/articles/learning-resources",
      },
      { type: "separator" },
      { type: "item", label: "Crisis Helplines", href: "/crisis-helplines" },
    ],
  },
];


export const menuDataMobile = [
  {
    label: "About",
    items: [
      {
        type: "sub",
        label: "InnerLight Elevation",
        items: [
          { type: "item", label: "Our Story", href: "/about-us" },
          { type: "item", label: "Our Staff", href: "/about-us/our-staff" },
          {
            type: "item",
            label: "Our Partners",
            href: "/about-us/our-partners",
          },
        ],
      },
      {
        type: "sub",
        label: "Statements",
        items: [
          {
            type: "item",
            label: "Mental Health Pledge",
            href: "/about-us/mental-health-pledge",
          },
          {
            type: "item",
            label: "Diversity & Inclusion Statement",
            href: "/about-us/diversity-and-inclusion-statement",
          },
        ],
      },
      {
        type: "sub",
        label: "More Information",
        items: [
          { type: "item", label: "Articles", href: "/articles" },
          {
            type: "item",
            label: "Learning Resources",
            href: "/articles/learning-resources",
          },
          { type: "separator" },
          {
            type: "item",
            label: "Crisis Helplines",
            href: "/crisis-helplines",
          },
        ],
      },
    ],
  },
  {
    label: "Programs & Services",
    items: [
      { type: "item", label: "Overview", href: "/programs-and-services" },
      {
        type: "item",
        label: "Testimonials",
        href: "/programs-and-services/testimonials",
      },
      {
        type: "sub",
        label: "Events",
        items: [
          { type: "item", label: "View Future Events", href: "/events" },
          {
            type: "item",
            label: "Read About Past Events",
            href: "/events/stories",
          },
          { type: "item", label: "Donations", href: "/donations" },
          { type: "item", label: "Featured Donors", href: "/donations/donors" },
          { type: "item", label: "Volunteer", href: "/events/volunteer" },
          { type: "item", label: "Fundraising", href: "/events/fundraising" },
        ],
      },
    ],
  },
];