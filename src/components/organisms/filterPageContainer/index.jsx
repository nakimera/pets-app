import { useState, useEffect, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterSearchForm from "../../molecules/filterSearchForm";
import CategoriesSection from "../../molecules/categories";
import DirectorySection from "../../molecules/directory";
import ResultsSection from "../../molecules/results";
import { filterPets, itemsSelector } from "../../../store/slice";
import { fetchItems } from "../../server";

export const ListContext = createContext(null);

export function FilterPageContainer() {
  const dispatch = useDispatch();
  const { items, filteredItems } = useSelector(itemsSelector);

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(filterPets({}));
  }, [dispatch]);

  // get list of pet types
  let types = [];
  const getTypes = () => {
    items.forEach((item) => {
      if (types.includes(item.species)) {
        return types;
      } else return types.push(item.species);
    });
    return types;
  };

  types = getTypes();

  // data to display
  let dataToDisplay = [];

  // getPetsToDisplay({action: 'default'});

  return (
    <>
      <ListContext.Provider
        value={{
          types,
          items: dataToDisplay,
        }}
      >
        <FilterSearchForm pets={items} />
        <ResultsSection items={filteredItems} />
      </ListContext.Provider>
      <DirectorySection />
      <CategoriesSection />
    </>
  );
}

export default FilterPageContainer;
