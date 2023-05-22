import { StyledLink } from "@/components/Link/Link.styled";
import { IateButton } from "@/components/Link/Link.styled";
import { DeleteLastMealButton } from "@/components/Button/Button.styled";
import styled from "styled-components";

export const StyledProtein = styled.p`
  font-size: 2rem;
`;
export const StyledCarbs = styled.p`
  font-size: 2rem;
`;

export const StyledFat = styled.p`
  font-size: 2rem;
`;

export default function Tracker({ todaysIntakes, goal, intakes, setIntakes }) {
  const todaysCarbs = todaysIntakes.reduce(
    (sum, intake) => sum + parseInt(intake.carbs),
    0
  );

  const todaysKcal = todaysIntakes.reduce(
    (sum, intake) => sum + parseInt(intake.kcal),
    0
  );

  const todaysProtein = todaysIntakes.reduce(
    (sum, intake) => sum + parseInt(intake.protein),
    0
  );

  const todaysFat = todaysIntakes.reduce(
    (sum, intake) => sum + parseInt(intake.fat),
    0
  );

  function handleDeleteLastMeal() {
    const updatedIntakes = [...intakes];
    updatedIntakes.pop();
    setIntakes(updatedIntakes);
  }

  return (
    <div>
      <h1>Tracker</h1>
      <p>
        kcal: {todaysKcal}/{goal.kcal}
      </p>
      <StyledCarbs>
        carbs:{todaysCarbs}/{goal.carbs}
      </StyledCarbs>
      <StyledProtein>
        protein:{todaysProtein}/{goal.protein}
      </StyledProtein>
      <StyledFat>
        fat:{todaysFat}/{goal.fat}
      </StyledFat>
      <IateButton href={"/tracker/intake"}>I ate!</IateButton>

      <DeleteLastMealButton onClick={handleDeleteLastMeal}>
        Delete last meal
      </DeleteLastMealButton>

      <StyledLink href={"/"}>Back</StyledLink>
    </div>
  );
}
