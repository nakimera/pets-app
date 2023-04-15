import {
  ResultItemWrapper,
  DetailsWrapper,
  Image,
  MobileViewButton,
  DesktopViewButton,
} from "./styles";
import { ReactComponent as ArrowRight } from "../../../assets/icons/arrow-right.svg";

export function ResultItem({ result }) {
  const { name, imageurl } = result;
  return (
    <ResultItemWrapper className="result-list">
      <DetailsWrapper>
        <Image src={imageurl} alt="pet-photo" />
        <span>{name}</span>
      </DetailsWrapper>
      <MobileViewButton><ArrowRight /></MobileViewButton>
      <DesktopViewButton>View</DesktopViewButton>
    </ResultItemWrapper>
  );
}

export default ResultItem;