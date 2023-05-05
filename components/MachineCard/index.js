import useSWR from "swr";
import styled from "styled-components";
import Image from "next/image";

const StyledTextareaP = styled.p`
  white-space: pre-line;
`;

export default function MachineCard({ machine }) {
  console.log(machine);

  return (
    <div>
      <Image
        src={machine.machineImage}
        alt="No image found"
        width={100}
        height={100}
      />
      <p>{machine.machineName}</p>
      <StyledTextareaP>{machine.settings}</StyledTextareaP>
    </div>
  );
}
