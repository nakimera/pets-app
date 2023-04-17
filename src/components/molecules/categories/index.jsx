import { H4 } from "../../atoms/text";
import {Section} from "../../atoms/section";
import Category from "./category";
import {categories} from './data';
import {CategoriesWrapper} from './styles';

export function CategoriesSection() {
  return (
    <Section id="categories">
      <H4>Categories</H4>
      <CategoriesWrapper>
      {categories.map((category, index) => (
        <Category key={index} category={category}></Category>
      ))}
      </CategoriesWrapper>
    </Section>
  );
}

export default CategoriesSection;
