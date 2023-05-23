import {
  NavLinkMachines,
  NavLinkTracker,
  NavLinkSetGoals,
} from "../Link/Link.styled";
import { StyledLinkContainer } from "./NavLinkContainer.styled";

export default function NavLinkContainer() {
  return (
    <div>
      <StyledLinkContainer>
        <NavLinkMachines href={"/list"}>Machines</NavLinkMachines>
        <NavLinkSetGoals href={"/tracker/goal"}>Set Goals</NavLinkSetGoals>
        <NavLinkTracker href={"/tracker"}>Tracker</NavLinkTracker>
      </StyledLinkContainer>
    </div>
  );
}
