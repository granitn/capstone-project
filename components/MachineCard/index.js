import styled, { createGlobalStyle } from "styled-components";
import Image from "next/image";
import { MachineEntry } from "./MachineCard.styled";
import { DeleteButton } from "../Button/Button.styled";
import useSWR from "swr";

const StyledTextareaP = styled.p`
  white-space: pre-line;
  margin-top: 0.5rem;
`;

const StyledName = styled.p`
  margin: 0.5rem 0;
  font-weight: 600;
`;

export default function MachineCard({ machine }) {
  const { mutate } = useSWR("/api/machines");

  async function handleDelete() {
    const response = await fetch(`/api/machines/${machine._id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      await response.json();
      mutate();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <MachineEntry>
      <DeleteButton onClick={handleDelete}>-</DeleteButton>
      <Image
        src={machine.machineImage}
        alt="No image found"
        width={150}
        height={120}
      />
      <StyledName>{machine.machineName}</StyledName>
      <StyledTextareaP>{machine.settings}</StyledTextareaP>
    </MachineEntry>
  );
}
