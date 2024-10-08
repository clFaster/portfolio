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
        page: "contact",
        description:
            "If you're interested in collaborating on a project, feel free to reach out to me. I'm always open to new ideas and opportunities.",
        keywords: ["Moritz", "Moritz R", "Moritz Reis"],
    },
];

export default SEO;
