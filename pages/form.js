import MachineForm from "@/components/MachineForm";
import { useRouter } from "next/router";
import { StyledButton } from "@/components/Button/Button.styled";
import { StyledLink } from "@/components/Link/Link.styled";

export default function FormPage() {
  const router = useRouter();

  return (
    <>
      <MachineForm />
      <StyledLink href={"/"}>Back</StyledLink>
    </>
  );
}
