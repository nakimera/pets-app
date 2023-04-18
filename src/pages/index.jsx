import { Header } from "../components/molecules/header";
import FilterPageContent from "../components/organisms/filterPageContainer";
import { Footer } from "../components/atoms/footer";

export function FilterPage() {
  return (
    <>
      <Header />
      <FilterPageContent />
      <Footer />
    </>
  );
}

export default FilterPage;
