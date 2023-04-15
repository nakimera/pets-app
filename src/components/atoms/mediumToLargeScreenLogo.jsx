import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/icons/pet-icon.svg";

export default function MediumToLargeScreenLogo() {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: unset;
    margin-left: 40px;
  }
`;
