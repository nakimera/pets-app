import { Wrapper } from "./styles";
import SmallScreenLogo from "../../atoms/smallScreenLogo";
import MediumToLargeScreenLogo from "../../atoms/mediumToLargeScreenLogo";

export function Header() {
  return (
    <Wrapper>
      <SmallScreenLogo />
      <MediumToLargeScreenLogo />
    </Wrapper>
  );
}
