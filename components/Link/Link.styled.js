import Link from "next/link";
import styled from "styled-components";
//for "Add" & "Back" 'buttons'
export const StyledLink = styled(Link)`
  text-decoration: none;
  z-index: 2;
  line-height: 2.35rem;
  text-align: center;
  color: var(--color-button-text);
  background-color: var(--color-button-bg);
  position: fixed;
  right: 2rem;
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
