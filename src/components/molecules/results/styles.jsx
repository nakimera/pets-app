import styled from "styled-components";
import { Button } from "../../atoms/button";

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    .result-list:nth-child(3n + 2) {
      justify-content: center;
    }

    .result-list:nth-child(3n + 3) {
      justify-content: right;
    }
  }
`;

export const ResultItemWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;

  @media (min-width: 768px) {
    width: calc(100% / 3);
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    width: 96%;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Image = styled.img`
  border-radius: 10px;
  height: 100px;
  width: 150px;
  object-fit: cover;
  margin-right: 10px;

  @media (min-width: 768px) {
    width: 100%;
    height: 200px;
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

export const DesktopViewButton = styled(Button)`
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 120px;
    margin-top: 10px;
  }
`;
