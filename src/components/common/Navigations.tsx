import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { WindowDots, Dot } from "../styled/TerminalStyled.ts";
import DATA from "../../data/data.ts";

/* ── NAV STYLED COMPONENTS ── */

const NavBar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--term-surface);
  border-bottom: 1px solid var(--term-border);
  padding: 0 24px;
  display: flex;
  align-items: center;
  height: 48px;
  gap: 12px;
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;

  @media (max-width: 640px) {
    padding: 0 16px;
    gap: 8px;
    height: 44px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    height: 40px;
  }
`;

const TabLabel = styled.span`
  color: var(--term-text-secondary);
  border-bottom: 2px solid var(--term-green);
  padding-bottom: 2px;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 640px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
`;

const PaletteButton = styled.button`
  border: 1px solid var(--term-border);
  border-radius: 4px;
  padding: 5px 8px;
  background: transparent;
  color: var(--term-text-muted);
  font: inherit;
  font-size: 11px;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: var(--term-green);
    color: var(--term-green);
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${(p) =>
    p.$isActive ? "var(--term-green)" : "var(--term-text-secondary)"};
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 4px;
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
  font-size: 13px;

  ${(p) =>
    p.$isActive &&
    `
    background: rgba(0, 255, 136, 0.08);
  `}

  &:hover {
    color: var(--term-green);
    background: rgba(0, 255, 136, 0.06);
  }

  &::before {
    content: "> ";
    color: var(--term-green);
    visibility: ${(p) => (p.$isActive ? "visible" : "hidden")};
  }

  @media (max-width: 640px) {
    padding: 6px 8px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 4px 6px;
    font-size: 11px;
  }
`;

const Navigations = () => {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (route: string) => {
    if (route === "/") return path === "/";
    return path.startsWith(route);
  };

  return (
    <NavBar>
      <WindowDots aria-hidden="true">
        <Dot $color="#ff5f57" />
        <Dot $color="#febc2e" />
        <Dot $color="#28c840" />
      </WindowDots>
      <TabLabel>{DATA.main.name} &mdash; portfolio</TabLabel>
      <NavLinks>
        <NavLink
          to="/"
          $isActive={isActive("/")}
          aria-current={isActive("/") ? "page" : undefined}
        >
          home
        </NavLink>
        <NavLink
          to="/about"
          $isActive={isActive("/about")}
          aria-current={isActive("/about") ? "page" : undefined}
        >
          about
        </NavLink>
        <NavLink
          to="/projects"
          $isActive={isActive("/projects")}
          aria-current={isActive("/projects") ? "page" : undefined}
        >
          projects
        </NavLink>
        <PaletteButton
          type="button"
          aria-label="Open command palette (Control or Command K)"
          onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
        >
          ⌘K
        </PaletteButton>
      </NavLinks>
    </NavBar>
  );
};

export default Navigations;
