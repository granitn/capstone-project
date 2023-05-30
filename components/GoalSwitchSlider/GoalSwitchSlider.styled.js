import styled from "styled-components";

//by @Voxybuns on uiverse, changed into styled-components

export const Switch = styled.label`
  /* Variables */
  --switch_width: 2em;
  --switch_height: 1em;
  --thumb_color: #e8e8e8;
  --track_color: #e8e8e8;
  --track_active_color: #888;
  --outline_color: #000;
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: var(--switch_width);
  height: var(--switch_height);
`;

export const HiddenCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  box-sizing: border-box;
  border: 2px solid var(--outline_color);
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ checked }) =>
    checked ? "var(--track_active_color)" : "var(--track_color)"};
  transition: 0.15s;
  border-radius: var(--switch_height);

  &:before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    height: var(--switch_height);
    width: var(--switch_height);
    border: 2px solid var(--outline_color);
    border-radius: 100%;
    left: ${({ checked }) => (checked ? "14px" : "-2px")};
    bottom: -2px;
    background-color: var(--thumb_color);
    transform: translateY(-0.2em);
    box-shadow: 0 0.2em 0 var(--outline_color);
    transition: 0.15s;
  }
`;
