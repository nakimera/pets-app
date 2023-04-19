import { Wrapper } from "./styles";
import MobileLogo from "../../atoms/mobileLogo";
import DesktopLogo from "../../atoms/desktopLogo";

export function Header() {
  return (
    <Wrapper>
      <MobileLogo />
      <DesktopLogo />
    </Wrapper>
  );
}

export default Header;
