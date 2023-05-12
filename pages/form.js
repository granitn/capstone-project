import MachineForm from "@/components/MachineForm";
import { useRouter } from "next/router";
import { StyledButton } from "@/components/Button/Button.styled";
import { StyledLink } from "@/components/Link/Link.styled";
import useSWRMutation from "swr/mutation";

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

  async function handleAddSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const machineAddData = Object.fromEntries(formData);

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
