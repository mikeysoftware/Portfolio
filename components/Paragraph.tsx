import React from "react";
import styled from "styled-components";

export default function Paragraph({ children }: any) {
  return <ParagraphWrapper>{children}</ParagraphWrapper>;
}

const ParagraphWrapper = styled.p`
  /* Mobile */
  font-size: 1.625rem;
  font-weight: 500;
  line-height: 120%;
  margin-bottom: 0.5rem;
`;
