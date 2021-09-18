import React from "react";
import styled from "styled-components";

// Components
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

// Icons
import { BatteryCharging, FaceID, Mail, Message } from "../components/Icons";

const SOCIAL_MEDIA = [
  { platform: "Twitter", logo: FaceID, link: "https://twitter.com/mikeysoftware", linkShort: "twitter.com/mikeysoftware" },
  { platform: "Github", logo: FaceID, link: "https://github.com/mikeysoftware", linkShort: "github.com/mikeysoftware" },
  { platform: "LinkedIn", logo: FaceID, link: "https://www.linkedin.com/in/mikeysoftware/", linkShort: "linkedin.com/in/mikeysoftware" },
];

export default function Footer() {
  return (
    <FooterWrapper id="links">
      <FooterContainer>
        <ContactCopy>
          {/* <BatteryCharging /> */}

          <Heading level={2}>I'll log off when I'm dead.</Heading>
          <Paragraph>
            I am a creative full-stack developer and open source enthusiast. I have an unwavering passion and energy for ux-guided interactive interfaces and
            developer tooling.
          </Paragraph>
          {/* <a href="">
            <Button>
              Until then, Mail me <Message />
            </Button>
          </a> */}

          <ul>
            {SOCIAL_MEDIA.map((social) => (
              <li key={social.platform}>
                <a className="social" href={social.link} target="_blank" rel="noreferrer">
                  <social.logo />
                  {/* <div className="platform">
                    <h4>{social.platform}</h4>
                    <span>{social.linkShort}</span>
                  </div> */}
                </a>
              </li>
            ))}
          </ul>
        </ContactCopy>
        <ContactVisual>
          {/* {SOCIAL_MEDIA.map((social) => (
            <a key={social.platform} className="social" href={social.link} target="_blank" rel="noreferrer">
              <social.logo />
              <div className="platform">
                <h4>{social.platform}</h4>
                <span>{social.linkShort}</span>
              </div>
            </a>
          ))} */}
        </ContactVisual>
      </FooterContainer>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  /* Default */
  background: var(--color-gray-600);

  /* Mobile */
  padding: 1.25rem;

  /* Tablet */
  @media screen and (min-width: 1024px) {
    padding: 2rem;
  }
`;

const FooterContainer = styled.div`
  /* Default */
  max-width: var(--breakpoint-xl);
  margin: 0px auto;

  /* Mobile */
  display: flex;
  flex-direction: column;
  padding: 2rem 0rem;

  /* Tablet */
  @media screen and (min-width: 768px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }

  /* Desktop XXL */
  @media screen and (min-width: 1600px) {
    max-width: var(--breakpoint-xxl);
  }
`;

const ContactCopy = styled.div`
  /* Default */
  position: relative;
  padding: 3rem 1.5rem;
  padding-bottom: 1rem;
  background: var(--color-gray-700);

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  /* Mobile */
  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    margin-top: 0.5rem;

    li {
      margin-right: 1rem;
      svg {
        height: 3rem;
        width: 3rem;
      }
    }
  }

  /* Tablet */
  @media screen and (min-width: 768px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
  }
`;

const ContactVisual = styled.div`
  /* Default */
  padding: 2rem 1.5rem;
  max-width: var(--breakpoint-lg);
  background: var(--color-gray-500);

  flex: 1;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;

  /* Mobile */
  /* padding: 1.5rem; */

  .social {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    svg {
      height: 3rem;
    }
  }

  /* Tablet */
  @media screen and (min-width: 768px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr;

    .social {
      h4 {
        font-size: 1.5rem;
        line-height: 1.5rem;
        margin-bottom: 0.25rem;
      }
      svg {
        height: 5rem;
      }
    }
  }
`;
