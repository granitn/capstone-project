import styled from "styled-components";
import { motion } from "framer-motion";

export const CompleteContainer = styled(motion.svg)`
  grid-area: 1 / 2 / 3 / 4;
  background-color: transparent;
  align-self: end;
  /* margin-bottom: 30px; */
  @media screen and (min-width: 768px) {
    height: 225px;
    width: 450px;
    /* padding-top: 10%; */
  }
`;
