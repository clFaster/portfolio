import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import styled from "styled-components";
import {
  TerminalWindow,
  TerminalTitleBar,
  TerminalBody,
  WindowDots,
  Dot,
  Spacer,
  blink,
} from "../components/styled/TerminalStyled.ts";

/* ── 404 STYLED COMPONENTS ── */

const ErrorCode = styled.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 64px;
  font-weight: 700;
  color: var(--term-green);
  line-height: 1;
  margin-bottom: 16px;
  text-shadow: 0 0 20px rgba(0, 255, 136, 0.3);

  @media (max-width: 480px) {
    font-size: 48px;
  }
`;

const ErrorMessage = styled.div`
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
  color: #f85149;
  margin-bottom: 24px;
  padding-left: 20px;

  @media (max-width: 480px) {
    font-size: 12px;
    padding-left: 16px;
  }
`;

const HomeButton = styled.button`
  font-family: "JetBrains Mono", monospace;
  font-size: 14px;
  color: var(--term-blue);
  background: transparent;
  border: 1px solid var(--term-border);
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;

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

const CursorBlink = styled.span`
  display: inline-block;
  width: 8px;
  height: 16px;
  background: var(--term-green);
  margin-left: 4px;
  vertical-align: middle;
  animation: ${blink} 1s step-end infinite;
`;

/* ── COMPONENT ── */

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <Spacer $h={48} />

      <TerminalWindow $delay="0.1s">
        <TerminalTitleBar>
          <WindowDots>
            <Dot $color="#ff5f57" />
            <Dot $color="#febc2e" />
            <Dot $color="#28c840" />
          </WindowDots>
          ~/moritzreis/404
        </TerminalTitleBar>
        <TerminalBody>
          <ErrorCode>404</ErrorCode>
          <ErrorMessage>
            cat ./requested-page
            <CursorBlink />
          </ErrorMessage>
          <ErrorOutput>
            Error: No such file or directory. The page you're looking for
            doesn't exist.
          </ErrorOutput>
          <HomeButton onClick={handleGoHome}>cd ~/home</HomeButton>
        </TerminalBody>
      </TerminalWindow>
    </>
  );
}

export default NotFound;
