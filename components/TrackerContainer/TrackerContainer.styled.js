import styled from "styled-components";

export const StyledTrackerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto 1fr;
  grid-template-rows: 5rem 5rem auto auto 3rem auto 1fr;
  gap: 1rem;
  min-height: 100vh;
  max-width: 100vw;
  padding-top: 2rem;
  background-color: var(--color-tracker-bg);
`;
