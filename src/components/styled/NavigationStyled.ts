import styled from "styled-components";

export const NavContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
    position: relative;
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

  @media (max-width: 768px) {
    /* Sliding from the right */
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background-color: var(--background-color);
    box-shadow: ${({ $isOpen }) => 
      $isOpen ? "0 0 15px var(--shadow-color)" : "none"};
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
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
  transition: all 0.3s ease;
  color: var(--primary-color);
  padding: ${({ $isOpen }) => ($isOpen ? "10px" : "10px 12px")};
  border-radius: 50%;
  box-shadow: ${({ $isOpen }) => 
    $isOpen ? "none" : "0 2px 10px var(--shadow-color)"};
  
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(90deg)" : "rotate(0deg)")};

  &:hover {
    color: var(--link-color);
    transform: ${({ $isOpen }) => 
      $isOpen ? "rotate(90deg) scale(1.1)" : "rotate(0deg) scale(1.1)"};
  }

  @media (min-width: 769px) {
    display: none; // Hide on desktops
  }
`;

export const NavBackground = styled.div`
  width: 340px;
  height: 50px;
  background: var(--background-color);
  box-shadow: 0 2px 10px var(--shadow-color);
  border-radius: 40px;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    background: transparent;
    box-shadow: none;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const NavList = styled.ul`
  display: flex;
  padding: 0 15px;
  justify-content: center;
  list-style: none;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 20px 0;
    padding: 70px 20px 50px 20px;
    gap: 15px;
    width: calc(100% - 40px);
  }
`;

export const NavItem = styled.li<{ $isActive: boolean }>`
  font-weight: bold;
  font-size: 18px;
  flex-grow: 1;
  text-align: center;
  transition: all 0.3s ease;

  a {
    text-decoration: none;
    color: var(--primary-color);
    display: block;
    padding: 5px 10px;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: var(--link-color);
    }
  }

  ${(props) =>
    props.$isActive &&
    `
        a {
            color: var(--link-color) !important;
        }
        @media (max-width: 768px) {
            a {
                color: var(--background-color) !important;
                font-weight: 600;
            }
            background-color: var(--link-color);
            transform: translateX(5px);
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

    a {
      padding: 12px 20px;
      border-radius: 12px;
      transition: all 0.2s ease;
      
      &:hover {
        background-color: var(--quaternary-color);
        color: var(--primary-color);
      }
    }

    &.theme-toggle-item {
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

export const ToggleContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: var(--theme-transition);
  color: var(--primary-color);

  &:hover {
    background-color: var(--quaternary-color);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    border-radius: 30px;
    padding: 12px 20px;
    font-weight: bold;
    font-size: 18px;
    background-color: var(--card-background);
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--quaternary-color);
      transform: translateY(-2px);
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
