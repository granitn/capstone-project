import styled from "styled-components";

export const ProgressbarContainer = styled.div`
  grid-area: 1/ 2 /3 / 4;
  height: 300px;
  width: 300px;
  @media screen and (min-width: 768px) {
    height: 400px;
    width: 400px;
  }
`;

export const CarbWrapper = styled.div`
  width: 74%;
  height: 77%;
`;
export const ProteinWrapper = styled.div`
  width: 68%;
  height: 72%;
`;
export const FatWrapper = styled.div`
  width: 57%;
  height: 63%;
`;

export const kcalStyles = {
  rotation: -0.25,
  strokeLinecap: "round",
  pathTransition: "stroke-dashoffset 1s ease 0.3s",
  trailColor: "var(--color-bg-progressbars)",
  pathColor: "var(--color-fg-kcal)",
};

export const carbStyles = {
  rotation: -0.25,
  strokeLinecap: "round",
  pathTransition: "stroke-dashoffset 1s ease 0.3s",
  trailColor: "var(--color-bg-progressbars)",
  pathColor: "var(--color-fg-carbs)",
};

export const proteinStyles = {
  rotation: -0.25,
  strokeLinecap: "round",
  pathTransition: "stroke-dashoffset 1s ease 0.3s",
  trailColor: "var(--color-bg-progressbars)",
  pathColor: "var(--color-fg-protein)",
};

export const fatStyles = {
  rotation: -0.25,
  strokeLinecap: "round",
  pathTransition: "stroke-dashoffset 1s ease 0.3s",
  trailColor: "var(--color-bg-progressbars)",
  pathColor: "var(--color-fg-fat)",
};
