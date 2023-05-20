import { NavLink } from "../Link/Link.styled";
import { StyledLinkContainer } from "./NavLinkContainer.styled";

export default function NavLinkContainer() {
  return (
    <div>
      <StyledLinkContainer>
        <NavLink href={"/list"}>List</NavLink>
      </StyledLinkContainer>
    </div>
  );
}
