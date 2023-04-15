import { Header } from "../components/molecules/header";
import { ContentWrapper } from "./styles";
import SearchFilter from "../components/organisms/filterSearch";

export function FilterPage() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <SearchFilter />
      </ContentWrapper>
    </>
  );
}

export default FilterPage;
