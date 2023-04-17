import styled from "styled-components";
import { colors } from "../../../assets/colors";

export const CategoriesWrapper = styled.div`
  display: -webkit-inline-box;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const CategoryItemWrapper = styled.div`
  margin-right: 10px;
  width: 200px;

  @media (min-width: 768px) {
    width: calc(95% / 5);
    margin-right: unset;
  }
`;

export const Card = styled.div`
  width: 100%;
  background: ${colors.lightGrey};
  height: 80px;
  border-radius: 10px;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  justify-content: center;

  figure {
    position: absolute;
    top: -30px;

    svg {
      color: ${colors.lightBlue};
      width: 60px;
      height: 60px;
    }
  }
`;
