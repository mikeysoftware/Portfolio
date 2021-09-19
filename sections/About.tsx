import React, { useState } from "react";
import styled, { css } from "styled-components";

// Components
import SubHeading from "../components/SubHeading";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import ExperienceList from "../components/ExperienceList";
import SyntaxHighlighter, { Line } from "../components/SyntaxHighlighter";

// Icons
import { Download } from "../components/Icons";

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
    company: "Outlance Software",
    position: "Software Consultant",
  },
  {
    company: "Juici Beef Limited",
    position: "Systems Administrator",
  },
];

export default function About() {
  return (
    <AboutWrapper id="about">
      <AboutContainer>
        <AboutInformation>
          {/* About + Skills */}
          <SubHeading>Skills &amp; Experience</SubHeading>
          <Heading level={2}>Googling my way to retirement.</Heading>
          <Paragraph>
            I'm a creative full-stack engineer and open source enthusiast with an unwavering passion for ux-guided interactive interfaces and developer tooling.
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
            <SyntaxHighlighter>
              <Line number={1}>
                <span className="keyword">const</span>
                <span className="variable"> About</span> = &#123;
              </Line>
              <Line number={2} tabs={1}>
                <span className="key">name</span>: <span className="string">&#39;Michael Cowan&#39;</span>,
              </Line>
              <Line number={2} tabs={1}>
                <span className="key">occupation</span>: <span className="string">&#39;Senior Software Engineer&#39;</span>,
              </Line>
              <Line number={3} tabs={1}>
                <span className="key">experienceInYears</span>: <span className="integer">4</span>,
              </Line>
              <Line number={4} tabs={1}>
                <span className="key">education</span>: <span className="string">&#39;Bachelors in Software Engineering&#39;</span>,
              </Line>
              <Line number={5} tabs={1}>
                <span className="key">socials</span>: [
              </Line>
              <Line number={6} tabs={2}>
                <span className="string">&#39;https://www.twitter.com/mikeysoftware&#39;</span>,
              </Line>
              <Line number={2} tabs={2}>
                <span className="string">&#39;https://www.github.com/mikeysoftware&#39;</span>,
              </Line>
              <Line number={2} tabs={2}>
                <span className="string">&#39;https://www.linkedin.com/in/mikeysoftware&#39;</span>,
              </Line>
              <Line number={2} tabs={1}>
                ]
              </Line>
              <Line number={2}>&#125;</Line>
              {/* Spacer */}
              <Line number={1}></Line>
              {/* Technologies */}
              <Line number={1}>
                <span className="keyword">const</span>
                <span className="variable"> Technologies</span> = &#123;
              </Line>
              <Line number={5} tabs={1}>
                <span className="key">frontend</span>: [
              </Line>
              <Line number={2} tabs={3}>
                <span className="string">&#39;React JS&#39;</span>,
              </Line>
              <Line number={2} tabs={3}>
                <span className="string">&#39;Next JS&#39;</span>,
              </Line>
              <Line number={2} tabs={3}>
                <span className="string">&#39;React Native&#39;</span>,
              </Line>
              <Line number={2} tabs={3}>
                <span className="string">&#39;Styled Components&#39;</span>,
              </Line>
              <Line number={2} tabs={3}>
                <span className="string">&#39;Framer Motion&#39;</span>,
              </Line>
              <Line number={2} tabs={3}>
                <span className="string">&#39;React JS&#39;</span>,
              </Line>
              <Line number={2} tabs={1}>
                ],
              </Line>
              <Line number={5} tabs={1}>
                <span className="key">backend</span>: [
              </Line>
              <Line number={2} tabs={3}>
                <span className="string">&#39;Node JS&#39;</span>,
              </Line>
              <Line number={2} tabs={3}>
                <span className="string">&#39;Express&#39;</span>,
              </Line>
              <Line number={2} tabs={3}>
                <span className="string">&#39;PostgreSQL&#39;</span>,
              </Line>
              <Line number={2} tabs={3}>
                <span className="string">&#39;MongoDB&#39;</span>,
              </Line>
              <Line number={2} tabs={3}>
                <span className="string">&#39;RabbitMQ&#39;</span>,
              </Line>
              <Line number={2} tabs={3}>
                <span className="string">&#39;Redis&#39;</span>,
              </Line>
              <Line number={2} tabs={1}>
                ],
              </Line>
              <Line number={5} tabs={1}>
                <span className="key">tooling</span>: [
              </Line>
              <Line number={2} tabs={3}>
                <span className="string">&#39;Jest&#39;</span>,
              </Line>
              <Line number={2} tabs={3}>
                <span className="string">&#39;Cypress&#39;</span>,
              </Line>
              <Line number={2} tabs={3}>
                <span className="string">&#39;Socket IO&#39;</span>,
              </Line>
              <Line number={2} tabs={3}>
                <span className="string">&#39;Swagger Docs&#39;</span>,
              </Line>
              <Line number={2} tabs={3}>
                <span className="string">&#39;Docker&#39;</span>,
              </Line>
              <Line number={2} tabs={1}>
                ]
              </Line>
              <Line number={2}>&#125;</Line>
            </SyntaxHighlighter>
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
  /* display: none; */
  flex-direction: column;

  .code-container {
    padding: 0.125rem;
    border-radius: 0.25rem;
    background: var(--color-gray-700);
  }

  /* Tablet */
  @media screen and (min-width: 768px) {
    display: flex;
    padding: 1rem;

    .code-container {
      flex: 1;
      margin-top: -12rem;
    }
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    .code-container {
      /* margin-top: -14rem; */
    }
  }
`;
