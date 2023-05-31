import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--shadow-elevation-medium);
  border-radius: 2rem;
  min-height: 60vh;
  width: 90vw;
  margin: 2rem auto;
  gap: 0.8rem;
  background-color: var(--color-card-bg);
`;

export const FormLabel = styled.label`
  margin-top: 1rem;
  font-weight: 500;
`;

export const FormInput = styled.input`
  min-width: 5rem;
  height: 2rem;

  box-shadow: var(--shadow-elevation-low);
  border: 2px solid lightgrey;
  opacity: ${({ readOnly }) => (readOnly ? "0.5" : "1")};
  &:focus {
    scale: 1.1;
    box-shadow: var(--shadow-elevation-medium);
    outline: none;
  }
`;

export const FormArea = styled.textarea`
  border: 2px solid lightgrey;
  box-shadow: var(--shadow-elevation-low);
  width: 60vw;
  &:focus {
    scale: 1.1;
    box-shadow: var(--shadow-elevation-medium);
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  border: none;
  background-color: var(--color-button-bg);
  color: var(--color-button-text);
  width: 5.5rem;
  border-radius: 1rem;
  height: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
