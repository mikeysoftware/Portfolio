import React from "react";
import styled from "styled-components";

export default function Button({ children, ...rest }: any) {
  return <ButtonWrapper {...rest}>{children}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  /* Mobile */
  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;
  padding: 1rem 1rem;

  font-size: 1.25rem;
  line-height: 1.25rem;
  font-weight: 500;
  font-family: "Konkret";

  background: var(--color-gray-300);
  white-space: nowrap;
  cursor: pointer;
  border: none;

  svg {
    height: 1rem;
    margin-left: 0.5rem;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    padding: 0.875rem 1.25rem;
  }
`;
