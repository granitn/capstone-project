import IntakeForm from "@/components/IntakeForm";
import { StyledLink } from "@/components/Link/Link.styled";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

export default function Intake({ intakes, setIntakes }) {
  const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const intakeData = Object.fromEntries(formData);

    const id = uuidv4();
    const date = new Date().toDateString();
    const newIntake = { id, ...intakeData, date };

    setIntakes([...intakes, newIntake]);
    event.target.reset();
    router.push("/tracker");
  }

  return (
    <div>
      <IntakeForm onsubmit={handleSubmit} />
      <StyledLink href={"/tracker"}>Back</StyledLink>
    </div>
  );
}
