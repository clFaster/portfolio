// Define interfaces for the data structure
interface MainInfo {
    title: string;
    name: string;
    email: string;
    logo: string;
}

interface Socials {
    github: string;
    linkedin: string;
    stackoverflow: string;
}

interface Homepage {
    title: string;
    description: string;
}

interface About {
    title: string;
    description: string;
}

interface Project {
    title: string;
    description: string;
    logo: string;
    linkText: string;
    link: string;
}

interface Data {
    main: MainInfo;
    socials: Socials;
    homepage: Homepage;
    about: About;
    projects: Project[];
}

// Create the INFO constant with the defined type
const DATA: Data = {
    main: {
        title: "Moritz Reis | Software Engineer Portfolio",
        name: "Moritz R.",
        email: "me@moritzreis.dev",
        logo: "../logo-compressed.png",
    },

    socials: {
        github: "https://github.com/clFaster",
        linkedin: "https://www.linkedin.com/in/moritzreis/",
        stackoverflow: "https://stackoverflow.com/users/8307815"
    },

    homepage: {
        title: "Full-stack Software Engineer and Code Enthusiast",
        description:
            "Hey there! I'm a software engineer with a love for ASP.NET, C# and much more. Currently crafting cool things at SIMStation in Vienna. I enjoy solving puzzles through code, learning new tricks, and always aim to build stuff that's scalable, secure, and just plain awesome. Let's make tech fun!",
    },

    about: {
        title: "I’m Moritz. I live in Vienna, where I code, create, and occasionally break things (for science!)",
        description:
            "I've had the chance to work on all sorts of projects, from IT support to software engineering at Infineon and now at SIMStation. Studied software engineering and business management at Technische Universität Graz, so I’ve got a good mix of tech and business. Always excited to collaborate, share ideas, and keep learning!",
    },

    projects: [
        {
            title: "Project 1",
            description:
                "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
            logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
            linkText: "View Project",
            link: "https://github.com",
        },

        {
            title: "Project 2",
            description:
                "Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
            logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
            linkText: "View Project",
            link: "https://github.com",
        },
    ],
};

export default DATA;