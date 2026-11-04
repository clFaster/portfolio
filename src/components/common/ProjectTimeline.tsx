import DATA from "../../data/data.ts";
import {
  CommitDot,
  ProjectDesc,
  ProjectInfo,
  ProjectList,
  ProjectMeta,
  ProjectName,
  ProjectRow,
  ProjectStatus,
  ProjectYear,
  TagRow,
  TechTag,
} from "../styled/ProjectTimelineStyled.ts";

interface ProjectTimelineProps {
  projects?: typeof DATA.projects;
}

function ProjectTimeline({ projects = DATA.projects }: ProjectTimelineProps) {
  return (
    <>
      <ProjectList>
        {projects.map((project) => (
          <ProjectRow
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CommitDot aria-hidden="true" />
            <ProjectInfo>
              <ProjectMeta>
                <ProjectYear>{project.year}</ProjectYear>
                <ProjectStatus $status={project.status}>
                  {project.status}
                </ProjectStatus>
              </ProjectMeta>
              <ProjectName>{project.title}</ProjectName>
              <ProjectDesc>{project.description}</ProjectDesc>
            </ProjectInfo>
            <TagRow>
              {project.tech.map((tech) => (
                <TechTag key={`${project.title}-${tech}`}>{tech}</TechTag>
              ))}
            </TagRow>
          </ProjectRow>
        ))}
      </ProjectList>
    </>
  );
}

export default ProjectTimeline;
