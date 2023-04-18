import { useState, useContext } from "react";
import { Wrapper } from "./styles";
import {ReactComponent as SearchIcon} from "../../../assets/icons/search.svg";
import Input from "../../atoms/input";

export function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = e => {
    e.preventDefault();
    console.log('-----------------hello');
  }

  return (
    <Wrapper id="search-bar">
      <SearchIcon />
      <Input type="text" placeholder="Search for pets" value={searchInput} onChange={() => console.log('-----')} />
    </Wrapper>
  );
}

export default SearchBar;
