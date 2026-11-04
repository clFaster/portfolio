import SEOHelmet from "../components/common/SEOHelmet.tsx";
import TerminalHeader from "../components/common/TerminalHeader.tsx";
import ProjectTimeline from "../components/common/ProjectTimeline.tsx";
import {
  TerminalWindow,
  TerminalBody,
  SectionComment,
  CommentBlock,
  Spacer,
} from "../components/styled/TerminalStyled.ts";

/* ── COMPONENT ── */

function Projects() {
  return (
    <>
      <SEOHelmet pageName="projects" />

      <Spacer $h={48} />

      {/* ── Intro ── */}
      <TerminalWindow $delay="0.1s">
        <TerminalHeader path="~/moritzreis/README.md" />
        <TerminalBody>
          <SectionComment>Code Chronicles</SectionComment>
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
        <TerminalHeader path="~/moritzreis/projects — git log --oneline" />
        <TerminalBody>
          <SectionComment>Projects</SectionComment>
          <ProjectTimeline />
        </TerminalBody>
      </TerminalWindow>
    </>
  );
}

export default Projects;
