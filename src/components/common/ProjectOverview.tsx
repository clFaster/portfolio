import {
  AllProjectsContainer,
  AllProjectsProject,
  ProjectContainer,
  ProjectDescription,
  ProjectLink,
  ProjectLinkContainer,
  ProjectLinkIcon,
  ProjectLinkText,
  ProjectLogo,
  ProjectStyled,
  ProjectTitle,
} from "../styled/ProjectOverviewStyled.ts";
import DATA from "../../data/data.ts";
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface ProjectProps {
  logo: string;
  title: string;
  description: string;
  linkText: string;
  link: string;
}

const Project = ({
  logo,
  title,
  description,
  linkText,
  link,
}: ProjectProps) => {
  return (
    <ProjectStyled>
      <ProjectLink href={link} target="_blank">
        <ProjectContainer>
          <ProjectLogo>
            <img src={logo} alt={title} />
          </ProjectLogo>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>
          <ProjectLinkContainer>
            <ProjectLinkIcon icon={faLink} />
            <ProjectLinkText>{linkText}</ProjectLinkText>
          </ProjectLinkContainer>
        </ProjectContainer>
      </ProjectLink>
    </ProjectStyled>
  );
};

export const ProjectOverview = () => {
  return (
    <AllProjectsContainer>
      {DATA.projects.map((project) => (
        <AllProjectsProject key={project.link}>
          <Project
            logo={project.logo}
            title={project.title}
            description={project.description}
            linkText={project.linkText}
            link={project.link}
          />
        </AllProjectsProject>
      ))}
    </AllProjectsContainer>
  );
};
