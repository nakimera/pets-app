
import { H3 } from "../../atoms/text";
import { Form, Wrapper } from "./styles";
import SearchBar from "../searchBar";
import Filters from "../filters";


export function FilterSearchForm({ pets, handleFilterByType, handleSearch }) {

  return (
    <Wrapper>
      <H3>Pets</H3>
      <Form>
        <SearchBar handleSearch={handleSearch} />
        <Filters pets={pets} handleFilterByType={handleFilterByType} />
      </Form>
    </Wrapper>
  );
}

export default FilterSearchForm;
