import {FooterContainer, FooterContent, FooterCredits} from "../styled/FooterStyled.ts";

const Footer = () => {
  return (
      <FooterContainer>
          <FooterContent/>
          <FooterCredits>
              © {new Date().getFullYear()} moritzreis.dev. All Rights Reserved.
          </FooterCredits>
      </FooterContainer>
  );
}

export default Footer;