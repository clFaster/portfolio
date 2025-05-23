import DATA from "../data/data.ts";
import {
  HomepageFirstArea,
  HomepageFirstAreaLeftSide,
  HomepageFirstAreaRightSide,
  HomepageImage,
  HomepageImageContainer,
  HomepageImageWrapper,
  HomepageText,
  HomepageTitle,
} from "../components/styled/HomepageStyled.ts";
import SEO from "../data/seo.ts";
import { useEffect, useState } from "react";
import { SocialContacts } from "../components/common/SocialContacts.tsx";
import { Helmet } from "react-helmet-async";

function About() {
  const helmet = SEO.find((item) => item.page === "about") || SEO[0];

  const [rotationAngle, setRotationAngle] = useState(5);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let newRotation = 5 - scrollPosition * 0.01;
      if (newRotation < 0) newRotation = 0;
      setRotationAngle(newRotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>{DATA.main.title}</title>
        <meta name="description" content={helmet.description} />
        <meta name="keywords" content={helmet.keywords.join(", ")} />
      </Helmet>

      <HomepageFirstArea>
        <HomepageFirstAreaLeftSide>
          <HomepageTitle>{DATA.about.title}</HomepageTitle>
          <HomepageText>{DATA.about.description}</HomepageText>
        </HomepageFirstAreaLeftSide>

        <HomepageFirstAreaRightSide>
          <HomepageImageContainer>
            <HomepageImageWrapper $rotationangle={rotationAngle}>
              <HomepageImage
                src="../mre-portrait.png"
                alt="Drawing of Moritz Reis"
              />
            </HomepageImageWrapper>
          </HomepageImageContainer>
        </HomepageFirstAreaRightSide>
      </HomepageFirstArea>

      <SocialContacts />
    </>
  );
}

export default About;
