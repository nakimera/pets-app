import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { H4 } from "../../atoms/text";
import {SectionWrapper} from "../../atoms/sectionWrapper";
import ResultItem from "./result";
import {ListWrapper} from './styles';
import { itemsSelector } from '../../../store/slice';
import { fetchItems } from '../../server';

export function ResultsSection() {

  const dispatch = useDispatch();
    const {items} = useSelector(itemsSelector);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <SectionWrapper>
      <H4>Results</H4>
      <ListWrapper>
      {items.map((result, index) => (
        <ResultItem key={index} result={result}></ResultItem>
      ))}
      </ListWrapper>
    </SectionWrapper>
  );
}

export default ResultsSection;
