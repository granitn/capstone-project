import useSWRMutation from "swr/mutation";
import {
  FormLabel,
  SubmitButton,
  FormInput,
  FormArea,
  StyledForm,
} from "./MachineForm.Styled";

export default function MachineForm({ onSubmit, machine }) {
  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <h2>{machine ? "Edit Machine" : "Add new Machine"}</h2>
        <FormLabel htmlFor="name">Machine Name:</FormLabel>

        <FormInput
          type="text"
          name="machineName"
          id="name"
          defaultValue={machine?.machineName}
          required
        />
        <FormLabel htmlFor="settings">Settings:</FormLabel>

        <FormArea
          type="text"
          name="settings"
          id="settings"
          rows="4"
          placeholder="seperate settings with linebreaks/enter"
          defaultValue={machine?.settings}
          required
        />
        <FormLabel htmlFor="image">Picture:</FormLabel>
        <FormInput
          type="url"
          name="machineImage"
          id="image"
          defaultValue={machine?.machineImage}
          placeholder="image url from unsplash"
          pattern="https://images.unsplash.com/.*"
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </>
  );
}
