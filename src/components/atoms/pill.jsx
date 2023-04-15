import styled from "styled-components";
import { colors } from "../../assets/colors";

export const Pill = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
  padding: 5px 14px;
  border-radius: 20px;
  cursor: pointer;
  border: solid 1px ${colors.grey};
  color: ${colors.darkGrey};

  svg{
    margin-left: 5px;
  }
`;
