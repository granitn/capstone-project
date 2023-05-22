import { NavLinkMachines, NavLinkTracker } from "../Link/Link.styled";
import { StyledLinkContainer } from "./NavLinkContainer.styled";

export default function NavLinkContainer() {
  return (
    <div>
      <StyledLinkContainer>
        <NavLinkMachines href={"/list"}>Machines</NavLinkMachines>
        <NavLinkTracker href={"/tracker"}>Tracker</NavLinkTracker>
      </StyledLinkContainer>
    </div>
  );
}
