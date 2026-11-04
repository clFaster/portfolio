import {
  Dot,
  TerminalTitleBar,
  WindowDots,
} from "../styled/TerminalStyled.ts";

interface TerminalHeaderProps {
  path: string;
}

function TerminalHeader({ path }: TerminalHeaderProps) {
  return (
    <TerminalTitleBar>
      <WindowDots aria-hidden="true">
        <Dot $color="#ff5f57" />
        <Dot $color="#febc2e" />
        <Dot $color="#28c840" />
      </WindowDots>
      {path}
    </TerminalTitleBar>
  );
}

export default TerminalHeader;