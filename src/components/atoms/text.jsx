import styled from "styled-components";
import { colors } from "../../assets/colors";

export const Text = styled.p`
    font-size: 16px;
    color: ${props => props.white ? colors.white : colors.black}
`;

export const H2 = styled.h2`
    font-size: 26px;
    font-weight: bold;

    @media (min-width: 768px){
        font-size: 33px;
    }
`;

export const H3 = styled.h3`
    font-size: 28px;
    font-weight: bold;
    color: ${props => props.white ? colors.white : colors.black}
    

    @media (min-width: 768px){
        font-size: 26px;
    }
`;
