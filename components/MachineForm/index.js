import useSWRMutation from "swr/mutation";
import { useRouter } from "next/router";
import { StyledForm } from "./MachineForm.Styled";
import { FormLabel } from "./MachineForm.Styled";
import { SubmitButton } from "./MachineForm.Styled";
import { FormInput } from "./MachineForm.Styled";
import { FormArea } from "./MachineForm.Styled";
import { StyledButton } from "../Button/Button.styled";

//sendrequest for form data
async function sendRequest(url, { arg }) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });
  return response.json();
}

export default function MachineForm() {
  const { trigger } = useSWRMutation("/api/machines", sendRequest);
  const router = useRouter();

  //submithandler for form data to trigger sendRequest
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const machineAddData = Object.fromEntries(formData);

    await trigger(machineAddData);
    console.log(machineAddData);
    router.push("/");

    event.target.reset();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Add a new machine</h2>
        <FormLabel htmlFor="name">Machine Name:</FormLabel>

        <FormInput type="text" name="machineName" id="name" required />
        <FormLabel htmlFor="settings">Machine Settings:</FormLabel>

        <FormArea
          type="text"
          name="settings"
          id="settings"
          rows="4"
          placeholder="seperate settings with linebreaks/enter"
          required
        />
        <FormLabel htmlFor="image">Machine Picture:</FormLabel>
        <FormInput
          type="url"
          name="machineImage"
          id="image"
          placeholder="image url from unsplash"
          pattern="https://images.unsplash.com/.*"
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
      <StyledButton type="button" onClick={() => router.push("/")}>
        back
      </StyledButton>
    </>
  );
}
