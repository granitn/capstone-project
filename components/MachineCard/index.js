import styled from "styled-components";
import Image from "next/image";
import { MachineEntry } from "./MachineCard.styled";

const StyledTextareaP = styled.p`
  white-space: pre-line;
  margin-top: 0.5rem;
`;

const StyledName = styled.p`
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export default function MachineCard({ machine }) {
  console.log(machine);

  return (
    <MachineEntry>
      <Image
        src={machine.machineImage}
        alt="No image found"
        width={150}
        height={100}
      />
      <StyledName>{machine.machineName}</StyledName>
      <StyledTextareaP>{machine.settings}</StyledTextareaP>
    </MachineEntry>
  );
}
