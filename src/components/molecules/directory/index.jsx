import { ContentWrapper, Image, Card, Header, DetailsWrapper } from "./styles";
import treats from "../../../assets/images/treats.jpeg";
import { H3 } from "../../atoms/text";
import { ReactComponent as ArrowRight } from "../../../assets/icons/arrow-right.svg";
import { Button } from "../../atoms/button";

export function DirectorySection() {
  return (
    <ContentWrapper smFullWidth>
      <Image src={treats} alt="treats-image" />
      <Card>
        <Header>
          <H3>Pets directory</H3>
          <ArrowRight />
        </Header>
        <DetailsWrapper>
          See all pets available for adoption, promote them and get them a home.
          <Button secondary width="70%">
            See all
          </Button>
        </DetailsWrapper>
      </Card>
    </ContentWrapper>
  );
}

export default DirectorySection;
