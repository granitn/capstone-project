import styled from "styled-components";

export const TrackerFormBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  padding-top: 1rem;
  height: 100vh;
  width: 100vw;
  background-color: var(--color-tracker-form-bg);
`;

export const GoalFormBackground = styled(TrackerFormBackground)`
  gap: 1rem;
`;
