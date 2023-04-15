import { Wrapper } from "./styles";
import { Pill } from "../../atoms/pill";
import Dropdown from "../../atoms/dropdown";

export function FilterOptions() {
  const typeOptions = ['Domestic'];
  const categoryOptions = ['cats', 'dogs'];
  return (
    <Wrapper>
      <Dropdown label="Type" options={typeOptions} />
      <Dropdown label="Category" options={categoryOptions} />
      <Pill>Latest added</Pill>
    </Wrapper>
  );
}

export default FilterOptions;
