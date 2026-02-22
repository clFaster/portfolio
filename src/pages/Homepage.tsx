import DATA from "../data/data";
import styled from "styled-components";
import SEOHelmet from "../components/common/SEOHelmet.tsx";
import {
  TerminalWindow,
  TerminalTitleBar,
  TerminalBody,
  WindowDots,
  Dot,
  SectionComment,
  Prompt,
  CommentBlock,
  SocialCmd,
  ContactCmd,
  Spacer,
  blink,
  typeIn,
  getTechFromLogo,
  getSocialLabel,
} from "../components/styled/TerminalStyled.ts";
import {
  TwoColumnGrid as HeroGrid,
  SocialLinks,
  PromptLine,
  PortraitFrame,
  PortraitTitleBar,
  PortraitImage,
} from "../components/styled/ProfileStyled.ts";
import {
  ProjectList,
  ProjectRow,
  CommitDot,
  ProjectInfo,
  ProjectName,
  ProjectDesc,
  TagRow,
  TechTag,
} from "../components/styled/ProjectTimelineStyled.ts";

/* ── HERO ── */

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TypedLine = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 24px;
  font-weight: 700;
  color: var(--term-text);
  line-height: 1.35;
  display: flex;
  gap: 12px;

  @media (max-width: 860px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    gap: 8px;
  }
`;

const TypedText = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typeIn} 2.5s steps(40, end) forwards;
  max-width: 100%;

  &::after {
    content: "|";
    color: var(--term-green);
    margin-left: 4px;
    animation: ${blink} 0.8s step-end infinite;
  }

  @media (max-width: 680px) {
    white-space: normal;
    animation: none;
    overflow: visible;
  }
`;

/* ── COMPONENT ── */

function Homepage() {
  return (
    <>
      <SEOHelmet pageName="home" />

      <Spacer $h={48} />

      {/* ── Hero ── */}
      <TerminalWindow $delay="0.1s">
        <TerminalTitleBar>
          <WindowDots>
            <Dot $color="#ff5f57" />
            <Dot $color="#febc2e" />
            <Dot $color="#28c840" />
          </WindowDots>
          ~/moritzreis/intro.sh
        </TerminalTitleBar>
        <TerminalBody>
          <HeroGrid>
            <HeroText>
              <TypedLine>
                <Prompt>&gt;</Prompt>
                <TypedText>{DATA.homepage.title}</TypedText>
              </TypedLine>
              <CommentBlock>{DATA.homepage.description}</CommentBlock>
              <div>
                <PromptLine>ls socials/</PromptLine>
              </div>
              <SocialLinks>
                {Object.values(DATA.socials).map((url) => (
                  <SocialCmd
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getSocialLabel(url)}
                  </SocialCmd>
                ))}
                <SocialCmd href={`mailto:${DATA.main.email}`}>
                  {DATA.main.email}
                </SocialCmd>
              </SocialLinks>
            </HeroText>

            <PortraitFrame>
              <PortraitTitleBar>
                <WindowDots>
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

      {/* ── Projects ── */}
      <TerminalWindow $delay="0.3s">
        <TerminalTitleBar>
          <WindowDots>
            <Dot $color="#ff5f57" />
            <Dot $color="#febc2e" />
            <Dot $color="#28c840" />
          </WindowDots>
          ~/moritzreis/projects
        </TerminalTitleBar>
        <TerminalBody>
          <SectionComment>&#47;&#47; Projects</SectionComment>
          <ProjectList>
            {DATA.projects.map((project) => (
              <ProjectRow
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CommitDot />
                <ProjectInfo>
                  <ProjectName>{project.title}</ProjectName>
                  <ProjectDesc>{project.description}</ProjectDesc>
                </ProjectInfo>
                <TagRow>
                  <TechTag>{getTechFromLogo(project.logo)}</TechTag>
                </TagRow>
              </ProjectRow>
            ))}
          </ProjectList>
        </TerminalBody>
      </TerminalWindow>

      <Spacer $h={48} />

      {/* ── Contact ── */}
      <TerminalWindow $delay="0.5s">
        <TerminalTitleBar>
          <WindowDots>
            <Dot $color="#ff5f57" />
            <Dot $color="#febc2e" />
            <Dot $color="#28c840" />
          </WindowDots>
          ~/moritzreis/contact.sh
        </TerminalTitleBar>
        <TerminalBody>
          <SectionComment>&#47;&#47; Get in touch</SectionComment>
          <ContactCmd href={`mailto:${DATA.main.email}`}>
            mail --to {DATA.main.email}
          </ContactCmd>
        </TerminalBody>
      </TerminalWindow>
    </>
  );
}

export default Homepage;
