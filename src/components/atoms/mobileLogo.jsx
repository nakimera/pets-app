import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/icons/pet-icon-small.svg";

function MobileLogo() {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
}

export default MobileLogo;

const Wrapper = styled.figure`
  margin-left: 5%;

  @media (min-width: 768px) {
    display: none;
  }
`;
