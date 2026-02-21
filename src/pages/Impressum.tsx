import impressumData from "../data/impressum.json";
import styled from "styled-components";
import SEOHelmet from "../components/common/SEOHelmet.tsx";
import {
  TerminalWindow,
  TerminalTitleBar,
  TerminalBody,
  WindowDots,
  Dot,
  SectionComment,
  Spacer,
} from "../components/styled/TerminalStyled.ts";

/* ── LEGAL PAGE STYLED COMPONENTS ── */

const LegalSection = styled.div`
  margin-bottom: 28px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionHeading = styled.h3`
  font-family: "JetBrains Mono", monospace;
  font-size: 14px;
  font-weight: 500;
  color: var(--term-blue);
  margin-bottom: 12px;

  &::before {
    content: "## ";
    color: var(--term-text-muted);
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const ContentItem = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.7;
  padding-left: 20px;

  @media (max-width: 480px) {
    font-size: 13px;
    padding-left: 16px;
  }
`;

const Label = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  color: var(--term-green);
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Value = styled.span`
  color: var(--term-text-secondary);
`;

/* ── COMPONENT ── */

function Impressum() {
  return (
    <>
      <SEOHelmet pageName="impressum" />

      <Spacer $h={48} />

      <TerminalWindow $delay="0.1s">
        <TerminalTitleBar>
          <WindowDots>
            <Dot $color="#ff5f57" />
            <Dot $color="#febc2e" />
            <Dot $color="#28c840" />
          </WindowDots>
          ~/moritzreis/legal/impressum.md
        </TerminalTitleBar>
        <TerminalBody>
          <SectionComment>
            &#47;&#47; {impressumData.title} &mdash; {impressumData.subtitle}
          </SectionComment>

          {impressumData.sections.map((section, index) => (
            <LegalSection key={index}>
              <SectionHeading>{section.heading}</SectionHeading>
              {section.content.map((item, itemIndex) => (
                <ContentItem key={itemIndex}>
                  {item.label ? (
                    <>
                      <Label>{item.label}: </Label>
                      <Value>{item.value}</Value>
                    </>
                  ) : (
                    <Value>{item.value}</Value>
                  )}
                </ContentItem>
              ))}
            </LegalSection>
          ))}
        </TerminalBody>
      </TerminalWindow>
    </>
  );
}

export default Impressum;
