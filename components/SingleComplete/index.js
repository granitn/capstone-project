import { motion } from "framer-motion";
import { CompleteContainer } from "./SingleComplete.styled";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
};

export default function SingleComplete({
  kcalFull,
  carbsFull,
  proteinFull,
  fatFull,
}) {
  return (
    <CompleteContainer width="350" height="250" viewBox="0 0 350 325">
      <motion.line
        x1="360"
        y1="145"
        x2="390"
        y2="125"
        stroke="var(--color-fg-kcal)"
        strokeLinecap={"round"}
        strokeWidth="20"
        variants={draw}
        initial="hidden"
        animate={kcalFull ? "visible" : "hidden"}
      />
      <motion.line
        x1="-10"
        y1="140"
        x2="-40"
        y2="120"
        stroke="var(--color-fg-carbs)"
        strokeLinecap="round"
        strokeWidth="20"
        variants={draw}
        initial="hidden"
        animate={carbsFull ? "visible" : "hidden"}
      />
      <motion.line
        x1="90"
        y1="50"
        x2="70"
        y2="15"
        stroke="var(--color-fg-protein)"
        strokeWidth="20"
        strokeLinecap="round"
        variants={draw}
        initial="hidden"
        animate={proteinFull ? "visible" : "hidden"}
      />
      <motion.line
        x1="257"
        y1="50"
        x2="275"
        y2="17"
        stroke="var(--color-fg-fat)"
        strokeWidth="20"
        strokeLinecap="round"
        variants={draw}
        initial="hidden"
        animate={fatFull ? "visible" : "hidden"}
      />
    </CompleteContainer>
  );
}
