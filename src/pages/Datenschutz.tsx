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
import {
  LegalSection,
  SectionHeading,
  ContentItem,
  Label,
  Value,
} from "../components/styled/LegalStyled.ts";

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
