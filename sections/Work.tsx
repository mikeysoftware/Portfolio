import React from "react";
import styled from "styled-components";

// Components
import Project from "../components/Project";
import Button from "../components/Button";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";

// Icons
import { Source } from "../components/Icons";

const PROJECTS = [
  { id: "velvety", summary: "Animated Component Library", title: "Velvety UI", demo: "asdsa", source: "", preview: "", video: "" },
  { id: "mediawave", summary: "Campaign Management", title: "Media Wave", demo: "", source: "", preview: "", video: "" },
  { id: "cyberdeck", summary: "Multiplayer Card Game", title: "CyberDeck", demo: "", source: "", preview: "", video: "" },
  { id: "agenda", summary: "Visual Collaboration Platform", title: "Agenda", demo: "", source: "", preview: "", video: "" },
];

export default function Work() {
  return (
    <WorkWrapper id="projects">
      <WorkContainer>
        {/* <WorkInformation>
          <SubHeading>They Want To</SubHeading>
          <Heading level={2}>Be Like Mike</Heading>
          <a href="">
            <Button>
              Enter the Source <Source />
            </Button>
          </a>
        </WorkInformation> */}
        <WorkList>
          {PROJECTS.map((project, projectIndex) => (
            <Project key={project.id} project={project} index={projectIndex} />
          ))}
        </WorkList>
      </WorkContainer>
    </WorkWrapper>
  );
}

const WorkWrapper = styled.div`
  /* Default */
  color: var(--color-gray-100);
  background: var(--color-gray-500);

  /* Mobile */
  padding: 1.25rem;

  /* Tablet */
  @media screen and (min-width: 768px) {
    padding: 2rem;
  }
`;

const WorkContainer = styled.div`
  /* Default */
  max-width: var(--breakpoint-xl);
  margin: 0px auto;

  /* Mobile */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2rem;

  /* Tablet */
  @media screen and (min-width: 768px) {
    padding: 4rem 0rem;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
  }

  /* Desktop XXL */
  @media screen and (min-width: 1600px) {
    max-width: var(--breakpoint-xxl);
  }
`;

const WorkInformation = styled.div`
  /* Default */
  position: relative;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* Mobile */
  span,
  h2 {
    text-align: center;
    margin-bottom: 1.25rem;
  }

  a {
    text-align: center;
    button {
      margin-top: 0rem;
    }
  }

  /* Tablet */
  @media screen and (min-width: 768px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
  }
`;

const WorkList = styled.ul`
  list-style-type: none;
  /* margin-top: 2rem; */
`;
