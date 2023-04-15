import { Header } from "../components/molecules/header";
import { H2 } from "../components/atoms/text";
import { ContentWrapper } from "./styles";

export function HomePage() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <H2>Pets</H2>
      </ContentWrapper>
    </>
  );
}

export default HomePage;
