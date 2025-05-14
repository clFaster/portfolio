import { Link, useLocation } from "react-router-dom";
import {
  NavBackground,
  Navbar,
  NavContainer,
  NavItem,
  NavList,
  ToggleButton,
} from "../styled/NavigationStyled";
import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeToggle from "./ThemeToggle";

const Navigations = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const active = location.pathname.split("/")[1] || "home";

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <NavContainer>
      <ToggleButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
      </ToggleButton>

      <Navbar $isOpen={isOpen}>
        <NavBackground>
          <NavList>
            <NavItem $isActive={active === "home"}>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </NavItem>
            <NavItem $isActive={active === "about"}>
              <Link to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </NavItem>
            <NavItem $isActive={active === "projects"}>
              <Link to="/projects" onClick={handleLinkClick}>
                Projects
              </Link>
            </NavItem>
            <NavItem $isActive={false}>
              <ThemeToggle />
            </NavItem>
          </NavList>
        </NavBackground>
      </Navbar>
    </NavContainer>
  );
};

export default Navigations;
