import styled from "styled-components";
import { colors } from "../../assets/colors";

export const Footer = styled.footer`
  width: 100%;
  height: 60px;
  background: ${colors.darkBlue};
  margin-top: 60px;

  @media (min-width: 768px) {
    height: 40px;
  }
`;
