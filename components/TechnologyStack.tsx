import React from "react";
import styled from "styled-components";

// Icons
import { BatteryCharging, FaceID, Mail } from "../components/Icons";

const DEV_STACK = [
  { tech: "TypeScript", logo: FaceID, link: "https://twitter.com/mikeysoftware", linkShort: "twitter.com/mikeysoftware" },
  { tech: "ReactJS", logo: FaceID, link: "https://github.com/mikeysoftware", linkShort: "github.com/mikeysoftware" },
  { tech: "NodeJS", logo: FaceID, link: "https://www.linkedin.com/in/mikeysoftware/", linkShort: "linkedin.com/in/mikeysoftware" },
  { tech: "React Native", logo: FaceID, link: "https://www.linkedin.com/in/mikeysoftware/", linkShort: "linkedin.com/in/mikeysoftware" },
];

export default function TechnologyStack() {
  return (
    <StackWrapper>
      {DEV_STACK.map((job: any) => (
        <StackItem key={job?.tech}>
          <div className="logo">***</div>
        </StackItem>
      ))}
    </StackWrapper>
  );
}

const StackWrapper = styled.ul`
  max-width: var(--breakpoint-xs);
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style-type: none;
  border-top: 1px solid var(--color-gray-500);
`;

// Sub-Components
const StackItem = styled.li`
  display: flex;
  margin-top: 2rem;

  /* Mobile */
  .logo {
    width: 4rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: var(--color-gray-500);
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    .logo {
      width: 5rem;
      height: 5rem;
    }
  }
`;
