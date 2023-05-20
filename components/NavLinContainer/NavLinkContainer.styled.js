import styled from "styled-components";

export const StyledLinkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 12rem 1fr;
  grid-template-rows: repeat(7, 1fr);
  gap: 1rem;
  min-height: 100vh;
  background-color: var(--color-link-list);
`;
