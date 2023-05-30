import IntakeForm from "@/components/IntakeForm";
import { StyledLink } from "@/components/Link/Link.styled";
import { useRouter } from "next/router";
import { GoalFormBackground } from "@/components/Backgrounds/Background.styled";

export default function Goal({ setGoal }) {
  const router = useRouter();
  const goalPage = true;
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const goalData = Object.fromEntries(formData);
    setGoal(goalData);
    event.target.reset();
    router.push("/tracker");
  }

  return (
    <GoalFormBackground>
      <IntakeForm onsubmit={handleSubmit} pageCheck={goalPage} />
      <StyledLink href={"/"}>Back</StyledLink>
    </GoalFormBackground>
  );
}
