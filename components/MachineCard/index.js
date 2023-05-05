import useSWR from "swr";
import styled from "styled-components";

const StyledTextareaP = styled.p`
  white-space: pre-line;
`;

export default function MachineCard({ machine }) {
  console.log(machine);

  return (
    <div>
      <p>{machine.machineName}</p>
      <StyledTextareaP>{machine.settings}</StyledTextareaP>
    </div>
  );
}
