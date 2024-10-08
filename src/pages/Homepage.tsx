import {Helmet} from "react-helmet";

import DATA from "../data/data";
import SEO from "../data/seo";
import Navigations from "../components/common/Navigations.tsx";
import {ContentWrapper, PageContent} from "../components/styled/PageStyled.ts";
import {
    HomepageContainer,
    HomepageFirstArea,
    HomepageFirstAreaLeftSide,
    HomepageFirstAreaRightSide,
    HomepageImage,
    HomepageImageContainer,
    HomepageImageWrapper,
    HomepageSubtitle,
    HomepageTitle
} from "../components/styled/HomepageStyled.ts";

function Homepage() {
    const helmet = SEO.find((item) => item.page === "home") || SEO[0];

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

            <PageContent>
                <Navigations active="home"/>

                <ContentWrapper>
                    <HomepageContainer>
                        <HomepageFirstArea>
                            <HomepageFirstAreaLeftSide>
                                <HomepageTitle>
                                    {DATA.homepage.title}
                                </HomepageTitle>
                                <HomepageSubtitle>
                                    {DATA.homepage.description}
                                </HomepageSubtitle>
                            </HomepageFirstAreaLeftSide>

                            <HomepageFirstAreaRightSide>
                                <HomepageImageContainer>
                                    <HomepageImageWrapper>
                                        <HomepageImage src="../logo.png" alt="Homepage Image"/>
                                    </HomepageImageWrapper>
                                </HomepageImageContainer>
                            </HomepageFirstAreaRightSide>
                        </HomepageFirstArea>
                    </HomepageContainer>
                </ContentWrapper>
            </PageContent>
        </>
    );
}

export default Homepage;
