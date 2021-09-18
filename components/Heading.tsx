import React from "react";
import styled from "styled-components";

interface Heading {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: any;
}

export default function Heading({ level, children }: Heading) {
  return (
    <>
      {level === 1 && <Heading1>{children}</Heading1>}
      {level === 2 && <Heading2>{children}</Heading2>}
      {level === 3 && <Heading3>{children}</Heading3>}
    </>
  );
}

const Heading1 = styled.h1`
  /* Mobile */
  font-size: 4rem;
  line-height: 100%;
  font-weight: 600;
  margin-bottom: 1.5rem;

  span {
    white-space: nowrap;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    font-size: 4.5rem;
  }
`;

const Heading2 = styled.h2`
  /* Mobile */
  font-size: 3rem;
  line-height: 100%;
  font-weight: 600;
  margin-bottom: 1.5rem;

  span {
    white-space: nowrap;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

const Heading3 = styled.h3``;
