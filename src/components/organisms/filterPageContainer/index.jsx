import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterSearchForm from "../../molecules/filterSearchForm";
import CategoriesSection from "../../molecules/categories";
import DirectorySection from "../../molecules/directory";
import ResultsSection from "../../molecules/results";
import { useFetchItem } from "../../server";
import {
  getTypesAction,
  petsSelector,
  filterPetsAction,
  getPetsAction,
} from "../../../store/slice";

export function FilterPageContainer() {
  const dispatch = useDispatch();

  const { data } = useFetchItem();
  const { types, itemsToDisplay } = useSelector(petsSelector);

  useEffect(() => {
    dispatch(getPetsAction(data));
    dispatch(getTypesAction());
    dispatch(filterPetsAction());
  }, [dispatch, data]);

  return (
    <>
      <FilterSearchForm pets={data} types={types} />
      <ResultsSection items={itemsToDisplay} />
      <DirectorySection />
      <CategoriesSection />
    </>
  );
}

export default FilterPageContainer;
