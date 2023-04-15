import { H3 } from "../../atoms/text";
import SearchBar from "../../molecules/searchBar";
import FilterOptions from "../../molecules/filterOptions";

export function SearchFilter() {
  return (
    <>
        <H3>Pets</H3>
        <SearchBar />
        <FilterOptions />
    </>
  );
}

export default SearchFilter;
