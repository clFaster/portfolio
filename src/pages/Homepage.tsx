import DATA from "../data/data";
import {
    HomepageFirstArea,
    HomepageFirstAreaLeftSide,
    HomepageFirstAreaRightSide,
    HomepageImage,
    HomepageImageContainer,
    HomepageImageWrapper,
    HomepageSubtitle,
    HomepageTitle
} from "../components/styled/HomepageStyled.ts";
import {Helmet} from "react-helmet";
import SEO from "../data/seo.ts";

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
            </>
    );
}

export default Homepage;
