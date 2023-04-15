import styled from "styled-components";

export const SectionWrapper = styled.div`
    width: ${props => props.width};
    margin-left:${props => props.smFullWidth ? '0' : ' 5%'};

    @media (min-width: 768px){
        width: 100%;
        margin-left: unset;
    }
`;
