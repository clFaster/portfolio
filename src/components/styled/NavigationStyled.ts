import styled from "styled-components";

export const NavContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes navFadeIn {
    from {
      opacity: 0;
      transform: translateY(-15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: navFadeIn 0.6s ease-out;

  @media (max-width: 768px) {
    display: block;
    position: relative;
    animation: none;
  }
`;

export const MobileNavFooter = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    bottom: 0;
    width: 95%;
    left: 2.5%;
    padding: 20px 0;
    margin-top: auto;
    border-top: 1px solid var(--quaternary-color);
    background-color: var(--background-color);
    justify-content: center;
    border-radius: 16px 16px 0 0;
    box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.03);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Navbar = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 3vh;
  z-index: 999;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    /* Sliding from the right */
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    backdrop-filter: ${({ $isOpen }) => ($isOpen ? "blur(10px)" : "none")};
    background-color: ${({ $isOpen }) =>
      $isOpen ? "var(--background-color)" : "transparent"};
    box-shadow: ${({ $isOpen }) =>
      $isOpen ? "0 0 20px var(--shadow-color)" : "none"};
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(0)" : "translateX(100%)"};
    transition:
      transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      box-shadow 0.4s ease-in-out,
      backdrop-filter 0.4s ease-in-out;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    &:hover {
      transform: ${({ $isOpen }) =>
        $isOpen ? "translateX(0)" : "translateX(100%)"};
    }
  }
`;

export const ToggleButton = styled.button<{ $isOpen: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background-color: ${({ $isOpen }) =>
    $isOpen ? "transparent" : "var(--background-color)"};
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  color: ${({ $isOpen }) =>
    $isOpen ? "var(--link-color)" : "var(--primary-color)"};
  padding: ${({ $isOpen }) => ($isOpen ? "10px" : "10px 12px")};
  border-radius: 50%;
  box-shadow: ${({ $isOpen }) =>
    $isOpen ? "none" : "0 3px 15px var(--shadow-color)"};

  transform: ${({ $isOpen }) => ($isOpen ? "rotate(90deg)" : "rotate(0deg)")};

  &:hover {
    color: var(--link-color);
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(90deg) scale(1.1)" : "rotate(0deg) scale(1.1)"};
    box-shadow: ${({ $isOpen }) =>
      $isOpen ? "none" : "0 5px 20px var(--shadow-color)"};
  }

  &:active {
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(90deg) scale(0.95)" : "rotate(0deg) scale(0.95)"};
  }

  @media (min-width: 769px) {
    display: none; // Hide on desktops
  }
`;

export const NavBackground = styled.div`
  width: 380px;
  height: 50px;
  background: var(--background-color);
  box-shadow: 0 3px 15px var(--shadow-color);
  border-radius: 40px;
  display: flex;
  align-items: center;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 5px 20px var(--shadow-color);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    background: transparent;
    box-shadow: none;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &:hover {
      box-shadow: none;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  padding: 0 20px;
  justify-content: space-around;
  list-style: none;
  align-items: center;
  gap: 15px;
  width: 100%;
  margin: 0;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 20px 0;
    padding: 70px 20px 50px 20px;
    gap: 18px;
    width: calc(100% - 40px);
  }
`;

export const NavItem = styled.li<{ $isActive: boolean }>`
  font-weight: bold;
  font-size: 18px;
  flex-grow: 1;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;

  a {
    text-decoration: none;
    color: var(--primary-color);
    display: block;
    padding: 8px 12px;
    transition: all 0.3s ease;
    border-radius: 8px;

    &:hover {
      color: var(--link-color);
    }
  }

  /* Active state indicator - desktop */
  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: ${(props) => (props.$isActive ? "40%" : "0")};
    height: 3px;
    background-color: var(--link-color);
    border-radius: 3px;
    transform: translateX(-50%);
    transition: width 0.3s ease;
    opacity: ${(props) => (props.$isActive ? "1" : "0")};
  }

  &:hover::after {
    width: ${(props) => (props.$isActive ? "60%" : "0")};
  }

  ${(props) =>
    props.$isActive &&
    `
        a {
            color: var(--link-color) !important;
            font-weight: 700;
        }
        
        @media (max-width: 768px) {
            a {
                color: var(--background-color) !important;
                font-weight: 600;
            }
            background-color: var(--link-color);
            transform: translateX(5px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
    `};

  @media (max-width: 768px) {
    margin: 5px 0;
    padding: 0;
    width: 100%;
    border-radius: 12px;
    font-size: 22px;
    flex-grow: 0;
    text-align: left;
    transition: all 0.3s ease;

    &::after {
      display: none;
    }

    a {
      padding: 14px 20px;
      border-radius: 12px;
      transition: all 0.3s ease;

      &:hover {
        background-color: var(--quaternary-color);
        color: var(--primary-color);
      }
    }
    &.theme-toggle-item {
      display: none; /* Hide the theme toggle in the navbar on mobile */

      button {
        width: 100%;
        text-align: left;
        display: flex;
        align-items: center;
      }
    }

    &.desktop-only {
      display: none;
    }
  }
`;

export const ToggleThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  color: var(--primary-color);
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--quaternary-color);
    border-radius: 50%;
    transform: scale(0);
    opacity: 0;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: var(--link-color);

    &:before {
      transform: scale(1);
      opacity: 1;
    }
  }
  .theme-toggle-item & {
    padding: 0.7rem;
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 22px;
      height: 22px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    border-radius: 30px;
    padding: 14px 20px;
    font-weight: bold;
    font-size: 18px;
    background-color: var(--card-background);
    transition: all 0.3s ease;

    &:before {
      border-radius: 30px;
    }

    &:hover {
      background-color: var(--quaternary-color);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px var(--shadow-color);
    }

    svg {
      margin-right: 0.5rem;
      width: 24px;
      height: 24px;
    }
  }
`;

export const ThemeLabel = styled.span`
  display: none;
  margin-left: 10px;
  font-weight: bold;
  font-size: 18px;

  @media (max-width: 768px) {
    display: inline;
    font-size: 20px;
  }
`;
