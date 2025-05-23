import { Title } from "../components/styled/PageStyled.ts";
import { useNavigate } from "react-router-dom";
import { NotFoundButton, NotFoundContainer, NotFoundText } from "../components/styled/NotFoundStyled.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSurprise, faHome } from "@fortawesome/free-solid-svg-icons";

function NotFound() {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <Title>
        404 - Not Found <FontAwesomeIcon icon={faFaceSurprise} />
      </Title>
      <NotFoundText>
        Whoops! There’s nothing here.<br />
        Maybe try heading home?
      </NotFoundText>
      <NotFoundButton onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faHome} />
        Go Home
      </NotFoundButton>
    </NotFoundContainer>
  );
}

export default NotFound;
