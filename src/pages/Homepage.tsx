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
  promptPulse,
  getTechFromLogo,
  getSocialLabel,
} from "../components/styled/TerminalStyled.ts";

/* ── HERO ── */

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 32px;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr 220px;
    gap: 24px;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

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

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

/* ── PORTRAIT ── */

const PortraitFrame = styled.div`
  background: var(--term-surface);
  border: 1px solid var(--term-border);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 680px) {
    max-width: 240px;
  }
`;

const PortraitTitleBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--term-surface-2);
  border-bottom: 1px solid var(--term-border);
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  color: var(--term-text-muted);
`;

const Portrait = styled.img`
  width: 100%;
  display: block;
  padding: 16px;
  filter: saturate(0.9);
  transition: filter 0.3s ease;

  &:hover {
    filter: saturate(1) drop-shadow(0 0 12px rgba(0, 255, 136, 0.15));
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

/* ── PROJECT LIST ── */

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -12px;

  @media (max-width: 640px) {
    margin: 0 -8px;
  }
`;

const ProjectRow = styled.a`
  display: grid;
  grid-template-columns: 20px 1fr auto;
  gap: 16px;
  align-items: start;
  padding: 16px 12px;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid var(--term-border);
  transition: background 0.2s ease;

  &:first-child {
    border-top: 1px solid var(--term-border);
  }

  &:hover {
    background: rgba(0, 255, 136, 0.03);
  }

  @media (max-width: 640px) {
    grid-template-columns: 20px 1fr;
    gap: 12px;
    padding: 14px 8px;
  }
`;

const CommitDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--term-green);
  margin-top: 6px;
  position: relative;
  flex-shrink: 0;

  ${ProjectRow}:not(:last-child) & {
    &::after {
      content: "";
      position: absolute;
      top: 14px;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: calc(100% + 26px);
      background: var(--term-border);
    }
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

const ProjectName = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 15px;
  font-weight: 500;
  color: var(--term-blue);
  transition: color 0.2s ease;

  ${ProjectRow}:hover & {
    color: var(--term-green);
    text-shadow: 0 0 8px rgba(0, 255, 136, 0.2);
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ProjectDesc = styled.span`
  font-size: 13px;
  color: var(--term-text-secondary);
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-self: center;

  @media (max-width: 640px) {
    grid-column: 2;
    align-self: start;
  }
`;

const TechTag = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  padding: 2px 10px;
  border-radius: 12px;
  background: rgba(188, 140, 255, 0.1);
  color: var(--term-purple);
  border: 1px solid rgba(188, 140, 255, 0.2);
  white-space: nowrap;
`;

/* ── PROMPT LINE (for social section header) ── */

const PromptLine = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  color: var(--term-text-muted);
  animation: ${promptPulse} 3s ease-in-out infinite;

  &::before {
    content: "$ ";
    color: var(--term-green);
  }

  @media (max-width: 480px) {
    font-size: 12px;
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
              <Portrait src="/mre-styled-portrait.svg" alt={DATA.main.name} />
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
