import datenschutzData from "../data/datenschutz.json";
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

const LastUpdated = styled.div`
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid var(--term-border);
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  color: var(--term-text-muted);

  &::before {
    content: "# ";
    color: var(--term-text-muted);
  }
`;

/* ── COMPONENT ── */

function Datenschutz() {
  return (
    <>
      <SEOHelmet pageName="datenschutz" />

      <Spacer $h={48} />

      <TerminalWindow $delay="0.1s">
        <TerminalTitleBar>
          <WindowDots>
            <Dot $color="#ff5f57" />
            <Dot $color="#febc2e" />
            <Dot $color="#28c840" />
          </WindowDots>
          ~/moritzreis/legal/datenschutz.md
        </TerminalTitleBar>
        <TerminalBody>
          <SectionComment>
            &#47;&#47; {datenschutzData.title} &mdash;{" "}
            {datenschutzData.subtitle}
          </SectionComment>

          {datenschutzData.sections.map((section, index) => (
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

          <LastUpdated>Stand: {datenschutzData.lastUpdated}</LastUpdated>
        </TerminalBody>
      </TerminalWindow>
    </>
  );
}

export default Datenschutz;
