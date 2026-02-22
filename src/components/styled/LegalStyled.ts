import styled from "styled-components";

export const LegalSection = styled.div`
  margin-bottom: 28px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionHeading = styled.h3`
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

export const ContentItem = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.7;
  padding-left: 20px;

  @media (max-width: 480px) {
    font-size: 13px;
    padding-left: 16px;
  }
`;

export const Label = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  color: var(--term-green);
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Value = styled.span`
  color: var(--term-text-secondary);
`;
