import styled from "styled-components";
import { colors } from "../../assets/colors";

export const Footer = styled.div`
  width: 100%;
  height: 60px;
  background: ${colors.darkBlue};

  @media (min-width: 768px) {
    height: 40px;
  }
`;
