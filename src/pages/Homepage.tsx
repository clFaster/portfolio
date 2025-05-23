import DATA from "../data/data";
import {
  HomepageFirstArea,
  HomepageFirstAreaLeftSide,
  HomepageFirstAreaRightSide,
  HomepageProjects,
  HomepageSubTitle,
  HomepageText,
  HomepageTitle,
} from "../components/styled/HomepageStyled.ts";
import { ProjectOverview } from "../components/common/ProjectOverview.tsx";
import { useEffect, useState } from "react";
import { SocialContacts } from "../components/common/SocialContacts.tsx";
import SEOHelmet from "../components/common/SEOHelmet.tsx";
import ProfileImage from "../components/common/ProfileImage.tsx";

function Homepage() {
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
      <SEOHelmet pageName="home" />

      <HomepageFirstArea>
        <HomepageFirstAreaLeftSide>
          <HomepageTitle>{DATA.homepage.title}</HomepageTitle>
          <HomepageText>{DATA.homepage.description}</HomepageText>
        </HomepageFirstAreaLeftSide>

        <HomepageFirstAreaRightSide>
          <ProfileImage 
            imageSrc="../mre-styled-portrait.svg"
            imageAlt="Homepage Image"
            rotationAngle={rotationAngle}
          />
        </HomepageFirstAreaRightSide>
      </HomepageFirstArea>

      <SocialContacts />
      <HomepageProjects>
        <HomepageSubTitle>Projects</HomepageSubTitle>
        <HomepageText>
          I've compiled a collection of tools and solutions crafted across
          diverse technologies.
        </HomepageText>
        <ProjectOverview />
      </HomepageProjects>
    </>
  );
}

export default Homepage;
