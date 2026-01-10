import { Link, useLocation } from "react-router-dom";
import {
  MobileNavFooter,
  NavBackground,
  Navbar,
  NavContainer,
  NavItem,
  NavList,
  ToggleButton,
} from "../styled/NavigationStyled";
import { useState, useCallback } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeToggle from "./ThemeToggle";
import useAnimation from "../../context/useAnimation";

// Navigation order to determine direction
const navOrder = {
  home: 0,
  about: 1,
  projects: 2,
};

const Navigations = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const active = location.pathname.split("/")[1] || "home";
  const { setDirection } = useAnimation();

  // Helper to determine which way to animate when navigating
  const handleNavigate = useCallback(
    (targetPage: string) => {
      if (targetPage === active) return;
      const currentIndex = navOrder[active as keyof typeof navOrder] || 0;
      const targetIndex = navOrder[targetPage as keyof typeof navOrder] || 0;

      if (targetIndex > currentIndex) {
        setDirection("right");
      } else if (targetIndex < currentIndex) {
        setDirection("left");
      } else {
        setDirection(null);
      }

      // Close mobile menu
      setIsOpen(false);
    },
    [active, setDirection, setIsOpen],
  );

  const handleHomeClick = useCallback(
    () => handleNavigate("home"),
    [handleNavigate],
  );
  const handleAboutClick = useCallback(
    () => handleNavigate("about"),
    [handleNavigate],
  );
  const handleProjectsClick = useCallback(
    () => handleNavigate("projects"),
    [handleNavigate],
  );

  const handleToggleMenu = useCallback(
    () => setIsOpen(!isOpen),
    [isOpen, setIsOpen],
  );

  return (
    <NavContainer>
      <ToggleButton $isOpen={isOpen} onClick={handleToggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
      </ToggleButton>

      <Navbar $isOpen={isOpen}>
        <NavBackground>
          <NavList>
            <NavItem $isActive={active === "home"}>
              <Link to="/" onClick={handleHomeClick}>
                Home
              </Link>
            </NavItem>
            <NavItem $isActive={active === "about"}>
              <Link to="/about" onClick={handleAboutClick}>
                About
              </Link>
            </NavItem>
            <NavItem $isActive={active === "projects"}>
              <Link to="/projects" onClick={handleProjectsClick}>
                Projects
              </Link>
            </NavItem>
            {/* Theme toggle for desktop */}
            <NavItem $isActive={false} className="theme-toggle-item">
              <ThemeToggle />
            </NavItem>
          </NavList>
          <MobileNavFooter className="theme-toggle-mobile">
            <ThemeToggle />
          </MobileNavFooter>
        </NavBackground>
      </Navbar>
    </NavContainer>
  );
};

export default Navigations;
