import styled from "styled-components";

export const NavContainer = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Navbar = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 3vh;
    z-index: 999;
`;

export const NavBackground = styled.div`
    width: 380px;
    height: 40px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 40px;
`;

export const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    align-items: center;
    margin: 11px 20px 0 -16px;
`;

export const NavItem = styled.li<{ isActive: boolean }>`
    font-weight: bold;
    font-size: 80%;

    a {
        text-decoration: none;
        color: var(--primary-color);

        &:hover {
            color: var(--link-color);
            transition: color 0.3s ease-in-out;
        }
    }

    ${(props) =>
            props.isActive &&
            `
        a {
            color: var(--link-color) !important;
        }
    `}
`;