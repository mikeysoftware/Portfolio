import React, { useState } from "react";
import styled, { css } from "styled-components";

// Components
import SubHeading from "../components/SubHeading";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import ExperienceList from "../components/ExperienceList";

// Interfaces
interface TopicSwitchProps {
  selected: Boolean;
}

// Icons
import { CurvedArrowRight, Download } from "../components/Icons";

const EXP_LIST = [
  {
    company: "Smart Mobile Solutions",
    position: "Senior Software Developer",
  },
  {
    company: "Advantage General Insurance",
    position: "Senior Software Developer",
  },
  {
    company: "A&S Technosoft Limited",
    position: "Software Developer",
  },
  {
    company: "Juici Beef Limited",
    position: "Systems Administrator",
  },
  {
    company: "Outlance Software",
    position: "Software Consultant",
  },
];

const WORK_TOPICS = ["Smart Mobile Solutions", "Advantage General Insurance", "A&S Technosoft Limited", "Juici Beef Limited", "Outlance Software"];
const TRAINING_TOPICS = ["BSc Software Engineering", "Epic React - Certified", "CompTIA - A+", "Cisco - IT Fundamentals"];

export default function About() {
  return (
    <AboutWrapper id="about">
      <AboutContainer>
        <AboutInformation>
          {/* About + Skills */}
          <SubHeading>Skills &amp; Experience</SubHeading>
          <Heading level={2}>Googling my way to retirement.</Heading>
          <Paragraph>
            I am a creative full-stack developer and open source enthusiast. I have an unwavering passion and energy for ux-guided interactive interfaces and
            developer tooling.
          </Paragraph>

          <a className="download" href="">
            Download Resume <Download />
          </a>

          {/* Work Experience */}
          <br />
          <br />
          <br />
          <Paragraph>I've slapped brains and keyboards with the best of them.</Paragraph>
          <ExperienceList jobList={EXP_LIST} />
        </AboutInformation>
        <AboutCode>
          <div className="code-container">
            <pre>
              <code>asdasdasdasds</code>
            </pre>
          </div>
        </AboutCode>
      </AboutContainer>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  /* Default */
  color: var(--color-gray-100);
  background: var(--color-gray-900);

  /* Mobile */
  padding: 1.25rem;

  /* Tablet */
  @media screen and (min-width: 768px) {
    padding: 2rem;
  }
`;

const AboutContainer = styled.div`
  /* Default */
  max-width: var(--breakpoint-xl);
  margin: 0px auto;

  /* Mobile */
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 4rem;

  /* Tablet */
  @media screen and (min-width: 768px) {
    padding: 4rem 0rem;
    grid-template-columns: 1fr 1fr;
    /* grid-template-columns: 2fr 3fr; */
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    flex-direction: column;
  }

  /* Desktop XXL */
  @media screen and (min-width: 1600px) {
    max-width: var(--breakpoint-xxl);
  }
`;

const AboutInformation = styled.div`
  /* Default */
  position: relative;
  margin-bottom: 2rem;

  /* Mobile */
  .download {
    display: inline-flex;
    align-items: center;
    margin-top: 1rem;
    padding: 1rem 1rem;
    font-size: 1.25rem;
    font-weight: 500;
    background: var(--color-gray-300);
    white-space: nowrap;

    svg {
      height: 1rem;
      margin-left: 0.5rem;
    }
  }

  /* Tablet */
  @media screen and (min-width: 768px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    p {
      margin-right: 2rem;
    }
  }
`;

const AboutCode = styled.div`
  /* Default */
  display: flex;
  flex-direction: column;

  .code-container {
    /* border-radius: 0.5rem; */
    padding: 0.125rem;
    background: var(--color-gray-700);

    pre {
      padding: 1rem;
      background: var(--color-gray-700);
    }
  }

  /* Tablet */
  @media screen and (min-width: 768px) {
    padding: 1rem;

    .code-container {
      flex: 1;
      margin-top: -12rem;
      pre {
      }
    }
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    .code-container {
      /* margin-top: -14rem; */
      pre {
        padding: 2rem;
      }
    }
  }
`;
