import { useState } from "react";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useLocalStorageState from "use-local-storage-state";
const fetcher = (url) => fetch(url).then((response) => response.json());

const initialIntakes = [
  {
    id: 1,
    kcal: 0,
    carbs: 0,
    protein: 5,
    fat: 0,
    date: new Date().toDateString(),
  },
];

const initialGoal = {
  kcal: 2500,
  carbs: 312.5,
  protein: 156.25,
  fat: 69.375,
};

export default function App({ Component, pageProps }) {
  const [intakes, setIntakes] = useLocalStorageState("intakes", {
    defaultValue: initialIntakes,
  });

  const [goal, setGoal] = useLocalStorageState("goal", {
    defaultValue: initialGoal,
  });

  const todaysIntakes = intakes.filter((intake) => {
    return new Date(intake.date).toDateString() === new Date().toDateString();
  });

  console.log(todaysIntakes);
  console.log(new Date().toDateString());

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component
          {...pageProps}
          intakes={intakes}
          todaysIntakes={todaysIntakes}
          setIntakes={setIntakes}
          goal={goal}
          setGoal={setGoal}
        />
      </SWRConfig>
    </>
  );
}
