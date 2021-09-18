import React from "react";
import styled, { css } from "styled-components";

// Components
import Button from "../components/Button";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Paragraph from "../components/Paragraph";

// Ingot
import { Window } from "../components/Icons";

// Interfaces
interface ProjectProps {
  number: number;
}

export default function Project({ project, index }: any) {
  return (
    <ProjectWrapper>
      <ProjectContainer number={index + 1}>
        <ProjectInformation number={index + 1}>
          <SubHeading>{project.summary}</SubHeading>
          <Heading level={2}>{project.title}</Heading>
          <Paragraph>
            I am a creative full-stack developer and open source enthusiast. I have an unwavering passion and energy for ux-guided interactive interfaces and
            developer tooling.
          </Paragraph>
          {/* <p>I am a creative full-stack developer and open source enthusiast. I have an unwavering passion and energy for ux-guided interactive interfaces and
            developer tooling.</p> */}
          <a href={project.demo}>
            <Button>
              {project.demo ? (
                <>
                  Try Demo <Window />
                </>
              ) : (
                "Demo N/A"
              )}
            </Button>
          </a>
        </ProjectInformation>
        <ProjectPreview number={index + 1}>
          <div className="browser">sadasd</div>
        </ProjectPreview>
      </ProjectContainer>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.li`
  /* Default */
  position: relative;
  margin-bottom: 4rem;

  /* Tablet */
  @media screen and (min-width: 768px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    margin-bottom: 6rem;
    /* margin-top: 4rem; */
  }
`;

const ProjectContainer = styled.div<ProjectProps>`
  /* Default */
  display: flex;
  flex-direction: column;

  /* Tablet */
  @media screen and (min-width: 768px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    flex-direction: row;

    ${(props: any) =>
      props.number % 2 === 0 &&
      css`
        flex-direction: row-reverse;
      `}
  }
`;

const ProjectInformation = styled.div<ProjectProps>`
  /* Default */
  display: flex;
  position: relative;
  margin-bottom: 2rem;
  flex-direction: column;

  /* Mobile */

  /* Desktop */
  @media screen and (min-width: 1024px) {
    flex: 1;
    justify-content: center;
    margin-bottom: 0rem;
    margin-left: 0rem;
    margin-right: 4rem;

    ${(props: any) =>
      props.number % 2 === 0 &&
      css`
        margin-left: 4rem;
        margin-right: 0rem;
      `}
  }
`;

const ProjectPreview = styled.div<ProjectProps>`
  /* Default */
  flex: 1;
  position: relative;

  /* Mobile */
  min-height: 24rem;
  margin-top: 1rem;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: rotate(-6deg);
    background: var(--color-gray-400);
    /* border-radius: 0.5rem; */

    ${(props: any) =>
      props.number % 2 === 0 &&
      css`
        transform: rotate(6deg);
      `}
  }

  .browser {
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
    background: var(--color-gray-900);
    opacity: 0.5;
    min-height: 24rem;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    min-height: 32rem;
    margin-top: 0rem;

    ::before {
      transform: rotate(-6deg);

      ${(props: any) =>
        props.number % 2 === 0 &&
        css`
          transform: rotate(6deg);
        `}
    }

    .browser {
      min-height: 32rem;
    }
  }
`;
