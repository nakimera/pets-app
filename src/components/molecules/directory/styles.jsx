import styled from "styled-components";
import { colors } from "../../../assets/colors";
import { Section } from "../../atoms/section";

export const ContentWrapper = styled(Section)`
  display: flex;
  flex-wrap: wrap-reverse;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (min-width: 768px) {
    border-radius: 15px 0 0 15px;
    width: 62%;
    height: 300px;
  }
`;

export const Card = styled.div`
  width: 100%;
  background: ${colors.darkBlue};
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    margin: 10px 0;
  }

  @media (min-width: 768px) {
    border-radius: 0 15px 15px 0;
    width: 38%;

    svg {
      display: none;
    }
  }
`;

export const Header = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px){
    width: 80%;
  }
`;

export const DetailsWrapper = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
    width: 80%;

    button{
        margin-top: 20px;
    }
  }
`;
