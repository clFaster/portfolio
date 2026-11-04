import DATA from "../data/data";
import styled from "styled-components";
import SEOHelmet from "../components/common/SEOHelmet.tsx";
import TerminalHeader from "../components/common/TerminalHeader.tsx";
import CopyEmail from "../components/common/CopyEmail.tsx";
import {
  TerminalWindow,
  TerminalBody,
  WindowDots,
  Dot,
  SectionComment,
  CommentBlock,
  SocialCmd,
  Spacer,
  getSocialLabel,
} from "../components/styled/TerminalStyled.ts";
import {
  TwoColumnGrid as AboutGrid,
  SocialLinks,
  PromptLine,
  PortraitFrame,
  PortraitTitleBar,
  PortraitImage as Portrait,
} from "../components/styled/ProfileStyled.ts";

/* ── ABOUT-SPECIFIC STYLED COMPONENTS ── */

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AboutTitle = styled.h3`
  font-family: "JetBrains Mono", monospace;
  font-size: 18px;
  font-weight: 500;
  color: var(--term-text);
  line-height: 1.4;

  &::before {
    content: "> ";
    color: var(--term-green);
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

/* ── COMPONENT ── */

function About() {
  return (
    <>
      <SEOHelmet pageName="about" />

      <Spacer $h={48} />

      {/* ── About ── */}
      <TerminalWindow $delay="0.1s">
        <TerminalHeader path="~/moritzreis/about.md" />
        <TerminalBody>
          <AboutGrid>
            <AboutText>
              <SectionComment>About</SectionComment>
              <AboutTitle>{DATA.about.title}</AboutTitle>
              <CommentBlock>{DATA.about.description}</CommentBlock>
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
              </SocialLinks>
            </AboutText>

            <PortraitFrame>
              <PortraitTitleBar>
                <WindowDots aria-hidden="true">
                  <Dot $color="#ff5f57" />
                  <Dot $color="#febc2e" />
                  <Dot $color="#28c840" />
                </WindowDots>
                portrait.png
              </PortraitTitleBar>
              <Portrait src="/mre-portrait.png" alt={DATA.main.name} />
            </PortraitFrame>
          </AboutGrid>
        </TerminalBody>
      </TerminalWindow>

      <Spacer $h={48} />

      {/* ── Contact ── */}
      <TerminalWindow $delay="0.3s">
        <TerminalHeader path="~/moritzreis/contact.sh" />
        <TerminalBody>
          <SectionComment>Get in touch</SectionComment>
          <CopyEmail email={DATA.main.email} />
        </TerminalBody>
      </TerminalWindow>
    </>
  );
}

export default About;
