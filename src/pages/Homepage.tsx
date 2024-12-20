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
import {ProjectOverview} from "../components/common/ProjectOverview.tsx";
import {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import SEO from "../data/seo.ts";
import {SocialContacts} from "../components/common/SocialContacts.tsx";

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
                        <HomepageImageWrapper rotationangle={rotationAngle}>
                            <HomepageImage src="../logo.png" alt="Homepage Image"/>
                        </HomepageImageWrapper>
                    </HomepageImageContainer>
                </HomepageFirstAreaRightSide>
            </HomepageFirstArea>

            <SocialContacts/>
            <HomepageProjects>
                <HomepageSubTitle>Projects</HomepageSubTitle>
                <HomepageText>I’ve compiled a collection of tools and solutions crafted across diverse
                    technologies.</HomepageText>
                <ProjectOverview/>
            </HomepageProjects>
        </>
    );
}

export default Homepage;
