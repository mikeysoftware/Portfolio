import React from "react";
import styled from "styled-components";

// Icons
import { BatteryCharging, FaceID, Mail } from "../components/Icons";

const DEV_STACK = [
  { name: "TypeScript", logoPath: "/svg/typescript.svg", link: "https://twitter.com/mikeysoftware", linkShort: "twitter.com/mikeysoftware" },
  { name: "ReactJS", logoPath: "/svg/react.svg", link: "https://github.com/mikeysoftware", linkShort: "github.com/mikeysoftware" },
  { name: "NodeJS", logoPath: "/svg/node.svg", link: "https://www.linkedin.com/in/mikeysoftware/", linkShort: "linkedin.com/in/mikeysoftware" },
  { name: "VSCode", logoPath: "/svg/vscode.svg", link: "https://www.linkedin.com/in/mikeysoftware/", linkShort: "linkedin.com/in/mikeysoftware" },
  { name: "Docker", logoPath: "/svg/docker.svg", link: "https://www.linkedin.com/in/mikeysoftware/", linkShort: "linkedin.com/in/mikeysoftware" },
];

export default function TechnologyStack() {
  return (
    <StackWrapper>
      {DEV_STACK.map((tech: any) => (
        <StackItem key={tech?.name}>
          <div className="logo">
            <img src={tech?.logoPath} alt={tech.name} />
          </div>
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
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 0.25rem;
    background: var(--color-gray-900);
    /* transform: rotate(10deg); */

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 0.125rem;
      /* transform: rotate(-10deg); */
    }
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    .logo {
      width: 4rem;
      height: 4rem;

      img {
        width: 2.75rem;
        height: 2.75rem;
      }
    }
  }
`;
