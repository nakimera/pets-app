import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./styles";
import { Pill } from "../../atoms/pill";
import Dropdown from "../../atoms/dropdown";
import { filterPetsAction } from "../../../store/slice";
import { petsSelector } from "../../../store/slice";

function Filters() {
  const dispatch = useDispatch();
  const categories = [];
  const { types } = useSelector(petsSelector);

  const handleFilterByType = (option) => {
    dispatch(filterPetsAction({ action: 'filter', value: option }));
  };

  return (
    <Wrapper>
      <Dropdown
        label="Type"
        options={types}
        option={[]}
        handleFilter={handleFilterByType}
      />
      <Dropdown label="Category" options={categories} />
      <Pill>Latest added</Pill>
    </Wrapper>
  );
}

export default Filters;
