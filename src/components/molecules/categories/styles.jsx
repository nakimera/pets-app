import styled from "styled-components";
import { colors } from "../../../assets/colors";

export const CategoriesWrapper = styled.div`
  min-width: 100%;
  display: -webkit-inline-box;
  margin: 10px 0 35px 0;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const CategoryItemWrapper = styled.div`
  position: relative;
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
  display: flex;
  justify-content: center;

  svg{
    width: 60px;
    height: 60px;
    color: ${colors.lightBlue};
    position: absolute;
    top: -15px;
  }
`;
