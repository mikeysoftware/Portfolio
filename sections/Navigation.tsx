import React, { useState } from "react";
import styled, { css } from "styled-components";
import { PlaceHolder } from "../components/Icons";

// Icons
import { ArrowUp } from "../components/Icons";

// Interfaces
interface NavLinkProps {
  selected: Boolean;
}

const PAGE_SECTIONS = [
  { id: "about", title: "About" },
  { id: "projects", title: "Work" },
  { id: "links", title: "Links" },
];

export default function Navigation() {
  const [selectedSection, setSelectedSection] = useState(PAGE_SECTIONS[0].id);

  return (
    <NavigationWrapper>
      <NavigationContainer>
        <div className="nav__start">
          {/* <PlaceHolder /> */}
          PlaceHolder
        </div>
        <div className="nav__center">
          {PAGE_SECTIONS.map((link) => (
            <NavLink key={link.id} href={`#${link.id}`} selected={link.id === selectedSection} onClick={() => setSelectedSection(link.id)}>
              {link.title}
              <div className="bg"></div>
            </NavLink>
          ))}
          <NavLink className="to-top" href="#top" selected={"top" === selectedSection} onClick={() => setSelectedSection("top")}>
            {/* {link.title} */}
            <ArrowUp />
            <div className="bg"></div>
          </NavLink>
        </div>
      </NavigationContainer>
    </NavigationWrapper>
  );
}

const NavigationWrapper = styled.nav`
  /* Default */
  background: var(--color-gray-600);

  /* Mobile */
  padding: 1.25rem;

  /* Tablet */
  @media screen and (min-width: 1024px) {
    padding: 2rem;
  }
`;

const NavigationContainer = styled.div`
  /* Default */
  max-width: var(--breakpoint-xl);
  margin: 0px auto;

  /* Mobile */
  display: grid;
  grid-template-columns: 1fr 1fr;

  .nav__start {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    svg {
      height: 3rem;
    }
  }

  .nav__center {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.5rem 1.5rem;
    color: var(--color-gray-400);
    background: var(--color-gray-900);

    .to-top {
      display: flex;
    }
  }

  .nav__end {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  /* Tablet */
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    flex-direction: column;
    grid-template-columns: 1fr 1fr;

    .nav__center {
      position: relative;
      z-index: 0;
      margin: 0rem 1rem;

      /* height: 3.25rem; */
      padding: 0.125rem;
      border-radius: 2rem;
      color: var(--color-gray-400);
      background: var(--color-gray-900);
      border: 0.125rem solid var(--color-gray-900);

      .to-top {
        display: none;
      }

      &:hover {
        border-color: var(--color-gray-400);
      }
    }
  }

  /* Desktop XXL */
  @media screen and (min-width: 1600px) {
    max-width: var(--breakpoint-xxl);
  }
`;

const NavLink = styled.a<NavLinkProps>`
  flex: 1;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray-400);
  border-radius: 1.5rem;
  height: 2.75rem;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;

  svg {
    height: 1.75rem;
  }

  ${(props: any) =>
    props.selected === true &&
    css`
      background: var(--color-gray-600);
    `}

  /* Desktop */
  @media screen and (min-width: 1024px) {
    height: 2.5rem;
  }
`;
