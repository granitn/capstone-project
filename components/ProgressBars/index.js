import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { ProgressbarContainer } from "./ProgressBar.styled";
import { useState, useEffect } from "react";
import { CarbWrapper, ProteinWrapper, FatWrapper } from "./ProgressBar.styled";
import {
  kcalStyles,
  carbStyles,
  proteinStyles,
  fatStyles,
} from "./ProgressBar.styled";

export default function ProgressBars({
  todaysKcal,
  todaysCarbs,
  todaysProtein,
  todaysFat,
  goal,
}) {
  const [kcalProgress, setKcalProgress] = useState(todaysKcal);
  const [carbsProgress, setCarbsProgress] = useState(todaysCarbs);
  const [proteinProgress, setProteinProgress] = useState(todaysProtein);
  const [fatProgress, setFatProgress] = useState(todaysFat);

  useEffect(() => {
    setKcalProgress(todaysKcal);
    setCarbsProgress(todaysCarbs);
    setProteinProgress(todaysProtein);
    setFatProgress(todaysFat);
  }, [todaysKcal, todaysCarbs, todaysProtein, todaysFat]);

  return (
    <ProgressbarContainer>
      <CircularProgressbarWithChildren
        value={kcalProgress}
        maxValue={goal.kcal}
        circleRatio={0.5}
        strokeWidth={10}
        styles={buildStyles(kcalStyles)}
      >
        <CarbWrapper>
          <CircularProgressbarWithChildren
            value={carbsProgress}
            maxValue={goal.carbs}
            circleRatio={0.5}
            strokeWidth={12}
            styles={buildStyles(carbStyles)}
          >
            <ProteinWrapper>
              <CircularProgressbarWithChildren
                value={proteinProgress}
                maxValue={goal.protein}
                circleRatio={0.5}
                strokeWidth={16}
                styles={buildStyles(proteinStyles)}
              >
                <FatWrapper>
                  <CircularProgressbar
                    value={fatProgress}
                    maxValue={goal.fat}
                    circleRatio={0.5}
                    strokeWidth={26}
                    styles={buildStyles(fatStyles)}
                  ></CircularProgressbar>
                </FatWrapper>
              </CircularProgressbarWithChildren>
            </ProteinWrapper>
          </CircularProgressbarWithChildren>
        </CarbWrapper>
      </CircularProgressbarWithChildren>
    </ProgressbarContainer>
  );
}
