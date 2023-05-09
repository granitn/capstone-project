import MachineList from "@/components/MachineList";
import { StyledHeader } from "@/components/Heading/Heading.Styled";
import { StyledLink } from "@/components/Link/Link.styled";
export default function HomePage() {
  return (
    <>
      <StyledHeader>My Machine settings</StyledHeader>

      <MachineList />

      <StyledLink href={"/form"}>Add</StyledLink>
    </>
  );
}
