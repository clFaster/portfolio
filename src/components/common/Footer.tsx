import { Link } from "react-router-dom";
import styled from "styled-components";
import DATA from "../../data/data.ts";

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 40px 0 0;
  font-family: "JetBrains Mono", monospace;
  font-size: 12px;
  color: var(--term-text-muted);

  &::before {
    content: "";
    display: block;
    width: 60px;
    height: 1px;
    background: var(--term-border);
    margin: 0 auto 20px;
  }

  @media (max-width: 480px) {
    padding: 32px 0 0;
    font-size: 11px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 12px;
`;

const FooterLink = styled(Link)`
  color: var(--term-text-muted);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--term-blue);
  }

  &::before {
    content: "$ ";
    color: var(--term-text-muted);
    opacity: 0.5;
  }
`;

const FooterCredits = styled.div`
  margin-top: 8px;
  color: var(--term-border);
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinks>
        <FooterLink to="/impressum">cat impressum</FooterLink>
        <FooterLink to="/datenschutz">cat datenschutz</FooterLink>
      </FooterLinks>
      <div>
        <span style={{ color: "var(--term-green)" }}>$</span> echo &quot;Built
        by {DATA.main.name}&quot;
      </div>
      <FooterCredits>
        &copy; {new Date().getFullYear()} moritzreis.dev &middot; Process exited
        with code 0.
      </FooterCredits>
    </FooterWrapper>
  );
};

export default Footer;
