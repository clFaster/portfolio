import styled from "styled-components";

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -12px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 17px;
    width: 2px;
    background: var(--term-border);
  }

  @media (max-width: 640px) {
    margin: 0 -8px;

    &::before {
      left: 13px;
    }
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

  &:focus-visible {
    outline: 2px solid var(--term-green);
    outline-offset: -2px;
    background: rgba(0, 255, 136, 0.05);
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
  z-index: 1;
  flex-shrink: 0;

`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const ProjectMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--term-text-secondary);
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const ProjectYear = styled.span``;

export const ProjectStatus = styled.span<{ $status: "active" | "archived" }>`
  color: ${(p) =>
    p.$status === "active" ? "var(--term-green)" : "var(--term-text-secondary)"};
  border: 1px solid
    ${(p) =>
      p.$status === "active"
        ? "rgba(0, 255, 136, 0.3)"
        : "var(--term-border)"};
  border-radius: 999px;
  padding: 1px 7px;
`;

export const ProjectDataNote = styled.p`
  margin-top: 16px;
  color: var(--term-text-secondary);
  font-size: 12px;
  line-height: 1.5;
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
