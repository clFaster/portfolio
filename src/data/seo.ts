interface SEOEntry {
  page: string;
  description: string;
  keywords: string[];
}

const SEO: SEOEntry[] = [
  {
    page: "home",
    description:
      "Experienced backend developer specializing in ASP.NET and more, with a proven track record of building scalable, secure, and reliable web applications. Proficient in a range of frameworks and technologies, delivering high-quality code for modern web development.",
    keywords: ["Moritz", "Moritz R", "Moritz Reis"],
  },
  {
    page: "about",
    description:
      "Experienced backend developer specializing in ASP.NET and more, with a proven track record of building scalable, secure, and reliable web applications. Proficient in a range of frameworks and technologies, delivering high-quality code for modern web development.",
    keywords: ["Moritz", "Moritz R", "Moritz Reis"],
  },
  {
    page: "projects",
    description:
      "I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to.",
    keywords: ["Moritz", "Moritz R", "Moritz Reis"],
  },
  {
    page: "impressum",
    description:
      "Impressum und rechtliche Informationen für moritzreis.dev. Angaben gemäß § 5 ECG und Offenlegung gemäß § 25 Mediengesetz.",
    keywords: ["Impressum", "Moritz Reis", "Legal Information"],
  },
  {
    page: "datenschutz",
    description:
      "Datenschutzerklärung für moritzreis.dev. Informationen über die Verarbeitung Ihrer Daten gemäß DSGVO.",
    keywords: ["Datenschutz", "Privacy Policy", "DSGVO", "Moritz Reis"],
  },
];

export default SEO;
