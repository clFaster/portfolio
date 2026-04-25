interface SEOEntry {
  page: string;
  title: string;
  path: string;
  description: string;
  keywords: string[];
  ogType?: "website" | "article";
  robots?: string;
}

export const siteMetadata = {
  siteUrl: "https://moritzreis.dev",
  siteName: "Moritz Reis",
  defaultOgImage: "/mre-styled-portrait-favicon.png",
};

const SEO: SEOEntry[] = [
  {
    page: "home",
    title: "Moritz Reis | Software Architect",
    path: "/",
    description:
      "Software Architect at SIMStation building scalable, secure, and maintainable systems. Focused on pragmatic architecture, clean interfaces, and delivering reliable software with ASP.NET, C#, and modern web tech.",
    keywords: ["Moritz", "Moritz R", "Moritz Reis"],
  },
  {
    page: "about",
    title: "About | Moritz Reis",
    path: "/about",
    description:
      "Moritz Reis is a Software Architect at SIMStation. He designs scalable architectures, builds robust .NET solutions, and partners with teams to ship maintainable software.",
    keywords: ["Moritz", "Moritz R", "Moritz Reis"],
  },
  {
    page: "projects",
    title: "Projects | Moritz Reis",
    path: "/projects",
    description:
      "I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to.",
    keywords: ["Moritz", "Moritz R", "Moritz Reis"],
  },
  {
    page: "impressum",
    title: "Impressum | Moritz Reis",
    path: "/impressum",
    description:
      "Impressum und rechtliche Informationen für moritzreis.dev. Angaben gemäß § 5 ECG und Offenlegung gemäß § 25 Mediengesetz.",
    keywords: ["Impressum", "Moritz Reis", "Legal Information"],
  },
  {
    page: "datenschutz",
    title: "Datenschutz | Moritz Reis",
    path: "/datenschutz",
    description:
      "Datenschutzerklärung für moritzreis.dev. Informationen über die Verarbeitung Ihrer Daten gemäß DSGVO.",
    keywords: ["Datenschutz", "Privacy Policy", "DSGVO", "Moritz Reis"],
  },
  {
    page: "not-found",
    title: "404 | Moritz Reis",
    path: "/404",
    description:
      "The requested page could not be found on moritzreis.dev. Navigate back to the homepage to continue browsing.",
    keywords: ["404", "Not Found", "Moritz Reis"],
    robots: "noindex,follow",
  },
];

export default SEO;
