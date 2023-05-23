import styled from "styled-components";

//for submit button
export const StyledButton = styled.button`
  z-index: 2;
  cursor: pointer;
  color: var(--color-button-text);
  background-color: var(--color-button-bg);
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  border-radius: 2rem;
  width: 5rem;
  height: 2.5rem;
  border: none;
`;

//for delete button on card
export const DeleteButton = styled.button`
  border-radius: 2rem;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid var(--color-button-bg);
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
`;

// for "Delete last Meal" 'button'
export const DeleteLastMealButton = styled.button`
  border-radius: 2rem;
  border: none;
  background-color: var(--color-DelMeal-button);
  color: var(--color-DelMeal-button-text);
  grid-area: 6/3/7/4;
  box-shadow: var(--shadow-elevation-medium);

  &:hover {
    color: #d61c4e;
  }
`;
