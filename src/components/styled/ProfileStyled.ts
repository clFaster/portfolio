import styled from "styled-components";
import { promptPulse } from "./TerminalStyled.ts";

export const TwoColumnGrid = styled.div`
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

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const PromptLine = styled.span`
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

export const PortraitFrame = styled.div`
  background: var(--term-surface);
  border: 1px solid var(--term-border);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 680px) {
    max-width: 240px;
  }
`;

export const PortraitTitleBar = styled.div`
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

export const PortraitImage = styled.img`
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
