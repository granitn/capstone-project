import styled from "styled-components";

export const StyledList = styled.ul`
  /* list-style: none;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 4rem;
  padding-left: 0;
  padding-top: 1rem;
  padding-bottom: 3rem; */

  display: grid;
  list-style: none;
  gap: 4rem;
  padding-left: 0;
  padding-top: 1rem;
  padding-bottom: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media screen and (max-width: 425px) {
    margin-left: auto;
    margin-right: auto;
  }
  margin-left: 4rem;
  margin-right: 4rem;
`;
