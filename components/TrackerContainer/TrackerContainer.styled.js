import styled from "styled-components";

export const StyledTrackerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto 1fr;
  grid-template-rows: 6rem 6rem auto auto 3rem auto 1fr;
  @media screen and (min-width: 768px) {
    grid-template-rows: 6rem 6rem 3rem auto auto 2rem 3rem 1fr;
  }
  gap: 1rem;
  min-height: 100vh;
  max-width: 100vw;
  padding-top: 20%;
  @media screen and (min-width: 768px) {
    padding-top: 5%;
  }
  background-color: var(--color-tracker-bg);
`;
