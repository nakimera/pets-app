import styled from "styled-components";
import { Button } from "../../atoms/button";

export const PetProfileWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;

  figcaption{
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    width: calc(100% / 3);
    flex-direction: column;
    align-items: flex-start;

    :nth-child(3n + 2) {
      align-items: center;
    }

    :nth-child(3n + 3) {
      align-items: flex-end;
    }
  }
`;

export const PetDetailsWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    width: 96%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Avatar = styled.img`
  border-radius: 10px;
  height: 110px;
  width: 150px;
  object-fit: cover;
  margin-right: 15px;

  @media (min-width: 768px) {
    width: 100%;
    height: 240px;
    margin-right: 0;
  }
`;

export const MobileViewButton = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopViewButtonWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    width: 95%;
    display: block;
    margin-top: 10px;
  }
`;
