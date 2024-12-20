import {SocialIcon, SocialsContainer} from "../styled/SocialsStyled.ts";
import DATA from "../../data/data.ts";
import {faGithub, faLinkedin, faStackOverflow} from "@fortawesome/free-brands-svg-icons";
import {faMailBulk} from "@fortawesome/free-solid-svg-icons";

export function SocialContacts() {
    return <SocialsContainer>
        <a href={DATA.socials.linkedin} target="_blank" rel="noreferrer" title="Connect on Linked">
            <SocialIcon icon={faLinkedin}/>
        </a>
        <a href={DATA.socials.github} target="_blank" rel="noreferrer" title="Follow on GitHub">
            <SocialIcon icon={faGithub}/>
        </a>
        <a href={DATA.socials.stackoverflow} target="_blank" rel="noreferrer" title="Follow on StackOverflow">
            <SocialIcon icon={faStackOverflow}/>
        </a>
        <a href={`mailto:${DATA.main.email}`} target="_blank" rel="noreferrer" title="Reach out by mail">
            <SocialIcon icon={faMailBulk}/>
        </a>
    </SocialsContainer>;
}