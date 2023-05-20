import MachineList from "@/components/MachineList";
import { StyledHeader } from "@/components/Heading/Heading.Styled";
import { StyledLink } from "@/components/Link/Link.styled";
import { StyledAddLink } from "@/components/Link/Link.styled";
export default function ListHomePage() {
  return (
    <>
      <StyledHeader>My Machine settings</StyledHeader>

      <MachineList />
      <StyledAddLink href={"/form"}>Add</StyledAddLink>
      <StyledLink href={"/"}>Back</StyledLink>
    </>
  );
}
