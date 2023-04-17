import styled from "styled-components";

export const Section = styled.section`
    width: ${props => props.smFullWidth ? '100%': '95%'};
    margin: 0px 0 30px ${props => props.smFullWidth ? '0': '5%'};;
    overflow-x: hidden;

    @media (min-width: 768px){
        width: 70%;
        margin: 20px auto;
    };
`;
