import MachineForm from "@/components/MachineForm";
import { useRouter } from "next/router";
import { StyledButton } from "@/components/Button/Button.styled";

export default function FormPage() {
  const router = useRouter();

  return (
    <>
      <MachineForm />
      <StyledButton type="button" onClick={() => router.push("/")}>
        back
      </StyledButton>
    </>
  );
}
