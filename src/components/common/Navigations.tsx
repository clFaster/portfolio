import {Link, useLocation} from "react-router-dom";
import {NavBackground, Navbar, NavContainer, NavItem, NavList, ToggleButton} from "../styled/NavigationStyled";
import {useState} from "react";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Navigations = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const active = location.pathname.split("/")[1] || "home";
    
    return (
        <NavContainer>
            <ToggleButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x"/>
            </ToggleButton>

            <Navbar $isOpen={isOpen}>
                <NavBackground>
                    <NavList>
                        <NavItem $isActive={active === "home"}>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem $isActive={active === "about"}>
                            <Link to="/about">About</Link>
                        </NavItem>
                        <NavItem $isActive={active === "projects"}>
                            <Link to="/projects">Projects</Link>
                        </NavItem>
                        <NavItem $isActive={active === "contact"}>
                            <Link to="/contact">Contact</Link>
                        </NavItem>
                    </NavList>
                </NavBackground>
            </Navbar>
        </NavContainer>
    );
};

export default Navigations;
