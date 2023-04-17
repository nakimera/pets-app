import { Wrapper } from "./styles";
import { Pill } from "../../atoms/pill";
import Dropdown from "../../atoms/dropdown";

function Filters({ pets }) {
  let types = [];
  let categories = [];

  let getTypes = () => {
    pets.forEach((item) => {
      if (types.includes(item?.species)) {
        return types;
      } else return types.push(item?.species);
    });
    return types;
  };

  getTypes();

  return (
    <Wrapper>
      <Dropdown label="Type" options={types} />
      <Dropdown label="Category" options={categories} />
      <Pill>Latest added</Pill>
    </Wrapper>
  );
}

export default Filters;
