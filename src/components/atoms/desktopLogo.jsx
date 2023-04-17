import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/icons/pet-icon.svg";

function DesktopLogo() {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
}

export default DesktopLogo;

const Wrapper = styled.figure`
  display: none;

  @media (min-width: 768px) {
    display: unset;
    margin-left: 40px;
  }
`;
