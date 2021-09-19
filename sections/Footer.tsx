import React from "react";
import styled from "styled-components";

// Components
import Input from "../components/Input";
import Button from "../components/Button";
import Heading from "../components/Heading";
import TextArea from "../components/TextArea";
import SubHeading from "../components/SubHeading";
import Paragraph from "../components/Paragraph";

// Icons
import { FaceID, Message } from "../components/Icons";

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
          <SubHeading>What I'm Working On</SubHeading>
          <Heading level={2}>Forever Building</Heading>
          <Paragraph>
            <b>Velvety</b>
            <br /> I am a creative full-stack developer and open source enthusiast. I have an unwavering passion and energy for ux-guided interactive interfaces
            and developer tooling.
          </Paragraph>
          <br />
          <Paragraph>
            <b>Velvety</b>
            <br />I am a creative full-stack developer and open source enthusiast. I have an unwavering passion and energy for ux-guided interactive interfaces
            and developer tooling.
          </Paragraph>

          <ul>
            {SOCIAL_MEDIA.map((social) => (
              <li key={social.platform}>
                <a href={social.link} target="_blank" rel="noreferrer">
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
        <ContactForm>
          <Heading level={2}>I'll log off when I'm dead</Heading>
          <Paragraph>Until then, feel free to get in contact with me with discussions, opportunities and/or feedback! .</Paragraph>
          <div className="form">
            <Input type="email" placeholder="Contact Email" />
            <TextArea placeholder="Drop a Message" rows={4} />
            {/* <input type="text" placeholder="asdsa" /> */}
            <Button>
              Until then, Mail me <Message />
            </Button>
          </div>
        </ContactForm>
      </FooterContainer>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  /* Default */
  background: var(--color-gray-600);

  /* Mobile */
  padding: 1.25rem;
  padding-bottom: 4rem;

  /* Tablet */
  @media screen and (min-width: 1024px) {
    padding: 2rem;
  }
`;

const FooterContainer = styled.div`
  /* Default */
  max-width: var(--breakpoint-xl);
  margin: 0px auto;
  padding: 2rem 0rem;

  /* Mobile */
  /* display: flex; */
  /* flex-direction: column; */
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;
  /* grid-template-columns: 1fr; */

  /* Tablet */
  @media screen and (min-width: 768px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    grid-template-rows: 1fr;
    /* flex-direction: row; */
    /* grid-template-columns: 2fr 1fr; */
  }

  /* Desktop XXL */
  @media screen and (min-width: 1600px) {
    max-width: var(--breakpoint-xxl);
  }
`;

const ContactCopy = styled.div`
  /* Default */
  height: max-content;
  position: relative;
  padding: 3rem 1.5rem;
  padding-bottom: 1rem;
  background: var(--color-gray-700);

  /* Mobile */
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 2;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

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
    grid-column-start: 1;
    grid-column-end: 11;
    padding-bottom: 4rem;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 3;
    padding-left: 3rem;
    padding-right: 30%;
    padding-bottom: 3rem;
    margin-bottom: 4rem;
  }
`;

const ContactForm = styled.div`
  /* Default */
  z-index: 0;
  padding: 3rem 1.5rem;
  padding-bottom: 7rem;
  max-width: var(--breakpoint-lg);
  background: var(--color-gray-500);

  -webkit-mask: url("/svg/mask-message-1.svg");
  -webkit-mask-size: contain;
  -webkit-mask-position: bottom;
  mask: url("/svg/mask-message-1.svg");
  mask-size: cover;
  mask-position: bottom;

  /* Mobile */
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 2;
  grid-row-end: 3;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .form {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    margin-top: 2rem;

    input {
      width: 100%;
    }

    textarea {
      width: 100%;
      margin-top: 2rem;
    }

    button {
      width: 60%;
      margin-top: 1.5rem;
      margin-left: 1rem;
    }
  }

  /* Tablet */
  @media screen and (min-width: 768px) {
    grid-column-start: 3;
    grid-column-end: 13;
    grid-row-start: 2;
    grid-row-end: 3;
    margin-top: -2.5rem;
    padding: 3rem 2rem;
    padding-bottom: 9rem;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    grid-column-start: 7;
    grid-column-end: 13;
    grid-row-start: 1;
    grid-row-end: 3;
    margin-top: 4rem;
    padding: 3rem 3rem;
    padding-bottom: 9rem;
  }
`;
