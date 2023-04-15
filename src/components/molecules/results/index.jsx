import { H4 } from "../../atoms/text";
import {SectionWrapper} from "../../atoms/sectionWrapper";
import ResultItem from "./result";
import {ListWrapper} from './styles';

export function ResultsSection() {
  const results = [
    {
      name: 'Test 1',
      imageurl: 'https://placedog.net/500'
    },
    {
      name: 'Test 2',
      imageurl: 'https://placedog.net/500/g'
    },
    {
      name: 'Test 3',
      imageurl: 'https://placedog.net/900/650/b'
    },    
  ];

  return (
    <SectionWrapper>
      <H4>Results</H4>
      <ListWrapper>
      {results.map((result, index) => (
        <ResultItem key={index} result={result}></ResultItem>
      ))}
      </ListWrapper>
    </SectionWrapper>
  );
}

export default ResultsSection;
