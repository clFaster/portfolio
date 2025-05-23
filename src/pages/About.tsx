import DATA from "../data/data.ts";
import {
  HomepageFirstArea,
  HomepageFirstAreaLeftSide,
  HomepageFirstAreaRightSide,
  HomepageText,
  HomepageTitle,
} from "../components/styled/HomepageStyled.ts";
import { useEffect, useState } from "react";
import { SocialContacts } from "../components/common/SocialContacts.tsx";
import SEOHelmet from "../components/common/SEOHelmet.tsx";
import ProfileImage from "../components/common/ProfileImage.tsx";

function About() {
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
      <SEOHelmet pageName="about" />

      <HomepageFirstArea>
        <HomepageFirstAreaLeftSide>
          <HomepageTitle>{DATA.about.title}</HomepageTitle>
          <HomepageText>{DATA.about.description}</HomepageText>
        </HomepageFirstAreaLeftSide>

        <HomepageFirstAreaRightSide>
          <ProfileImage
            imageSrc="../mre-portrait.png"
            imageAlt="Drawing of Moritz Reis"
            rotationAngle={rotationAngle}
          />
        </HomepageFirstAreaRightSide>
      </HomepageFirstArea>

      <SocialContacts />
    </>
  );
}

export default About;
