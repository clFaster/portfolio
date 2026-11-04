import { useState } from "react";
import styled from "styled-components";

const EmailActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

const MailLink = styled.a`
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

  &::before {
    content: "$ ";
    color: var(--term-green);
  }

  &:hover {
    border-color: var(--term-green);
    color: var(--term-green);
    background: rgba(0, 255, 136, 0.04);
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 8px 16px;
  }
`;

const CopyButton = styled.button`
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  color: var(--term-text-secondary);
  background: transparent;
  border: 1px solid var(--term-border);
  border-radius: 6px;
  padding: 9px 14px;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: var(--term-green);
    border-color: var(--term-green);
  }
`;

const CopyStatus = styled.span`
  min-height: 1.5em;
  color: var(--term-green);
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
`;

interface CopyEmailProps {
  email: string;
}

function CopyEmail({ email }: CopyEmailProps) {
  const [status, setStatus] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("✓ copied to clipboard");
    } catch {
      setStatus("Copy unavailable — use the email link instead");
    }
  };

  return (
    <EmailActions>
      <MailLink href={`mailto:${email}`}>mail --to {email}</MailLink>
      <CopyButton type="button" onClick={copyEmail}>
        copy
      </CopyButton>
      <CopyStatus aria-live="polite">{status}</CopyStatus>
    </EmailActions>
  );
}

export default CopyEmail;