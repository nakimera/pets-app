import styled from "styled-components";
import { colors } from "../../../assets/colors";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 30px;

  @media (min-width: 768px) {
    margin-top: 0;
    height: 90px;
    background: ${colors.lightYellow};
  }
`;
