import { StyledLink, IateButton } from "@/components/Link/Link.styled";
import { DeleteLastMealButton } from "@/components/Button/Button.styled";
import styled from "styled-components";
import { StyledTrackerContainer } from "@/components/TrackerContainer/TrackerContainer.styled";
import ProgressBars from "@/components/ProgressBars";
import { useState, useEffect } from "react";

const StyledKcal = styled.p`
  grid-area: 1/1/2/3;
  justify-self: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0.6rem 0;
  color: var(--color-fg-kcal);
`;

const StyledProtein = styled.p`
  grid-area: 2/2/3/3;
  justify-self: end;
  color: var(--color-fg-protein);
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.6rem 0 0.6rem 0;
`;

const StyledCarbs = styled.p`
  grid-area: 2/1/3/2;
  color: var(--color-fg-carbs);
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0.6rem 0.6rem 0.6rem 0;
`;

const StyledFat = styled.p`
  grid-area: 3/1/4/3;
  justify-self: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--color-fg-fat);
`;

const GridWrapper = styled.div`
  grid-area: 4 / 2/ 6 / 4;
  display: grid;

  grid-template-columns: auto auto;
  grid-template-rows: repeat(3, auto);
`;

export default function Tracker({ todaysIntakes, goal, intakes, setIntakes }) {
  const [todaysKcal, setTodaysKcal] = useState(0);
  const [todaysCarbs, setTodaysCarbs] = useState(0);
  const [todaysProtein, setTodaysProtein] = useState(0);
  const [todaysFat, setTodaysFat] = useState(0);

  useEffect(() => {
    const kcal = todaysIntakes.reduce(
      (sum, intake) => sum + parseInt(intake.kcal),
      0
    );
    const carbs = todaysIntakes.reduce(
      (sum, intake) => sum + parseInt(intake.carbs),
      0
    );
    const protein = todaysIntakes.reduce(
      (sum, intake) => sum + parseInt(intake.protein),
      0
    );
    const fat = todaysIntakes.reduce(
      (sum, intake) => sum + parseInt(intake.fat),
      0
    );

    setTodaysKcal(kcal);
    setTodaysCarbs(carbs);
    setTodaysProtein(protein);
    setTodaysFat(fat);
  }, [todaysIntakes]);

  function handleDeleteLastMeal() {
    const updatedIntakes = [...intakes];
    updatedIntakes.pop();
    setIntakes(updatedIntakes);
  }

  return (
    <StyledTrackerContainer>
      <ProgressBars
        todaysKcal={todaysKcal}
        todaysCarbs={todaysCarbs}
        todaysProtein={todaysProtein}
        todaysFat={todaysFat}
        goal={goal}
      />

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
