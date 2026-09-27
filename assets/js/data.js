/*
 * Portfolio content. To add a project, append an object to PROJECTS.
 *   featured: true  -> shows on the Home page (first 4 featured are used)
 *   description: short blurb revealed when hovering a Home card (falls back to summary)
 *   period: optional date range shown on case-study cards (falls back to year)
 *   status: "in-progress" adds a badge; omit when finished
 *   link: case-study page, relative to the site root (e.g. "ux-playground/calm-flow/");
 *         full https:// URLs also work and open in a new tab
 *   image: cover image URL, or leave empty to show a tinted placeholder
 *   imageZoom: optional zoom for the card image, e.g. 1.2 crops in 20% (default 1)
 *   imageFocus: point the zoom centres on, as "x% y%" (default "50% 50%")
 */
const FRAMER = "https://framerusercontent.com/images/";

window.PROJECTS = [
  {
    slug: "ckd-care",
    title: "Participatory Design Research on Thailand's CKD care",
    tagline: "Preventing unplanned dialysis for CKD patients in Thailand",
    description:
      "A research project under TDRI that uncovered various underpinning issues throughout the patient-clinician journey by applying human-centered design & research approach and ultimately proposed policy-level solutions.",
    summary:
      "A research project under TDRI that uncovered various underpinning issues throughout the patient-clinician journey by applying human-centered design & research approach and ultimately proposed policy-level solutions.",
    role: "Service Designer & Researcher",
    period: "January 2025 – September 2026",
    year: "2025–26",
    tags: ["Service Design", "Experience-Based Co-Design", "Policy Research", "Transition Design", "Participatory Research"],
    category: "research",
    image: "ux-playground/ckd-care/img/banner.webp",
    imageZoom: 1.3,
    imageFocus: "92% 55%",
    link: "ux-playground/ckd-care/",
    featured: true,
  },
  {
    slug: "promjai",
    title: "Promjai: CKD Care in the Family Chat",
    tagline: "A LINE chatbot that brings families into CKD care",
    summary:
      "A care-coordination chatbot that joins a family's existing LINE group chat, keeping CKD patients, their families and the care team on the same page. It grew out of the policy proposals in the CKD participatory design research.",
    role: "Product Designer",
    year: "2025–26",
    tags: ["Conversational UX", "Service Design", "Healthcare"],
    category: "product",
    image: "ux-playground/promjai/img/card-cover.webp",
    link: "ux-playground/promjai/",
    featured: true,
  },
  {
    slug: "acoustic-aura",
    title: "Acoustic Aura",
    tagline: "Enhancing theatre accessibility with vibrotactile stimuli",
    description:
      "Acoustic Aura is a research-based project on the potential impact of vibrotactile stimuli on theatre experience and accessibility for D/deaf and/or hard-of-hearing spectators.",
    summary:
      "Acoustic Aura is a research-based project on the potential impact of vibrotactile stimuli on theatre experience and accessibility for D/deaf and/or hard-of-hearing spectators.",
    role: "UX Researcher",
    period: "February – July 2024",
    year: "2024",
    tags: ["HCI Research", "D/deafness", "Hard-of-Hearing", "Theatrical Entertainment", "Accessibility"],
    category: "research",
    image: FRAMER + "tMvx297do5JnYhtVcIoCDf2N8eU.jpg",
    link: "ux-playground/acoustic-aura/",
    featured: true,
  },
  {
    slug: "pixel-planet",
    title: "Pixel Planet",
    tagline: "Unleash the joy, embrace the green",
    description:
      "PixelPlanet is an app designed to empower individuals to participate in responsible e-waste recycling. By making it easy to find recycling centers and learn about proper disposal methods, PixelPlanet aims to reduce the impact of e-waste on our planet.",
    summary:
      "A conceptual app introduced to empower individuals to participate in responsible e-waste recycling and reduce the impact of e-waste on our planet, focusing on easing the recycling centers recognition and the learning process of proper disposal methods.",
    role: "Product Designer",
    year: "2024",
    tags: ["Sustainability", "SHCI", "Speculative Design", "Content Design"],
    category: "product",
    image: FRAMER + "tIfjNhYSobvvHnQdeQtXUgZCpo.png",
    link: "ux-playground/pixel-planet/",
  },
  {
    slug: "calm-flow",
    title: "CalmFlow",
    tagline: "Enhancing wellness, enriching education",
    description:
      "CalmFlow combines interactive design with information technology to enhance university students' wellness through common breathing techniques. It also gathers data that could help improve the university's educational system.",
    summary:
      "The combination of interactive design and information technology that aims to enhance university students' wellness through common breathing techniques, while also gathering data that benefits the improvement of the university's educational system.",
    role: "Product Designer",
    year: "2024",
    tags: ["UX Design", "Social Wellness", "Mental Health", "Technology"],
    category: "product",
    image: FRAMER + "7BQ2iBVDFIzLsVijM4fFM11Qoc.jpeg",
    link: "ux-playground/calm-flow/",
    featured: true,
  },
  {
    slug: "mindful-grocery",
    title: "Mindful Grocery",
    tagline: "Fill your basket with purposeful picks",
    description:
      "Mindful Grocery is a platform designed to connect ethical brands with mindful consumers. We aim to simplify the process of finding and learning about ethical products.",
    summary:
      "A conceptual platform designed to connect ethical brands with mindful consumers. We aim to simplify the process of finding and learning about ethical products.",
    role: "Product Designer",
    year: "2024",
    tags: ["Ethical Consumption", "UX Design", "UI Design", "Social Design", "RRI Approach"],
    category: "product",
    image: FRAMER + "4sVpNgnuqxhXarwlcvaAlFiqo2o.png",
    link: "ux-playground/mindful-grocery/",
  },
  {
    slug: "ai-with-feeling",
    title: "Sensational AI Chat-bot",
    tagline: "How emotion-responsive bots may shape user experience",
    summary:
      "A small project exploring how chatbots that capable of emotional recognition and response might impact the human-AI perception and interaction",
    role: "UX Researcher",
    year: "2026",
    tags: ["Conversational UX", "AI", "Research"],
    category: "research",
    image: FRAMER + "13R3Ei1qMike1l3gZL4yUi5RpqU.png",
    link: "",
    status: "in-progress",
  },
  {
    slug: "card-restrictions",
    title: "The Unhappy Path: Card Restrictions",
    tagline: "Designing for the moment a card can't be used",
    summary:
      "Designing the experience when a card is restricted by a deny list: how people find out, understand why, and know what to do next.",
    role: "UX Designer",
    year: "2026",
    tags: ["Fintech", "Payments", "Error States"],
    category: "product",
    image: "ux-playground/card-restrictions/img/card-cover.webp",
    link: "",
    status: "in-progress",
  },
];

/* Loose visual work shown in the "Other design projects" gallery. */
window.GALLERY = [
  "W3XsckznAzKI2tUGCpf32lsM5M.jpg",
  "UnwWQ6JjVZL4uBGJPQ2FdGxuOq4.jpg",
  "ZHrYnRrc0bfVUFKRZks88RdYyus.jpg",
  "0wKR3EZutRjSmc1LrHwPj19F8.jpg",
  "YZGbTFqXFMA6P4Zvv6OnesQ8ZOs.jpg",
  "BUfUj0rwLPzjW7bqte000Ws8.jpg",
  "HdH8FsRWpuIuIZmvRw6s2QI.jpg",
  "tWSupo4TTgOJ9OTi94cnSyPf5E8.png",
  "n4fpJgMZjWiWXMCFfs68nT3n1w.png",
  "OYBzEgXXBuhjUTE4wGTy6W8hvA.png",
].map((f) => FRAMER + f);

window.SITE = {
  name: "Nattaporn Muhpayak",
  initials: "NM",
  email: "nattaporn.mu98@gmail.com",
  linkedin: "https://www.linkedin.com/in/nattaporn-muhpayak-510900213",
  location: "Bangkok, Thailand",
};
