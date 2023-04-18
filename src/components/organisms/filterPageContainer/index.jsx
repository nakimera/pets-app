import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterSearchForm from "../../molecules/filterSearchForm";
import CategoriesSection from "../../molecules/categories";
import DirectorySection from "../../molecules/directory";
import ResultsSection from "../../molecules/results";
import { filterPets, getTypes, itemsSelector } from "../../../store/slice";
import { fetchItems } from "../../server";

export function FilterPageContainer() {
  const dispatch = useDispatch();
  const { items, filteredItems, types } = useSelector(itemsSelector);

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(getTypes());
    dispatch(filterPets({}));
  }, [dispatch]);

  return (
    <>
      <FilterSearchForm pets={items} types={types} />
      <ResultsSection items={filteredItems} />
      <DirectorySection />
      <CategoriesSection />
    </>
  );
}

export default FilterPageContainer;
