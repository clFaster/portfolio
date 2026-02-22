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
        <TerminalTitleBar>
          <WindowDots>
            <Dot $color="#ff5f57" />
            <Dot $color="#febc2e" />
            <Dot $color="#28c840" />
          </WindowDots>
          ~/moritzreis/about.md
        </TerminalTitleBar>
        <TerminalBody>
          <AboutGrid>
            <AboutText>
              <SectionComment>&#47;&#47; About</SectionComment>
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
                <SocialCmd href={`mailto:${DATA.main.email}`}>
                  {DATA.main.email}
                </SocialCmd>
              </SocialLinks>
            </AboutText>

            <PortraitFrame>
              <PortraitTitleBar>
                <WindowDots>
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
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Prompt>&gt;</Prompt>
            <ContactCmd href={`mailto:${DATA.main.email}`}>
              mail --to {DATA.main.email}
            </ContactCmd>
          </div>
        </TerminalBody>
      </TerminalWindow>
    </>
  );
}

export default About;
