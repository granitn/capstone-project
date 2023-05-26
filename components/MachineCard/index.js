import styled, { createGlobalStyle } from "styled-components";

import { MachineEntry } from "./MachineCard.styled";
import { DeleteButton } from "../Button/Button.styled";
import { EditButton } from "../Link/Link.styled";
import useSWR from "swr";
import { BsFillGearFill } from "react-icons/bs";
import { StyledImage } from "./MachineCard.styled";
import { MotionEntry } from "./MachineCard.styled";

//styled components only used in card
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

  //sends delete request
  async function handleDelete() {
    const response = await fetch(`/api/machines/${machine._id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      await response.json();
      //refresh of list(pages/index.js)
      mutate();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <MotionEntry whileHover={{ scale: 1.1 }}>
      <DeleteButton aria-label="Delete" onClick={handleDelete}>
        -
      </DeleteButton>
      <EditButton
        //sends machine._id under key "id" to edit page in url
        aria-label="Edit"
        href={{ pathname: `/edit`, query: { id: machine._id } }}
      >
        {" "}
        <BsFillGearFill />
      </EditButton>
      {machine.machineImage && (
        <StyledImage
          src={machine.machineImage}
          alt="No image found"
          width={200}
          height={200}
        />
      )}
      <StyledName>{machine.machineName}</StyledName>
      <StyledTextareaP>{machine.settings}</StyledTextareaP>
    </MotionEntry>
  );
}
