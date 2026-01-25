import {
  FooterContainer,
  FooterContent,
  FooterCredits,
  FooterLink,
} from "../styled/FooterStyled.ts";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLink>
          <Link to="/impressum">Impressum</Link>
        </FooterLink>
      </FooterContent>
      <FooterCredits>
        © {new Date().getFullYear()} moritzreis.dev. All Rights Reserved.
      </FooterCredits>
    </FooterContainer>
  );
};

export default Footer;
