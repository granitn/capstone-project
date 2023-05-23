import { StyledLink, IateButton } from "@/components/Link/Link.styled";
import { DeleteLastMealButton } from "@/components/Button/Button.styled";
import styled from "styled-components";
import { StyledTrackerContainer } from "@/components/TrackerContainer/TrackerContainer.styled";

const StyledKcal = styled.p`
  grid-area: 1/1/2/3;
  justify-self: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0.6rem 0;
  color: #ffae6d;
`;

const StyledProtein = styled.p`
  grid-area: 2/2/3/3;
  justify-self: end;
  color: #a05f96;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.6rem 0 0.6rem 0;
`;

const StyledCarbs = styled.p`
  grid-area: 2/1/3/2;
  color: #7c0a02;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0.6rem 0.6rem 0.6rem 0;
`;

const StyledFat = styled.p`
  grid-area: 3/1/4/3;
  justify-self: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #205375;
`;

const StyledPlaceholder = styled.h1`
  grid-area: 1/ 2 /3 / 4;
  align-self: center;
  justify-self: center;
`;

const GridWrapper = styled.div`
  grid-area: 3 / 2/ 5 / 4;
  display: grid;

  grid-template-columns: auto auto;
  grid-template-rows: repeat(3, auto);
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
    <StyledTrackerContainer>
      <StyledPlaceholder>Tracker</StyledPlaceholder>
      <GridWrapper>
        <StyledKcal>
          kcal: {todaysKcal}/{goal.kcal}
        </StyledKcal>
        <StyledCarbs>
          carbs:{todaysCarbs}/{goal.carbs}
        </StyledCarbs>
        <StyledProtein>
          protein:{todaysProtein}/{goal.protein}
        </StyledProtein>
        <StyledFat>
          fat:{todaysFat}/{goal.fat}
        </StyledFat>
      </GridWrapper>
      <IateButton href={"/tracker/intake"}>I ate!</IateButton>

      <DeleteLastMealButton onClick={handleDeleteLastMeal}>
        Delete last meal
      </DeleteLastMealButton>

      <StyledLink href={"/"}>Back</StyledLink>
    </StyledTrackerContainer>
  );
}
