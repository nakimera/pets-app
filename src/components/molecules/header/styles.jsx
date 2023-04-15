import styled from "styled-components";
import { colors } from "../../../assets/colors";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;

  @media (min-width: 768px) {
    background: ${colors.yellow};
  }
`;

