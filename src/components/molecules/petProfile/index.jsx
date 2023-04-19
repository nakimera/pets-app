import {
  PetProfileWrapper,
  PetDetailsWrapper,
  Avatar,
  MobileViewButton,
  DesktopViewButtonWrapper,
} from "./styles";
import { Button } from "../../atoms/button";
import { ReactComponent as ArrowRight } from "../../../assets/icons/arrow-right.svg";

export function PetProfile({ result }) {
  const { name, photoUrl } = result;
  return (
    <PetProfileWrapper className="result-list">
      <PetDetailsWrapper>
        <Avatar src={photoUrl} alt="pet-photo" />
        <figcaption>{name}</figcaption>
      </PetDetailsWrapper>
      <MobileViewButton>
        <ArrowRight />
      </MobileViewButton>
      <DesktopViewButtonWrapper>
        <Button width="120px">View</Button>
      </DesktopViewButtonWrapper>
    </PetProfileWrapper>
  );
}

export default PetProfile;
