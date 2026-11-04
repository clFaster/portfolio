import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";
import styled from "styled-components";
import SEOHelmet from "../components/common/SEOHelmet.tsx";
import TerminalHeader from "../components/common/TerminalHeader.tsx";
import {
  Page,
  Content,
  TerminalWindow,
  TerminalBody,
  Spacer,
  blink,
} from "../components/styled/TerminalStyled.ts";

/* ── ERROR PAGE STYLED COMPONENTS ── */

const ErrorCode = styled.h1`
  font-family: "JetBrains Mono", monospace;
  font-size: 48px;
  font-weight: 700;
  color: #f85149;
  line-height: 1;
  margin: 0 0 16px;
  text-shadow: 0 0 20px rgba(248, 81, 73, 0.3);

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const CommandLine = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 14px;
  color: var(--term-text-secondary);
  margin-bottom: 8px;

  &::before {
    content: "$ ";
    color: var(--term-green);
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const ErrorOutput = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  line-height: 1.7;
  color: #f85149;
  margin-bottom: 16px;
  padding-left: 20px;
  overflow-wrap: anywhere;

  @media (max-width: 480px) {
    font-size: 12px;
    padding-left: 16px;
  }
`;

const Hint = styled.p`
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  color: var(--term-text-secondary);
  margin: 0 0 24px;
`;

const StackTrace = styled.pre`
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  line-height: 1.6;
  color: var(--term-text-secondary);
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid var(--term-border);
  border-radius: 6px;
  padding: 12px 14px;
  margin: 0 0 24px;
  max-height: 240px;
  overflow: auto;
  white-space: pre-wrap;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const ActionButton = styled.button`
  font-family: "JetBrains Mono", monospace;
  font-size: 14px;
  color: var(--term-blue);
  background: transparent;
  border: 1px solid var(--term-border);
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease;

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

  &:focus-visible {
    outline: 2px solid var(--term-green);
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 8px 16px;
  }
`;

const CursorBlink = styled.span`
  display: inline-block;
  width: 8px;
  height: 16px;
  background: var(--term-green);
  margin-left: 4px;
  vertical-align: middle;
  animation: ${blink} 1s step-end infinite;
`;

/* ── HELPERS ── */

const describeError = (error: unknown) => {
  if (isRouteErrorResponse(error)) {
    return {
      message: `${error.status} ${error.statusText || "Route error"}`,
      stack: undefined,
    };
  }
  if (error instanceof Error) {
    return { message: `${error.name}: ${error.message}`, stack: error.stack };
  }
  return { message: "Unknown error", stack: undefined };
};

/* ── COMPONENT ── */

interface ErrorPageProps {
  /** Render page chrome itself, used when the layout itself failed. */
  standalone?: boolean;
}

function ErrorPage({ standalone = false }: ErrorPageProps) {
  const error = useRouteError();
  const navigate = useNavigate();
  const { message, stack } = describeError(error);

  const content = (
    <>
      <SEOHelmet pageName="not-found" />

      <Spacer $h={48} />

      <TerminalWindow $delay="0.1s" role="alert">
        <TerminalHeader path="~/moritzreis/core.dump" />
        <TerminalBody>
          <ErrorCode>segfault</ErrorCode>
          <CommandLine>
            ./render-page
            <CursorBlink aria-hidden="true" />
          </CommandLine>
          <ErrorOutput>
            Segmentation fault (core dumped)
            <br />
            {message}
          </ErrorOutput>
          <Hint>Something broke while rendering this page. Not your fault.</Hint>
          {import.meta.env.DEV && stack && <StackTrace>{stack}</StackTrace>}
          <Actions>
            <ActionButton type="button" onClick={() => window.location.reload()}>
              retry
            </ActionButton>
            <ActionButton type="button" onClick={() => navigate("/")}>
              cd ~/home
            </ActionButton>
          </Actions>
        </TerminalBody>
      </TerminalWindow>
    </>
  );

  if (!standalone) return content;

  return (
    <Page>
      <Content>{content}</Content>
    </Page>
  );
}

export default ErrorPage;
