import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

export const MotionEntry = styled(motion.article)`
  background-color: var(--color-card-bg);
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  padding-top: 1rem;
  width: 20rem;
  box-shadow: var(--shadow-elevation-medium);
  margin: auto;
  transition: transform 0.2s;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  top: -3rem;
  box-shadow: var(--shadow-elevation-medium);
`;
