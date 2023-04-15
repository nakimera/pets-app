import styled from "styled-components";
import { colors } from "../../assets/colors";

export const Button = styled.button`
  font-size: 18px;
  background: ${(props) => (props.secondary ? colors.white : colors.lightBlue)};
  border-radius: 20px;
  height: 40px;
`;
