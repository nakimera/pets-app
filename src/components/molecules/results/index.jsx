import { H4 } from "../../atoms/text";
import { Section } from "../../atoms/section";
import PetProfile from "../petProfile";
import { ListWrapper } from "./styles";

export function ResultsSection({ items }) {
  const emptyList = items.length === 0;

  return (
    <Section>
      <H4>Results</H4>
      {emptyList ? (
        "Nothing to display"
      ) : (
        <ListWrapper>
          {items.map((result, index) => (
            <PetProfile key={index} result={result}></PetProfile>
          ))}
        </ListWrapper>
      )}
    </Section>
  );
}

export default ResultsSection;
