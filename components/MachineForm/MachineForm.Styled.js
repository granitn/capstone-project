import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--shadow-elevation-medium);
  border-radius: 2rem;
  height: 70vh;
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
  width: 60vw;
`;

export const FormArea = styled.textarea`
  width: 60vw;
`;

export const SubmitButton = styled.button`
  border: none;
  background-color: var(--color-button-bg);
  color: var(--color-button-text);
  width: 5.5rem;
  border-radius: 1rem;
  height: 3rem;
  margin-top: 1rem;
`;
