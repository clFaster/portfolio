import DATA from "../data/data";
import {
    HomepageFirstArea,
    HomepageFirstAreaLeftSide,
    HomepageFirstAreaRightSide,
    HomepageImage,
    HomepageImageContainer,
    HomepageImageWrapper,
    HomepageProjects,
    HomepageSubTitle,
    HomepageText,
    HomepageTitle
} from "../components/styled/HomepageStyled.ts";
import {SocialIcon, Socials} from "../components/styled/SocialsStyled.ts";
import {faGithub, faStackOverflow} from '@fortawesome/free-brands-svg-icons';
import {faMailBulk} from '@fortawesome/free-solid-svg-icons';
import {ProjectOverview} from "../components/common/ProjectOverview.tsx";
import {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import SEO from "../data/seo.ts";

function Homepage() {
    const helmet = SEO.find((item) => item.page === "home") || SEO[0];

    const [rotationAngle, setRotationAngle] = useState(5);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            let newRotation = 5 - scrollPosition * 0.01;
            if (newRotation < 0) newRotation = 0;
            setRotationAngle(newRotation);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                        {DATA.homepage.title}
                    </HomepageTitle>
                    <HomepageText>
                        {DATA.homepage.description}
                    </HomepageText>
                </HomepageFirstAreaLeftSide>

                <HomepageFirstAreaRightSide>
                    <HomepageImageContainer>
                        <HomepageImageWrapper rotationAngle={rotationAngle}>
                            <HomepageImage src="../logo.png" alt="Homepage Image"/>
                        </HomepageImageWrapper>
                    </HomepageImageContainer>
                </HomepageFirstAreaRightSide>
            </HomepageFirstArea>

            <Socials>
                <a href={DATA.socials.github} target="_blank" rel="noreferrer">
                    <SocialIcon icon={faGithub}/>
                </a>
                <a href={DATA.socials.stackoverflow} target="_blank" rel="noreferrer">
                    <SocialIcon icon={faStackOverflow}/>
                </a>
                <a href={`mailto:${DATA.main.email}`} target="_blank" rel="noreferrer">
                    <SocialIcon icon={faMailBulk}/>
                </a>
            </Socials>
            <HomepageProjects>
                <HomepageSubTitle>Projects</HomepageSubTitle>
                <HomepageText>Some of my projects I build over the last years.</HomepageText>
                <ProjectOverview/>
            </HomepageProjects>
        </>
    );
}

export default Homepage;
