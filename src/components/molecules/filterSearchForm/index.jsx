import { H3 } from "../../atoms/text";
import { Form, Wrapper } from "./styles";
import SearchBar from "../searchBar";
import Filters from "../filters";

function FormSection({ pets }) {
  return (
    <Wrapper>
      <H3>Pets</H3>
      <Form>
        <SearchBar />
        <Filters pets={pets} />
      </Form>
    </Wrapper>
  );
}

export default FormSection;
