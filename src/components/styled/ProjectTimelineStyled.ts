import styled from "styled-components";

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -12px;

  @media (max-width: 640px) {
    margin: 0 -8px;
  }
`;

export const ProjectRow = styled.a`
  display: grid;
  grid-template-columns: 20px 1fr auto;
  gap: 16px;
  align-items: start;
  padding: 16px 12px;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid var(--term-border);
  transition: background 0.2s ease;

  &:first-child {
    border-top: 1px solid var(--term-border);
  }

  &:hover {
    background: rgba(0, 255, 136, 0.03);
  }

  @media (max-width: 640px) {
    grid-template-columns: 20px 1fr;
    gap: 12px;
    padding: 14px 8px;
  }
`;

export const CommitDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--term-green);
  margin-top: 6px;
  position: relative;
  flex-shrink: 0;

  ${ProjectRow}:not(:last-child) & {
    &::after {
      content: "";
      position: absolute;
      top: 14px;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: calc(100% + 26px);
      background: var(--term-border);
    }
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const ProjectName = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 15px;
  font-weight: 500;
  color: var(--term-blue);
  transition: color 0.2s ease;

  ${ProjectRow}:hover & {
    color: var(--term-green);
    text-shadow: 0 0 8px rgba(0, 255, 136, 0.2);
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ProjectDesc = styled.span`
  font-size: 13px;
  color: var(--term-text-secondary);
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-self: center;

  @media (max-width: 640px) {
    grid-column: 2;
    align-self: start;
  }
`;

export const TechTag = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  padding: 2px 10px;
  border-radius: 12px;
  background: rgba(188, 140, 255, 0.1);
  color: var(--term-purple);
  border: 1px solid rgba(188, 140, 255, 0.2);
  white-space: nowrap;
`;
