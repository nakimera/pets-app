import { useDispatch } from "react-redux";
import { Wrapper } from "./styles";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import Input from "../../atoms/input";
import { filterPetsAction } from "../../../store/slice";

export function SearchBar() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(filterPetsAction({ action: "search", value: e.target.value }));
  };

  return (
    <Wrapper id="search-bar">
      <SearchIcon />
      <Input
        type="text"
        placeholder="Search for pets"
        onChangeHandler={handleSearch}
      />
    </Wrapper>
  );
}

export default SearchBar;
