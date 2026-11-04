import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DATA from "../data/data";
import styled from "styled-components";
import SEOHelmet from "../components/common/SEOHelmet.tsx";
import TerminalHeader from "../components/common/TerminalHeader.tsx";
import ProjectTimeline from "../components/common/ProjectTimeline.tsx";
import {
  TerminalWindow,
  TerminalBody,
  WindowDots,
  Dot,
  SectionComment,
  Prompt,
  CommentBlock,
  Spacer,
  blink,
} from "../components/styled/TerminalStyled.ts";
import {
  TwoColumnGrid as HeroGrid,
  PromptLine,
  PortraitFrame,
  PortraitTitleBar,
  PortraitImage,
} from "../components/styled/ProfileStyled.ts";

/* ── HERO ── */

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NameTitle = styled.h1`
  color: var(--term-text);
  font-size: clamp(32px, 5vw, 48px);
  line-height: 1.1;
  letter-spacing: -0.04em;
`;

const TypedLine = styled.h2`
  font-family: "JetBrains Mono", monospace;
  font-size: clamp(18px, 2.5vw, 24px);
  font-weight: 700;
  color: var(--term-text);
  line-height: 1.35;
  display: flex;
  gap: 12px;

`;

const TypedText = styled.span`
  min-width: 0;
`;

const PendingText = styled.span`
  visibility: hidden;
`;

const Cursor = styled.span`
  position: relative;

  &::after {
    content: "|";
    position: absolute;
    left: 2px;
    color: var(--term-green);
    animation: ${blink} 0.8s step-end infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`;

const FeaturedHint = styled.p`
  margin: -4px 0 16px;
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  color: var(--term-text-secondary);

  &::before {
    content: "> ";
    color: var(--term-green);
  }

  span {
    margin-left: 12px;
  }
`;

const AllProjectsLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  color: var(--term-green);
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

/* ── COMPONENT ── */

const featuredProjects = DATA.projects.filter((project) => project.featured);

function Homepage() {
  const [typedTitle, setTypedTitle] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? DATA.homepage.title
      : "",
  );

  useEffect(() => {
    const title = DATA.homepage.title;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let characterIndex = 0;
    const timer = window.setInterval(() => {
      characterIndex += 1;
      setTypedTitle(title.slice(0, characterIndex));

      if (characterIndex >= title.length) {
        window.clearInterval(timer);
      }
    }, 36);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <SEOHelmet pageName="home" />

      <Spacer $h={48} />

      <TerminalWindow $delay="0.1s">
        <TerminalHeader path="~/moritzreis/intro.sh" />
        <TerminalBody>
          <HeroGrid>
            <HeroText>
              <PromptLine>whoami</PromptLine>
              <NameTitle>{DATA.main.name}</NameTitle>
              <TypedLine aria-label={DATA.homepage.title}>
                <Prompt aria-hidden="true">&gt;</Prompt>
                <TypedText aria-hidden="true">
                  {typedTitle}
                  <Cursor />
                  <PendingText>
                    {DATA.homepage.title.slice(typedTitle.length)}
                  </PendingText>
                </TypedText>
              </TypedLine>
              <CommentBlock>{DATA.homepage.description}</CommentBlock>
            </HeroText>

            <PortraitFrame>
              <PortraitTitleBar>
                <WindowDots aria-hidden="true">
                  <Dot $color="#ff5f57" />
                  <Dot $color="#febc2e" />
                  <Dot $color="#28c840" />
                </WindowDots>
                portrait.svg
              </PortraitTitleBar>
              <PortraitImage
                src="/mre-styled-portrait.svg"
                alt={DATA.main.name}
              />
            </PortraitFrame>
          </HeroGrid>
        </TerminalBody>
      </TerminalWindow>

      <Spacer $h={48} />

      <TerminalWindow $delay="0.3s">
        <TerminalHeader path="~/moritzreis/projects/featured" />
        <TerminalBody>
          <SectionComment>Featured Projects</SectionComment>
          <FeaturedHint>
            ls projects/ --featured
            <span>
              ({featuredProjects.length} of {DATA.projects.length})
            </span>
          </FeaturedHint>
          <ProjectTimeline projects={featuredProjects} />
          <AllProjectsLink to="/projects">
            ls projects/ --all &rarr;
          </AllProjectsLink>
        </TerminalBody>
      </TerminalWindow>
    </>
  );
}

export default Homepage;
