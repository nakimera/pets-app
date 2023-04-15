import { H4 } from "../../atoms/text";
import {SectionWrapper} from "../../atoms/sectionWrapper";
import Category from "./category";
import {categories} from './data';
import {CategoriesWrapper} from './styles';

export function CategoriesSection() {
  return (
    <SectionWrapper>
      <H4>Categories</H4>
      <CategoriesWrapper>
      {categories.map((category, index) => (
        <Category key={index} category={category}></Category>
      ))}
      </CategoriesWrapper>
    </SectionWrapper>
  );
}

export default CategoriesSection;
