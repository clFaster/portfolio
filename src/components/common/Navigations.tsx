import {Link} from "react-router-dom";
import {NavBackground, Navbar, NavContainer, NavItem, NavList} from "../styled/NavigationStyled";

interface NavigationProps {
    active: string;
}

const Navigations = ({active}: NavigationProps) => {
    return (
        <NavContainer>
            <Navbar>
                <NavBackground>
                    <NavList>
                        <NavItem isActive={active === "home"}>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem isActive={active === "about"}>
                            <Link to="/about">About</Link>
                        </NavItem>
                        <NavItem isActive={active === "projects"}>
                            <Link to="/projects">Projects</Link>
                        </NavItem>
                        <NavItem isActive={active === "contact"}>
                            <Link to="/contact">Contact</Link>
                        </NavItem>
                    </NavList>
                </NavBackground>
            </Navbar>
        </NavContainer>
    );
};

export default Navigations;
