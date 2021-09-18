import React from "react";
import styled from "styled-components";

export default function Heading({ children }: any) {
  return <SubHeading>{children}</SubHeading>;
}

const SubHeading = styled.span`
  /* Mobile */
  display: inline-block;
  margin-bottom: 1.25rem;

  font-size: 1.25rem;
  font-weight: 500;
  line-height: 0.75rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;

  color: var(--color-gray-300);

  /* Desktop */
  @media screen and (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;
