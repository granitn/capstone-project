import IntakeForm from "@/components/IntakeForm";
import { StyledLink } from "@/components/Link/Link.styled";
import { useRouter } from "next/router";
export default function Goal({ setGoal }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const goalData = Object.fromEntries(formData);
    setGoal(goalData);
    event.target.reset();
    router.push("/tracker");
  }
  //console.log(router.pathname);
  return (
    <div>
      <IntakeForm onsubmit={handleSubmit} pageCheck={router.pathname} />
      <StyledLink href={"/"}>Back</StyledLink>
    </div>
  );
}
