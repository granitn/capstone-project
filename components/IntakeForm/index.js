import { useState } from "react";
import { TrackerForm } from "./IntakeForm.styled";
import { SubmitButton } from "../MachineForm/MachineForm.Styled";
import { FormInput } from "../MachineForm/MachineForm.Styled";
import GoalSwitchSlider from "../GoalSwitchSlider";
import { SwitchLabel } from "./IntakeForm.styled";

export default function IntakeForm({ onsubmit, pageCheck }) {
  const [carbs, setCarbs] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [kcal, setKcal] = useState("");
  const [goalSwitch, setGoalSwitch] = useState(false);

  const handleKcalChange = (event) => {
    const value = event.target.value;
    setKcal(value);
    const calculatedCarbs = value / 2 / 4;
    const calculatedProtein = value / 4 / 4;
    const calculatedFat = value / 4 / 9;
    setCarbs(calculatedCarbs);
    setProtein(calculatedProtein);
    setFat(calculatedFat);
  };

  const handleCarbsChange = (event) => {
    const value = event.target.value;
    setCarbs(value);
    calculateKcal(value, protein, fat);
  };

  const handleProteinChange = (event) => {
    const value = event.target.value;
    setProtein(value);
    calculateKcal(carbs, value, fat);
  };

  const handleFatChange = (event) => {
    const value = event.target.value;
    setFat(value);
    calculateKcal(carbs, protein, value);
  };
  const calculateKcal = (carbs, protein, fat) => {
    const calculatedKcal = carbs * 4 + protein * 4 + fat * 9;
    setKcal(calculatedKcal);
  };

  return (
    <>
      <TrackerForm onSubmit={onsubmit}>
        <h2>{pageCheck ? "Nutrition Goals" : "Intake"}</h2>
        <label htmlFor="kcal">Kcal</label>
        {goalSwitch === false ? (
          <FormInput
            type="number"
            name="kcal"
            id="kcal"
            value={kcal}
            readOnly
          />
        ) : (
          <FormInput
            type="number"
            name="kcal"
            id="kcal"
            value={kcal}
            onChange={handleKcalChange}
            required
          />
        )}
        <label htmlFor="carbs">Carbs</label>
        {goalSwitch === false ? (
          <FormInput
            type="number"
            name="carbs"
            id="carbs"
            value={carbs}
            onChange={handleCarbsChange}
            placeholder="in grams"
            required
          />
        ) : (
          <FormInput
            type="number"
            name="carbs"
            id="carbs"
            value={Math.round(carbs)}
            readOnly
            placeholder="in grams"
          />
        )}
        <label htmlFor="protein">Protein</label>
        {goalSwitch === false ? (
          <FormInput
            type="number"
            name="protein"
            id="protein"
            value={protein}
            onChange={handleProteinChange}
            placeholder="in grams"
            required
          />
        ) : (
          <FormInput
            type="number"
            name="protein"
            id="protein"
            value={Math.round(protein)}
            placeholder="in grams"
            readOnly
          />
        )}
        <label htmlFor="fat">Fat</label>
        {goalSwitch === false ? (
          <FormInput
            type="number"
            name="fat"
            id="fat"
            value={fat}
            onChange={handleFatChange}
            placeholder="in grams"
            required
          />
        ) : (
          <FormInput
            type="number"
            name="fat"
            id="fat"
            value={Math.round(fat)}
            placeholder="in grams"
            readOnly
          />
        )}
        <SubmitButton type="submit">Submit</SubmitButton>
      </TrackerForm>
      {pageCheck && (
        <>
          <GoalSwitchSlider
            id="goalSwitchBox"
            checked={goalSwitch}
            onClick={() => {
              setGoalSwitch(!goalSwitch);
              setKcal("");
              setCarbs("");
              setProtein("");
              setFat("");
            }}
          />
          <SwitchLabel htmlFor="goalSwitchBox">
            {goalSwitch
              ? "Enter Kcal to use 50:25:25 distribution"
              : "Use own distribution"}
          </SwitchLabel>
        </>
      )}
    </>
  );
}
