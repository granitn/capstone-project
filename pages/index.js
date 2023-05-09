import MachineList from "@/components/MachineList";
import { StyledHeader } from "@/components/Heading/Heading.Styled";
export default function HomePage() {
  return (
    <>
      <StyledHeader>My Machine settings</StyledHeader>

      <MachineList />
    </>
  );
}
