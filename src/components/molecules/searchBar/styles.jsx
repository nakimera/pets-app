import styled from "styled-components";
import { colors } from "../../../assets/colors";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(95% - 40px);
  border-radius: 30px;
  background: ${colors.lightGrey};
  padding: 18px 20px;

  @media (min-width: 768px) {
    background: ${colors.white};
    border: solid 1px ${colors.grey};
    width: 50%;
    padding: 12px 20px;
  }
`;
