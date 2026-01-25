import datenschutzData from "../data/datenschutz.json";
import { Title, Subtitle } from "../components/styled/PageStyled.ts";
import SEOHelmet from "../components/common/SEOHelmet.tsx";
import styled from "styled-components";

const DatenschutzSection = styled.section`
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
  line-height: 1.6;
`;

const LastUpdated = styled.p`
  color: var(--tertiary-color);
  font-size: 14px;
  font-style: italic;
  margin-top: 40px;
`;

function Datenschutz() {
  return (
    <>
      <SEOHelmet pageName="datenschutz" />

      <Title>{datenschutzData.title}</Title>
      <Subtitle>{datenschutzData.subtitle}</Subtitle>

      {datenschutzData.sections.map((section, index) => (
        <DatenschutzSection key={index}>
          <SectionHeading>{section.heading}</SectionHeading>
          {section.content.map((item, itemIndex) => (
            <ContentItem key={itemIndex}>
              {item.label && <Label>{item.label}: </Label>}
              <Value>{item.value}</Value>
            </ContentItem>
          ))}
        </DatenschutzSection>
      ))}

      <LastUpdated>Stand: {datenschutzData.lastUpdated}</LastUpdated>
    </>
  );
}

export default Datenschutz;
