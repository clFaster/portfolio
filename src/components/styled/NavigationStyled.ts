import styled from "styled-components";

export const NavContainer = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        display: block;
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
        box-shadow: 0 2px 10px var(--shadow-color);
        transform: ${({$isOpen}) => ($isOpen ? "translateX(0)" : "translateX(100%)")};
        transition: transform 0.3s ease-in-out;
    }
`;

export const ToggleButton = styled.button<{ $isOpen: boolean }>`
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease;
    color: var(--primary-color);
    
    transform: ${({$isOpen}) => ($isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};

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
        justify-content: inherit;
        margin: 20px 0;
        padding: 50px 0;
        gap: 5px;
    }
`;

export const NavItem = styled.li<{ $isActive: boolean }>`
    font-weight: bold;
    font-size: 18px;
    flex-grow: 1;
    text-align: center;

    a {
        text-decoration: none;
        color: var(--primary-color);

        &:hover {
            color: var(--link-color);
            transition: color 0.3s ease-in-out;
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
                color: var(--primary-color) !important;
            }
            background-color: var(--link-color) !important;
        }
    `};

    @media (max-width: 768px) {
        margin: 10px;
        padding: 10px 20px;
        width: 100%;
        border: 1px solid transparent;
        border-radius: 10px;
        font-size: 25px;
        flex-grow: 0;
    }
`;
