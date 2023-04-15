import { Wrapper } from "./styles";
import {ReactComponent as SearchIcon} from "../../../assets/icons/search.svg";
import Input from "../../atoms/input";

export function SearchBar() {
  return (
    <Wrapper>
      <SearchIcon />
      <Input placeholder="Search for pets" />
    </Wrapper>
  );
}

export default SearchBar;

