import impressumData from "../data/impressum.json";
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
