import React from "react";
import styled from "styled-components";

// Components
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import TechnologyStack from "../components/TechnologyStack";

// Icons
import { ProjectDown, TextFile, PlayButton } from "../components/Icons";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeroCopy>
          {/* Hero Type */}
          <Heading level={1}>
            Making web <br />
            <span>inter-faces</span>, <span>inter-active</span>.
          </Heading>
          <Paragraph>I'm a JavaScript Engineer and Open Source enthusiast specializing in experience-guided interfaces and developer tooling.</Paragraph>
          {/* Call to Actions */}
          <div className="cta">
            <a className="cta__projects" href="#projects">
              <Button>
                View Featured Projects
                {/* <ProjectDown /> */}
              </Button>
            </a>
            <a className="cta__resume" href="#resume">
              <Button>
                Resume / CV <TextFile />
              </Button>
            </a>
          </div>
          <TechnologyStack />
        </HeroCopy>
        <HeroVisual>
          {/* Hero Visuals */}
          <div className="video">
            <button aria-label="Play Introduction Video">
              <PlayButton />
            </button>
            <div className="overlay" />
          </div>
        </HeroVisual>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  /* Default */
  background: var(--color-gray-600);
  /* background: var(--color-gray-900); */
  /* background: var(--color-background); */
  /* background: white; */

  /* Mobile */
  padding: 1.25rem;

  /* Tablet */
  @media screen and (min-width: 1024px) {
    padding: 2rem;
  }
`;

const HeaderContainer = styled.div`
  /* Default */
  max-width: var(--breakpoint-xl);
  margin: 0px auto;

  /* Mobile */
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 1rem;

  /* Tablet */
  @media screen and (min-width: 768px) {
    /* padding: 3rem 0rem; */
    padding-bottom: 1rem;
    grid-template-columns: 1fr 1fr;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    flex-direction: column;
  }

  /* Desktop XXL */
  @media screen and (min-width: 1600px) {
    padding-bottom: 2rem;
    max-width: var(--breakpoint-xxl);
  }
`;

const HeroCopy = styled.div`
  /* Default */
  margin-bottom: 2rem;

  /* Mobile */
  .cta {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .cta__projects {
      margin-right: 1rem;
    }

    .cta__resume {
      button {
        background: var(--color-gray-400);
      }
    }
  }

  /* Tablet */
  @media screen and (min-width: 768px) {
    .cta {
      .cta__projects {
        margin-right: 1.5rem;
      }
    }
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    p {
      margin-right: 2rem;
      max-width: var(--breakpoint-sm);
    }

    .cta {
      flex-direction: row;
      align-items: center;
    }
  }
`;

const HeroVisual = styled.div`
  /* Default */
  position: relative;
  display: flex;
  flex-direction: column;

  /* Mobile */
  .video {
    position: relative;
    padding: 0rem 1rem;
    height: 16rem;
    margin-bottom: 1rem;
    /* background: var(--color-gray-500); */

    /* Mask Shape */
    -webkit-mask: url("/svg/mask-horizontal-1.svg");
    -webkit-mask-size: contain;
    mask: url("/svg/mask-horizontal-1.svg");
    mask-size: contain;
    /* mask-repeat: no-repeat; */

    button:hover + div {
      opacity: 0.7;
      cursor: pointer;
      animation: bg-hue-animation 3.5s infinite;
    }

    button {
      position: absolute;
      z-index: 1;
      left: calc(50% - 2rem);
      top: calc(50% - 2rem);

      height: 4rem;
      width: 4rem;
      border-radius: 100%;
      border: none;
      cursor: pointer;

      &:hover {
      }

      svg {
        height: 1.75rem;
        width: 1.75rem;
        margin-top: 0.125rem;
        margin-right: -0.375rem;
      }
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      /* Hover Effect */
      opacity: 1;
      background: url("/images/thumbnail-gradient.jpg");
      background-size: cover;
      mix-blend-mode: hard-light;
      will-change: opacity;
      transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1);

      &:hover {
        /* opacity: 0.7; */
        opacity: 1;
        cursor: pointer;
        animation: bg-hue-animation 2.5s infinite;
      }
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
    font-style: italic;
    text-align: center;
  }

  /* Tablet */
  @media screen and (min-width: 768px) {
    padding: 0rem 1rem;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    .video {
      height: 25rem;

      .overlay {
        button {
          height: 4.75rem;
          width: 4.75rem;

          svg {
            height: 2rem;
            width: 2rem;
            margin-top: 0.125rem;
            margin-right: -0.375rem;
          }
        }
      }
    }

    p {
      margin-top: 1rem;
      font-size: 1.25rem;
    }
  }
`;
