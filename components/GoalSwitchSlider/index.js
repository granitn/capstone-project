import {
  Switch,
  Slider,
  HiddenCheckbox,
} from "../GoalSwitchSlider/GoalSwitchSlider.styled";

export default function GoalSwitchSlider({ className, checked, ...props }) {
  return (
    <Switch className={className}>
      <HiddenCheckbox type="checkbox" checked={checked} {...props} />
      <Slider className="slider" checked={checked} />
    </Switch>
  );
}
