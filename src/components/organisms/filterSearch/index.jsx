import { H3 } from "../../atoms/text";
import SearchBar from "../../molecules/searchBar";
import FilterOptions from "../../molecules/filterOptions";
import CategoriesSection from "../../molecules/categories";
import { SectionWrapper } from "../../atoms/sectionWrapper";

export function SearchFilterSection() {
  return (
    <>
      <SectionWrapper>
        <H3>Pets</H3>
        <SearchBar />
        <FilterOptions />
      </SectionWrapper>
      <CategoriesSection />
    </>
  );
}

export default SearchFilterSection;
