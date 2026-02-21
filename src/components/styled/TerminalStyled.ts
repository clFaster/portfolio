import styled, { keyframes } from "styled-components";

/* ── ANIMATIONS ── */

export const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

export const typeIn = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const promptPulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

/* ── COLORS (exported for reference) ── */
/*
  --term-bg:         #0D1117
  --term-surface:    #161B22
  --term-surface-2:  #1C2129
  --term-border:     #30363D
  --term-text:       #E6EDF3
  --term-text-secondary: #8B949E
  --term-text-muted: #484F58
  --term-green:      #00FF88
  --term-blue:       #58A6FF
  --term-purple:     #BC8CFF
*/

/* ── PAGE SHELL ── */

export const Page = styled.div`
  min-height: 100vh;
  background: var(--term-bg);
  color: var(--term-text);
  font-family: "Manrope", sans-serif;
  overflow-x: hidden;
  position: relative;

  /* CRT scanline overlay */
  &::after {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9999;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.06) 2px,
      rgba(0, 0, 0, 0.06) 4px
    );
  }
`;

export const Content = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px 40px;

  @media (max-width: 640px) {
    padding: 0 16px 32px;
  }
`;

/* ── TERMINAL WINDOW (reusable section frame) ── */

export const TerminalWindow = styled.section<{ $delay?: string }>`
  background: var(--term-surface);
  border: 1px solid var(--term-border);
  border-radius: 8px;
  overflow: hidden;
  animation: ${fadeUp} 0.5s ease both;
  animation-delay: ${(p) => p.$delay ?? "0s"};
`;

export const TerminalTitleBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: var(--term-surface-2);
  border-bottom: 1px solid var(--term-border);
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  color: var(--term-text-secondary);
  user-select: none;

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 11px;
  }
`;

export const TerminalBody = styled.div`
  padding: 24px;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

/* ── WINDOW DOTS ── */

export const WindowDots = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
`;

export const Dot = styled.span<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(p) => p.$color};

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
  }
`;

/* ── SECTION COMMENT HEADER ── */

export const SectionComment = styled.h2`
  font-family: "JetBrains Mono", monospace;
  font-size: 14px;
  font-weight: 400;
  color: var(--term-text-secondary);
  margin-bottom: 24px;
  letter-spacing: 0.5px;

  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 20px;
  }
`;

/* ── PROMPT & TYPED TEXT ── */

export const Prompt = styled.span`
  color: var(--term-green);
  flex-shrink: 0;
  animation: ${promptPulse} 3s ease-in-out infinite;
`;

export const CommentBlock = styled.p`
  font-family: "Manrope", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: var(--term-text-secondary);
  line-height: 1.7;
  padding-left: 24px;
  border-left: 2px solid var(--term-border);

  &::before {
    content: "// ";
    color: var(--term-text-muted);
    font-family: "JetBrains Mono", monospace;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding-left: 16px;
  }
`;

/* ── SOCIAL COMMAND LINKS ── */

export const SocialCmd = styled.a`
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  color: var(--term-text-secondary);
  text-decoration: none;
  padding: 6px 0;
  transition: color 0.2s ease;
  display: block;

  &::before {
    content: "$ open ";
    color: var(--term-green);
  }

  &:hover {
    color: var(--term-green);
    text-shadow: 0 0 8px rgba(0, 255, 136, 0.3);
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

/* ── CONTACT COMMAND BUTTON ── */

export const ContactCmd = styled.a`
  font-family: "JetBrains Mono", monospace;
  font-size: 14px;
  color: var(--term-blue);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: 1px solid var(--term-border);
  border-radius: 6px;
  transition: all 0.2s ease;
  background: transparent;

  &::before {
    content: "$ ";
    color: var(--term-green);
  }

  &:hover {
    border-color: var(--term-green);
    color: var(--term-green);
    box-shadow: 0 0 16px rgba(0, 255, 136, 0.15);
    background: rgba(0, 255, 136, 0.04);
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 8px 16px;
  }
`;

/* ── SPACER ── */

export const Spacer = styled.div<{ $h?: number }>`
  height: ${(p) => p.$h ?? 48}px;

  @media (max-width: 768px) {
    height: ${(p) => Math.round((p.$h ?? 48) * 0.75)}px;
  }

  @media (max-width: 480px) {
    height: ${(p) => Math.round((p.$h ?? 48) * 0.6)}px;
  }
`;

/* ── HELPERS ── */

export function getTechFromLogo(logo: string): string {
  if (logo.includes("javascript")) return "JavaScript";
  if (logo.includes("typescript")) return "TypeScript";
  if (logo.includes("csharp")) return "C#";
  if (logo.includes("python")) return "Python";
  if (logo.includes("teilfair")) return "React";
  return "Code";
}

export function getSocialLabel(url: string): string {
  if (url.includes("github")) return "github.com/clFaster";
  if (url.includes("linkedin")) return "linkedin.com/in/moritzreis";
  if (url.includes("stackoverflow")) return "stackoverflow.com/users/8307815";
  return url.replace(/https?:\/\//, "");
}
