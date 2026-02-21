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
  promptPulse,
} from "../components/styled/TerminalStyled.ts";

/* ── ABOUT-SPECIFIC STYLED COMPONENTS ── */

const AboutGrid = styled.div`
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

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

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
