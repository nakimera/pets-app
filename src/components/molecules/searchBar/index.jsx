import { Wrapper } from "./styles";
import {ReactComponent as SearchIcon} from "../../../assets/icons/search.svg";
import Input from "../../atoms/input";

export function SearchBar() {
  return (
    <Wrapper id="search-bar">
      <SearchIcon />
      <Input type="text" placeholder="Search for pets" />
    </Wrapper>
  );
}

export default SearchBar;

