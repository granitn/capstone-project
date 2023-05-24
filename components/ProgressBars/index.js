import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { ProgressbarContainer } from "./ProgressBar.styled";

const percentage = 100;
export default function ProgressBars({
  todaysKcal,
  todaysCarbs,
  todaysProtein,
  todaysFat,
  goal,
}) {
  return (
    <ProgressbarContainer>
      <CircularProgressbarWithChildren
        value={todaysKcal}
        maxValue={goal.kcal}
        circleRatio={0.5}
        strokeWidth={10}
        styles={{
          root: {},
          path: {
            stroke: "#fff",

            strokeLinecap: "butt",
            transition: "stroke-dashoffset 1s ease 0.3s",
            transform: "rotate(-0.25turn)",
            transformOrigin: "center center",
          },
          trail: {
            stroke: "#111",

            strokeLinecap: "butt",
            transform: "rotate(-0.25turn)",
            transformOrigin: "center center",
          },
        }}
      >
        <div style={{ width: "74%", height: "77%" }}>
          <CircularProgressbarWithChildren
            value={todaysCarbs}
            maxValue={goal.carbs}
            circleRatio={0.5}
            strokeWidth={12}
            styles={{
              root: {},
              path: {
                stroke: "#fff",

                strokeLinecap: "butt",
                transition: "stroke-dashoffset 1s ease 0.3s",
                transform: "rotate(-0.25turn)",
                transformOrigin: "center center",
              },
              trail: {
                stroke: "#111",

                strokeLinecap: "butt",
                transform: "rotate(-0.25turn)",
                transformOrigin: "center center",
              },
            }}
          >
            <div style={{ width: "68%", height: "72%" }}>
              <CircularProgressbarWithChildren
                value={todaysProtein}
                maxValue={goal.protein}
                circleRatio={0.5}
                strokeWidth={16}
                styles={{
                  root: {},
                  path: {
                    stroke: "#fff",

                    strokeLinecap: "butt",
                    transition: "stroke-dashoffset 1s ease 0.3s",
                    transform: "rotate(-0.25turn)",
                    transformOrigin: "center center",
                  },
                  trail: {
                    stroke: "#111",

                    strokeLinecap: "butt",
                    transform: "rotate(-0.25turn)",
                    transformOrigin: "center center",
                  },
                }}
              >
                <div style={{ width: "57%", height: "63%" }}>
                  <CircularProgressbar
                    value={todaysFat}
                    maxValue={goal.fat}
                    circleRatio={0.5}
                    strokeWidth={26}
                    styles={{
                      root: {},
                      path: {
                        stroke: "#fff",

                        strokeLinecap: "butt",
                        transition: "stroke-dashoffset 1s ease 0.3s",
                        transform: "rotate(-0.25turn)",
                        transformOrigin: "center center",
                      },
                      trail: {
                        stroke: "#111",

                        strokeLinecap: "butt",
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
