import React, { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return <InputWrapper {...props} />;
}

const InputWrapper = styled.input`
  /* Mobile */
  border: none;
  background: none;
  font-size: 1.25rem;
  font-family: inherit;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;

  color: white;
  background: rgba(0, 0, 0, 0.1);
  border-bottom: 0.125rem solid var(--color-gray-100);

  &::placeholder {
    color: var(--color-gray-300);
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    /* padding: 0.875rem 1.25rem; */
  }
`;
