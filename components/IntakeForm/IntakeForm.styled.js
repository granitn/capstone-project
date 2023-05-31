import styled from "styled-components";

export const TrackerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
  width: 320px;
  min-height: 60vh;
  box-shadow: var(--shadow-elevation-medium);
  border-radius: 2rem;
  background-color: var(--color-tracker-bg);
  margin: 0;
`;

export const SwitchLabel = styled.label`
  color: var(--color-button-text);
`;
