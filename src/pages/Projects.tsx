import DATA from "../data/data";
import SEOHelmet from "../components/common/SEOHelmet.tsx";
import {
  TerminalWindow,
  TerminalTitleBar,
  TerminalBody,
  WindowDots,
  Dot,
  SectionComment,
  CommentBlock,
  Spacer,
  getTechFromLogo,
} from "../components/styled/TerminalStyled.ts";
import {
  ProjectList,
  ProjectRow,
  CommitDot,
  ProjectInfo,
  ProjectName,
  ProjectDesc,
  TagRow,
  TechTag,
} from "../components/styled/ProjectTimelineStyled.ts";

/* ── COMPONENT ── */

function Projects() {
  return (
    <>
      <SEOHelmet pageName="projects" />

      <Spacer $h={48} />

      {/* ── Intro ── */}
      <TerminalWindow $delay="0.1s">
        <TerminalTitleBar>
          <WindowDots>
            <Dot $color="#ff5f57" />
            <Dot $color="#febc2e" />
            <Dot $color="#28c840" />
          </WindowDots>
          ~/moritzreis/README.md
        </TerminalTitleBar>
        <TerminalBody>
          <SectionComment>&#47;&#47; Code Chronicles</SectionComment>
          <CommentBlock>
            Welcome to my project showcase, where I've compiled a collection of
            tools and solutions crafted across diverse technologies. Each
            project here is a step in my ongoing journey as a software
            architect—solving real-world problems, exploring new capabilities,
            and refining how I design systems that last. I'm passionate about
            open-source development and believe in creating accessible,
            community-driven software that can be built upon and shared.
          </CommentBlock>
        </TerminalBody>
      </TerminalWindow>

      <Spacer $h={32} />

      {/* ── Project List ── */}
      <TerminalWindow $delay="0.3s">
        <TerminalTitleBar>
          <WindowDots>
            <Dot $color="#ff5f57" />
            <Dot $color="#febc2e" />
            <Dot $color="#28c840" />
          </WindowDots>
          ~/moritzreis/projects &mdash; git log --oneline
        </TerminalTitleBar>
        <TerminalBody>
          <SectionComment>&#47;&#47; Projects</SectionComment>
          <ProjectList>
            {DATA.projects.map((project) => (
              <ProjectRow
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CommitDot />
                <ProjectInfo>
                  <ProjectName>{project.title}</ProjectName>
                  <ProjectDesc>{project.description}</ProjectDesc>
                </ProjectInfo>
                <TagRow>
                  <TechTag>{getTechFromLogo(project.logo)}</TechTag>
                </TagRow>
              </ProjectRow>
            ))}
          </ProjectList>
        </TerminalBody>
      </TerminalWindow>
    </>
  );
}

export default Projects;
