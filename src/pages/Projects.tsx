import DATA from "../data/data.ts";
import SEO from "../data/seo.ts";
import {
    HomepageFirstArea,
    HomepageFirstAreaLeftSide,
    HomepageProjects,
    HomepageText,
    HomepageTitle
} from "../components/styled/HomepageStyled.ts";
import {ProjectOverview} from "../components/common/ProjectOverview.tsx";
import { Helmet } from "react-helmet-async";

function Projects() {
    const helmet = SEO.find((item) => item.page === "projects") || SEO[0];

    return (
        <>
            <Helmet>
                <title>{DATA.main.title}</title>
                <meta name="description" content={helmet.description}/>
                <meta
                    name="keywords"
                    content={helmet.keywords.join(", ")}
                />
            </Helmet>
            <HomepageFirstArea>
                <HomepageFirstAreaLeftSide>
                    <HomepageTitle>
                        Code Chronicles - Highlights of my journey through various projects.
                    </HomepageTitle>
                </HomepageFirstAreaLeftSide>
            </HomepageFirstArea>
            <HomepageProjects>
                <HomepageText>Welcome to my project showcase, where I’ve compiled a collection of tools and solutions
                    crafted across diverse technologies. Each project here is a step in my ongoing journey as a software
                    engineer, solving real-world problems and exploring new capabilities. I’m passionate about
                    open-source development and believe in creating accessible, community-driven software that can be
                    built upon and shared.</HomepageText>
                <ProjectOverview/>
            </HomepageProjects>
        </>
    );
}

export default Projects;