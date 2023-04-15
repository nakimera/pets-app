import { H3 } from "../../atoms/text";
import SearchBar from "../../molecules/searchBar";
import FilterOptions from "../../molecules/filterOptions";
import CategoriesSection from "../../molecules/categories";
import { SectionWrapper } from "../../atoms/sectionWrapper";
import PetDirectorySection from "../../molecules/petsDirectory";
import {ResultsSection} from "../../molecules/results";

export function SearchFilterSection() {
  return (
    <>
      <SectionWrapper>
        <H3>Pets</H3>
        <SearchBar />
        <FilterOptions />
      </SectionWrapper>
      <ResultsSection />
      <PetDirectorySection />
      <CategoriesSection />
    </>
  );
}

export default SearchFilterSection;
