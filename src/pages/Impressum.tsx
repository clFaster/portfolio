import impressumData from "../data/impressum.json";
import { Title, Subtitle, Text } from "../components/styled/PageStyled.ts";
import SEOHelmet from "../components/common/SEOHelmet.tsx";
import styled from "styled-components";

const ImpressumSection = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const SectionHeading = styled.h3`
  color: var(--primary-color);
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  margin-top: 30px;
`;

const ContentItem = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.span`
  color: var(--primary-color);
  font-weight: 600;
  display: inline-block;
  min-width: 120px;
`;

const Value = styled.span`
  color: var(--secondary-color);
`;

function Impressum() {
  return (
    <>
      <SEOHelmet pageName="impressum" />

      <Title>{impressumData.title}</Title>
      <Subtitle>{impressumData.subtitle}</Subtitle>

      {impressumData.sections.map((section, index) => (
        <ImpressumSection key={index}>
          <SectionHeading>{section.heading}</SectionHeading>
          {section.content.map((item, itemIndex) => (
            <ContentItem key={itemIndex}>
              {item.label && <Label>{item.label}: </Label>}
              <Value>{item.value}</Value>
            </ContentItem>
          ))}
        </ImpressumSection>
      ))}
    </>
  );
}

export default Impressum;
