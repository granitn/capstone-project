import Link from "next/link";
import styled from "styled-components";
//for "Back" 'buttons'
export const StyledLink = styled(Link)`
  text-decoration: none;
  z-index: 2;
  line-height: 2.35rem;
  text-align: center;
  color: var(--color-button-text);
  background-color: var(--color-button-bg);
  position: fixed;
  right: 1.5rem;
  bottom: 2rem;
  border-radius: 2rem;
  width: 5rem;
  height: 2.5rem;
`;
// for "Add" 'button'
export const StyledAddLink = styled(Link)`
  text-decoration: none;
  z-index: 2;
  line-height: 2.35rem;
  text-align: center;
  color: var(--color-button-text);
  background-color: var(--color-button-bg);
  position: fixed;
  left: 1.5rem;
  bottom: 2rem;
  border-radius: 2rem;
  width: 5rem;
  height: 2.5rem;
`;

//for edit (gear icon) 'button'
export const EditButton = styled(Link)`
  text-decoration: none;
  border-radius: 2rem;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid var(--color-button-bg);
  position: absolute;
  right: 0.5rem;
  top: 2.2rem;
  font-weight: bold;
  font-size: 1rem;
  color: var(--color-button-bg);
  background-color: var(--color-button-text);
  text-align: center;
  line-height: 1.5rem;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  background-color: var(--color-link-list);
  border-radius: 1rem;
  font-size: 2rem;
  grid-area: 2/ 2 / 3 / 3;

  box-shadow: var(--shadow-elevation-medium);
  color: var(--color-link-text);

  &:hover {
    background-color: var(--color-button-bg);
    color: var(--color-button-text);
  }
`;
