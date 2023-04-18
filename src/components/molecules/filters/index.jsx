import { useContext } from "react";
import { Wrapper } from "./styles";
import { Pill } from "../../atoms/pill";
import Dropdown from "../../atoms/dropdown";
import { ListContext } from "../../organisms/filterPageContainer";
import { useDispatch } from "react-redux";
import { filterPets } from "../../../store/slice";

function Filters() {
  const dispatch = useDispatch();
  let categories = [];

  const { types } = useContext(ListContext);

  const handleFilterByType = (option) => {
    console.log('type::', option)
    dispatch(filterPets({ action: 'filter', type: option }));
  };

  return (
    <Wrapper>
      <Dropdown
        label="Type"
        options={types}
        handleFilter={handleFilterByType}
      />
      <Dropdown label="Category" options={categories} />
      <Pill>Latest added</Pill>
    </Wrapper>
  );
}

export default Filters;
