import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/icons/pet-icon-small.svg";

export default function SmallScreenLogo() {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-left: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;
