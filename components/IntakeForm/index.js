import { useState } from "react";

export default function IntakeForm({ onsubmit }) {
  const [carbs, setCarbs] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [kcal, setKcal] = useState("");

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
      <form onSubmit={onsubmit}>
        <h2>My Intake</h2>
        <label htmlFor="kcal">Kcal: </label>
        <input type="number" name="kcal" id="kcal" value={kcal} readOnly />
        <label htmlFor="InCarbs">Carbs: </label>
        <input
          type="number"
          name="carbs"
          id="carbs"
          value={carbs}
          onChange={handleCarbsChange}
          placeholder="in grams"
          required
        />
        <label htmlFor="InProtein">Protein: </label>
        <input
          type="number"
          name="protein"
          id="protein"
          value={protein}
          onChange={handleProteinChange}
          placeholder="in grams"
          required
        />
        <label htmlFor="InFat">Fat: </label>
        <input
          type="number"
          name="fat"
          id="fat"
          value={fat}
          onChange={handleFatChange}
          placeholder="in grams"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
