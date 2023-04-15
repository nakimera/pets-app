import { Header } from "../components/molecules/header";
import { ContentWrapper } from "./styles";
import SearchFilterSection from "../components/organisms/filterSearch";
import { Footer} from "../components/atoms/footer";

export function FilterPage() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <SearchFilterSection />
      </ContentWrapper>
      <Footer />
    </>
  );
}

export default FilterPage;
