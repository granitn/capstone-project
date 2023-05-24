import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { ProgressbarContainer } from "./ProgressBar.styled";
import { useState, useEffect } from "react";

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
        styles={{
          root: {},
          path: {
            stroke: "var(--color-fg-kcal)",

            strokeLinecap: "round",
            transition: "stroke-dashoffset 1s ease 0.3s",
            transform: "rotate(-0.25turn)",
            transformOrigin: "center center",
          },

          trail: {
            stroke: "var(--color-bg-progressbars)",

            strokeLinecap: "round",
            transform: "rotate(-0.25turn)",
            transformOrigin: "center center",
          },
        }}
      >
        <div style={{ width: "74%", height: "77%" }}>
          <CircularProgressbarWithChildren
            value={carbsProgress}
            maxValue={goal.carbs}
            circleRatio={0.5}
            strokeWidth={12}
            styles={{
              root: {},
              path: {
                stroke: "var(--color-fg-carbs)",

                strokeLinecap: "round",
                transition: "stroke-dashoffset 1s ease 0.3s",
                transform: "rotate(-0.25turn)",
                transformOrigin: "center center",
              },
              trail: {
                stroke: "var(--color-bg-progressbars)",

                strokeLinecap: "round",
                transform: "rotate(-0.25turn)",
                transformOrigin: "center center",
              },
            }}
          >
            <div style={{ width: "68%", height: "72%" }}>
              <CircularProgressbarWithChildren
                value={proteinProgress}
                maxValue={goal.protein}
                circleRatio={0.5}
                strokeWidth={16}
                styles={{
                  root: {},
                  path: {
                    stroke: "var(--color-fg-protein)",

                    strokeLinecap: "round",
                    transition: "stroke-dashoffset 1s ease 0.3s",
                    transform: "rotate(-0.25turn)",
                    transformOrigin: "center center",
                  },
                  trail: {
                    stroke: "var(--color-bg-progressbars)",

                    strokeLinecap: "round",
                    transform: "rotate(-0.25turn)",
                    transformOrigin: "center center",
                  },
                }}
              >
                <div style={{ width: "57%", height: "63%" }}>
                  <CircularProgressbar
                    value={fatProgress}
                    maxValue={goal.fat}
                    circleRatio={0.5}
                    strokeWidth={26}
                    styles={{
                      root: {},
                      path: {
                        stroke: "var(--color-fg-fat)",

                        strokeLinecap: "round",
                        transition: "stroke-dashoffset 1s ease 0.3s",
                        transform: "rotate(-0.25turn)",
                        transformOrigin: "center center",
                      },
                      trail: {
                        stroke: "var(--color-bg-progressbars)",
                        transition: "stroke-dashoffset 1s ease 0.3s",
                        strokeLinecap: "round",
                        transform: "rotate(-0.25turn)",
                        transformOrigin: "center center",
                      },
                    }}
                  ></CircularProgressbar>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </CircularProgressbarWithChildren>
    </ProgressbarContainer>
  );
}
