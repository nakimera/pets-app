import styled from "styled-components";
import { colors } from "../../assets/colors";

export const Button = styled.button`
  border: none;
  border-radius: 20px;
  height: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  background: ${(props) => (props.secondary ? colors.white : colors.lightBlue)};
  color: ${(props) => (props.secondary ? colors.lightBlue : colors.white)};
`;
