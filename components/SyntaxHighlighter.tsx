import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function SyntaxHighlighter({ children }: any) {
  return (
    <HighlighterWrapper>
      <code>{children}</code>
    </HighlighterWrapper>
  );
}

const HighlighterWrapper = styled.pre`
  padding: 1rem;
  background: var(--color-gray-700);

  /* Default */
  code {
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    /* overflow-wrap: normal; */
    overflow-wrap: break-word;
    line-height: 1.5;
    tab-size: 4;
    tab-size: 1.5rem;
    hyphens: none;

    width: 100%;
    display: inline-grid;
    grid-template-columns: max-content;
  }

  /* Tablet */
  @media screen and (min-width: 768px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    padding: 2rem 1rem;
    font-size: 1rem;
  }
`;

// Line Component

interface LineProps {
  number: number;
  tabs?: number;
  children?: any;
}

export function Line({ number = 0, tabs = 0, children }: LineProps) {
  const tabArray = [...Array(tabs).keys()];
  return (
    <LineWrapper>
      <span className="line__no">{number}</span>
      <span className="line__content">
        {tabArray.map((tab: any, tabIndex: number) => (
          <span key={tabIndex} className="tab" />
        ))}
        {children}
      </span>
    </LineWrapper>
  );
}

const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  .line__no {
    display: inline-flex;
    align-items: center;
    text-align: left;
    width: 1.5rem;
    color: var(--color-gray-400);
  }

  .line__content {
    display: inline-flex;
    align-items: center;

    .tab {
      margin-left: 1.5rem;
    }
    .keyword {
      color: var(--color-code-keyword);
    }
    .key {
      color: var(--color-code-key);
    }
    .variable {
      color: var(--color-code-variable);
    }
    .string {
      color: var(--color-code-string);
    }
    .integer {
      color: var(--color-code-integer);
    }
  }
`;
