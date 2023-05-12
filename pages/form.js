import MachineForm from "@/components/MachineForm";
import { useRouter } from "next/router";

import { StyledLink } from "@/components/Link/Link.styled";
import useSWRMutation from "swr/mutation";

// uses handed data and url in useSWRMutation to add machine via api/machines POST route
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

export default function FormPage() {
  const { trigger } = useSWRMutation("/api/machines", sendRequest);
  const router = useRouter();

  //constructs data object from form to be sent
  async function handleAddSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const machineAddData = Object.fromEntries(formData);

    //hands data to sendRequest function
    await trigger(machineAddData);

    router.push("/");
    event.target.reset();
  }

  return (
    <>
      <MachineForm onSubmit={handleAddSubmit} />
      <StyledLink href={"/"}>Back</StyledLink>
    </>
  );
}
