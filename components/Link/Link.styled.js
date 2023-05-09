import Link from "next/link";
import styled from "styled-components";

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
