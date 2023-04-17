import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormSection from "../../molecules/filterSearchForm";
import CategoriesSection from "../../molecules/categories";
import DirectorySection from "../../molecules/directory";
import {ResultsSection} from "../../molecules/results";
import { itemsSelector } from '../../../store/slice';
import { fetchItems } from '../../server';

export function FilterPageContainer() {
  const dispatch = useDispatch();
  const {items} = useSelector(itemsSelector);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const [userInput, setUserInput] = useState('');
  const itemsToDisplay = userInput === '' ? items.slice(0,3) : items;

  return (
    <>
      <FormSection pets={items} />
      <ResultsSection itemsToDisplay={itemsToDisplay} />
      <DirectorySection />
      <CategoriesSection />
    </>
  );
}

export default FilterPageContainer;
