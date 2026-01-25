import {
  FooterContainer,
  FooterContent,
  FooterCredits,
  FooterLink,
  FooterLinks,
} from "../styled/FooterStyled.ts";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <FooterLink>
            <Link to="/impressum">Imprint</Link>
          </FooterLink>
          <FooterLink>
            <Link to="/datenschutz">Privacy Policy</Link>
          </FooterLink>
        </FooterLinks>
      </FooterContent>
      <FooterCredits>
        © {new Date().getFullYear()} moritzreis.dev. All Rights Reserved.
      </FooterCredits>
    </FooterContainer>
  );
};

export default Footer;
