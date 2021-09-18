import React from "react";
import styled from "styled-components";

export default function ExperienceList({ jobList = [] }: any) {
  return (
    <ListWrapper>
      {jobList.map((job: any) => (
        <ListItem key={job?.company}>
          <div className="logo">***</div>
          <div className="info">
            <span className="company">{job.company}</span>
            <span className="position">{job.position}</span>
          </div>
        </ListItem>
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  list-style-type: none;
  margin-top: 2rem;
`;

// Sub-Components
const ListItem = styled.li`
  display: flex;
  margin: 1rem 0rem;

  /* Mobile */
  .logo {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    background: var(--color-gray-500);
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .company {
      font-size: 1.375rem;
      font-weight: 600;
    }

    .position {
      margin-top: 0.625rem;
      font-size: 1.125rem;
    }
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    .logo {
      width: 4rem;
      height: 4rem;
    }

    .info {
      .company {
        font-size: 1.5rem;
      }

      .position {
        margin-top: 0.75rem;
        font-size: 1.25rem;
      }
    }
  }
`;
